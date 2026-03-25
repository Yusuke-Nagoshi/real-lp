'use client';

import { useEffect, useState } from 'react';

import { lineCtaHref } from '@/lib/line';

const GAMES: { name: string; icon: string }[] = [
  { name: 'Pokemon GO', icon: '⚡' },
  { name: 'モンスターハンターNow', icon: '⚔️' },
  { name: 'ドラゴンクエストウォーク', icon: '🐉' },
  { name: '信長の野望 出陣', icon: '🏯' },
  { name: 'ピクミン ブルーム', icon: '🌸' },
  { name: 'Ingress', icon: '🔮' },
];

const RECOMMEND_LIST = [
  'あと1人いれば倒せるレイドなのに、周りに人が足りない',
  'イベント中だけでもいいから、軽く一緒に周れる人がほしい',
  '同じモンスター同士で交換したいのに、ちょうどいい相手が見つからない',
  'ネットで知り合った素性の分からない人と会うのは不安',
];

const RECRUIT_CASES = [
  {
    title: '交換募集',
    text: '欲しいモンスターや交換したい内容が決まっている時も、条件を絞って募集。目的が一致する相手だけ見つけやすくなります。',
  },
  {
    title: 'レイド・イベント募集',
    text: '「今ちょっと周りたい」だけでなく、「今週末に誰かとレイド周回したい」みたいな予定ベースの募集にも使えます。',
  },
];

const FLOW_STEPS = [
  {
    title: '募集を出す・探す',
    text: '「今このレイドに行きたい」だけでなく、「今週末にレイド周回したい」もOK。募集だけでなく、一覧から気になる相手に直接依頼することも可能です。',
  },
  {
    title: '相手のプロフィールを確認',
    text: '合流前にプロフィールを見て雰囲気を確認。メッセージ開始には本人確認が必要です。',
  },
  {
    title: 'まずは軽く一緒に周る',
    text: 'その場だけの合流でもOK。何度か周って気が合えば、そのまま友達になることもできます。',
  },
];

function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function useLineLinkTarget() {
  const [target, setTarget] = useState<'_self' | '_blank'>('_blank');
  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth <= 768;
    setTarget(isMobile ? '_self' : '_blank');
  }, []);
  return target;
}

