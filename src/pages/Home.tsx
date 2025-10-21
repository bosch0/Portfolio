import React from 'react';
import { Section, TimeLine } from '../components/ui';
import { FivemIcon } from '../components/icons';

export const Home: React.FC = () => {
    return (
        <Section id="home" className='xl:flex-row flex-col justify-evenly bg-gradient-to-t dark:from-orange-600/20 from-orange-600/60 to-transparent animate-[backgroundEnter_2s_ease-in-out]'>
            <div className="absolute top-0 w-full h-full xl:dark:bg-[radial-gradient(ellipse_at_top,_rgba(255,136,0,0.2)_0%,_transparent_70%)] xl:bg-[radial-gradient(ellipse_at_top,_rgba(255,136,0,0.6)_0%,_transparent_70%)] animate-[backgroundEnterTop_2s_ease-in-out]"></div>
            <div className='xl:mb-0 mb-10 drop-shadow-md drop-shadow-stone-950/50 animate-[enterLeft_1s_ease-in-out]'>
                <h1 className='drop-shadow-none!'>
                    Hey There!
                </h1>
                <h1 className='xl:mb-4 drop-shadow-none!'>
                    I'm Bosch.
                </h1>
                <div className='flex items-center gap-5'>
                    <FivemIcon className='w-16 fill-orange-400' />
                    <h2>FiveM Full-Stack Developer</h2>
                </div>
            </div>

            <TimeLine />
        </Section>
    );
};
