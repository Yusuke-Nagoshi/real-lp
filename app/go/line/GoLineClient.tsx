'use client';

import { useEffect, useState } from 'react';

import {
  copyText,
  detectInAppBrowser,
  lineOpenHref,
  type InAppKind,
} from '@/lib/browser';
import { LINE_FINAL_URL } from '@/lib/line';

type Mode = 'trying' | 'guide' | 'redirect';

function appLabel(kind: InAppKind): string {
  if (kind === 'tiktok') return 'TikTok';
  if (kind === 'instagram') return 'Instagram';
  if (kind === 'facebook') return 'Facebook';
  if (kind === 'line') return 'LINE';
  if (kind === 'other') return 'アプリ';
  return 'アプリ';
}

/**
 * 1. まず自動で LINE 起動を試す
 * 2. 画面に残っていたら（＝失敗）開き方ガイドを大きく表示
 * 3. 通常ブラウザならそのまま公式 LINE へ
 */
export default function GoLineClient() {
  const [mode, setMode] = useState<Mode>('trying');
  const [kind, setKind] = useState<InAppKind>(null);
  const [lineHref, setLineHref] = useState(LINE_FINAL_URL);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const detected = detectInAppBrowser();
    const href = lineOpenHref(LINE_FINAL_URL);
    setKind(detected);
    setLineHref(href);

    // 通常ブラウザ: 計測後にそのまま LINE へ
    if (!detected) {
      setMode('redirect');
      const timer = window.setTimeout(() => {
        window.location.replace(LINE_FINAL_URL);
      }, 400);
      return () => window.clearTimeout(timer);
    }

    // アプリ内: 自動で一度だけ試す（タップなしでも Android intent 等が効く場合がある）
    setMode('trying');
    const jump = window.setTimeout(() => {
      window.location.href = href;
    }, 200);

    // まだこのページにいる＝起動失敗 → ガイド表示
    const fail = window.setTimeout(() => {
      if (document.visibilityState === 'visible') {
        setMode('guide');
      }
    }, 1400);

    const onVisible = () => {
      if (document.visibilityState === 'visible') {
        window.setTimeout(() => {
          if (document.visibilityState === 'visible') setMode('guide');
        }, 600);
      }
    };
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      window.clearTimeout(jump);
      window.clearTimeout(fail);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  const onCopy = async () => {
    const ok = await copyText(LINE_FINAL_URL);
    setCopied(ok);
    if (ok) window.setTimeout(() => setCopied(false), 2500);
  };

  if (mode === 'guide') {
    const name = appLabel(kind);
    const isTikTok = kind === 'tiktok';

    return (
      <div className="min-h-screen bg-[#f7fafc] px-4 py-10 text-slate-800">
        <div className="mx-auto w-full max-w-md">
          <header className="mb-8 text-center">
            <p className="text-sm font-semibold tracking-wide text-sky-700">あるこ 公式</p>
            <h1 className="mt-2 text-2xl font-bold leading-tight text-slate-900">
              公式LINEの開き方
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {name}内からは自動でLINEを開けませんでした。
              <br />
              下の手順で開いてください。
            </p>
          </header>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {isTikTok ? (
              <ol className="divide-y divide-slate-100">
                <li className="flex gap-4 px-5 py-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                    1
                  </span>
                  <div className="min-w-0 pt-0.5 text-left">
                    <p className="text-base font-bold text-slate-900">右上の「･･･」をタップ</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      TikTokの画面・右上にある点が3つのボタンです。
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 px-5 py-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                    2
                  </span>
                  <div className="min-w-0 pt-0.5 text-left">
                    <p className="text-base font-bold text-slate-900">「ブラウザで開く」を選ぶ</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      メニューの中から「ブラウザで開く」または「Open in browser」をタップします。
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 bg-emerald-50/80 px-5 py-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    3
                  </span>
                  <div className="min-w-0 pt-0.5 text-left">
                    <p className="text-base font-bold text-emerald-900">Safari / Chrome が開きます</p>
                    <p className="mt-1 text-sm leading-relaxed text-emerald-800/80">
                      開いた先で自動的に公式LINEの友だち追加へ進みます。
                    </p>
                  </div>
                </li>
              </ol>
            ) : (
              <ol className="divide-y divide-slate-100">
                <li className="flex gap-4 px-5 py-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                    1
                  </span>
                  <div className="min-w-0 pt-0.5 text-left">
                    <p className="text-base font-bold text-slate-900">メニューからブラウザで開く</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      画面右上の「･･･」などから「ブラウザで開く」を選んでください。
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 bg-emerald-50/80 px-5 py-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    2
                  </span>
                  <div className="min-w-0 pt-0.5 text-left">
                    <p className="text-base font-bold text-emerald-900">公式LINEへ進みます</p>
                    <p className="mt-1 text-sm leading-relaxed text-emerald-800/80">
                      Safari / Chrome で開いたあと、自動で友だち追加画面に移動します。
                    </p>
                  </div>
                </li>
              </ol>
            )}
          </div>

          <div className="mt-6 space-y-3">
            <a
              href={lineHref}
              className="flex w-full items-center justify-center rounded-full bg-[#06C755] px-6 py-4 text-base font-bold text-white shadow-md shadow-emerald-600/20"
            >
              もう一度 LINE で開く
            </a>
            <button
              type="button"
              onClick={onCopy}
              className="flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800"
            >
              {copied ? 'コピーしました ✓' : '友だち追加リンクをコピー'}
            </button>
            <p className="px-2 text-center text-xs leading-relaxed text-slate-400">
              リンクをコピーした場合は、Safari を開いてアドレス欄に貼り付けてください。
            </p>
          </div>

          <p className="mt-10 text-center text-xs text-slate-400">あるこ サポート案内</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-white px-4 text-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
      <p className="text-sm font-medium text-slate-700">公式LINEを開いています…</p>
      <p className="text-xs text-slate-400">しばらくお待ちください</p>
      <a href={lineHref} className="mt-4 text-xs text-emerald-700 underline">
        開かない場合はこちらをタップ
      </a>
    </div>
  );
}
