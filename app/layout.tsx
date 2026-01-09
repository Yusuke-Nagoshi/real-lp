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
  title: "REAL - 写真詐欺のない誠実な出会い",
  description: "写真詐欺に疲れた方へ。REALは、疑う前提を減らす設計で、誠実な出会いを目指すマッチングアプリです。待機リストにご登録ください。",
  openGraph: {
    title: "REAL - 写真詐欺のない誠実な出会い",
    description: "写真詐欺に疲れた方へ。REALは、疑う前提を減らす設計で、誠実な出会いを目指すマッチングアプリです。",
    type: "website",
    images: [
      {
        url: '/og-image.png?v=2',
        width: 1200,
        height: 630,
        alt: 'REAL - 写真詐欺のない誠実な出会い',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REAL - 写真詐欺のない誠実な出会い",
    description: "写真詐欺に疲れた方へ。REALは、疑う前提を減らす設計で、誠実な出会いを目指すマッチングアプリです。",
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
