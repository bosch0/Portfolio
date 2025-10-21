import React from "react";
import { Section, Card } from "../components/ui";
import { Cards } from "../utils/Cards";

export const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Projects" className="flex-col gap-5 bg-gradient-to-b dark:from-orange-600/20 from-orange-600/60 to-transparent animate-[backgroundEnter_2s_ease-in-out]">
      <div className="absolute translate-y-1/2 w-full h-full xl:dark:bg-[radial-gradient(ellipse_at_right,_rgba(219,80,0,0.1)_0%,_transparent_70%)] xl:bg-[radial-gradient(ellipse_at_right,_rgba(255,136,0,0.6)_0%,_transparent_70%)] animate-[backgroundEnterTop_2s_ease-in-out]"></div>
      <div className="absolute translate-y-1/2 w-full h-full xl:dark:bg-[radial-gradient(ellipse_at_left,_rgba(219,80,0,0.1)_0%,_transparent_70%)] xl:bg-[radial-gradient(ellipse_at_left,_rgba(255,136,0,0.6)_0%,_transparent_70%)] animate-[backgroundEnterTop_2s_ease-in-out]"></div>
      <div className="z-1 w-full flex flex-wrap justify-center gap-5">
        {Cards.map((v, index) => (
          <Card project={v} cardIndex={index} key={index} />
        ))}
      </div>
    </Section>
  );
};