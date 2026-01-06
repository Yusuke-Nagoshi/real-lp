'use client';

import { useState, useEffect } from 'react';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSedmR_BbRrFlYi7mbY2W08RIJmimYWsq03BEgsuRS_JTrZn3Q/viewform?usp=dialog';

// コンポーネント: コンテナ
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

// コンポーネント: CTAボタン
function CTAButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-sky-500 to-sky-600 rounded-full hover:from-sky-600 hover:to-sky-700 transition-all shadow-xl shadow-sky-500/40 hover:shadow-2xl hover:scale-105 ${className}`}
    >
      {children}
    </a>
  );
}

// コンポーネント: ヘッダー
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-white'
    }`}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">
              Real
            </div>
          </div>
          <CTAButton className="text-sm px-6 py-3">
            事前登録
          </CTAButton>
        </div>
      </Container>
    </header>
  );
}

// コンポーネント: Heroセクション
function HeroSection() {
  return (
    <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-white to-sky-50/30">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-bold rounded-full mb-6">
            開発中
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
            写真詐欺、<span className="text-sky-600">ゼロ</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto font-medium">
            アプリ内カメラで撮影した写真だけが使える
            <br />
            マッチングアプリ
          </p>
          <CTAButton className="mb-8">
            事前登録する
          </CTAButton>
          
          {/* 料金表示 */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-slate-200">
            <span className="text-slate-600 text-sm">料金:</span>
            <span className="text-slate-900 font-bold">男性 ¥2,970/月</span>
            <span className="text-slate-400">|</span>
            <span className="text-sky-600 font-bold">女性 無料</span>
          </div>
        </div>

        {/* メインビジュアル: プロフィールと実物が同じ */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative">
            {/* 画像が存在する場合は表示、ない場合はプレースホルダー */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/profile-match-image.jpg" 
                alt="プロフィール写真と実際に会う人が同じ見た目"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // 画像が存在しない場合はプレースホルダーを表示
                  e.currentTarget.style.display = 'none';
                  const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full bg-gradient-to-br from-sky-100 to-blue-100 items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <p className="text-sky-600 font-bold text-lg">プロフィールと実物が同じ</p>
                  <p className="text-sky-500 text-sm mt-2">画像を配置: /public/profile-match-image.jpg</p>
                </div>
              </div>
            </div>
            {/* 説明テキスト */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg border-2 border-sky-200">
                <span className="text-2xl">✓</span>
                <span className="text-slate-900 font-bold">プロフィール写真と実際に会う人が同じ見た目</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Differenceセクション（通常のアプリとの違い）
function DifferenceSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            通常のアプリとの違い
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* 通常のアプリ */}
          <div className="bg-slate-50 p-8 rounded-2xl border-2 border-slate-200">
            <div className="text-center mb-6">
              <div className="text-3xl mb-3">❌</div>
              <h3 className="text-xl font-bold text-slate-900">通常のアプリ</h3>
            </div>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>アルバムから写真を選択できる</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>古い写真を使い回せる</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>写真詐欺のリスクがある</span>
              </li>
            </ul>
          </div>

          {/* REAL */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl border-2 border-sky-300 relative">
            <div className="absolute -top-3 -right-3 bg-sky-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              REAL
            </div>
            <div className="text-center mb-6">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-slate-900">REAL</h3>
            </div>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-sky-600 font-bold mt-1">✓</span>
                <span><strong>アプリ内カメラで撮影した写真のみ</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 font-bold mt-1">✓</span>
                <span>最新の写真が使われる</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 font-bold mt-1">✓</span>
                <span>写真詐欺のリスクを大幅に削減</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: How It Worksセクション（簡潔に）
function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-20 bg-sky-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            仕組み
          </h2>
          <p className="text-lg text-slate-600">
            REAL独自の設計で、写真詐欺を防ぎます
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* ステップ1: プロフィール一覧 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-slate-200">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  プロフィール一覧では写真にモヤがかかっている
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  プロフィール一覧を閲覧する際、本人写真には薄いモヤがかかっています。これにより、写真だけで判断せず、プロフィールやメッセージの内容で判断できます。
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-200 to-sky-300 border-4 border-white shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* ステップ2: マッチング */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-slate-200">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  マッチングする
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  プロフィールやメッセージの内容で判断してマッチングします。写真に頼らず、本当の相性で出会えます。
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="text-4xl">💬</div>
              </div>
            </div>
          </div>

          {/* ステップ3: 3往復のメッセージ */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-sky-300 relative">
            <div className="absolute -top-3 -right-3 bg-sky-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              重要
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  3往復のメッセージをやり取りすると顔写真が開示される
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  マッチング後、3往復（合計6通）のメッセージのやり取りを行うと、顔写真のモヤが解除され、クリアな写真が表示されます。会う前に、お互いの顔を確認できます。
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-200 to-sky-300 border-4 border-white shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 補足説明 */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-sky-600">この設計により、</strong>写真だけで判断せず、プロフィールやメッセージの内容で判断できるため、より深い出会いが生まれます。また、3往復のメッセージをやり取りすることで、お互いの顔を確認してから会うことができます。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Pricingセクション
function PricingSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 sm:p-12 rounded-3xl border-2 border-sky-200 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
              料金
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="text-slate-600 text-sm mb-2">男性</div>
                <div className="text-4xl font-extrabold text-slate-900 mb-1">
                  ¥2,970
                </div>
                <div className="text-slate-500 text-sm">/月</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-sky-300">
                <div className="text-slate-600 text-sm mb-2">女性</div>
                <div className="text-4xl font-extrabold text-sky-600 mb-1">
                  無料
                </div>
                <div className="text-slate-500 text-sm">ずっと</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: FAQセクション（簡潔に）
function FAQSection() {
  const faqs = [
    {
      question: "アプリ内カメラで撮影した写真だけしか使えない？",
      answer: "はい。アルバムや外部から写真を選択することはできません。アプリ内のカメラで撮影した写真のみ使用可能です。"
    },
    {
      question: "写真を後から変更できる？",
      answer: "可能です。ただし、変更時もアプリ内カメラで撮影した写真のみ使用できます。"
    },
    {
      question: "いつリリース？",
      answer: "5月ごろのリリースの予定です、事前登録者に優先的にご案内します。"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            よくある質問
          </h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-slate-200"
            >
              <h3 className="font-bold text-slate-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <CTAButton>
            事前登録する
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Footer
function Footer() {
  return (
    <footer className="py-12 bg-slate-900 text-slate-300">
      <Container>
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <div className="text-xl font-bold text-white">
              Real
            </div>
          </div>
          <div className="text-xs sm:text-sm space-y-2 max-w-2xl mx-auto leading-relaxed">
            <p>※ 開発中のため、仕様は変更される可能性があります</p>
            <p>※ 18歳以上の方のみご利用いただけます</p>
            <p>※ プロフィール写真はアプリ内カメラで撮影したもののみ使用可能です</p>
            <p className="pt-4 text-slate-400">© 2024 REAL. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// メインコンポーネント
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <DifferenceSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
