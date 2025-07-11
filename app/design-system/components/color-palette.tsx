// app/design-system/components/ColorPaletteDemo.tsx
'use client';

import { useState } from 'react';

export default function ColorPaletteDemo() {
  const [dark, setDark] = useState(false);

  // 다크모드 토글 함수
  const toggleDark = () => {
    setDark((prev) => !prev);
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', !dark);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background dark:bg-background-dark transition-colors duration-300">
      <button
        onClick={toggleDark}
        className="mb-8 px-4 py-2 rounded bg-primary text-white dark:bg-primary-dark"
      >
        {dark ? '라이트 모드로' : '다크 모드로'}
      </button>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <div className="p-4 rounded bg-surface border border-border text-foreground">
          Light Surface
        </div>
        <div className="p-4 rounded bg-surface-dark border border-border-dark text-foreground-dark">
          Dark Surface
        </div>
        <div className="p-4 rounded bg-primary text-white">
          Primary
        </div>
        <div className="p-4 rounded bg-primary-dark text-white">
          Primary Dark
        </div>
        <div className="p-4 rounded bg-secondary text-white">
          Secondary
        </div>
        <div className="p-4 rounded bg-secondary-dark text-white">
          Secondary Dark
        </div>
      </div>
    </div>
  );
}