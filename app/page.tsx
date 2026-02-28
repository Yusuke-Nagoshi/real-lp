'use client';

import { useEffect, useState } from 'react';

const FORM_URL = 'https://lin.ee/Jec31vm';
const LINE_URL = 'https://lin.ee/Jec31vm';

const GAMES: { name: string; icon: string }[] = [
  { name: 'Pokemon GO', icon: '⚡' },
  { name: 'モンスターハンターNow', icon: '⚔️' },
  { name: 'ドラゴンクエストウォーク', icon: '🐉' },
  { name: '信長の野望 出陣', icon: '🏯' },
  { name: 'ピクミン ブルーム', icon: '🌸' },
  { name: 'Ingress', icon: '🔮' },
];

const RECOMMEND_LIST = [
  'レイドなどの孤独な闘いに、ちょっと寂しさを覚えることがある人へ',
  '近くに同じゲームをやってる人がいるか分からず、仲間を探しづらい人へ',
  'レイドやコミュニティデイを「誰かと一緒にやりたい」と思っている人へ',
  '1人でウォーク系ゲームを歩くのが、少し寂しいと感じる人へ',
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
              alt="あるこ"
              className="h-9 w-9 rounded-xl object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white text-sm font-bold">
              あ
            </div>
            <div>
              <span className="text-lg font-bold text-slate-900">あるこ</span>
              <p className="text-[11px] text-slate-500 -mt-0.5 hidden sm:block">一緒に歩いて遊べるゲーム仲間が見つかるアプリ</p>
            </div>
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
      {/* キャッチコピー入りヒーロー画像を最上部にどんと表示（PCでは小さめ） */}
      <div className="relative w-full md:mx-auto md:max-w-xl md:px-4 lg:max-w-2xl lg:px-6">
        <img
          src="/hero-catchphrase.png"
          alt="どんな場面でも一緒にゲームを楽しめる出会いを"
          className="block h-auto w-full"
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
            あるこで、そんな機会をぜひ提供させてください！！
          </p>
          <p className="mx-auto mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
            <span className="font-medium text-slate-900">あるこ</span>
            は、
            <span className="font-semibold text-emerald-600">Pokemon GO</span>
            、
            <span className="font-semibold text-emerald-600">モンハンNow</span>
            、
            <span className="font-semibold text-emerald-600">ドラゴンクエストウォーク</span>
            などの位置情報ゲームが好きな人同士が
            <br className="hidden sm:block" />
            <span className="font-semibold text-slate-900">友達を見つけられる</span>
            サービスです。
            <br />
            <span className="text-slate-600">事前登録は下の公式LINE追加から可能です！</span>
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
        {/* 見出し：画像より上側 */}
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          こんなお悩み、ありませんか？
        </h2>
        {/* 画像：横幅に合わせて表示（縦伸ばしなし） */}
        <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl">
          <img
            src="/recommend-bg.png"
            alt=""
            className="block w-full h-auto object-contain"
          />
        </div>
        {/* 悩みのボックス：画像より下側 */}
        <div className="mx-auto mt-10 max-w-2xl">
          <ul className="space-y-3 sm:space-y-4">
            {RECOMMEND_LIST.map((text, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl bg-slate-50 px-5 py-4 text-left shadow-sm border border-slate-100"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-slate-700 sm:text-base">{text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <CTAButton>公式LINEで友だち追加（無料）</CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

function GamesSection() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <Container>
        <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          こんなゲームをきっかけに繋がれます
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {GAMES.map((game) => (
            <div
              key={game.name}
              className="flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5 hover:border-emerald-200 hover:bg-emerald-50/50 transition-colors"
            >
              <div className="mb-3 flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 text-2xl sm:text-3xl">
                {game.icon}
              </div>
              <p className="text-center text-sm font-semibold text-slate-800 sm:text-base">{game.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-base font-bold text-slate-700 sm:text-lg">
          他にも様々なウォーク系アプリでご利用いただけます！！
        </p>
      </Container>
    </section>
  );
}

function EarlyUserSection() {
  const benefits = [
    { label: 'リリース優先案内', desc: '先行登録者にいち早くお知らせ' },
    { label: '友だち追加', desc: '無料・いつでも解除OK' },
  ];

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-14 sm:py-16 md:py-20 border-y border-emerald-100">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-center">
            <span className="inline-block rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-bold text-white">
              現在募集中
            </span>
          </p>
          <h2 className="mb-6 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            初期ユーザー事前登録受付中
          </h2>

          {/* 300いいね特典：大々的に強調 */}
          <div className="mb-10 rounded-3xl border-2 border-emerald-400 bg-gradient-to-br from-emerald-500 to-teal-500 px-6 py-8 shadow-xl sm:px-10 sm:py-10">
            <p className="mb-2 text-center text-sm font-bold text-emerald-100 sm:text-base">
              事前登録をしてくれた方だけの特別な特典として
            </p>
            <p className="text-center text-4xl font-extrabold text-white drop-shadow-md sm:text-5xl md:text-6xl">
              300いいね
            </p>
            <p className="mt-2 text-center text-2xl font-bold text-white sm:text-3xl">
              が無料で配布！！
            </p>
          </div>

          <p className="mb-8 text-center text-slate-600 leading-relaxed">
            サービスリリース時に優先的にご案内します。友だち追加は無料、いつでも解除OKです。
          </p>

          {/* その他メリット */}
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b.label}
                className="rounded-2xl bg-white px-5 py-6 text-center shadow-sm border border-emerald-100"
              >
                <p className="text-xl font-bold text-emerald-600 sm:text-2xl">{b.label}</p>
                <p className="mt-1 text-sm text-slate-600">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* 料金体系 */}
          <div className="mb-10 rounded-2xl bg-white p-6 shadow-sm border border-emerald-100">
            <h3 className="mb-4 text-lg font-bold text-slate-900">料金体系</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>基本無料</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>ログインで1日1いいね配布</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>10いいね 500円で購入可能</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <CTAButton>公式LINEで友だち追加（無料）</CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: 'どのゲームに対応していますか？', a: 'Pokemon GO、モンハンNow、ドラゴンクエストウォークなどを想定しています。順次対応タイトルを増やしていきます。' },
    { q: '本当に無料ですか？', a: '基本無料で利用できます。ログインで1日1いいねがもらえます。追加で10いいね500円の購入も可能です。' },
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
          <p className="text-lg font-bold text-white">あるこ</p>
          <p className="mt-1 text-sm text-slate-400">一緒に歩いて遊べるゲーム仲間が見つかるアプリ</p>
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
          <p className="mt-2 text-xs text-slate-500">© 2026 あるこ</p>
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
        <GamesSection />
        <EarlyUserSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
