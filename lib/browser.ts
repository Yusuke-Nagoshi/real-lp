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
  // Android 汎用 WebView
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

function toAbsoluteHttps(url: string): string {
  if (url.startsWith('http')) return url;
  if (typeof window !== 'undefined') return new URL(url, window.location.origin).toString();
  return url;
}

/** Android: デフォルトブラウザへ渡す intent */
export function androidIntentUrl(httpsUrl: string): string {
  const absolute = toAbsoluteHttps(httpsUrl);
  const u = new URL(absolute);
  return (
    `intent://${u.host}${u.pathname}${u.search}${u.hash}` +
    `#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;` +
    `S.browser_fallback_url=${encodeURIComponent(absolute)};end`
  );
}

/** iOS: Safari へ（TikTok は JS 自動遷移をブロック。ユーザーのタップが必要） */
export function iosSafariUrl(httpsUrl: string): string {
  const absolute = toAbsoluteHttps(httpsUrl);
  return `x-safari-${absolute}`;
}

/**
 * iOS Shortcuts 経由のフォールバック。
 * 存在しないショートカット名を実行 → エラーコールバックで https が標準ブラウザで開く。
 * （Shortcuts アプリが一瞬開く副作用あり）
 */
export function iosShortcutsEscapeUrl(httpsUrl: string): string {
  const absolute = toAbsoluteHttps(httpsUrl);
  const name =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `escape-${Date.now()}`;
  return `shortcuts://x-callback-url/run-shortcut?name=${encodeURIComponent(name)}&x-error=${encodeURIComponent(absolute)}`;
}

/** 計測ページを「外部ブラウザで開いた後」と分かるよう ext=1 を付与した絶対 URL */
export function withExternalOpenedFlag(url: string): string {
  const u =
    typeof window !== 'undefined' ? new URL(url, window.location.origin) : new URL(url, 'https://example.com');
  u.searchParams.set('ext', '1');
  return u.toString();
}

/**
 * ユーザー操作付きで外部ブラウザを開く。
 * TikTok iOS は x-safari だけでは失敗しがちなので Shortcuts も併用する。
 */
export function openInExternalBrowser(httpsUrl: string): void {
  const absolute = withExternalOpenedFlag(toAbsoluteHttps(httpsUrl));
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';

  if (isAndroid(ua)) {
    window.location.href = androidIntentUrl(absolute);
    return;
  }

  if (isIOS(ua)) {
    // 1) Shortcuts（比較的通りやすい）→ 失敗時に x-safari を試す
    const shortcuts = iosShortcutsEscapeUrl(absolute);
    const safari = iosSafariUrl(absolute);
    window.location.href = shortcuts;
    window.setTimeout(() => {
      window.location.href = safari;
    }, 400);
    return;
  }

  window.open(absolute, '_blank', 'noopener,noreferrer');
}

/** <a href> 用の第一候補（タップでそのまま使える URL） */
export function primaryEscapeHref(httpsUrl: string): string {
  const absolute = withExternalOpenedFlag(toAbsoluteHttps(httpsUrl));
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  if (isAndroid(ua)) return androidIntentUrl(absolute);
  if (isIOS(ua)) return iosSafariUrl(absolute);
  return absolute;
}
