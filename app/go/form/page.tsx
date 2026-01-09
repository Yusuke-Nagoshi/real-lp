'use client';

import { useEffect, useState } from 'react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSedmR_BbRrFlYi7mbY2W08RIJmimYWsq03BEgsuRS_JTrZn3Q/viewform?usp=dialog';

export default function GoForm() {
  useEffect(() => {
    // Vercel Analyticsが計測できるように500ms待機してからリダイレクト
    // これにより、/go/form のPVが確実に記録されます
    const timer = setTimeout(() => {
      window.location.href = GOOGLE_FORM_URL;
    }, 500);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-4 border-4 border-sky-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-700 text-lg font-medium mb-2">フォームを開いています…</p>
          <p className="text-sm text-slate-500 mb-4">登録無料 / メールだけ / いつでも解除OK</p>
        </div>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 rounded-full hover:from-sky-500 hover:via-blue-500 hover:to-cyan-500 transition-all shadow-xl shadow-sky-400/40"
        >
          開かない場合はこちらをクリック
        </a>
      </div>
    </main>
  );
}

