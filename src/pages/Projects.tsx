import React from "react";
import { Section, Card } from "../components/ui";
import { getCards } from "../utils/Cards";
import { useLocale } from "../hooks";

export const Projects: React.FC = () => {
  const { locale, t } = useLocale();

  return (
    <Section id="projects" title={t.projects.title} className="flex-col gap-5 bg-linear-to-b dark:from-orange-600/20 from-orange-600/60 to-transparent animate-[backgroundEnter_2s_ease-in-out]">
      <div className="absolute translate-y-1/2 w-full h-full xl:dark:bg-[radial-gradient(ellipse_at_right,rgba(219,80,0,0.1)_0%,transparent_70%)] xl:bg-[radial-gradient(ellipse_at_right,rgba(255,136,0,0.6)_0%,transparent_70%)] animate-[backgroundEnterTop_2s_ease-in-out]"></div>
      <div className="absolute translate-y-1/2 w-full h-full xl:dark:bg-[radial-gradient(ellipse_at_left,rgba(219,80,0,0.1)_0%,transparent_70%)] xl:bg-[radial-gradient(ellipse_at_left,rgba(255,136,0,0.6)_0%,transparent_70%)] animate-[backgroundEnterTop_2s_ease-in-out]"></div>
      <div className="z-1 w-full flex flex-wrap justify-center gap-5">
        {getCards(locale).map((v, index) => (
          <Card project={v} cardIndex={index} key={index} />
        ))}
      </div>
    </Section>
  );
};