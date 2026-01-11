// pages/projects.tsx
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  const [search, setSearch] = useState("");

  // ================= FILTER PROJECTS =================
  const filtered = useMemo(() => {
    const lowerQuery = search.toLowerCase();
    return projects.filter((project) => {
      const inName = project.name.toLowerCase().includes(lowerQuery);
      const inTech = project.tech.some((t) =>
        t.toLowerCase().includes(lowerQuery)
      );
      const inFeatures = project.features.some((f) =>
        f.toLowerCase().includes(lowerQuery)
      );
      return inName || inTech || inFeatures;
    });
  }, [search]);

  return (
    <div className="space-y-16">
      {/* ================= HEADER ================= */}
      <section>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Projects
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A curated selection of projects showcasing my experience in system
          design, modern UI development, and maintainable code practices.
        </p>
      </section>

      {/* ================= SEARCH INPUT ================= */}
      <section className="flex justify-left">
        <input
          type="text"
          placeholder="Search projects by name, tech, or features…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full sm:max-w-md md:max-w-lg
            rounded-lg
            bg-white dark:bg-zinc-900
            border border-zinc-200 dark:border-zinc-800
            px-3 py-2 text-sm
            text-zinc-900 dark:text-zinc-200
            placeholder:text-zinc-500 dark:placeholder:text-zinc-500
            focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600
            transition
          "
        />
      </section>

      {/* ================= GRID ================= */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="
                group block rounded-2xl overflow-hidden transition
                bg-white dark:bg-zinc-900
                border border-zinc-200 dark:border-zinc-800
                hover:border-zinc-300 dark:hover:border-zinc-700
                focus:outline-none focus:ring-2 focus:ring-zinc-400
              "
            >
              <div className="overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="
                    h-44 w-full object-cover
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {project.name}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        inline-block rounded-full
                        border border-zinc-300 dark:border-zinc-700
                        px-2.5 py-1 text-xs
                        text-zinc-700 dark:text-zinc-300
                        bg-white dark:bg-zinc-900
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-zinc-500 dark:text-zinc-400 col-span-full text-center mt-4">
            No projects found.
          </p>
        )}
      </section>
    </div>
  );
}
