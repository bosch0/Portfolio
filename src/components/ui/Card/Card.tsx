import React from 'react';
import type { CardProps } from '../../../types';
import { Button } from '../Button';
import { GitHubIcon, DemoIcon } from '../../icons';
import { Carousel } from './Carousel';
import { motion } from 'motion/react';

export const Card: React.FC<{project: CardProps, cardIndex: number}> = ({project, cardIndex}) => {
  const icons: { [key: string]: React.ReactNode } = {
      GitHub: <GitHubIcon className="fill-[#181717]"/>,
      Showcase: <DemoIcon className="stroke-orange-400"/>,
      Demo: <DemoIcon className="stroke-orange-400"/>,
  };

  return (
    <motion.div 
      initial={{ opacity: 0, transform: 'translateY(2rem)' }}
      whileInView={{ opacity: 1, transform: 'translateY(0)' }}
      viewport={{ 
          once: true, 
          amount: 0.5
      }}
      transition={{ duration: 0.5, delay: cardIndex / 5 }}
      className={`flex flex-col w-full gap-5 bg-gradient-to-br from-stone-400/50 to-stone-200/50 dark:from-stone-950/50 dark:to-stone-900/50 rounded-xl ring-1 dark:ring-stone-700/20 ring-stone-950/10 shadow-md p-6 xl:w-[calc(33.333%-1rem)]`}
    >
      <h2 className='text-center truncate font-light! tracking-widest'>{project.title}</h2>
      <img className='rounded-xl xl:h-62 object-cover' src={project.thumbnail} alt={project.title} loading='lazy' />
      <p className="text-stone-400 line-clamp-5 h-25">{project.description}</p>

      <Carousel techs={project.technologies} />
      
      <div className="flex gap-5">
        {project.links.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            className="flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant={link.variant} className='flex items-center gap-3 dark:border-stone-700'>
              <div className="min-w-8 h-8">
                  {icons[link.title]}
              </div>
              {link.title}
            </Button>
          </a>
        ))}
      </div>
    </motion.div>
  );
};