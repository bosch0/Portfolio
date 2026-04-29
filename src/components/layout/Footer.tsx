import React from 'react';
import { useLocale } from '../../hooks';

export const Footer: React.FC = () => {
  const { t } = useLocale();

    return (
    <footer className="bg-white/60 dark:bg-black/10 dark:text-stone-50 text-stone-800">
      <div className="flex items-center justify-center px-4 sm:px-6 xl:px-8 h-16">
        <div className="text-center">
          <span>
            © {new Date().getFullYear()} boscho. {t.footer.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
};
