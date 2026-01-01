import { Link } from "react-router-dom";

type Props = {
  slug: string;
  name: string;
  description: string;
  thumbnail: string;
  tech: string[];
};

export default function ProjectCard({
  slug,
  name,
  description,
  thumbnail,
  tech,
}: Props) {
  return (
    <Link
      to={`/projects/${slug}`}
      className="group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={thumbnail}
          alt={name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <span className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium">
            View Project
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-zinc-500">{description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
