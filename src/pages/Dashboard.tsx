import { useEffect, useMemo, useState } from "react";
import { Star, Code } from "lucide-react";

/* ================= TYPES ================= */
type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string; // tetap dipakai di list (fallback)
  created_at: string; // untuk "Created"
  pushed_at: string; // untuk "Updated" (lebih akurat aktivitas)
};

/* ================= DATE HELPERS ================= */
function toISODateKey(d: Date) {
  // YYYY-MM-DD (pakai local date biar hari gak geser gara-gara timezone)
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function startOfYear(year: number) {
  return new Date(year, 0, 1);
}
function endOfYear(year: number) {
  return new Date(year, 11, 31);
}

function startOfWeekMonday(date: Date) {
  // Week start Monday (GitHub style)
  const d = new Date(date);
  const day = d.getDay(); // 0 Sun .. 6 Sat
  const diff = (day + 6) % 7; // Monday=0, Sunday=6
  d.setDate(d.getDate() - diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

/* ================= HEATMAP DATA ================= */
type DayCell = {
  date: Date;
  key: string; // YYYY-MM-DD
  created: number;
  updated: number;
  total: number;
  inYear: boolean;
};

function buildYearCellsFromMondayGrid(year: number, repos: Repo[]): DayCell[] {
  const start = startOfYear(year);
  const end = endOfYear(year);

  const gridStart = startOfWeekMonday(start); // agar grid rapi per minggu
  const gridEnd = new Date(end);
  gridEnd.setHours(0, 0, 0, 0);

  // map event counts per day
  const createdMap = new Map<string, number>();
  const updatedMap = new Map<string, number>();

  for (const repo of repos) {
    // Created event
    const c = new Date(repo.created_at);
    if (c.getFullYear() === year) {
      const k = toISODateKey(c);
      createdMap.set(k, (createdMap.get(k) || 0) + 1);
    }

    // Updated event (pushed_at = ada push commit)
    const p = new Date(repo.pushed_at || repo.updated_at);
    if (p.getFullYear() === year) {
      const k = toISODateKey(p);
      updatedMap.set(k, (updatedMap.get(k) || 0) + 1);
    }
  }

  const cells: DayCell[] = [];
  const cursor = new Date(gridStart);

  while (cursor <= gridEnd) {
    const key = toISODateKey(cursor);
    const created = createdMap.get(key) || 0;
    const updated = updatedMap.get(key) || 0;

    const inYear = cursor >= startOfYear(year) && cursor <= endOfYear(year);

    cells.push({
      date: new Date(cursor),
      key,
      created,
      updated,
      total: created + updated,
      inYear,
    });

    cursor.setDate(cursor.getDate() + 1);
  }

  return cells;
}

/* ================= COLOR (GITHUB-LIKE) =================
   GitHub punya level 0..4.
   Kita bikin class Tailwind mirip:
   Light : zinc-200 -> green-200 -> green-400 -> green-500 -> green-600
   Dark  : zinc-800 -> green-900 -> green-800 -> green-700 -> green-600
*/
function heatLevel(total: number) {
  if (total <= 0) return 0;
  if (total === 1) return 1;
  if (total === 2) return 2;
  if (total <= 4) return 3;
  return 4;
}

function getGitHubLikeColor(total: number) {
  const lvl = heatLevel(total);
  if (lvl === 0) return "bg-zinc-200 dark:bg-zinc-800";
  if (lvl === 1) return "bg-green-200 dark:bg-green-900";
  if (lvl === 2) return "bg-green-400 dark:bg-green-800";
  if (lvl === 3) return "bg-green-500 dark:bg-green-700";
  return "bg-green-600 dark:bg-green-600";
}

/* ================= HEATMAP COMPONENT ================= */
function ProjectContributionHeatmap({ repos }: { repos: Repo[] }) {
  const year = new Date().getFullYear();

  const cells = useMemo(
    () => buildYearCellsFromMondayGrid(year, repos),
    [repos, year]
  );

  // buang cell yang bukan tahun ini? GitHub tetap render tapi pudar.
  // kita tetap render, tapi bikin opacity kecil kalau di luar tahun.
  const dayLabels = ["Mon", "", "Wed", "", "Fri", "", "Sun"];

  // label bulan: cari minggu pertama setiap bulan di grid
  const monthLabels = useMemo(() => {
    const labels: { index: number; name: string }[] = [];
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // grid kolom = minggu. Kita ambil cell Monday dari tiap kolom.
    // Setiap 7 cell = 1 minggu.
    for (let week = 0; week < Math.ceil(cells.length / 7); week++) {
      const mondayCell = cells[week * 7];
      if (!mondayCell) continue;
      const d = mondayCell.date;

      // kalau monday masuk bulan baru dan dekat awal bulan, labelkan di minggu ini
      if (d.getDate() <= 7) {
        labels.push({ index: week, name: monthNames[d.getMonth()] });
      }
    }
    return labels;
  }, [cells]);

  return (
    <div className="overflow-x-auto">
      {/* TOP: MONTH LABELS */}
      <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-2">
        <div className="w-10" />
        <div
          className="relative"
          style={{ width: `${Math.ceil(cells.length / 7) * 14}px` }}
        >
          {monthLabels.map((m) => (
            <span
              key={`${m.name}-${m.index}`}
              className="absolute"
              style={{ left: `${m.index * 14}px` }}
            >
              {m.name}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        {/* LEFT: DAY LABELS */}
        <div className="flex flex-col gap-[2px] text-xs text-zinc-500 dark:text-zinc-400 pt-[2px]">
          {dayLabels.map((d, i) => (
            <span key={i} className="h-3 leading-3">
              {d}
            </span>
          ))}
        </div>

        {/* GRID: 7 rows, flow by column (weeks) */}
        <div className="grid grid-flow-col grid-rows-7 gap-[2px] w-max">
          {cells.map((c, i) => {
            const dayName = c.date.toLocaleDateString(undefined, {
              weekday: "short",
            });
            const fullDate = c.date.toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "2-digit",
            });

            const createdTxt = c.created ? `• Created: ${c.created}` : "";
            const updatedTxt = c.updated ? `• Updated: ${c.updated}` : "";
            const tooltip =
              `${dayName}, ${fullDate}\nTotal: ${c.total}\n${createdTxt}\n${updatedTxt}`.trim();

            return (
              <div
                key={`${c.key}-${i}`}
                title={tooltip}
                className={[
                  "w-3 h-3 rounded-[3px] transition",
                  getGitHubLikeColor(c.total),
                  c.inYear ? "opacity-100" : "opacity-30",
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>

      {/* LEGEND */}
      <div className="mt-3 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
        <span>
          Created/Updated based on{" "}
          <span className="font-medium">created_at</span> &{" "}
          <span className="font-medium">pushed_at</span>
        </span>

        <div className="flex items-center gap-2">
          <span>Less</span>
          <div className="flex items-center gap-[2px]">
            <span className="w-3 h-3 rounded-[3px] bg-zinc-200 dark:bg-zinc-800" />
            <span className="w-3 h-3 rounded-[3px] bg-green-200 dark:bg-green-900" />
            <span className="w-3 h-3 rounded-[3px] bg-green-400 dark:bg-green-800" />
            <span className="w-3 h-3 rounded-[3px] bg-green-500 dark:bg-green-700" />
            <span className="w-3 h-3 rounded-[3px] bg-green-600 dark:bg-green-600" />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

/* ================= DASHBOARD ================= */
export default function Dashboard() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ambil max 100 repo terbaru, biar heatmap makin kebaca
    fetch(
      "https://api.github.com/users/rezazidan/repos?sort=updated&per_page=100"
    )
      .then((res) => res.json())
      .then((data) => {
        setRepos(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-16">
      {/* ================= HEADER ================= */}
      <section>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Dashboard
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          An overview of my GitHub project activity and repositories.
        </p>
      </section>

      {/* ================= CONTRIBUTIONS ================= */}
      <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
          Project Activity (This Year)
        </h2>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          Yearly activity based on repository creation and push updates.
        </p>

        {loading ? (
          <p className="text-zinc-500 dark:text-zinc-400">Loading activity…</p>
        ) : (
          <ProjectContributionHeatmap repos={repos} />
        )}
      </section>

      {/* ================= REPOSITORIES ================= */}
      <section className="space-y-6">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          GitHub Repositories
        </h2>

        {loading ? (
          <p className="text-zinc-500 dark:text-zinc-400">
            Loading repositories…
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo) => {
              const last = repo.pushed_at || repo.updated_at;

              return (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group rounded-xl p-5 transition
                    bg-white dark:bg-zinc-900
                    border border-zinc-200 dark:border-zinc-800
                    hover:border-zinc-300 dark:hover:border-zinc-700
                  "
                >
                  {/* NOTE: hover underline aja, ga ada biru */}
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:underline decoration-zinc-400 dark:decoration-zinc-500">
                    {repo.name}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                    {repo.description || "No description provided."}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center gap-3">
                      {repo.language && (
                        <span className="flex items-center gap-1">
                          <Code size={14} />
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star size={14} />
                          {repo.stargazers_count}
                        </span>
                      )}
                    </div>

                    <span>{new Date(last).toLocaleDateString()}</span>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
