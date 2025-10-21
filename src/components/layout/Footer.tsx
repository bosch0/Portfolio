import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/10 dark:text-stone-50 text-gray-900">
      <div className="flex items-center justify-center px-4 sm:px-6 xl:px-8 h-16">
        <div className="text-center">
          <span>
            © {new Date().getFullYear()} boscho. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
