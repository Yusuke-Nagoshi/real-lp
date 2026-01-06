'use client';

import { useState, useEffect } from 'react';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSedmR_BbRrFlYi7mbY2W08RIJmimYWsq03BEgsuRS_JTrZn3Q/viewform?usp=dialog';

// コンポーネント: コンテナ
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

// コンポーネント: CTAボタン
function CTAButton({ children, className = '', variant = 'primary' }: { children: React.ReactNode; className?: string; variant?: 'primary' | 'secondary' }) {
  if (variant === 'secondary') {
    return (
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center px-6 py-3 text-base font-medium text-sky-600 bg-white border-2 border-sky-600 rounded-2xl hover:bg-sky-50 transition-colors ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl hover:from-sky-600 hover:to-sky-700 transition-all shadow-xl shadow-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/40 ${className}`}
    >
      {children}
    </a>
  );
}

// コンポーネント: バッジ
function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-4 py-1.5 text-sm font-semibold text-sky-700 bg-sky-100 rounded-full ${className}`}>
      {children}
    </span>
  );
}

// コンポーネント: 画像プレースホルダー
function ImagePlaceholder({ 
  label, 
  aspectRatio = 'aspect-video',
  className = '' 
}: { 
  label: string; 
  aspectRatio?: string;
  className?: string;
}) {
  return (
    <div className={`${aspectRatio} bg-gradient-to-br from-sky-50 to-sky-100 rounded-3xl flex items-center justify-center border-2 border-dashed border-sky-300 ${className}`}>
      <p className="text-sky-500 text-sm font-medium text-center px-4">{label}</p>
    </div>
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
      isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">
              Real
            </div>
          </div>
          <nav className="flex items-center gap-4 sm:gap-6">
            <a
              href="#how-it-works"
              className="hidden sm:inline-block text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors"
            >
              仕組み
            </a>
            <a
              href="#faq"
              className="hidden sm:inline-block text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors"
            >
              FAQ
            </a>
            <CTAButton className="text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3">
              待機リストに登録
            </CTAButton>
          </nav>
        </div>
      </Container>
    </header>
  );
}

