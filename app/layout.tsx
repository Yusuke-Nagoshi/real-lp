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
  title: "恋さんぽ - 位置情報ゲーム専用マッチングアプリ",
  description: "恋さんぽは、位置情報ゲーム好きのためのマッチングアプリです。好きなゲーム・距離で探して、お散歩デート募集で自然につながる恋活を。",
  openGraph: {
    title: "恋さんぽ - 位置情報ゲーム専用マッチングアプリ",
    description: "位置情報ゲーム好きとつながる恋活。ゲームで出会って、街を歩きながら自然に距離が縮まる。",
    type: "website",
    images: [
      {
        url: '/og-image.png?v=2',
        width: 1200,
        height: 630,
        alt: '恋さんぽ - 位置情報ゲーム専用マッチングアプリ',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "恋さんぽ - 位置情報ゲーム専用マッチングアプリ",
    description: "位置情報ゲーム好きとつながる恋活。好きなゲームと距離で相手を探せる。",
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
