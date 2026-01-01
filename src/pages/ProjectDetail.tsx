import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <p className="text-zinc-600 dark:text-zinc-400">Project not found.</p>
    );
  }

  return (
    <div className="space-y-20">
      {/* ================= HEADER ================= */}
      <section className="max-w-3xl">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {project.name}
        </h1>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="
                rounded-full border
                border-zinc-300 dark:border-zinc-700
                px-3 py-1 text-xs
                text-zinc-700 dark:text-zinc-300
                bg-white dark:bg-zinc-900
              "
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ================= IMAGES ================= */}
      <section className="grid gap-6 sm:grid-cols-2">
        {project.images.map((img, i) => (
          <div
            key={i}
            className="
              rounded-2xl overflow-hidden
              bg-white dark:bg-zinc-900
              border border-zinc-200 dark:border-zinc-800
            "
          >
            <img
              src={img}
              alt={`${project.name} ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="max-w-3xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Introduction
        </h2>

        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.introduction}
        </p>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-3xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Features
        </h2>

        <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
