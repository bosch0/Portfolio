import React from 'react';
import { ReactIcon, ViteIcon, TailwindIcon, LuaIcon, SvelteIcon, MariaDBIcon } from '../../icons';

export const Carousel: React.FC<{ techs: string[] }> = ({ techs }) => {
    const icons: { [key: string]: React.ReactNode } = {
        React: <ReactIcon className="fill-[#61dafb]" />,
        Vite: <ViteIcon className="fill-[#646cff]" />,
        Tailwind: <TailwindIcon className="fill-[#06b6d4]" />,
        Lua: <LuaIcon className="fill-[#000080]" />,
        Svelte: <SvelteIcon className="fill-[#ff3e00]" />,
        MariaDB: <MariaDBIcon className="fill-[#003545]" />,
    };

    const TechList = ({ prefix }: { prefix: string }) => (
        <div className="flex min-w-full overflow-hidden">
            {techs.map((tech, index) => (
                <div key={`tech-${prefix}-${index}`} className="flex flex-1 mx-2 items-center justify-center gap-2 bg-stone-200/20 dark:bg-stone-800/20 rounded-lg px-3 py-2 min-w-fit">
                    <div className="xl:w-6 w-4">
                        {icons[tech]}
                    </div>
                    <span className="xl:text-sm text-xs text-stone-600 dark:text-stone-300">{tech}</span>
                </div>
            ))}
        </div>
    );

    return (
        <div className="overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28px,_black_calc(100%-28px),transparent_100%)]">
            <div className="flex whitespace-nowrap animate-[infiniteCarousel_25s_linear_infinite]">
                <TechList prefix="1" />
                <TechList prefix="2" />
            </div>
        </div>
    );
};