// コンポーネント: Heroセクション
function HeroSection() {
  return (
    <section className="pt-20 sm:pt-28 lg:pt-32 pb-20 sm:pb-28 lg:pb-32 bg-gradient-to-b from-sky-50 via-white to-white relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <Badge className="mb-6 text-base">開発中</Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
            写真詐欺、<span className="text-sky-600">ゼロ</span>
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl">アプリ内カメラで撮影した写真だけ</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            REALは、プロフィール写真に<span className="text-sky-600 font-semibold">アプリ内のノーマルカメラで撮影した写真のみ</span>を使用できます。
            <br className="hidden sm:block" />
            これにより、写真詐欺を根本から防ぎます。
          </p>
          <div className="mb-16 sm:mb-20">
            <CTAButton className="text-xl sm:text-2xl px-10 sm:px-12 py-5 sm:py-6">
              待機リストに登録する
            </CTAButton>
          </div>
          
          {/* アプリ内カメラの説明カード */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-sky-100 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-left flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                  アプリ内カメラのみ使用可能
                </h3>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                  外部の写真やアルバムから選択することはできません。アプリ内のカメラで撮影した写真だけがプロフィール写真として使用できます。これにより、古い写真や加工された写真の使用を防ぎます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Problemセクション
function ProblemSection() {
  const problems = [
    {
      icon: "📸",
      title: "古い写真を使い回す",
      description: "何年も前の写真をプロフィールに使っている人がいます。実際に会うと、写真と本人が全く違うことも。"
    },
    {
      icon: "✨",
      title: "過度な加工・フィルター",
      description: "美顔アプリやフィルターで加工された写真が多く、実際の見た目とのギャップが大きいです。"
    },
    {
      icon: "📱",
      title: "外部写真の使用",
      description: "アルバムから選んだ写真や、SNSから保存した写真を使えるため、本人確認ができません。"
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-slate-50">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            なぜ写真詐欺が起きるのか？
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            従来のマッチングアプリでは、写真の出所を制限できていません
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-6">{problem.icon}</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Solutionセクション（アプリ内カメラの仕組み）
function SolutionSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-28 bg-white">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <Badge className="mb-6 text-base">REALの解決策</Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            アプリ内カメラで撮影した写真<span className="text-sky-600">だけ</span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto">
            これが、写真詐欺を防ぐ唯一の方法です
          </p>
        </div>

        {/* 仕組みの説明 */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 sm:p-12 border-2 border-sky-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  どうやって防ぐの？
                </h3>
                <ul className="space-y-4 text-lg text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <span>アプリを開いて、プロフィール写真を設定</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <span>アプリ内のカメラで<strong className="text-sky-600">その場で撮影</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <span>アルバムや外部写真は<strong className="text-sky-600">選択不可</strong></span>
                  </li>
                </ul>
              </div>
              <div>
                <ImagePlaceholder 
                  label="アプリ内カメラのUIモック"
                  aspectRatio="aspect-[4/5]"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* メリット */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-sky-50 p-8 rounded-3xl border-2 border-sky-200">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              最新の写真のみ
            </h3>
            <p className="text-slate-600 leading-relaxed">
              その場で撮影するため、必ず最新の写真が使われます。古い写真を使い回すことができません。
            </p>
          </div>
          <div className="bg-sky-50 p-8 rounded-3xl border-2 border-sky-200">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              加工の防止
            </h3>
            <p className="text-slate-600 leading-relaxed">
              アプリ内カメラで撮影するため、事前に加工された写真やフィルターをかけた写真の使用を防げます。
            </p>
          </div>
          <div className="bg-sky-50 p-8 rounded-3xl border-2 border-sky-200">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              本人確認
            </h3>
            <p className="text-slate-600 leading-relaxed">
              その場で撮影することで、写真が本人のものであることを確認できます。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Benefitsセクション
function BenefitsSection() {
  const benefits = [
    {
      title: "安心して会える",
      description: "写真と本人が一致するため、会う前の不安がありません。期待通りの出会いができます。"
    },
    {
      title: "時間の無駄がない",
      description: "写真と違う人に会ってがっかりすることがなくなります。お互いの時間を大切にできます。"
    },
    {
      title: "誠実なコミュニケーション",
      description: "写真から始まる信頼関係。最初から誠実に向き合える環境です。"
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-white to-sky-50">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            アプリ内カメラがもたらす安心
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            写真詐欺のない環境で、本当の出会いを
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow"
            >
              <div className="text-5xl mb-6">💙</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Early Benefitsセクション
function EarlyBenefitsSection() {
  const benefits = [
    {
      title: "先行アクセス",
      description: "リリース時に、待機リスト登録者を優先的にご案内します。"
    },
    {
      title: "初期ブースト",
      description: "サービス開始時から、より多くの方と出会える機会を提供します。"
    },
    {
      title: "フィードバック参加",
      description: "開発中の機能や改善点について、ご意見をいただく機会を設けます。"
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-sky-600 text-white">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            待機リスト特典
          </h2>
          <p className="text-xl sm:text-2xl text-sky-100 max-w-3xl mx-auto">
            今ご登録いただくと、以下の特典をご用意しています
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 sm:p-10 rounded-3xl border-2 border-white/20"
            >
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {benefit.title}
              </h3>
              <p className="text-sky-100 leading-relaxed text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <CTAButton variant="secondary" className="bg-white text-sky-600 border-white hover:bg-sky-50 text-xl sm:text-2xl px-10 sm:px-12 py-5 sm:py-6">
            待機リストに登録する
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: FAQセクション
function FAQSection() {
  const faqs = [
    {
      question: "アプリ内カメラで撮影した写真だけしか使えないのは本当ですか？",
      answer: "はい、その通りです。REALでは、プロフィール写真に使用できるのは、アプリ内のノーマルカメラで撮影した写真のみです。アルバムや外部から写真を選択することはできません。これにより、写真詐欺を根本から防ぎます。"
    },
    {
      question: "写真を後から変更することはできますか？",
      answer: "はい、可能です。ただし、変更する際もアプリ内カメラで撮影した写真のみを使用できます。古い写真や加工された写真に戻すことはできません。"
    },
    {
      question: "REALはいつリリースされますか？",
      answer: "現在開発中です。具体的なリリース時期は未定ですが、準備が整い次第、待機リストにご登録いただいた方に優先的にご案内いたします。"
    },
    {
      question: "アプリ内カメラの画質はどうですか？",
      answer: "通常のスマートフォンのカメラ機能を使用するため、十分な画質で撮影できます。ただし、過度な加工やフィルターは使用できません。"
    },
    {
      question: "写真詐欺を完全に防げますか？",
      answer: "アプリ内カメラのみを使用することで、古い写真や加工された写真の使用を防ぐことができます。ただし、撮影時の角度や照明などによる見た目の違いは完全には防げない可能性があります。それでも、従来のマッチングアプリと比べて、写真詐欺のリスクを大幅に減らすことができます。"
    },
    {
      question: "待機リストに登録すると、必ず使えますか？",
      answer: "待機リストへの登録は、リリース時の優先案内を受けるためのものです。サービス開始時には、登録者を優先的にご案内する予定です。"
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 lg:py-28 bg-slate-50">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            よくある質問
          </h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-slate-200"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                {faq.question}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 sm:mt-20">
          <CTAButton className="text-xl sm:text-2xl px-10 sm:px-12 py-5 sm:py-6">
            待機リストに登録する
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Footer
function Footer() {
  return (
    <footer className="py-12 sm:py-16 bg-slate-900 text-slate-300">
      <Container>
        <div className="text-center space-y-6">
          <div className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Real
          </div>
          <div className="text-sm sm:text-base space-y-3 max-w-3xl mx-auto leading-relaxed">
            <p>
              ※ 本サービスは開発中です。仕様やリリース時期は変更される可能性があります。
            </p>
            <p>
              ※ 18歳以上の方のみがご利用いただけます。
            </p>
            <p>
              ※ 待機リストへの登録は、リリース時の優先案内を受けるためのものです。
            </p>
            <p>
              ※ プロフィール写真はアプリ内カメラで撮影したもののみ使用可能です。
            </p>
            <p className="pt-6 text-slate-400">
              © 2024 REAL. All rights reserved.
            </p>
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
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <EarlyBenefitsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
