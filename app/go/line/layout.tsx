import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '公式LINEへ移動中 | あるこ',
  robots: { index: false, follow: false },
};

export default function GoLineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
