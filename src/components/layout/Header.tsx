import React from 'react';
import { NAVIGATION } from '../../constants';
import { useTheme, useLocale } from '../../hooks';
import { LOCALE_ICONS, SUPPORTED_LOCALES, getLocaleLabel } from '../../i18n/config';
import { Button } from '../ui';
import { SpainFlagIcon, UkFlagIcon } from '../icons';

export const Header: React.FC = () => {
    const { locale, setLocale, t } = useLocale();
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className="bg-white/60 dark:bg-black/10 shadow-md fixed w-full backdrop-blur-sm z-50">
            <nav className="px-4 sm:px-6 xl:px-8">
                <div className="flex items-center gap-3 h-16">
                    <div className="xl:block w-1/3 hidden">
                        <span className="xl:text-xl font-bold drop-shadow-sm dark:drop-shadow-lg dark:drop-shadow-stone-50/10 dark:text-stone-50 text-stone-900 transition-colors">
                            {"< bosch0 />"}
                        </span>
                    </div>

                    <div className="xl:w-1/3 w-full flex justify-evenly gap-2 text-sm sm:text-base">
                        {NAVIGATION.map((element: string) => {
                            return (
                                <a
                                    key={element}
                                    href={`#${element}`}
                                    className="text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-50 rounded-md font-medium transition-colors"
                                >
                                    {t.navigation[element as keyof typeof t.navigation]}
                                </a>
                            )
                        })}
                    </div>

                    <div className="xl:w-1/3 flex justify-end items-center gap-2 shrink-0">
                        <div className="flex items-center gap-2">
                            {SUPPORTED_LOCALES.map((supportedLocale) => {
                                const flagIcon = LOCALE_ICONS[supportedLocale];
                                const FlagIcon = flagIcon === 'uk' ? UkFlagIcon : flagIcon === 'spain' ? SpainFlagIcon : null;
                                const label = getLocaleLabel(supportedLocale, locale);

                                return (
                                    <Button
                                        key={supportedLocale}
                                        variant={locale === supportedLocale ? 'primary' : 'outline'}
                                        size="md"
                                        onClick={() => setLocale(supportedLocale)}
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
                            })}
                        </div>
                        <Button variant='outline' size="md" onClick={toggleTheme}>
                            <span>{isDark ? '🌙' : '☀️'}</span>
                            <div className="xl:inline-block hidden">
                                <span className='ml-2.5'>{t.theme.toggle}</span>
                            </div>
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
};
