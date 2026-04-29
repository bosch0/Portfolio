import React from "react";
import { Section } from "../components/ui/Section";
import { TECHNOLOGIES } from "../constants";
import { motion } from "motion/react";
import * as Icons from "../components/icons";
import { useLocale } from "../hooks";

export const Experience: React.FC = () => {
  const { t } = useLocale();

  const icons: { [key: string]: React.ReactNode } = {
      "GitHub": <Icons.GitHubIcon className="fill-[#181717]"/>,
      "React.js": <Icons.ReactIcon className="fill-[#61DAFB]"/>,
      "Svelte": <Icons.SvelteIcon className="fill-[#FF3E00]"/>,
      "TypeScript": <Icons.TypeScriptIcon className="fill-[#3178C6]"/>,
      "JavaScript": <Icons.JavaScriptIcon className="fill-[#F7DF1E]"/>,
      "Tailwind CSS": <Icons.TailwindIcon className="fill-[#38B2AC]"/>,
      "Lua": <Icons.LuaIcon className="fill-[#000080]"/>,
      "Node.js": <Icons.NodeJSIcon className="fill-[#339933]"/>,
      "Express": <Icons.ExpressIcon className="fill-[#000000]"/>,
      "Prisma": <Icons.PrismaIcon className="fill-[#0C344B]"/>,
      "PostgreSQL": <Icons.PostgreSQLIcon className="fill-[#336791]"/>,
      "MariaDB": <Icons.MariaDBIcon className="fill-[#003545]"/>,
      "Bash": <Icons.BashIcon className="fill-[#4EAA25]"/>,
      "Git": <Icons.GitIcon className="fill-[#F05032]"/>,
      "Linux (Ubuntu Server)": <Icons.LinuxIcon className="fill-[#E95420]"/>,
      "Arrow": <Icons.ArrowIcon className="dark:stroke-[#ffffff] stroke-[#000000]"/>,
  };

  const categories = [
    { key: 'frontend', label: t.experience.categories.frontend, techs: TECHNOLOGIES.Frontend },
    { key: 'backend', label: t.experience.categories.backend, techs: TECHNOLOGIES.Backend },
    { key: 'database', label: t.experience.categories.database, techs: TECHNOLOGIES.Database },
    { key: 'devops', label: t.experience.categories.devops, techs: TECHNOLOGIES.DevOps },
  ] as const;

  return (
    <Section id="experience" title={t.experience.title} className="flex-col gap-5 bg-linear-to-t dark:from-orange-600/20 from-orange-600/60 to-transparent animate-[backgroundEnter_2s_ease-in-out]">
      <motion.div 
        initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        viewport={{ 
            once: true, 
            amount: 0.2
        }}
        transition={{ duration: 0.5 }}
        className="z-1 xl:p-10 p-5 bg-linear-to-br from-stone-400/50 to-stone-200/50 dark:from-stone-950/50 dark:to-stone-900/50 ring-1 dark:ring-stone-700/20 ring-stone-950/10 rounded-xl shadow-md"
      >
        <h3 className="flex items-center mb-5">
          <div className="w-8 h-8">
            {icons["Arrow"]}
          </div>
          {t.experience.aboutTitle}
        </h3>
        <p className="text-base!">
          {t.experience.aboutParagraphs.map((paragraph, index) => (
            <React.Fragment key={paragraph}>
              {index > 0 && <><br /><br /></>}
              {paragraph}
            </React.Fragment>
          ))}
        </p>

        <h3 className="flex items-center my-5">
          <div className="w-8 h-8">
            {icons["Arrow"]}
          </div>
          {t.experience.skillsTitle}
        </h3>
        <div className="grid xl:grid-cols-4 grid-cols-2 gap-5 mt-3">
          {categories.map(({ key, label, techs }) => (
            <div key={key} className="flex flex-col">
              <h4 className="bg-linear-to-r from-stone-950/50 to-transparent p-3 rounded-lg">{label}</h4>
              <ul className="flex flex-col gap-3 bg-linear-to-r from-stone-950/50 xl:to-transparent to-stone-950/50 p-3 rounded-lg mt-2 h-full">
                {techs.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-xs overflow-hidden">
                      {icons[tech]}
                    </div>
                    <p className="truncate! font-semibold">{tech}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
