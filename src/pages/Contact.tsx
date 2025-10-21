import React from "react";
import { Section } from "../components/ui/Section";
import { CONTACT_INFO } from "../constants";
import { Button } from "../components/ui";
import { GitHubIcon, DiscordIcon, LinkedInIcon, MailIcon, ArrowIcon } from "../components/icons";
import { motion } from "motion/react";

export const Contact: React.FC = () => {
  const icons: { [key: string]: React.ReactNode } = {
      GitHub: <GitHubIcon className="fill-[#181717]" />,
      Discord: <DiscordIcon className="fill-[#5865F2]" />,
      MailIcon: <MailIcon className="fill-neutral-100/90" />,
      LinkedIn: <LinkedInIcon className="fill-[#0A66C2]" />,
      Arrow: <ArrowIcon className="dark:stroke-[#ffffff] stroke-[#000000]"/>,
  };

  return (
    <Section id="contact" title="Contact Me" className="flex-col bg-gradient-to-b dark:from-orange-600/20 from-orange-600/60 to-transparent animate-[backgroundEnter_2s_ease-in-out]">
      <motion.div 
        initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        viewport={{ 
            once: true, 
            amount: 0.2
        }}
        transition={{ duration: 0.5 }}
        className="flex xl:flex-row flex-col xl:gap-10 gap-5 justify-between w-full z-1 xl:p-10 p-5">
        <div className="flex flex-col flex-1 gap-5 justify-between">
          <h3 className="flex items-center xl:justify-start justify-center w-full gap-3 pb-1 xl:text-4xl! text-3xl!">
            <div className="xl:w-8 w-6">
              {icons["Arrow"]}
            </div>
            Social Media
          </h3>
          <p className="xl:text-lg! flex-1 xl:text-balance! xl:text-left text-center">Want to learn more about me and my work? Follow me on social media or join my discord server to stay updated on my latest projects, share ideas, and connect!</p>
          <div className="flex gap-3 xl:justify-start justify-between flex-wrap">
            {Object.entries(CONTACT_INFO).map(([platform, url]) => (
              <a 
                key={platform}
                href={url}
                className="xl:flex-0 flex-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className='flex w-full items-center justify-center xl:gap-3 gap-2'>
                  <div className="min-w-8 h-8">
                      {icons[platform]}
                  </div>
                  {platform}
                </Button>
              </a>
            ))}
          </div>
        </div>
        <div className="xl:w-1 xl:h-auto w-auto h-1 xl:bg-gradient-to-b bg-gradient-to-r from-transparent to-transparent via-stone-50/10"></div>
        <div className="flex flex-col flex-1 gap-5 items-center justify-between">
          <h3 className="flex items-center xl:justify-start justify-center text-center w-full gap-3 pb-1 xl:text-4xl! text-lg!">
            <div className="xl:w-8 w-6">
              {icons["Arrow"]}
            </div>
            Lets build something great together!
          </h3>
          <p className="xl:text-lg! flex-1 xl:text-balance! xl:text-left text-center">Looking for a dedicated developer who combines technical skill with design sense and monetization strategy? Don't hesitate to ask any questions about your project, budget estimates, timelines, or just to have a friendly chat about your ideas - no commitment required!</p>
          <a className="xl:w-auto w-full" href="https://discord.com/users/574624704975863808" target="_blank" rel="noopener noreferrer">
            <Button className='flex items-center justify-center w-full py-3 gap-3 from-blue-400! to-blue-700! hover:to-blue-400!'>
              <div className="xl:block hidden min-w-8 h-8">
                  {icons["MailIcon"]}
              </div>
              <div>Reach me anytime on Discord: <span className="bg-stone-900/50 rounded-lg py-1 px-2">boscho</span></div>
            </Button>
          </a>
        </div>
      </motion.div>
    </Section>
  );
};
