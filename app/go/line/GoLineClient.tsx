'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { isInAppBrowser, toExternalBrowserUrl, withExternalOpenedFlag } from '@/lib/browser';
import { LINE_EXT_PARAM, LINE_EXT_VALUE, LINE_FINAL_URL } from '@/lib/line';

/**
 * 流れ:
 * 1. TikTok 等のアプリ内 WebView なら、この計測ページを Safari / 標準ブラウザで開かせる
 * 2. 外部ブラウザで開かれたら（または元から通常ブラウザなら）公式 LINE へ遷移
 * このページの表示＝Vercel Analytics のページビューとしてカウント
 */
export default function GoLineClient() {
  const searchParams = useSearchParams();
  const alreadyExternal = searchParams.get(LINE_EXT_PARAM) === LINE_EXT_VALUE;
  const [ui, setUi] = useState<'loading' | 'escape'>('loading');
  const [escapeHref, setEscapeHref] = useState('');

  useEffect(() => {
    const inApp = isInAppBrowser();

    if (!alreadyExternal && inApp) {
      const target = withExternalOpenedFlag(window.location.href);
      const escapeUrl = toExternalBrowserUrl(target);
      setEscapeHref(escapeUrl);
      setUi('escape');
      // Android 等では自動で効くことがある。TikTok iOS 等は下のボタン（ユーザー操作）が必要
      window.location.href = escapeUrl;
      return;
    }

    const timer = window.setTimeout(() => {
      window.location.replace(LINE_FINAL_URL);
    }, 400);
    return () => window.clearTimeout(timer);
  }, [alreadyExternal]);

  if (ui === 'escape') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-4 text-center text-slate-600">
        <p className="text-base font-medium text-slate-800">ブラウザで開いてください</p>
        <p className="max-w-sm text-sm text-slate-500">
          TikTok などのアプリ内画面では公式 LINE が開けないことがあります。下のボタンから Safari
          などのブラウザで開いたあと、友だち追加へ進みます。
        </p>
        <a
          href={escapeHref}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 px-8 py-4 text-base font-bold text-white shadow-lg"
        >
          ブラウザで開く
        </a>
        <a href={LINE_FINAL_URL} className="text-xs text-slate-400 underline">
          うまくいかない場合はこちら（公式 LINE）
        </a>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-white px-4 text-center text-slate-600">
      <p className="text-sm">公式LINEへ移動しています…</p>
      <p className="text-xs text-slate-400">しばらくお待ちください</p>
      <a href={LINE_FINAL_URL} className="mt-4 text-xs text-slate-400 underline">
        自動で開かない場合はこちら
      </a>
    </div>
  );
}
