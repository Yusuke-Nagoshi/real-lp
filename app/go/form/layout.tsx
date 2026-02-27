import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "あるこ - 位置情報ゲーム好きの友達探し | 事前登録",
  description: "あるこは、位置情報ゲーム好き同士が友達を見つけられるサービスです。友だち追加で事前登録、無料・いつでも解除OK。",
  openGraph: {
    title: "あるこ - 位置情報ゲーム好きの友達探し | 事前登録",
    description: "あるこは、位置情報ゲーム好き同士が友達を見つけられるサービスです。友だち追加で事前登録、無料・いつでも解除OK。",
    type: "website",
    url: "https://real-lp.vercel.app/go/form",
    images: [
      {
        url: '/og-image.png?v=2',
        width: 1200,
        height: 630,
        alt: 'あるこ - 位置情報ゲーム好きの友達探し',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "あるこ - 位置情報ゲーム好きの友達探し | 事前登録",
    description: "あるこは、位置情報ゲーム好き同士が友達を見つけられるサービスです。友だち追加で事前登録、無料・いつでも解除OK。",
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

