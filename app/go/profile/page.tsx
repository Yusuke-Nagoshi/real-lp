'use client';

import { useEffect } from 'react';

export default function GoProfile() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <p className="text-slate-600 text-lg font-medium">ページを開いています…</p>
      </div>
    </main>
  );
}

