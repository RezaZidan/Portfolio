import { motion } from "framer-motion";

type Props = {
  name: string;
  icon: string;
};

export default function SkillBadge({ name, icon }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
        group relative
        flex items-center justify-center
        h-20 rounded-xl
        bg-zinc-100 dark:bg-zinc-900
        border border-zinc-200 dark:border-zinc-800
        cursor-pointer
      "
    >
      <img src={icon} alt={name} className="w-10 h-10" draggable={false} />

      {/* HOVER LABEL */}
      <div
        className="
          absolute bottom-2
          opacity-0 group-hover:opacity-100
          transition
          text-xs font-medium
          bg-zinc-900 text-white
          px-2 py-1 rounded-md
        "
      >
        {name}
      </div>
    </motion.div>
  );
}
