import React, { useState, useRef, useEffect } from 'react';
import { NAVIGATION } from '../../constants';
import { useTheme, useLocale } from '../../hooks';
import { LOCALE_ICONS, SUPPORTED_LOCALES, getLocaleLabel } from '../../i18n/config';
import { Button } from '../ui';
import { SpainFlagIcon, UkFlagIcon, SlidersIcon } from '../icons';

export const Header: React.FC = () => {
    const { locale, setLocale, t } = useLocale();
    const { isDark, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const localeButtons = SUPPORTED_LOCALES.map((supportedLocale) => {
        const flagIcon = LOCALE_ICONS[supportedLocale];
        const FlagIcon = flagIcon === 'uk' ? UkFlagIcon : flagIcon === 'spain' ? SpainFlagIcon : null;
        const label = getLocaleLabel(supportedLocale, locale);

        return (
            <Button
                key={supportedLocale}
                variant={locale === supportedLocale ? 'primary' : 'outline'}
                size="md"
                onClick={() => { setLocale(supportedLocale); setIsOpen(false); }}
                aria-label={label}
                title={label}
            >
                {FlagIcon ? (
                    <FlagIcon className="h-6 w-6 shrink-0" />
                ) : (
                    <span className="text-xs font-semibold uppercase">{supportedLocale}</span>
                )}
            </Button>
        );
    });

    return (
        <header className="bg-white/60 dark:bg-black/10 shadow-md fixed w-full backdrop-blur-sm z-50">
            <nav className="px-4 sm:px-6 xl:px-8">
                <div className="flex items-center gap-3 h-16">
                    <div className="xl:block w-1/3 hidden">
                        <span className="xl:text-xl font-bold drop-shadow-sm dark:drop-shadow-lg dark:drop-shadow-stone-50/10 dark:text-stone-50 text-stone-900 transition-colors">
                            {"< bosch0 />"}
                        </span>
                    </div>

                    <div className="xl:w-1/3 flex-1 flex justify-evenly gap-2 text-sm sm:text-base">
                        {NAVIGATION.map((element: string) => (
                            <a
                                key={element}
                                href={`#${element}`}
                                className="text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-50 rounded-md font-medium transition-colors"
                            >
                                {t.navigation[element as keyof typeof t.navigation]}
                            </a>
                        ))}
                    </div>

                    <div className="xl:w-1/3 flex justify-end items-center gap-2 shrink-0">
                        {/* Desktop controls */}
                        <div className="hidden xl:flex items-center gap-2">
                            <a
                                href="https://store.boscho.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-linear-to-br from-orange-400 to-orange-700 hover:to-orange-400 text-white ring-inset ring-3 dark:ring-stone-50/20 ring-stone-900/8 xl:px-4 xl:py-2 p-2 text-base rounded-2xl transition-colors font-medium whitespace-nowrap"
                            >
                                {t.store.cta}
                            </a>
                            {localeButtons}
                        </div>
                        <div className="hidden xl:block">
                            <Button variant='outline' size="md" onClick={toggleTheme}>
                                <span>{isDark ? '🌙' : '☀️'}</span>
                                <div className="xl:inline-block hidden">
                                    <span className='ml-2.5'>{t.theme.toggle}</span>
                                </div>
                            </Button>
                        </div>

                        {/* Mobile dropdown trigger */}
                        <div className="xl:hidden relative" ref={dropdownRef}>
                            <Button
                                variant='outline'
                                size="md"
                                onClick={() => setIsOpen((prev) => !prev)}
                                aria-label="Settings"
                                aria-expanded={isOpen}
                            >
                                <SlidersIcon className="h-5 w-5" />
                            </Button>

                            {isOpen && (
                                <div className="absolute right-0 top-full mt-2 bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm shadow-lg rounded-xl p-3 flex flex-col gap-2 border border-stone-200 dark:border-stone-700 min-w-max">
                                    <a
                                        href="https://store.boscho.tech"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-linear-to-br from-orange-400 to-orange-700 hover:to-orange-400 text-white ring-inset ring-3 dark:ring-stone-50/20 ring-stone-900/8 p-2 text-base rounded-2xl transition-colors font-medium text-center"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {t.store.cta}
                                    </a>
                                    <div className="flex items-center gap-2">
                                        {localeButtons}
                                    </div>
                                    <Button variant='outline' size="md" onClick={() => { toggleTheme(); setIsOpen(false); }}>
                                        <span>{isDark ? '🌙' : '☀️'}</span>
                                        <span className='ml-2.5'>{t.theme.toggle}</span>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
