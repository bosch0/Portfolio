import React from 'react';

/**
 * Text whose letters jump when hovered (see `.lw` / `.ltr` in App.css).
 * Words stay unbreakable, and the plain text is kept for assistive technology.
 */
export const LetterText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const words = text.split(' ');
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {words.map((word, w) => (
        <React.Fragment key={w}>
          <span aria-hidden="true" className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, i) => (
              <span key={i} className="lw">
                <span className="ltr">{char}</span>
              </span>
            ))}
          </span>
          {w < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </span>
  );
};
