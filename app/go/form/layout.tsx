import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "あるこ - 位置ゲーで一緒に周れる人が見つかる | 事前登録",
  description: "あるこは、レイド募集や交換募集で位置ゲーを一緒に周れる相手を見つけやすくするサービスです。友達追加で事前登録、無料・いつでも解除OK。",
  openGraph: {
    title: "あるこ - 位置ゲーで一緒に周れる人が見つかる | 事前登録",
    description: "あるこは、レイド募集や交換募集で位置ゲーを一緒に周れる相手を見つけやすくするサービスです。友達追加で事前登録、無料・いつでも解除OK。",
    type: "website",
    url: "https://real-lp.vercel.app/go/form",
    images: [
      {
        url: '/og-image.png?v=2',
        width: 1200,
        height: 630,
        alt: 'あるこ - 位置ゲーで一緒に周れる人が見つかる',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "あるこ - 位置ゲーで一緒に周れる人が見つかる | 事前登録",
    description: "あるこは、レイド募集や交換募集で位置ゲーを一緒に周れる相手を見つけやすくするサービスです。友達追加で事前登録、無料・いつでも解除OK。",
    images: ['/og-image.png?v=2'],
  },
};

export default function GoFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

