import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
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

      {/* ================= GRID ================= */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            name={project.name}
            description={project.description}
            thumbnail={project.thumbnail}
            tech={project.tech}
          />
        ))}
      </section>
    </div>
  );
}
