import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  to: string;
  icon?: ReactNode;
};

export default function FeaturedCard({ title, description, to, icon }: Props) {
  return (
    <Link
      to={to}
      className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
    >
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-zinc-500">{description}</p>
      <span className="mt-3 inline-block text-sm font-medium group-hover:underline">
        View →
      </span>
    </Link>
  );
}
