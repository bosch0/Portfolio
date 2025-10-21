import React from "react";
import { Section } from "../components/ui/Section";
import { TECHNOLOGIES } from "../constants";
import { motion } from "motion/react";
import * as Icons from "../components/icons";

export const Experience: React.FC = () => {
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

  return (
    <Section id="experience" title="Experience" className="flex-col gap-5 bg-gradient-to-t dark:from-orange-600/20 from-orange-600/60 to-transparent animate-[backgroundEnter_2s_ease-in-out]">
      <motion.div 
        initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        viewport={{ 
            once: true, 
            amount: 0.2
        }}
        transition={{ duration: 0.5 }}
        className="z-1 xl:p-10 p-5 bg-gradient-to-br from-stone-400/50 to-stone-200/50 dark:from-stone-950/50 dark:to-stone-900/50 ring-1 dark:ring-stone-700/20 ring-stone-950/10 rounded-xl shadow-md"
      >
        <h3 className="flex items-center mb-5">
          <div className="w-8 h-8">
            {icons["Arrow"]}
          </div>
          About Me
        </h3>
        <p className="text-base!">
          At the <strong>end of 2021</strong>, I developed an interest in creating resources for <strong>FiveM</strong>, a multiplayer modification of GTAV.
          <br /><br />
          Since then, I have <strong>self-taught</strong> the technologies required to build scripts for this platform and <strong>have collaborated on numerous projects</strong> alongside experienced developers, which has helped me expand my knowledge in <strong>real-world environments</strong>.
          <br /><br />
          I am currently <strong>leading</strong> a remote project with an <strong>international team</strong> based in the United States, using technologies such as <strong>Lua</strong> for the backend, <strong>Svelte</strong> and <strong>React.js</strong> for the frontend, and <strong>Linux (Ubuntu Server)</strong> for server hosting.
          <br /><br />
          <strong>I am motivated</strong> to continue expanding my skills and begin my career as a <strong>web application developer</strong>, applying my experience in collaborative projects and modern technologies.
        </p>

        <h3 className="flex items-center my-5">
          <div className="w-8 h-8">
            {icons["Arrow"]}
          </div>
          Skills
        </h3>
        <div className="grid xl:grid-cols-4 grid-cols-2 gap-5 mt-3">
          {Object.entries(TECHNOLOGIES).map(([category, techs]) => (
            <div key={category} className="flex flex-col">
              <h4 className="bg-gradient-to-r from-stone-950/50 to-transparent p-3 rounded-lg">{category}</h4>
              <ul className="flex flex-col gap-3 bg-gradient-to-r from-stone-950/50 xl:to-transparent to-stone-950/50 p-3 rounded-lg mt-2 h-full">
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
