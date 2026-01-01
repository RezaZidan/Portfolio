import CollapsibleCard from "../components/CollapsibleCard";
import { career } from "../data/career";
import { education } from "../data/education";
import { organizations } from "../data/organization";

export default function Experience() {
  return (
    <div className="space-y-12">
      {/* ================= TITLE ================= */}
      <section className="max-w-3xl">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Experience
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          A comprehensive overview of my professional experience, academic
          journey, and organizational involvement, highlighting hands-on
          contributions in software development, system design, and
          technology-driven initiatives.
        </p>
      </section>

      {/* ================= CAREER ================= */}
      <section>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Work Experience
        </h2>

        <div className="space-y-4">
          {career.map((item) => (
            <CollapsibleCard
              key={`${item.company}-${item.period}`}
              logo={item.logo}
              title={item.company}
              subtitle={item.role}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Education
        </h2>

        <div className="space-y-4">
          {education.map((item) => (
            <CollapsibleCard
              key={`${item.school}-${item.period}`}
              logo={item.logo}
              title={item.school}
              subtitle={item.major}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* ================= ORGANIZATIONS ================= */}
      <section>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Organizations & Leadership
        </h2>

        <div className="space-y-4">
          {organizations.map((item) => (
            <CollapsibleCard
              key={`${item.organization}-${item.period}`}
              logo={item.logo}
              title={item.organization}
              subtitle={item.name}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
