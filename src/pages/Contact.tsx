import { Mail, Instagram, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="space-y-16">
      {/* HEADER */}
      <section>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Contact
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Feel free to reach out for collaboration, project discussions, or
          professional opportunities.
        </p>
      </section>

      {/* GRID */}
      <section className="grid gap-6 sm:grid-cols-2">
        {/* EMAIL */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-zinc-900 dark:text-zinc-100">
              <Mail size={20} />
              <h3 className="font-semibold">Email</h3>
            </div>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Contact me via email for detailed discussions, collaborations, or
              formal inquiries.
            </p>
          </div>

          <a
            href="mailto:rezazidan08@gmail.com"
            className="
              mt-6 inline-flex w-fit items-center
              rounded-lg border
              border-zinc-300 dark:border-zinc-700
              px-4 py-2 text-sm
              text-zinc-700 dark:text-zinc-200
              hover:border-zinc-400 hover:text-zinc-900
              dark:hover:border-zinc-600 dark:hover:text-zinc-100
              transition
            "
          >
            Send Email
          </a>
        </div>

        {/* INSTAGRAM */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-zinc-900 dark:text-zinc-100">
              <Instagram size={20} />
              <h3 className="font-semibold">Instagram</h3>
            </div>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Follow my journey and see updates related to technology, projects,
              and daily activities.
            </p>
          </div>

          <a
            href="https://instagram.com/rezazidan_"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6 inline-flex w-fit items-center
              text-sm
              text-zinc-600 dark:text-zinc-300
              hover:text-zinc-900 dark:hover:text-zinc-100
              transition
            "
          >
            Visit Instagram →
          </a>
        </div>

        {/* LINKEDIN */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-zinc-900 dark:text-zinc-100">
              <Linkedin size={20} />
              <h3 className="font-semibold">LinkedIn</h3>
            </div>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Connect with me professionally and explore my academic and career
              background.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/reza-zidan"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6 inline-flex w-fit items-center
              text-sm
              text-zinc-600 dark:text-zinc-300
              hover:text-zinc-900 dark:hover:text-zinc-100
              transition
            "
          >
            Connect on LinkedIn →
          </a>
        </div>
      </section>

      {/* GITHUB FULL WIDTH */}
      <section>
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3 text-zinc-900 dark:text-zinc-100">
            <Github size={20} />
            <div>
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Explore my open-source projects, experiments, and code
                repositories.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/rezazidan"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex w-fit items-center
              rounded-lg border
              border-zinc-300 dark:border-zinc-700
              px-4 py-2 text-sm
              text-zinc-700 dark:text-zinc-200
              hover:border-zinc-400 hover:text-zinc-900
              dark:hover:border-zinc-600 dark:hover:text-zinc-100
              transition
            "
          >
            Visit GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
