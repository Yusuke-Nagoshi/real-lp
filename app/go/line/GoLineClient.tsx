'use client';

import { useEffect } from 'react';

import { LINE_FINAL_URL } from '@/lib/line';

/** このページの表示＝Vercel Analytics のページビューとして 1 回カウントされ、その後 LINE へ遷移 */
export default function GoLineClient() {
  useEffect(() => {
    window.location.replace(LINE_FINAL_URL);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-white px-4 text-center text-slate-600">
      <p className="text-sm">公式LINEへ移動しています…</p>
      <p className="text-xs text-slate-400">しばらくお待ちください</p>
    </div>
  );
}
