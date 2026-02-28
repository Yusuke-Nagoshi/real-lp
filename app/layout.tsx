import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://real-lp.vercel.app'),
  title: "あるこ - 歩く系ゲーム仲間が見つかるアプリ",
  description: "あるこは、本人確認済みの安心できる友達探しアプリ。位置情報ゲーム好き同士が友達を見つけられます。男女ともに基本無料、事前登録も無料。",
  openGraph: {
    title: "あるこ - 歩く系ゲーム仲間が見つかるアプリ",
    description: "位置情報ゲーム好きの友達探し。ゲームでつながって、街を歩きながら一緒にプレイできる仲間を見つけよう。",
    type: "website",
    images: [
      {
        url: '/og-image.png?v=2',
        width: 1200,
        height: 630,
        alt: 'あるこ - 歩く系ゲーム仲間が見つかるアプリ',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "あるこ - 歩く系ゲーム仲間が見つかるアプリ",
    description: "位置情報ゲーム好きの友達探し。好きなゲームと距離で仲間を探せる。",
    images: ['/og-image.png?v=2'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
