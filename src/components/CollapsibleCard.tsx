import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

type Props = {
  logo?: string; // ⬅️ optional
  title: string;
  subtitle: string;
  period: string;
  description: string | string[]; // ⬅️ support array
};

export default function CollapsibleCard({
  logo,
  title,
  subtitle,
  period,
  description,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-4 text-left"
      >
        {/* LOGO (OPTIONAL) */}
        {logo ? (
          <img
            src={logo}
            alt={title}
            className="w-14 h-14 rounded-lg object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs">
            —
          </div>
        )}

        <div className="flex-1">
          {/* TITLE — FIX WARNA */}
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
            {title}
          </h3>

          <p className="text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>

          <p className="text-xs text-zinc-500 dark:text-zinc-500">{period}</p>
        </div>

        <ChevronDown
          className={clsx(
            "transition-transform text-zinc-500 dark:text-zinc-400",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="px-4 pb-4 text-sm text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
          {Array.isArray(description)
            ? description.map((item, idx) => (
                <p key={idx} className="mb-1">
                  • {item}
                </p>
              ))
            : description}
        </div>
      )}
    </div>
  );
}
