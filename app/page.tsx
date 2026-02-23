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
  'Jurassic World Alive',
  'Orna',
  'その他（検索で追加可能）',
];

function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function CTAButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-base font-bold text-white shadow-lg transition-all bg-gradient-to-r from-emerald-500 via-green-500 to-cyan-500 hover:from-emerald-600 hover:via-green-600 hover:to-cyan-600 ${className}`}
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
      className={`sticky top-0 z-50 border-b transition-all ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl border-emerald-100 shadow-sm' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/app-icon.png"
              alt="恋さんぽ"
              className="h-8 w-8 rounded-lg object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="hidden h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-sky-500 text-white text-sm font-bold">
              恋
            </div>
            <div>
              <p className="text-base font-extrabold text-slate-900">恋さんぽ</p>
              <p className="text-[11px] text-slate-500 -mt-0.5">位置情報ゲーム専用マッチングアプリ</p>
            </div>
          </div>
          <CTAButton className="px-4 py-2 text-sm">先行登録する</CTAButton>
        </div>
      </Container>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-cyan-50 to-white pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-xs font-bold text-emerald-700">
            位置情報ゲーム仲間と出会う、新しい恋活
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            好きなゲームでつながる、
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
              お散歩デートマッチング
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            恋さんぽは、Pokemon GO・モンハンNow・ドラクエウォークなどの
            位置情報ゲーム好きに特化したマッチングアプリです。ゲームの好みで絞り込み、距離順で探し、
            「何時からどこでレイドする？」まで自然につながります。
          </p>

          <div className="mb-5 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
            <span className="rounded-full bg-white px-3 py-1.5 font-semibold text-slate-700 shadow-sm border border-slate-200">ゲーム複数選択プロフィール</span>
            <span className="rounded-full bg-white px-3 py-1.5 font-semibold text-slate-700 shadow-sm border border-slate-200">距離順検索</span>
            <span className="rounded-full bg-white px-3 py-1.5 font-semibold text-slate-700 shadow-sm border border-slate-200">お散歩募集機能</span>
            <span className="rounded-full bg-white px-3 py-1.5 font-semibold text-slate-700 shadow-sm border border-slate-200">LINE通知連携</span>
          </div>

          <CTAButton className="mb-3">無料で先行登録する</CTAButton>
          <p className="text-xs text-slate-500">登録無料 / メールだけ / リリース時に優先案内</p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl rounded-3xl border border-emerald-100 bg-white/90 p-4 shadow-xl sm:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/60 p-6 text-center">
              <p className="mb-2 text-sm font-bold text-emerald-700">アプリ画面スクリーンショット枠 1</p>
              <p className="text-xs text-slate-600">プロフィール登録（好きな位置情報ゲーム選択）画面をここに配置</p>
            </div>
            <div className="rounded-2xl border-2 border-dashed border-sky-200 bg-sky-50/60 p-6 text-center">
              <p className="mb-2 text-sm font-bold text-sky-700">アプリ画面スクリーンショット枠 2</p>
              <p className="text-xs text-slate-600">フィード一覧 + お散歩募集カード画面をここに配置</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WhyKoisanpoSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">恋さんぽが選ばれる理由</h2>
          <p className="text-slate-600">一般的な恋活アプリでは出しづらい「一緒に遊ぶ目的」が最初から揃っています。</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-slate-900">一般的なマッチングアプリ</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>・趣味が広すぎて会話の導入が難しい</li>
              <li>・会う目的が曖昧で日程調整が進みにくい</li>
              <li>・距離より雰囲気重視で会いにくいことがある</li>
              <li>・「一緒に何する？」が毎回ゼロから</li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 via-cyan-50 to-white p-6">
            <div className="mb-3 inline-flex rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">恋さんぽ</div>
            <h3 className="mb-4 text-xl font-bold text-slate-900">位置情報ゲーム特化の恋活設計</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>・好きなゲームを1つ以上選んでマッチング</li>
              <li>・「何時からどこでレイドする？」募集を投稿可能</li>
              <li>・位置情報許可で距離順ソートに対応</li>
              <li>・共通行動があるので初回デートまで早い</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FlowSection() {
  return (
    <section className="bg-gradient-to-b from-white to-cyan-50/60 py-16 sm:py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">はじめ方は3ステップ</h2>
          <p className="text-slate-600">本体アプリの刷新内容に合わせた導線を、そのままLPで案内しています。</p>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-bold text-emerald-700">STEP 1</p>
            <h3 className="mb-2 text-xl font-bold text-slate-900">好きな位置情報ゲームを選択（複数可）</h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-700">
              新規登録後、最初に「あなたの好きな位置情報ゲームはなんですか？」に回答。検索しながら複数タイトルを選べます。
            </p>
            <div className="flex flex-wrap gap-2">
              {GAMES.map((game) => (
                <span key={game} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {game}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-bold text-sky-700">STEP 2</p>
            <h3 className="mb-2 text-xl font-bold text-slate-900">プロフィール入力 + 写真アップロード</h3>
            <p className="text-sm leading-relaxed text-slate-700">
              名前・生年月日などの基本情報/詳細情報を入力し、最後に通常のアップロード形式で写真登録。完了後は待機列へ案内されます。
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-bold text-blue-700">STEP 3</p>
            <h3 className="mb-2 text-xl font-bold text-slate-900">フィードから相手を探して、お散歩募集でつながる</h3>
            <p className="text-sm leading-relaxed text-slate-700">
              with風の見やすいリスト形式フィードに加え、「〇〇時から△△でレイドしませんか？」募集に対応。ゲーム予定ベースで自然に会話が始まります。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">恋さんぽの主要機能</h2>
          <p className="text-slate-600">位置情報ゲーム専用マッチングに必要な機能を、最短導線でまとめました。</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5">
            <h3 className="mb-2 font-bold text-slate-900">ゲーム軸プロフィール</h3>
            <p className="text-sm text-slate-700">好きな位置情報ゲームを複数設定。検索条件にもそのまま反映されます。</p>
          </article>
          <article className="rounded-2xl border border-sky-100 bg-sky-50/50 p-5">
            <h3 className="mb-2 font-bold text-slate-900">ゲーム別絞り込み検索</h3>
            <p className="text-sm text-slate-700">同じタイトルを遊ぶ相手を優先表示。会話の出だしで迷いません。</p>
          </article>
          <article className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
            <h3 className="mb-2 font-bold text-slate-900">距離順ソート</h3>
            <p className="text-sm text-slate-700">位置情報許可ユーザーは、現在地ベースで近い順に表示して探しやすく。</p>
          </article>
          <article className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5">
            <h3 className="mb-2 font-bold text-slate-900">お散歩デート募集</h3>
            <p className="text-sm text-slate-700">「〇時〜〇〇で一緒にプレイしよう」を募集投稿できる専用導線。</p>
          </article>
          <article className="rounded-2xl border border-sky-100 bg-sky-50/50 p-5">
            <h3 className="mb-2 font-bold text-slate-900">待機列 + 公式LINE通知</h3>
            <p className="text-sm text-slate-700">リリース情報を受け取れるLINE導線を待機列に設置しています。</p>
          </article>
          <article className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
            <h3 className="mb-2 font-bold text-slate-900">PWA対応</h3>
            <p className="text-sm text-slate-700">ホーム画面に追加して、アプリ感覚で素早くアクセスできます。</p>
          </article>
        </div>
      </Container>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: '本当に位置情報ゲーム向けなんですか？',
      a: 'はい。プロフィール、検索、募集機能までゲーム起点で使えるように設計しています。',
    },
    {
      q: 'どのゲームに対応していますか？',
      a: 'Pokemon GO / モンハンNow / ドラクエウォークなどを初期対応し、順次拡張予定です。',
    },
    {
      q: '距離順表示は必須ですか？',
      a: '必須ではありません。位置情報を許可した場合のみ、距離ベースの絞り込みが有効になります。',
    },
    {
      q: '待機列では何ができますか？',
      a: '先行案内の受け取り、公式LINE追加、今後のアップデート情報の受け取りができます。',
    },
    {
      q: '問い合わせ先はありますか？',
      a: 'あります。サポートページからメールでお問い合わせいただけます。',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-cyan-50/60 to-white py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <article key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="mb-2 font-bold text-slate-900">Q. {faq.q}</h3>
                <p className="text-sm leading-relaxed text-slate-700">A. {faq.a}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton>先行登録してリリース通知を受け取る</CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-slate-300">
      <Container>
        <div className="text-center">
          <p className="text-xl font-bold text-white">恋さんぽ</p>
          <p className="mt-1 text-sm text-slate-400">位置情報ゲーム専用マッチングアプリ</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href="/support" className="underline hover:text-white">サポート</a>
            <span className="text-slate-600">|</span>
            <a href="/privacy" className="underline hover:text-white">プライバシーポリシー</a>
            <span className="text-slate-600">|</span>
            <a href="/terms" className="underline hover:text-white">利用規約</a>
            <span className="text-slate-600">|</span>
            <a href="/company" className="underline hover:text-white">運営者情報</a>
            <span className="text-slate-600">|</span>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">公式LINE</a>
          </div>

          <p className="mt-6 text-xs text-slate-500">※ 18歳以上の方のみご利用いただけます</p>
          <p className="mt-2 text-xs text-slate-500">© 2026 Koisanpo. All rights reserved.</p>
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
        <WhyKoisanpoSection />
        <FlowSection />
        <FeatureSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
