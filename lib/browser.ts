/** TikTok / Instagram などアプリ内 WebView かどうか */
export function isInAppBrowser(userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : ''): boolean {
  const ua = userAgent || '';
  if (/FBAN|FBAV|Instagram|Line\/|Twitter|TikTok|BytedanceWebview|ByteLocale|musical_ly|Snapchat|Pinterest|LinkedInApp/i.test(ua)) {
    return true;
  }
  // Android 汎用 WebView
  if (/Android/i.test(ua) && /; wv\)/i.test(ua)) {
    return true;
  }
  return false;
}

/**
 * アプリ内ブラウザから、Safari / 標準ブラウザで https URL を開くためのスキーム。
 * - Android: intent://（デフォルトブラウザ）
 * - iOS: x-safari-https://（Safari）
 * タップなどのユーザー操作付きで効きやすい。TikTok iOS など一部はブロックされる場合あり。
 */
export function toExternalBrowserUrl(httpsUrl: string, userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : ''): string {
  const ua = userAgent || '';
  const absolute = httpsUrl.startsWith('http')
    ? httpsUrl
    : typeof window !== 'undefined'
      ? new URL(httpsUrl, window.location.origin).toString()
      : httpsUrl;

  if (/Android/i.test(ua)) {
    const rest = absolute.replace(/^https?:\/\//, '');
    return `intent://${rest}#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;end`;
  }

  if (/iPhone|iPad|iPod/i.test(ua)) {
    return absolute.replace(/^https:\/\//, 'x-safari-https://');
  }

  return absolute;
}

/** 計測ページを「外部ブラウザで開いた後」と分かるよう ext=1 を付与した絶対 URL */
export function withExternalOpenedFlag(url: string): string {
  const u = typeof window !== 'undefined' ? new URL(url, window.location.origin) : new URL(url, 'https://example.com');
  u.searchParams.set('ext', '1');
  return u.toString();
}
