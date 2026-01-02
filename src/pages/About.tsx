import { useEffect, useRef, useState } from "react";
import { hardskills } from "../data/hardskill";

export default function About() {
  const [animateBar, setAnimateBar] = useState(false);
  const skillRef = useRef<HTMLDivElement | null>(null);

  /* ================= INTERSECTION OBSERVER ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateBar(true);
          observer.disconnect(); // jalan sekali saja
        }
      },
      { threshold: 0.3 }
    );

    if (skillRef.current) observer.observe(skillRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-20">
      {/* ================= ABOUT ME ================= */}
      <section className="max-w-3xl">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
          About Me
        </h1>

        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Hi, I'm Reza Zidan Hanafi, an Informatics and Computer Engineering
          student with a strong passion for technology and digital product
          development. I focus on building reliable systems, clean interfaces,
          and scalable solutions across web, backend, and IoT domains.
          <br />
          <br />I enjoy working on real-world projects that require problem
          solving, system thinking, and attention to detail. Through continuous
          learning and hands-on experience, I aim to deliver solutions that are
          not only functional but also impactful and maintainable.
        </p>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Highlights
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <CountStat value={15} suffix="+" label="Completed Projects" />
          <CountStat value={5} suffix="+" label="Clients & Organizations" />
          <StaticStat value="2021" label="Started Coding" />
          <CountStat value={4} suffix="+" label="Technical Domains" />
        </div>
      </section>

      {/* ================= PROFESSIONAL SKILLS ================= */}
      <section ref={skillRef}>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Professional Skills
        </h2>

        <p className="max-w-3xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          A concise overview of my technical and professional capabilities,
          developed through hands-on projects and continuous learning.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {hardskills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percent={skill.percent}
              desc={skill.desc}
              animate={animateBar}
              delay={i * 120} // 🔥 STAGGER
            />
          ))}
        </div>
      </section>

      {/* ================= FOCUS AREAS ================= */}
      <section>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          What I Focus On
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <Focus
            title="System Design & Architecture"
            desc="Designing structured, scalable, and maintainable systems with clear data flow and logic."
          />
          <Focus
            title="Modern Web Development"
            desc="Building responsive, accessible, and consistent user interfaces with modern tooling."
          />
          <Focus
            title="Backend & API Development"
            desc="Handling authentication, databases, APIs, and business logic with performance in mind."
          />
          <Focus
            title="IoT & Network Integration"
            desc="Integrating hardware, communication protocols, and network infrastructure into real systems."
          />
        </div>
      </section>
    </div>
  );
}

/* ================= HELPERS ================= */

function CountStat({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.floor(700 / value));

    const timer = setInterval(() => {
      current++;
      setCount(current);
      if (current >= value) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="rounded-2xl p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {count}
        {suffix}
      </p>
      <p className="mt-1 font-medium text-zinc-600 dark:text-zinc-400">
        {label}
      </p>
    </div>
  );
}

function StaticStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {value}
      </p>
      <p className="mt-1 font-medium text-zinc-600 dark:text-zinc-400">
        {label}
      </p>
    </div>
  );
}

function SkillBar({
  name,
  percent,
  desc,
  animate,
  delay,
}: {
  name: string;
  percent: number;
  desc: string;
  animate: boolean;
  delay: number;
}) {
  return (
    <div className="rounded-2xl p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{name}</h3>
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          {percent}%
        </span>
      </div>

      <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-zinc-900 dark:bg-zinc-100 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${percent}%` : "0%",
            transitionDelay: animate ? `${delay}ms` : "0ms",
          }}
        />
      </div>

      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function Focus({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      <p className="font-medium text-zinc-900 dark:text-zinc-100">{title}</p>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
