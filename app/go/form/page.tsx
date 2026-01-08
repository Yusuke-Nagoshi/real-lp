'use client';

import { useEffect } from 'react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSedmR_BbRrFlYi7mbY2W08RIJmimYWsq03BEgsuRS_JTrZn3Q/viewform?usp=dialog';

export default function GoForm() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = GOOGLE_FORM_URL;
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <p className="text-slate-600 text-lg font-medium">フォームを開いています…</p>
      </div>
    </main>
  );
}

