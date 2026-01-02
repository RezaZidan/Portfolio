import { useEffect, useState } from "react";

export default function LoadingScreen({
  duration = 1600,
}: {
  duration?: number;
}) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullText = "Preparing portfolio";

  /* ================= TYPING EFFECT ================= */
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 45);

    return () => clearInterval(typing);
  }, []);

  /* ================= PROGRESS (EASE OUT) ================= */
  useEffect(() => {
    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      const t = Math.min(elapsed / duration, 1);

      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.floor(eased * 100));

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setFadeOut(true), 250);
      }
    };

    requestAnimationFrame(tick);
  }, [duration]);

  return (
    <div
      className={`
        fixed inset-0 z-50
        flex items-center justify-center
        bg-white dark:bg-zinc-950
        transition-all duration-700
        ${
          fadeOut
            ? "opacity-0 scale-95 pointer-events-none"
            : "opacity-100 scale-100"
        }
      `}
    >
      <div
        className="
          w-[300px]
          rounded-2xl
          bg-white/70 dark:bg-zinc-900/70
          backdrop-blur-xl
          border border-zinc-200 dark:border-zinc-800
          shadow-xl
          px-6 py-8
          flex flex-col items-center gap-6
        "
      >
        {/* LOGO / DOT */}
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-400 dark:from-zinc-200 dark:to-zinc-500 animate-pulse" />
        </div>

        {/* NAME */}
        <div className="text-center">
          <p className="font-semibold tracking-wide text-zinc-900 dark:text-zinc-100">
            Reza Zidan Hanafi
          </p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {typedText}
            <span className="animate-pulse">…</span>
          </p>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="
              h-full
              bg-gradient-to-r
              from-zinc-700 via-zinc-900 to-black
              dark:from-zinc-300 dark:via-white dark:to-zinc-300
              transition-[width] duration-200
            "
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* PERCENT */}
        <span className="text-xs tracking-widest text-zinc-500 dark:text-zinc-400">
          {progress}%
        </span>
      </div>
    </div>
  );
}
