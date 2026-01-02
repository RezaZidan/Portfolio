import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import LoadingScreen from "../components/LoadingScreen";

import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Achievements from "../pages/Achievements";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";

type Theme = "dark" | "light";
type Lang = "id" | "us";

export default function App() {
  /* ================= LOADING ================= */
  const [ready, setReady] = useState(false);

  /* ================= THEME ================= */
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "dark"
  );

  /* ================= LANGUAGE ================= */
  const [lang, setLang] = useState<Lang>(
    (localStorage.getItem("lang") as Lang) || "id"
  );

  /* ================= SIDEBAR ================= */
  const [collapsed, setCollapsed] = useState(false);

  /* ================= INIT (TIMER ONLY) ================= */
  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 1600); // ⏱️ DURASI LOADING

    return () => clearTimeout(timer);
  }, []);

  /* ================= THEME EFFECT ================= */
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  /* ================= LANG EFFECT ================= */
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  if (!ready) {
    return <LoadingScreen duration={1500} />;
  }

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div
        className={`
          grid h-full transition-all duration-300
          ${collapsed ? "grid-cols-[72px_1fr]" : "grid-cols-[260px_1fr]"}
        `}
      >
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          theme={theme}
          setTheme={setTheme}
          lang={lang}
          setLang={setLang}
        />

        <main className="h-full overflow-y-auto bg-white dark:bg-zinc-950 px-6 py-8 md:px-10 md:py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
