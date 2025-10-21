import { useState, useEffect } from 'react';

const checkDark = () => {
  return localStorage.getItem('color-theme') === 'dark' || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
};

export const useTheme = () => {
  const [isDark, setIsDark] = useState(checkDark());

  useEffect(() => {
    update(isDark);
  }, []);

  const update = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setIsDark(dark);
  };

  const toggleTheme = () => {
    const newTheme = !isDark;

    localStorage.setItem('color-theme', newTheme ? 'dark' : 'light');
    update(newTheme);
  };

  return { isDark, toggleTheme };
};