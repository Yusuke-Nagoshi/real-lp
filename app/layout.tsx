import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "REAL - 写真詐欺のない誠実な出会い",
  description: "写真詐欺に疲れた方へ。REALは、疑う前提を減らす設計で、誠実な出会いを目指すマッチングアプリです。待機リストにご登録ください。",
  openGraph: {
    title: "REAL - 写真詐欺のない誠実な出会い",
    description: "写真詐欺に疲れた方へ。REALは、疑う前提を減らす設計で、誠実な出会いを目指すマッチングアプリです。",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "REAL - 写真詐欺のない誠実な出会い",
    description: "写真詐欺に疲れた方へ。REALは、疑う前提を減らす設計で、誠実な出会いを目指すマッチングアプリです。",
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
      </body>
    </html>
  );
}
