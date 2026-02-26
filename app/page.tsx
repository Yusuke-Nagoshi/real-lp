'use client';

import { useEffect, useState } from 'react';

const FORM_URL = 'https://lin.ee/Jec31vm';
const LINE_URL = 'https://lin.ee/Jec31vm';

const GAMES = [
  'Pokemon GO',
  'モンスターハンターNow',
  'ドラゴンクエストウォーク',
  '信長の野望 出陣',
  'ピクミン ブルーム',
  'Ingress',
  'その他',
];

const RECOMMEND_LIST = [
  'レイドなどの孤独な闘いに、ちょっと寂しさを覚えることがある人へ',
  '近くに同じゲームをやってる人がいるか分からず、仲間を探しづらい人へ',
  'レイドやコミュニティデイを「誰かと一緒にやりたい」と思っている人へ',
  'ゲームの話が通じる相手と、出会いたい人へ',
  '休日のお出かけ先を「ポケストップ巡り」「レイド」で決めたい人へ',
  '1人でウォーク系ゲームを歩くのが、少し寂しいと感じる人へ',
  '同じゲームをやってる人と自然に会話したい・恋愛に発展させたい人へ',
  'レイドに参加したいけど知り合いがおらず、行きづらい人へ',
  '旅先や新しい街でも、一緒にプレイできる相手が欲しい人へ',
];

function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function CTAButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold text-white shadow-lg transition-all bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 ${className}`}
    >
      {children}
    </a>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? 'bg-white/98 shadow-sm border-b border-slate-100' : 'bg-white/95'
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/app-icon.png"
              alt="恋さんぽ"
              className="h-9 w-9 rounded-xl object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white text-sm font-bold">
              恋
            </div>
            <span className="text-lg font-bold text-slate-900">恋さんぽ</span>
          </div>
          <CTAButton className="px-5 py-2.5 text-sm">友だち追加で先行登録</CTAButton>
        </div>
      </Container>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-white">
      {/* キャッチコピー入りヒーロー画像を最上部にどんと表示 */}
      <div className="relative w-full md:max-w-5xl md:mx-auto md:px-4 lg:px-6">
        <img
          src="/hero-catchphrase.png"
          alt="どんな場面でも一緒にゲームを楽しめる出会いを"
          className="w-full h-auto block"
        />
      </div>
      <Container className="relative z-10 pt-6 pb-10 sm:pt-8 sm:pb-12 md:pt-10 md:pb-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xl font-bold leading-relaxed text-slate-900 sm:text-2xl md:text-3xl">
            「またスマホ？」を、
            <br />
            <span className="text-emerald-600">「次どこ周る？」</span>
            に変える出会い。
          </p>
          <p className="mb-3 text-base leading-relaxed text-slate-600 sm:text-lg">
            旅先や休日の過ごし方が共通点になる。
          </p>
          <p className="mb-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            １人でのイベントやレイドの寂しい時間とおさらば。
          </p>
          <p className="mb-8 text-lg font-bold text-emerald-600 sm:text-xl">
            恋さんぽで、そんな機会をぜひ提供させてください！！
          </p>
          <p className="mx-auto mb-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            Pokemon GO、モンハンNow、ドラゴンクエストウォークなど、位置情報ゲームが好きな人同士が出会えるマッチングアプリです。
            同じゲームで絞り込んで、レイドやお散歩デートの募集から、自然につながれます。
          </p>
          <div className="mb-4">
            <CTAButton>公式LINEで友だち追加（無料）</CTAButton>
          </div>
          <p className="text-sm text-slate-500">登録無料・いつでも解除OK</p>
        </div>
      </Container>
    </section>
  );
}

function RecommendSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16 md:py-20">
      <Container>
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          こんな方におすすめ
        </h2>
        <ul className="mx-auto grid max-w-2xl gap-3 sm:gap-4">
          {RECOMMEND_LIST.map((text, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl bg-white px-5 py-4 text-left text-slate-700 shadow-sm border border-slate-100"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed sm:text-base">{text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <CTAButton>公式LINEで友だち追加（無料）</CTAButton>
        </div>
      </Container>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <Container>
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          恋さんぽについて
        </h2>
        <p className="mx-auto max-w-2xl text-center text-slate-600 leading-relaxed">
          位置情報ゲーム専用のマッチングアプリです。好きなゲームを複数選んでプロフィールに設定し、
          ゲーム別・距離順で検索。お散歩デート募集で「〇時から〇〇でレイドしませんか？」と気軽に誘いやすく、
          旅先や休日も含めて、どんな場面でも一緒にゲームを楽しめる相手と出会えます。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {GAMES.map((game) => (
            <span
              key={game}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
            >
              {game}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FlowSection() {
  const steps = [
    { num: '01', title: '好きな位置情報ゲームを選択', desc: 'プロフィールで複数選択可能。同じゲーム好きとマッチしやすくします。' },
    { num: '02', title: 'プロフィール・写真を登録', desc: '名前や生年月日、写真を登録してプロフィールを完成させます。' },
    { num: '03', title: '相手を探して、お散歩募集でつながる', desc: 'フィードで相手を探し、「〇時から〇〇でレイド」など募集で自然に会話をスタート。' },
  ];

  return (
    <section className="bg-slate-50 py-14 sm:py-16 md:py-20">
      <Container>
        <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          利用の流れ
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100"
            >
              <p className="mb-3 text-2xl font-bold text-emerald-600">{step.num}</p>
              <h3 className="mb-2 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton>公式LINEで友だち追加（無料）</CTAButton>
        </div>
      </Container>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: 'どのゲームに対応していますか？', a: 'Pokemon GO、モンハンNow、ドラゴンクエストウォークなどを想定しています。順次対応タイトルを増やしていきます。' },
    { q: '本当に無料ですか？', a: '友だち追加・先行登録は無料です。リリース後の利用料金はアプリ内でご案内します。' },
    { q: '問い合わせ先はありますか？', a: 'サポートページからメールでお問い合わせいただけます。' },
  ];

  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <Container>
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          よくある質問
        </h2>
        <div className="mx-auto max-w-2xl space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="mb-2 font-bold text-slate-900">Q. {faq.q}</h3>
              <p className="text-sm leading-relaxed text-slate-600">A. {faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton>公式LINEで友だち追加（無料）</CTAButton>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-800 py-10 text-slate-300">
      <Container>
        <div className="text-center">
          <p className="text-lg font-bold text-white">恋さんぽ</p>
          <p className="mt-1 text-sm text-slate-400">位置情報ゲーム専用マッチングアプリ</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href="/support" className="underline hover:text-white">サポート</a>
            <span className="text-slate-500">|</span>
            <a href="/privacy" className="underline hover:text-white">プライバシーポリシー</a>
            <span className="text-slate-500">|</span>
            <a href="/terms" className="underline hover:text-white">利用規約</a>
            <span className="text-slate-500">|</span>
            <a href="/company" className="underline hover:text-white">運営者情報</a>
            <span className="text-slate-500">|</span>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">公式LINE</a>
          </div>
          <p className="mt-6 text-xs text-slate-500">※18歳以上の方のみご利用いただけます</p>
          <p className="mt-2 text-xs text-slate-500">© 2026 恋さんぽ</p>
        </div>
      </Container>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <RecommendSection />
        <AboutSection />
        <FlowSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
