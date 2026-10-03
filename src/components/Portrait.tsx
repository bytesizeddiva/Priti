import React, { useEffect, useState } from 'react';

interface PortraitProps {
  /**
   * Optional override. To use your own photo, drop the file in `public/` and
   * pass its path here (e.g. customImage="/me.jpg").
   */
  customImage?: string | null;
}

const DEFAULT_PORTRAIT =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=85';

const initialsOf = (name: string): string =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export const Portrait: React.FC<PortraitProps> = ({ customImage }) => {
  const [imageError, setImageError] = useState(false);
  const imageSrc = customImage || DEFAULT_PORTRAIT;

  // Clear a previous failure if the source changes (e.g. a new upload).
  useEffect(() => {
    setImageError(false);
  }, [imageSrc]);

  return (
    <div className="relative flex items-center justify-center">
      {/* Editorial Monochrome Portrait */}
      <div className="relative w-[78px] h-[78px] sm:w-[86px] sm:h-[86px] rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-black/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.06)] bg-neutral-100">
        {!imageError ? (
          <img
            src={imageSrc}
            alt="Priti Jadhav"
            className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.96] transition-transform duration-300 hover:scale-105"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-400 flex items-center justify-center text-neutral-700 font-semibold text-xl">
            {initialsOf('Priti Jadhav')}
          </div>
        )}
      </div>
    </div>
  );
};
