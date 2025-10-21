import React from 'react';
import { NAVIGATION } from '../../constants';
import { useTheme } from '../../hooks';
import { Button } from '../ui';

export const Header: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className="bg-black/10 shadow-md fixed w-full backdrop-blur-sm z-50">
            <nav className="px-4 sm:px-6 xl:px-8">
                <div className="flex items-center h-16">
                    <div className="xl:block w-1/3 hidden">
                        <span className="xl:text-xl font-bold drop-shadow-lg drop-shadow-stone-50/10 text-stone-50 transition-colors">
                            {"< bosch0 />"}
                        </span>
                    </div>

                    <div className="xl:w-1/3 w-full flex justify-evenly">
                        {NAVIGATION.map((element: string) => {
                            const label = element.charAt(0).toUpperCase() + element.slice(1)
                            return (
                                <a
                                    key={element}
                                    href={`#${element}`}
                                    className="text-stone-300 hover:text-stone-50 rounded-md font-medium transition-colors"
                                >
                                    {label}
                                </a>
                            )
                        })}
                    </div>

                    <div className="xl:w-1/3 flex justify-end">
                        <Button variant='outline' onClick={toggleTheme}>
                            <span>{isDark ? '🌙' : '☀️'}</span>
                            <div className="xl:inline-block hidden">
                                <span className='ml-2.5'>Toggle Color Theme</span>
                            </div>
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
};
