'use client';

import { useEffect, useState } from 'react';

import {
  copyText,
  detectInAppBrowser,
  isAndroid,
  lineOpenHref,
} from '@/lib/browser';
import { LINE_FINAL_URL } from '@/lib/line';

/**
 * TikTok は外部ブラウザの強制起動をほぼ塞いでいる。
 * 代わりに:
 * 1. 計測ページを表示（PV）
 * 2. アプリ内なら「LINEアプリを直接開く」＋コピー＋メニュー案内
 * 3. 通常ブラウザなら公式 LINE へ自動遷移
 */
export default function GoLineClient() {
  const [mode, setMode] = useState<'loading' | 'inapp' | 'redirect'>('loading');
  const [appName, setAppName] = useState('アプリ');
  const [lineHref, setLineHref] = useState(LINE_FINAL_URL);
  const [copied, setCopied] = useState(false);
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    const kind = detectInAppBrowser();
    setLineHref(lineOpenHref(LINE_FINAL_URL));
    setPageUrl(window.location.href);

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
      setMode('inapp');
      return;
    }

    setMode('redirect');
    const timer = window.setTimeout(() => {
      window.location.replace(LINE_FINAL_URL);
    }, 400);
    return () => window.clearTimeout(timer);
  }, []);

  const onCopyLine = async () => {
    const ok = await copyText(LINE_FINAL_URL);
    setCopied(ok);
    if (ok) window.setTimeout(() => setCopied(false), 2500);
  };

  const onCopyPage = async () => {
    const ok = await copyText(pageUrl || window.location.href);
    setCopied(ok);
    if (ok) window.setTimeout(() => setCopied(false), 2500);
  };

  if (mode === 'inapp') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-white px-5 py-10 text-center text-slate-700">
        <div className="space-y-2">
          <p className="text-lg font-bold text-slate-900">公式LINEで友だち追加</p>
          <p className="mx-auto max-w-sm text-sm leading-relaxed text-slate-500">
            {appName} 内ではブラウザを自動で開けません。下のボタンから LINE アプリを直接開いてください。
          </p>
        </div>

        <a
          href={lineHref}
          className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 px-8 py-4 text-base font-bold text-white shadow-lg"
        >
          LINEアプリで開く
        </a>

        <button
          type="button"
          onClick={onCopyLine}
          className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-800"
        >
          {copied ? 'コピーしました' : '友だち追加リンクをコピー'}
        </button>

        <div className="mx-auto max-w-sm space-y-2 rounded-2xl bg-slate-50 px-4 py-4 text-left text-xs leading-relaxed text-slate-500">
          <p className="font-semibold text-slate-700">うまく開かないとき</p>
          <ol className="list-decimal space-y-1.5 pl-4">
            {appName === 'TikTok' && (
              <li>
                画面右上の「…」→「ブラウザで開く」を選ぶと、Safari / Chrome でこのページが開き、そのまま公式
                LINE へ進みます。
              </li>
            )}
            <li>
              「リンクをコピー」したあと、LINE のトーク検索や Safari
              のアドレス欄に貼り付けて開いてください。
            </li>
            {isAndroid() && <li>Android では「LINEアプリで開く」が一番確実です。</li>}
          </ol>
          {appName === 'TikTok' && (
            <button
              type="button"
              onClick={onCopyPage}
              className="mt-2 text-left font-medium text-emerald-700 underline"
            >
              このページのURLもコピーする
            </button>
          )}
        </div>
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
