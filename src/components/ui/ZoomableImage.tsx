import React, { useRef } from 'react';
import { useLocale } from '../../hooks';
import { CloseIcon } from '../icons';

interface ZoomableImageProps {
  src: string;
  alt: string;
  /** Classes for the inline (thumbnail) image. */
  className?: string;
  /** Classes for the wrapping button; it fills its container by default. */
  buttonClassName?: string;
}

/**
 * Thumbnail that opens full-size in a native `<dialog>` on click.
 * `showModal()` gives us the top layer (so card `overflow-hidden`/transforms don't clip it),
 * a focus trap and Escape-to-close for free; clicking the backdrop also closes it.
 */
export const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt, className = '', buttonClassName = '' }) => {
  const { t } = useLocale();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label={`${t.meta.zoom}: ${alt}`}
        className={`block size-full cursor-zoom-in focus-visible:outline-offset-[-3px]! ${buttonClassName}`}
      >
        <img src={src} alt={alt} loading="lazy" decoding="async" className={className} />
      </button>
      <dialog
        ref={dialogRef}
        aria-label={alt}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="m-auto max-h-none max-w-none border-0 bg-transparent p-4 text-fg outline-none backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        <div className="relative">
          <img
            src={src}
            alt={alt}
            decoding="async"
            className="max-h-[88vh] max-w-[92vw] rounded-lg border border-border bg-surface object-contain shadow-card"
          />
          <button
            type="button"
            onClick={close}
            aria-label={t.meta.close}
            className="absolute -top-3 -right-3 grid size-9 cursor-pointer place-items-center rounded-full border border-border-strong bg-surface text-fg shadow-card transition-colors hover:text-accent [&_svg]:size-4"
          >
            <CloseIcon />
          </button>
        </div>
      </dialog>
    </>
  );
};
