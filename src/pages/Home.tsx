import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Github,
  Linkedin,
  ArrowRight,
  FolderKanban,
  Wrench,
  Award,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

import { profile } from "../data/profile";
import { skills } from "../data/skills";
import { projects } from "../data/projects";
import { achievements } from "../data/achievements";
import SkillBadge from "../components/SkillBadge";

/* ===== ABOUT PHOTOS ===== */
import photo1 from "../assets/photos/reza-1.jpg";
import photo2 from "../assets/photos/reza-2.jpg";
import photo3 from "../assets/photos/reza-3.jpg";

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  /* ===== PROJECT SCROLL ===== */
  const projectScrollRef = useRef<HTMLDivElement>(null);

  const scrollUp = () => {
    projectScrollRef.current?.scrollBy({ top: -120, behavior: "smooth" });
  };

  const scrollDown = () => {
    projectScrollRef.current?.scrollBy({ top: 120, behavior: "smooth" });
  };

  /* ===== PHOTO STACK ===== */
  const PHOTO_STACK = [photo1, photo2, photo3];
  const MAX_STACK = 3;

  const [photos, setPhotos] = useState(PHOTO_STACK);
  const [isAnimating, setIsAnimating] = useState(false);

  const rotatePhotos = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setPhotos((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      setIsAnimating(false);
    }, 300);
  };

  const visiblePhotos = photos.slice(0, MAX_STACK);

  return (
    <div className="space-y-24">
      {/* ================= HERO ================= */}
      <section className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          Hi, I’m {profile.name}
        </h1>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {profile.bio}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500 dark:text-zinc-500">
          <span className="hover:text-zinc-700 dark:hover:text-zinc-300 transition">
            {profile.email}
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hover:text-zinc-700 dark:hover:text-zinc-300 transition">
            {profile.phone}
          </span>
          <span className="hidden sm:inline">•</span>
          <span>{profile.address}</span>
          <span className="hidden sm:inline">•</span>
          <span>{profile.age} yrs</span>
          <span className="hidden sm:inline">•</span>
          <span className="px-2 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs">
            {profile.status}
          </span>
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg
              bg-zinc-900 text-zinc-100 hover:bg-zinc-800
              dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200
              text-sm font-medium transition"
          >
            View Projects <ArrowRight size={16} />
          </Link>

          <Link
            to="/about"
            className="px-5 py-2 rounded-lg
              bg-zinc-100 border border-zinc-300 hover:border-zinc-400
              text-zinc-700
              dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-zinc-700 dark:text-zinc-300
              text-sm transition"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((s) => (
            <SkillBadge key={s.name} name={s.name} icon={s.icon} />
          ))}
        </div>
      </section>

      {/* ================= MAIN GRID ================= */}
      <section className="grid lg:grid-cols-[2fr_1fr_1fr] gap-4">
        {/* ================= PROJECTS ================= */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-zinc-100">
            <FolderKanban size={18} />
            <h3 className="font-semibold">Projects</h3>
          </div>

          <div className="grid grid-cols-[1fr_1.2fr] gap-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Project dengan fokus pada system design, clean UI, dan
              maintainable code.
              <Link
                to="/projects"
                className="block mt-3 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                View all →
              </Link>
            </p>

            <div className="relative">
              <div className="absolute inset-y-0 left-2 flex flex-col justify-center gap-2 z-10">
                <button
                  onClick={scrollUp}
                  className="p-1 rounded-full
                    bg-white/80 dark:bg-zinc-900/80
                    border border-zinc-300 dark:border-zinc-700
                    text-zinc-600 dark:text-zinc-300
                    hover:border-zinc-400 dark:hover:border-zinc-600 transition"
                >
                  <ChevronUp size={16} />
                </button>
                <button
                  onClick={scrollDown}
                  className="p-1 rounded-full
                    bg-white/80 dark:bg-zinc-900/80
                    border border-zinc-300 dark:border-zinc-700
                    text-zinc-600 dark:text-zinc-300
                    hover:border-zinc-400 dark:hover:border-zinc-600 transition"
                >
                  <ChevronDown size={16} />
                </button>
              </div>

              <div
                ref={projectScrollRef}
                className="space-y-3 max-h-[230px] overflow-y-auto no-scrollbar pr-2"
              >
                {featuredProjects.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/projects/${p.slug}`}
                    className="block rounded-xl overflow-hidden
                      border border-zinc-200 dark:border-zinc-800
                      hover:border-zinc-300 dark:hover:border-zinc-700 transition"
                  >
                    <img
                      src={p.thumbnail}
                      alt={p.name}
                      className="h-24 w-full object-cover"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= ABOUT MINI ================= */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-4 flex flex-col min-h-[350px]">
          <div className="flex items-center justify-between mb-2 text-zinc-900 dark:text-zinc-100">
            <div className="flex items-center gap-2">
              <User size={16} />
              <h3 className="text-sm font-semibold">About Me</h3>
            </div>

            <Link
              to="/about"
              className="text-xs text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              View all →
            </Link>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
            Informatics student focused on web development, system design, and
            modern UI engineering.
          </p>

          <div className="relative mt-5 h-30 w-28 mx-auto select-none">
            {visiblePhotos.map((src, index) => {
              const isTop = index === 0;

              return (
                <img
                  key={src}
                  src={src}
                  draggable={false}
                  onClick={() => isTop && rotatePhotos()}
                  className="absolute inset-0 rounded-xl object-cover
                    border border-zinc-200 dark:border-zinc-800
                    transition-all duration-500 ease-in-out"
                  style={{
                    transform:
                      isTop && isAnimating
                        ? "translateY(28px) scale(0.95)"
                        : `translate(${index * 8}px, ${index * 8}px) rotate(${
                            index * 2
                          }deg)`,
                    opacity: isTop && isAnimating ? 0.85 : 1,
                    zIndex: 30 - index,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* ================= SKILL & TOOLS ================= */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 overflow-hidden">
          <div className="flex flex-col gap-1 mb-4 text-zinc-900 dark:text-zinc-100">
            <div className="flex items-center gap-2">
              <Wrench size={16} />
              <h3 className="font-semibold">Skill & Tools</h3>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
              Technologies and tools I use to build reliable systems and modern
              interfaces.
            </p>
          </div>

          <div className="overflow-hidden whitespace-nowrap mt-5 mb-5">
            <div className="inline-flex gap-14 animate-marquee-right">
              {skills.slice(0, Math.ceil(skills.length / 2)).map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-3 py-2 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <img src={s.icon} alt={s.name} className="w-7 h-7" />
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden whitespace-nowrap mt-5 mb-5">
            <div className="inline-flex gap-14 animate-marquee-left">
              {skills.slice(Math.ceil(skills.length / 2)).map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-3 py-2 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <img src={s.icon} alt={s.name} className="w-7 h-7" />
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM GRID ================= */}
      <section className="grid lg:grid-cols-2 gap-6">
        {/* ACHIEVEMENTS */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2 text-zinc-900 dark:text-zinc-100">
            <Award size={18} />
            <h3 className="font-semibold">Achievements</h3>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            Highlights of certifications, awards, and milestones that reflect my
            continuous growth and learning journey.
            <Link
              to="/achievements"
              className="block mt-3 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              View all →
            </Link>
          </p>

          <div className="relative h-48 flex items-start justify-center">
            {achievements.slice(0, 3).map((a, index) => {
              const transforms = [
                "translateX(-80px) translateY(32px) rotate(-8deg)",
                "translateY(12px) scale(1.15)",
                "translateX(80px) translateY(32px) rotate(8deg)",
              ];

              const zIndex = [10, 20, 10];

              return (
                <img
                  key={a.id}
                  src={a.image}
                  alt={a.title}
                  className="absolute w-36 rounded-xl
                    border border-zinc-200 dark:border-zinc-800
                    shadow-xl transition-transform duration-300 hover:scale-110"
                  style={{
                    transform: transforms[index],
                    zIndex: zIndex[index],
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* SERVICES */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2 text-zinc-900 dark:text-zinc-100">
            <Award size={18} />
            <h3 className="font-semibold">Services</h3>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-5">
            Areas where I specialize in building reliable, scalable, and
            user-focused digital products.
          </p>

          <div className="space-y-4">
            <Service
              title="Frontend Development"
              desc="Building responsive, accessible, and visually consistent interfaces using modern frameworks and best UI practices."
            />
            <Service
              title="Backend Development"
              desc="Designing APIs, handling authentication, database logic, and ensuring system reliability and performance."
            />
            <Service
              title="UI / UX Design"
              desc="Crafting clear layouts, intuitive interactions, and user-friendly experiences that feel natural and efficient."
            />
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Contact
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            className="rounded-xl p-6
              bg-white dark:bg-zinc-900
              border border-zinc-200 dark:border-zinc-800
              flex flex-col items-center gap-3
              text-zinc-700 dark:text-zinc-300
              hover:border-zinc-300 dark:hover:border-zinc-700 transition"
          >
            <Linkedin size={36} />
            LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            className="rounded-xl p-6
              bg-white dark:bg-zinc-900
              border border-zinc-200 dark:border-zinc-800
              flex flex-col items-center gap-3
              text-zinc-700 dark:text-zinc-300
              hover:border-zinc-300 dark:hover:border-zinc-700 transition"
          >
            <Github size={36} />
            GitHub
          </a>

          <div
            className="rounded-xl p-6
            bg-white dark:bg-zinc-900
            border border-zinc-200 dark:border-zinc-800
            flex flex-col items-center gap-2
            text-zinc-600 dark:text-zinc-400"
          >
            Email
            <span className="text-zinc-900 dark:text-zinc-200">
              {profile.email}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

function Service({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-zinc-400 dark:text-zinc-500">
        <Award size={14} />
      </div>
      <div>
        <p className="font-medium text-zinc-900 dark:text-zinc-100">{title}</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
