import React from "react";
import { timeLine } from '../../utils/TimeLine';
import * as Icons from '../icons';

export const TimeLine: React.FC = () => {
    const icons: { [key: string]: React.ReactNode } = {
        stack: <Icons.StackIcon className="stroke-orange-400"/>,
        uiux: <Icons.UIUXIcon className="fill-orange-400"/>,
        tebex: <Icons.TebexIcon className="fill-orange-400"/>,
        server: <Icons.ServerIcon className="fill-orange-400"/>,
    }

    return (
        <div className="animate-[enterRight_1s_ease-in-out] z-1">
            {timeLine.map((v, index) => (
                <div className="flex flex-col xl:w-[25vw] w-[90vw]" key={index}>
                    <div className="flex items-center gap-2 my-2 ">
                        <div className="min-w-8 h-8">
                            {icons[v.icon]}
                        </div>
                        <h4 className="mb-1 text-nowrap truncate">{v.title}</h4>
                    </div>
                    <div className="flex pl-3.5 gap-3.5 items-center">
                        <div className="min-w-1 bg-orange-500 rounded-full h-25"></div>
                        <p className="overflow-hidden line-clamp-5 xl:w-10/13 ">{v.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
