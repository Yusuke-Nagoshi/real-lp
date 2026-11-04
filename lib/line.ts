/** 最終的に遷移する公式LINE（lin.ee） */
export const LINE_FINAL_URL = 'https://lin.ee/sjoYeq5';

/** 計測用の中継パス（ここへのページビュー数 ≒ LINE ボタン経由の回数。Vercel Analytics のパス別表示で確認） */
export const LINE_GO_PATH = '/go/line';

export function lineCtaHref(placement: string): string {
  return `${LINE_GO_PATH}?from=${encodeURIComponent(placement)}`;
}
