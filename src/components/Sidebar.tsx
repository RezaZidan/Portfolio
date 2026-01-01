import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  Award,
  FolderKanban,
  Mail,
  Briefcase,
  Menu,
  LayoutDashboard,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";
import profileImage from "../assets/reza.jpeg";

export default function Sidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}) {
  /* =========================
     STATE
  ========================= */
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  /* =========================
     THEME HANDLER
  ========================= */
  useEffect(() => {
    const root = document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  return (
    <aside
      className={`
        h-screen flex flex-col transition-all duration-300
        bg-white text-zinc-900
        dark:bg-zinc-950 dark:text-zinc-100
        border-r border-zinc-200 dark:border-zinc-800
        ${collapsed ? "w-[72px]" : "w-[260px]"}
      `}
    >
      {/* ================= TOP ================= */}
      <div
        className={`
          flex items-center px-4 py-4
          ${collapsed ? "justify-center" : "justify-between"}
        `}
      >
        {!collapsed && (
          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Portfolio
          </span>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition"
        >
          <Menu size={collapsed ? 22 : 20} />
        </button>
      </div>

      {/* ================= PROFILE ================= */}
      {!collapsed && (
        <div className="flex flex-col items-center px-6 py-6 gap-3">
          <img
            src={profileImage}
            alt="Reza Zidan Hanafi"
            draggable={false}
            className="w-20 h-20 rounded-full object-cover ring-2 ring-zinc-200 dark:ring-zinc-800"
          />

          <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
            Reza Zidan Hanafi
          </h2>

          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            Full-Stack Developer
          </span>

          {/* THEME TOGGLE */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="
              mt-2 p-2 rounded-md transition
              bg-zinc-100 hover:bg-zinc-200
              dark:bg-zinc-900 dark:hover:bg-zinc-800
              text-zinc-700 dark:text-zinc-300
            "
          >
            {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      )}

      {/* ================= NAV ================= */}
      <nav
        className={`flex-1 px-3 mt-2 ${collapsed ? "space-y-3" : "space-y-2"}`}
      >
        <NavItem to="/" icon={Home} label="Home" collapsed={collapsed} />
        <NavItem to="/about" icon={User} label="About" collapsed={collapsed} />
        <NavItem
          to="/experience"
          icon={Briefcase}
          label="Experience"
          collapsed={collapsed}
        />
        <NavItem
          to="/achievements"
          icon={Award}
          label="Achievements"
          collapsed={collapsed}
        />
        <NavItem
          to="/projects"
          icon={FolderKanban}
          label="Projects"
          collapsed={collapsed}
        />
        <NavItem
          to="/dashboard"
          icon={LayoutDashboard}
          label="Dashboard"
          collapsed={collapsed}
        />
        <NavItem
          to="/contact"
          icon={Mail}
          label="Contact"
          collapsed={collapsed}
        />
      </nav>

      {/* ================= FOOTER ================= */}
      {!collapsed && (
        <div className="px-6 py-4 text-xs text-zinc-500 dark:text-zinc-600">
          © 2025 Reza
        </div>
      )}
    </aside>
  );
}

/* =========================
   NAV ITEM
========================= */
function NavItem({
  to,
  label,
  icon: Icon,
  collapsed,
}: {
  to: string;
  label: string;
  icon: React.ElementType;
  collapsed: boolean;
}) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `
        relative flex items-center rounded-lg transition
        ${collapsed ? "justify-center px-2 py-3" : "gap-3 px-4 py-3"}
        ${
          isActive
            ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
            : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
        }
        `
      }
    >
      <span
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          h-6 w-1 rounded-r
          bg-zinc-400 dark:bg-zinc-600
        "
      />
      <Icon size={collapsed ? 22 : 18} className="shrink-0" />
      {!collapsed && <span className="text-sm">{label}</span>}
    </NavLink>
  );
}
