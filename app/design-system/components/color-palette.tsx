// app/design-system/components/ColorPaletteDemo.tsx
'use client';

import { useEffect, useState } from 'react';

export default function ColorPaletteDemo() {
  // SSR에서는 항상 false로 시작
  const [dark, setDark] = useState(false);

  // 클라이언트에서만 실제 모드 감지
  useEffect(() => {
    const getInitialMode = () => {
      const stored = window.localStorage.getItem('theme');
      if (stored === 'dark') return true;
      if (stored === 'light') return false;
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };
    setDark(getInitialMode());
  }, []);

  // 다크모드 상태가 바뀔 때마다 html class와 localStorage 동기화
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (dark) {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  // 다크모드 토글 함수
  const toggleDark = () => setDark((prev) => !prev);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background dark:bg-background-dark transition-colors duration-300">
      <button
        onClick={toggleDark}
        className="mb-8 px-4 py-2 rounded bg-primary text-white dark:bg-primary-dark"
      >
        {dark ? '라이트 모드로' : '다크 모드로'}
      </button>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <div className="p-4 rounded bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
          Light Surface
        </div>
        <div className="p-4 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200">
          Dark Surface
        </div>
        <div className="p-4 rounded bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900">
          Primary bg-blue-600 dark:text-gray-900
        </div>
        <div className="p-4 rounded bg-blue-800 text-white dark:bg-blue-600 dark:text-gray-100">
          Primary bg-blue-800 dark:text-gray-100
        </div>
        <div className="p-4 rounded bg-green-600 text-white dark:bg-green-400 dark:text-gray-900">
          Secondary bg-green-600 dark:text-gray-900
        </div>
        <div className="p-4 rounded bg-green-800 text-white dark:bg-green-600  dark:text-gray-100">
          Secondary Dark bg-green-800 dark:text-gray-100
        </div>
      </div>
    </div>
  );
}