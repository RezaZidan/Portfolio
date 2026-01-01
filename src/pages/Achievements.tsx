import { useMemo, useState } from "react";
import { achievements } from "../data/achievements";

export default function Achievements() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(achievements.map((a) => a.category))];
  }, []);

  const filtered = useMemo(() => {
    return achievements.filter((a) => {
      const matchCategory = category === "All" || a.category === category;
      const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <div className="space-y-16">
      {/* ================= HEADER ================= */}
      <section>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Achievements
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A curated collection of certifications and key milestones that reflect
          my continuous learning and professional growth.
        </p>
      </section>

      {/* ================= FILTER ================= */}
      <section className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search achievement…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full sm:w-64
            rounded-lg
            bg-white dark:bg-zinc-900
            border border-zinc-200 dark:border-zinc-800
            px-3 py-2 text-sm
            text-zinc-900 dark:text-zinc-200
            placeholder:text-zinc-500 dark:placeholder:text-zinc-500
            focus:outline-none
            focus:border-zinc-400 dark:focus:border-zinc-600
            transition
          "
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
            w-full sm:w-48
            rounded-lg
            bg-white dark:bg-zinc-900
            border border-zinc-200 dark:border-zinc-800
            px-3 py-2 text-sm
            text-zinc-900 dark:text-zinc-200
            focus:outline-none
            focus:border-zinc-400 dark:focus:border-zinc-600
            transition
          "
        >
          {categories.map((cat) => (
            <option key={cat} value={cat} className="bg-white dark:bg-zinc-900">
              {cat}
            </option>
          ))}
        </select>
      </section>

      {/* ================= GRID ================= */}
      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <div
            key={a.id}
            className="
              group rounded-2xl overflow-hidden transition
              bg-white dark:bg-zinc-900
              border border-zinc-200 dark:border-zinc-800
              hover:border-zinc-300 dark:hover:border-zinc-700
            "
          >
            <div className="overflow-hidden">
              <img
                src={a.image}
                alt={a.title}
                className="
                  h-44 w-full object-cover
                  transition-transform duration-300
                  group-hover:scale-105
                "
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                {a.title}
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {a.issuer}
              </p>

              <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                {a.date}
              </p>

              <span
                className="
                  inline-block mt-3
                  rounded-full
                  border
                  border-zinc-300 dark:border-zinc-700
                  px-2.5 py-1
                  text-xs
                  text-zinc-700 dark:text-zinc-300
                  bg-white dark:bg-zinc-900
                "
              >
                {a.category}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* ================= EMPTY ================= */}
      {filtered.length === 0 && (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          No achievements found.
        </p>
      )}
    </div>
  );
}