function CTAButton({
  children,
  className = '',
  placement,
}: {
  children: React.ReactNode;
  className?: string;
  placement: string;
}) {
  const lineTarget = useLineLinkTarget();
  return (
    <a
      href={lineCtaHref(placement)}
      target={lineTarget}
      rel={lineTarget === '_blank' ? 'noopener noreferrer' : 'noopener'}
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
              <p className="text-[11px] text-slate-500 -mt-0.5 hidden sm:block">位置ゲー専用仲間探しアプリ</p>
            </div>
          </div>
          <CTAButton className="px-5 py-2.5 text-sm" placement="header">
            友だち追加で事前登録
          </CTAButton>
        </div>
      </Container>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="relative w-full md:mx-auto md:max-w-xl md:px-4 lg:max-w-2xl lg:px-6">
        <img
          src="/hero-catchphrase-v2.png"
          alt="どんな場面でも一緒にゲームを楽しめる出会いを"
          className="block h-auto w-full"
        />
      </div>
      <Container className="relative z-10 pt-6 pb-10 sm:pt-8 sm:pb-12 md:pt-10 md:pb-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xl font-bold leading-relaxed text-slate-900 sm:text-2xl md:text-4xl">
            「1人だと物足りない」
            <br className="sm:hidden" />
            「人手が必要」
            <br />
            <span className="text-emerald-600">そんな時に、気軽に募集して一緒に周れる。</span>
          </p>
          <p className="mx-auto mb-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            レイド、交換、イベント周回。
            <br />
            「今ちょっと誰かと周りたい」から
            <br className="sm:hidden" />
            「今週末に誰かとレイド周回したい」まで、
            <br />
            目的に合う相手を見つけやすくするためのサービスです。
          </p>
          <div className="mx-auto mb-6 max-w-2xl rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 text-left shadow-sm">
            <p className="text-base font-bold text-slate-900 sm:text-lg">
              まずは軽く一緒に周る。
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
              あるこは、位置ゲー好き同士が
              <span className="font-semibold text-emerald-700">目的の合う募集</span>
              でつながれるサービスです。
              いきなり「友達作り」を頑張らなくても大丈夫。まずはフラッと合流して、気が合えばまた一緒に遊べます。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              合流前にプロフィールを見られて、
              <span className="font-semibold text-emerald-700">メッセージ開始には本人確認が必要</span>
              だから、ネット経由で会うのが少し不安な人にも使いやすくしています。
            </p>
          </div>
          <div className="mb-4">
            <CTAButton placement="hero">友だち追加で事前登録</CTAButton>
          </div>
          <p className="text-sm font-medium text-slate-600">いつでも解除OK</p>
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
          こんな時に、あるこが便利です
        </h2>
        <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl">
          <img src="/recommend-bg.png" alt="" className="block h-auto w-full object-contain" />
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <ul className="space-y-3 sm:space-y-4">
            {RECOMMEND_LIST.map((text, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white px-5 py-4 text-left shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-slate-700 sm:text-base">{text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            「ガチの友達探し」よりも、
            <span className="font-semibold text-slate-900">今この場で一緒に周れる人</span>
            や
            <span className="font-semibold text-slate-900">今週末に一緒に周る相手</span>
            を見つけたい時に使いやすい設計です。
          </p>
          <div className="mt-10 text-center">
            <CTAButton placement="recommend">友だち追加で事前登録</CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

function RecruitFeatureSection() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            募集機能で、
            <br />
            目的が合う相手を見つけやすい
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            レイドを周りたい、交換したい、イベントを一緒に回りたい。
            <br className="hidden sm:block" />
            今すぐでも週末予定でも、その時の目的に合わせて募集できるから、話が早くて合流しやすくなります。
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
          {RECRUIT_CASES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <p className="text-lg font-bold text-slate-900">{item.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function GamesSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16 md:py-20">
      <Container>
        <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          こんな位置ゲーで募集できます
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {GAMES.map((game) => (
            <div
              key={game.name}
              className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-emerald-200 hover:bg-emerald-50/50 sm:p-5"
            >
              <div className="mb-3 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 text-2xl sm:h-16 sm:w-16 sm:text-3xl">
                {game.icon}
              </div>
              <p className="text-center text-sm font-semibold text-slate-800 sm:text-base">{game.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-base font-bold text-slate-700 sm:text-lg">
          他にも様々な位置ゲーアプリでご利用いただけます！！
        </p>
      </Container>
    </section>
  );
}

function FlowSection() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            気軽に使える流れ
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            目的が合う人を見つけて、まずは軽く一緒に周る。
            <br className="hidden sm:block" />
            テキスト量は多くならないよう、必要な流れだけをシンプルにしています。
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {FLOW_STEPS.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
              <p className="text-sm font-bold text-emerald-700">STEP {index + 1}</p>
              <p className="mt-2 text-lg font-bold text-slate-900">{step.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function EarlyUserSection() {
  return (
    <section className="border-y border-emerald-100 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-14 sm:py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            初期ユーザー受付中！
          </h2>
          <p className="mb-8 text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            リリース時に優先的にご案内します。
            <br className="hidden sm:block" />
            レイド募集・交換募集・気軽な合流を、早めに使い始めたい方は今のうちにどうぞ。
          </p>

          <div className="relative mb-10 overflow-hidden rounded-3xl border-4 border-amber-400 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 px-6 py-10 shadow-2xl ring-4 ring-amber-200/50 sm:px-12 sm:py-12">
            <div className="mb-6 rounded-2xl bg-red-600 px-4 py-5 text-center shadow-xl ring-4 ring-white/40">
              <p className="text-2xl font-black tracking-tight text-white drop-shadow-md sm:text-3xl md:text-4xl">
                先着500名様限定！！
              </p>
              <p className="mt-1 text-sm font-bold text-amber-100 sm:text-base">
                枠が埋まり次第終了
              </p>
            </div>
            <p className="mb-3 text-center text-base font-extrabold text-amber-100 sm:text-lg">
              ★ 事前登録いただいた方だけの特別特典 ★
            </p>
            <p className="text-center text-5xl font-black text-white drop-shadow-lg sm:text-6xl md:text-7xl">
              1000いいね
            </p>
            <p className="mt-3 text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              をプレゼント！！
            </p>
            <p className="mt-6 text-center text-lg font-bold text-amber-50">
              事前登録の
              <span className="text-yellow-300 underline decoration-4 decoration-yellow-300 underline-offset-2">
                先着500名様
              </span>
              に、リリース後1000いいねを無料でお届け
            </p>
          </div>

          <div className="mb-10 rounded-2xl border-2 border-emerald-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-slate-900">料金体系</h3>
            <div className="mb-4 rounded-xl bg-emerald-50 px-4 py-3 text-center">
              <p className="text-xl font-bold text-emerald-700">男女ともに基本無料・事前登録も無料</p>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-600">✓</span>
                <span>
                  <strong className="text-slate-900">男女ともに基本無料</strong>
                  で利用できます
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-600">✓</span>
                <span>ログインで1日1いいね配布</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-600">✓</span>
                <span>10いいね 500円で購入可能</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <CTAButton placement="early_user">友だち追加で事前登録</CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: 'どういう使い方を想定していますか？',
      a: 'レイドをあと1人だけ集めたい時、交換相手を探したい時、イベント中に軽く一緒に周れる人を見つけたい時などを想定しています。まずはその場の目的でつながり、気が合えばまた一緒に遊べるサービスです。',
    },
    {
      q: 'ネットで知り合った相手と会うのが少し不安です。',
      a: '合流前に相手のプロフィールを確認できます。また、メッセージを開始するには本人確認が必要なので、素性が分からないままやり取りが始まる形を避けやすくしています。',
    },
    {
      q: '本当に無料ですか？',
      a: 'はい。男女ともに基本無料で、事前登録も無料です。アプリはログインで1日1いいねがもらえ、追加で10いいね500円の購入も可能です。',
    },
    {
      q: '問い合わせ先はありますか？',
      a: 'サポートページからメールでお問い合わせいただけます。',
    },
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
          <CTAButton placement="faq">友だち追加で事前登録</CTAButton>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const lineTarget = useLineLinkTarget();
  return (
    <footer className="bg-slate-800 py-10 text-slate-300">
      <Container>
        <div className="text-center">
          <p className="text-lg font-bold text-white">あるこ</p>
          <p className="mt-1 text-sm text-slate-400">位置ゲー専用仲間探しアプリ</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href="/support" className="underline hover:text-white">サポート</a>
            <span className="text-slate-500">|</span>
            <a href="/privacy" className="underline hover:text-white">プライバシーポリシー</a>
            <span className="text-slate-500">|</span>
            <a href="/terms" className="underline hover:text-white">利用規約</a>
            <span className="text-slate-500">|</span>
            <a href="/company" className="underline hover:text-white">運営者情報</a>
            <span className="text-slate-500">|</span>
            <a
              href={lineCtaHref('footer')}
              target={lineTarget}
              rel={lineTarget === '_blank' ? 'noopener noreferrer' : 'noopener'}
              className="underline hover:text-white"
            >
              公式LINE
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            ※18歳以上の方のみご利用いただけます。メッセージを開始するには本人確認が必要です。
          </p>
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
        <RecruitFeatureSection />
        <GamesSection />
        <FlowSection />
        <EarlyUserSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
