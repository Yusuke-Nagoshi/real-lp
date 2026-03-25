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
  title: "あるこ - 位置ゲー専用仲間探しアプリ",
  description: "あるこは、レイド募集や交換募集で位置ゲーを一緒に周れる相手を見つけやすくするサービスです。まずは気軽に合流して、気が合えばまた一緒に遊べます。",
  openGraph: {
    title: "あるこ - 位置ゲー専用仲間探しアプリ",
    description: "レイド募集や交換募集で、今ちょっと一緒に周れる相手を見つけやすくするサービス。",
    type: "website",
    images: [
      {
        url: '/og-image.png?v=2',
        width: 1200,
        height: 630,
        alt: 'あるこ - 位置ゲー専用仲間探しアプリ',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "あるこ - 位置ゲー専用仲間探しアプリ",
    description: "レイド募集や交換募集で、今ちょっと一緒に周れる相手を見つけやすくするサービス。",
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
