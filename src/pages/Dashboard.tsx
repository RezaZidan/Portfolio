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
  updated_at: string;
};

/* ================= HEATMAP HELPERS ================= */
function generateYearHeatmap(repos: Repo[]) {
  const year = new Date().getFullYear();
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);

  const activityMap = new Map<string, number>();

  repos.forEach((repo) => {
    const d = new Date(repo.updated_at);
    if (d.getFullYear() === year) {
      const key = d.toISOString().slice(0, 10);
      activityMap.set(key, (activityMap.get(key) || 0) + 1);
    }
  });

  const days: { date: Date; count: number }[] = [];
  const cursor = new Date(start);

  while (cursor <= end) {
    const key = cursor.toISOString().slice(0, 10);
    days.push({
      date: new Date(cursor),
      count: activityMap.get(key) || 0,
    });
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}

function getColor(count: number) {
  if (count === 0) return "bg-zinc-200 dark:bg-zinc-800";
  if (count === 1) return "bg-green-300 dark:bg-green-900";
  if (count === 2) return "bg-green-400 dark:bg-green-700";
  return "bg-green-500";
}

/* ================= HEATMAP COMPONENT ================= */
function ProjectContributionHeatmap({ repos }: { repos: Repo[] }) {
  const days = useMemo(() => generateYearHeatmap(repos), [repos]);

  const months = [
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

  return (
    <div className="overflow-x-auto">
      {/* MONTH LABEL */}
      <div className="flex text-xs text-zinc-500 dark:text-zinc-400 mb-2 ml-10">
        {months.map((m) => (
          <div key={m} className="w-[56px] text-center">
            {m}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        {/* DAY LABEL */}
        <div className="flex flex-col gap-1 text-xs text-zinc-500 dark:text-zinc-400 pt-1">
          <span>Mon</span>
          <span></span>
          <span>Wed</span>
          <span></span>
          <span>Fri</span>
        </div>

        {/* GRID */}
        <div className="grid grid-flow-col grid-rows-7 gap-1 w-max">
          {days.map((d, i) => (
            <div
              key={i}
              title={`${d.date.toDateString()} — ${d.count} project update`}
              className={`w-3 h-3 rounded-sm ${getColor(d.count)}`}
            />
          ))}
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
    fetch("https://api.github.com/users/rezazidan/repos?sort=updated")
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
          Yearly activity based on repository updates.
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
            {repos.map((repo) => (
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
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:underline">
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

                  <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
