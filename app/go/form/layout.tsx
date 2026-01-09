import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "REAL - 写真詐欺のない誠実な出会い | 事前登録",
  description: "写真詐欺に疲れた方へ。REALは、疑う前提を減らす設計で、誠実な出会いを目指すマッチングアプリです。事前登録は無料、30秒で完了します。",
  openGraph: {
    title: "REAL - 写真詐欺のない誠実な出会い | 事前登録",
    description: "写真詐欺に疲れた方へ。REALは、疑う前提を減らす設計で、誠実な出会いを目指すマッチングアプリです。事前登録は無料、30秒で完了します。",
    type: "website",
    url: "https://real-lp.vercel.app/go/form",
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
    title: "REAL - 写真詐欺のない誠実な出会い | 事前登録",
    description: "写真詐欺に疲れた方へ。REALは、疑う前提を減らす設計で、誠実な出会いを目指すマッチングアプリです。事前登録は無料、30秒で完了します。",
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

