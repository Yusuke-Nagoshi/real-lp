'use client';

import { useEffect, useState, type MouseEvent } from 'react';

import {
  detectInAppBrowser,
  isAndroid,
  openInExternalBrowser,
  primaryEscapeHref,
} from '@/lib/browser';
import { LINE_FINAL_URL } from '@/lib/line';

/**
 * 流れ:
 * 1. TikTok 等のアプリ内 WebView なら、外部ブラウザ起動 UI を出す（自動ではほぼ失敗する）
 * 2. ユーザーが「ブラウザで開く」をタップ → Safari / Chrome でこの計測ページが開く
 * 3. 通常ブラウザなら公式 LINE へ遷移
 */
export default function GoLineClient() {
  const [mode, setMode] = useState<'loading' | 'escape' | 'redirect'>('loading');
  const [escapeHref, setEscapeHref] = useState('#');
  const [appName, setAppName] = useState<string>('アプリ');

  useEffect(() => {
    const kind = detectInAppBrowser();

    // アプリ内にいる限りは必ず脱出 UI（ext=1 でも WebView 内なら脱出継続）
    if (kind) {
      setAppName(
        kind === 'tiktok'
          ? 'TikTok'
          : kind === 'instagram'
            ? 'Instagram'
            : kind === 'facebook'
              ? 'Facebook'
              : 'このアプリ',
      );
      setEscapeHref(primaryEscapeHref(window.location.href));
      setMode('escape');

      // Android だけ intent の自動試行（iOS/TikTok の JS 遷移はブロックされる）
      if (isAndroid()) {
        openInExternalBrowser(window.location.href);
      }
      return;
    }

    setMode('redirect');
    const timer = window.setTimeout(() => {
      window.location.replace(LINE_FINAL_URL);
    }, 400);
    return () => window.clearTimeout(timer);
  }, []);

  const onOpenBrowser = (event: MouseEvent<HTMLAnchorElement>) => {
    // カスタムスキームをユーザー操作の文脈で発火させる
    event.preventDefault();
    openInExternalBrowser(window.location.href);
  };

  if (mode === 'escape') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-4 text-center text-slate-700">
        <p className="text-lg font-bold text-slate-900">ブラウザで開いてください</p>
        <p className="max-w-sm text-sm leading-relaxed text-slate-500">
          {appName} のアプリ内ブラウザでは公式 LINE の友だち追加がうまくいかないことがあります。下のボタンで
          Safari / Chrome などのブラウザアプリを開いてから進みます。
        </p>
        <a
          href={escapeHref}
          onClick={onOpenBrowser}
          className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 px-8 py-4 text-base font-bold text-white shadow-lg"
        >
          ブラウザで開く
        </a>
        {appName === 'TikTok' && (
          <p className="max-w-sm text-xs leading-relaxed text-slate-400">
            ボタンで開かない場合は、画面右上の「…」→「ブラウザで開く」を選んでください。開いた先で自動的に公式
            LINE へ進みます。
          </p>
        )}
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
