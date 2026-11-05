export type InAppKind = 'tiktok' | 'instagram' | 'facebook' | 'line' | 'other' | null;

/** TikTok 実機 UA は "TikTok" ではなく musical_ly / BytedanceWebview が多い */
export function detectInAppBrowser(
  userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '',
): InAppKind {
  const ua = userAgent || '';

  if (/musical_ly|BytedanceWebview|ByteLocale|trill_|AppName\/ultralite|TikTok/i.test(ua)) {
    return 'tiktok';
  }
  if (/Instagram|Barcelona/i.test(ua)) return 'instagram';
  if (/FBAN|FBAV|FB_IAB|Messenger/i.test(ua)) return 'facebook';
  if (/Line\//i.test(ua)) return 'line';
  if (/Twitter|LinkedInApp|Snapchat|Pinterest/i.test(ua)) return 'other';
  if (/Android/i.test(ua) && /; wv\)/i.test(ua)) return 'other';

  return null;
}

export function isInAppBrowser(userAgent?: string): boolean {
  return detectInAppBrowser(userAgent) !== null;
}

export function isAndroid(userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : ''): boolean {
  return /Android/i.test(userAgent || '');
}

export function isIOS(userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : ''): boolean {
  return /iPhone|iPad|iPod/i.test(userAgent || '');
}

/**
 * Android で LINE アプリを直接起動する intent。
 * 外部ブラウザ起動より TikTok WebView では通りやすい。
 */
export function lineAndroidIntentUrl(lineHttpsUrl: string): string {
  const u = new URL(lineHttpsUrl);
  return (
    `intent://${u.host}${u.pathname}${u.search}` +
    `#Intent;scheme=https;package=jp.naver.line.android;` +
    `S.browser_fallback_url=${encodeURIComponent(lineHttpsUrl)};end`
  );
}

/** 端末に応じた「LINEを開く」用 href（ユーザーのタップで発火させる） */
export function lineOpenHref(lineHttpsUrl: string): string {
  if (isAndroid()) return lineAndroidIntentUrl(lineHttpsUrl);
  return lineHttpsUrl;
}

/**
 * 今のページを離れずに LINE 起動だけを試す。
 * location 遷移は使わない（失敗時にガイドへ戻れなくなるため）。
 */
export function tryOpenLineWithoutLeaving(lineHttpsUrl: string): void {
  try {
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'position:fixed;width:0;height:0;border:0;opacity:0;pointer-events:none';
    iframe.setAttribute('aria-hidden', 'true');
    // https のまま。intent を iframe に入れると親が遷移することがあるので使わない
    iframe.src = lineHttpsUrl;
    document.body.appendChild(iframe);
    window.setTimeout(() => {
      iframe.remove();
    }, 2500);
  } catch {
    // ignore
  }
}

export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through
  }

  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}
