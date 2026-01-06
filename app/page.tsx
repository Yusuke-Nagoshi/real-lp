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
      className={`inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 rounded-full hover:from-indigo-700 hover:via-blue-700 hover:to-indigo-800 transition-all shadow-xl shadow-indigo-500/50 hover:shadow-2xl hover:scale-105 ${className}`}
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
      isScrolled ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-indigo-100/50' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img 
              src="/app-icon.png" 
              alt="REAL" 
              className="w-8 h-8 rounded-lg object-cover"
              onError={(e) => {
                // 画像が存在しない場合はフォールバック
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="hidden w-8 h-8 bg-gradient-to-br from-indigo-500 via-blue-500 to-indigo-600 rounded-lg items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
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
    <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-white via-indigo-50/40 to-blue-50/60 relative overflow-hidden">
      {/* 水彩画風の背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-indigo-100/80 text-indigo-700 text-sm font-bold rounded-full mb-6 backdrop-blur-sm border border-indigo-200/50">
            開発中
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
            写真詐欺、<span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">ゼロ</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 mb-8 max-w-2xl mx-auto font-medium">
            アプリ内カメラで撮影した写真だけが使える
            <br />
            マッチングアプリ
          </p>
          <CTAButton className="mb-8">
            事前登録する
          </CTAButton>
          
          {/* 料金表示 */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-indigo-100/50">
            <span className="text-slate-600 text-sm">料金:</span>
            <span className="text-slate-900 font-bold">男性 ¥2,970/月</span>
            <span className="text-slate-300">|</span>
            <span className="text-indigo-600 font-bold">女性 無料</span>
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
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-indigo-200/50">
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
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-indigo-50/30 relative overflow-hidden">
      {/* 水彩画風の背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-200/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            通常のアプリとの違い
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* 通常のアプリ */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-200/50 shadow-lg">
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
          <div className="bg-gradient-to-br from-indigo-50/80 via-blue-50/80 to-indigo-100/60 backdrop-blur-sm p-8 rounded-2xl border-2 border-indigo-300/50 relative shadow-lg">
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              REAL
            </div>
            <div className="text-center mb-6">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-slate-900">REAL</h3>
            </div>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold mt-1">✓</span>
                <span><strong>アプリ内カメラで撮影した写真のみ</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold mt-1">✓</span>
                <span>最新の写真が使われる</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold mt-1">✓</span>
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
    <section className="py-16 sm:py-20 bg-gradient-to-b from-indigo-50/40 via-blue-50/50 to-indigo-50/40 relative overflow-hidden">
      {/* 水彩画風の背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-indigo-200/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
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
          <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-indigo-100/50">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
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
                {/* モヤがかかったプロフィール画像 */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-200 to-blue-200 border-4 border-white shadow-lg relative overflow-hidden">
                    {/* 顔の簡易的な表現 */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl">😊</div>
                    </div>
                    {/* モヤのオーバーレイ */}
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-md animate-blur-in"></div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    モヤがかかっている
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ステップ2: マッチング */}
          <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-indigo-100/50">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
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
          <div className="bg-gradient-to-br from-indigo-50/90 via-blue-50/90 to-indigo-100/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-indigo-300/50 relative">
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              重要
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
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
                {/* クリアなプロフィール画像 */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-200 to-blue-200 border-4 border-white shadow-lg relative overflow-hidden">
                    {/* 顔の簡易的な表現 */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl animate-fade-in">😊</div>
                    </div>
                    {/* モヤが解除されるアニメーション */}
                    <div className="absolute inset-0 bg-white/0 backdrop-blur-0 animate-blur-out"></div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-md">
                    クリアに！
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 補足説明 */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-indigo-100/50">
            <p className="text-slate-700 leading-relaxed">
              <strong className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">この設計により、</strong>写真だけで判断せず、プロフィールやメッセージの内容で判断できるため、より深い出会いが生まれます。また、3往復のメッセージをやり取りすることで、お互いの顔を確認してから会うことができます。
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
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-indigo-50/30 relative overflow-hidden">
      {/* 水彩画風の背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-200/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-50/90 via-blue-50/90 to-indigo-100/70 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border-2 border-indigo-200/50 text-center shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
              料金
            </h2>
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-indigo-100/50">
                <div className="text-slate-600 text-sm mb-2">男性</div>
                <div className="text-4xl font-extrabold text-slate-900 mb-1">
                  ¥2,970
                </div>
                <div className="text-slate-500 text-sm">/月</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border-2 border-indigo-300/50">
                <div className="text-slate-600 text-sm mb-2">女性</div>
                <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-1">
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
    <section className="py-16 sm:py-20 bg-gradient-to-b from-indigo-50/40 to-white relative overflow-hidden">
      {/* 水彩画風の背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-200/15 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-200/15 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            よくある質問
          </h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-indigo-100/50"
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
    <footer className="py-12 bg-gradient-to-b from-indigo-900 via-indigo-800 to-slate-900 text-slate-300 relative overflow-hidden">
      {/* 水彩画風の背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="/app-icon.png" 
              alt="REAL" 
              className="w-8 h-8 rounded-lg object-cover"
              onError={(e) => {
                // 画像が存在しない場合はフォールバック
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="hidden w-8 h-8 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg items-center justify-center">
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
