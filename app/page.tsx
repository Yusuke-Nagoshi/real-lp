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
        className={`inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-sky-600 bg-white border-2 border-sky-600 rounded-full hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl ${className}`}
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
      className={`inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-sky-500 to-sky-600 rounded-full hover:from-sky-600 hover:to-sky-700 transition-all shadow-2xl shadow-sky-500/40 hover:shadow-3xl hover:shadow-sky-500/50 hover:scale-105 ${className}`}
    >
      {children}
    </a>
  );
}

// コンポーネント: バッジ
function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-5 py-2 text-sm font-bold text-sky-700 bg-sky-100 rounded-full border border-sky-200 ${className}`}>
      {children}
    </span>
  );
}

// コンポーネント: 画像プレースホルダー
function ImagePlaceholder({ 
  label, 
  aspectRatio = 'aspect-video',
  className = '',
  imageName = ''
}: { 
  label: string; 
  aspectRatio?: string;
  className?: string;
  imageName?: string;
}) {
  return (
    <div className={`${aspectRatio} bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 rounded-3xl flex items-center justify-center border-2 border-dashed border-sky-300 relative overflow-hidden ${className}`}>
      {imageName && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-xs text-sky-400 font-medium absolute bottom-4 left-4">📸 {imageName}</p>
        </div>
      )}
      <p className="text-sky-500 text-sm font-medium text-center px-4 z-10">{label}</p>
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
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-100' : 'bg-white'
    }`}>
      <Container>
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">
              Real
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="#features"
              className="hidden lg:inline-block text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors"
            >
              特徴
            </a>
            <a
              href="#how-it-works"
              className="hidden lg:inline-block text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors"
            >
              仕組み
            </a>
            <a
              href="#faq"
              className="hidden lg:inline-block text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors"
            >
              FAQ
            </a>
            <CTAButton className="text-sm px-6 py-3">
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
    <section className="pt-24 sm:pt-32 lg:pt-40 pb-20 sm:pb-32 bg-gradient-to-b from-white via-sky-50/30 to-white relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左側: テキストコンテンツ */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6">開発中</Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              写真詐欺、
              <br />
              <span className="text-sky-600">ゼロ</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed">
              <span className="font-bold text-sky-600">アプリ内カメラで撮影した写真だけ</span>が使える。
              <br />
              これが、写真詐欺を防ぐ唯一の方法です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <CTAButton className="text-lg px-10 py-5">
                待機リストに登録する
              </CTAButton>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-5 text-lg font-semibold text-slate-700 hover:text-sky-600 transition-colors"
              >
                仕組みを見る →
              </a>
            </div>
            {/* 統計 */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-sky-600">100%</div>
                <div className="text-sm text-slate-600 mt-1">アプリ内カメラのみ</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-sky-600">0件</div>
                <div className="text-sm text-slate-600 mt-1">写真詐欺のリスク</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-sky-600">∞</div>
                <div className="text-sm text-slate-600 mt-1">安心できる出会い</div>
              </div>
            </div>
          </div>

          {/* 右側: スマートフォンモックアップ */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              {/* スマートフォンのフレーム */}
              <div className="relative bg-slate-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* ノッチ */}
                  <div className="h-8 bg-slate-900 rounded-b-3xl"></div>
                  {/* 画面コンテンツ */}
                  <div className="aspect-[9/19.5] bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center">
                    <ImagePlaceholder 
                      label="スマートフォンアプリのモックアップ（アプリ内カメラ画面）"
                      aspectRatio="aspect-[9/19.5]"
                      className="rounded-none border-0"
                      imageName="hero-app-mockup.png"
                    />
                  </div>
                </div>
              </div>
              {/* 装飾的な要素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Featuresセクション
function FeaturesSection() {
  const features = [
    {
      icon: "📸",
      title: "アプリ内カメラのみ",
      description: "プロフィール写真は、アプリ内のカメラで撮影したものだけが使用可能。アルバムや外部写真は選択できません。",
      highlight: true
    },
    {
      icon: "🛡️",
      title: "写真詐欺ゼロ",
      description: "古い写真や加工された写真の使用を根本から防ぎます。会う前から安心です。",
      highlight: false
    },
    {
      icon: "✨",
      title: "最新の写真のみ",
      description: "その場で撮影するため、必ず最新の写真が使われます。写真と本人が一致します。",
      highlight: false
    },
    {
      icon: "🔒",
      title: "本人確認",
      description: "その場で撮影することで、写真が本人のものであることを確認できます。",
      highlight: false
    }
  ];

  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <Badge className="mb-6">REALの特徴</Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            なぜ写真詐欺が起きないのか
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto">
            アプリ内カメラのみ使用可能という仕組みが、すべての答えです
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 sm:p-10 rounded-3xl transition-all hover:shadow-2xl ${
                feature.highlight
                  ? 'bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-200 shadow-xl'
                  : 'bg-slate-50 border border-slate-200 hover:border-sky-200'
              }`}
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Comparisonセクション
function ComparisonSection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            従来のアプリ vs REAL
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto">
            違いは明確です
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* 従来のアプリ */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border-2 border-red-200 shadow-lg">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">従来のアプリ</h3>
              <p className="text-slate-600">アルバムから写真を選択可能</p>
            </div>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-red-500">✗</span>
                <span>古い写真を使い回せる</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">✗</span>
                <span>加工された写真が使える</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">✗</span>
                <span>写真詐欺のリスクがある</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">✗</span>
                <span>会う前から不安</span>
              </li>
            </ul>
            <div className="mt-8">
              <ImagePlaceholder 
                label="従来のアプリのUI（アルバム選択画面）"
                aspectRatio="aspect-video"
                imageName="traditional-app.png"
              />
            </div>
          </div>

          {/* REAL */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 sm:p-10 rounded-3xl border-2 border-sky-300 shadow-xl relative">
            <div className="absolute -top-4 -right-4 bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              REAL
            </div>
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">REAL</h3>
              <p className="text-slate-600">アプリ内カメラのみ使用可能</p>
            </div>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">✓</span>
                <span>最新の写真のみ使用</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">✓</span>
                <span>加工された写真は使用不可</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">✓</span>
                <span>写真詐欺のリスクゼロ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-600 font-bold">✓</span>
                <span>安心して会える</span>
              </li>
            </ul>
            <div className="mt-8">
              <ImagePlaceholder 
                label="REALのアプリUI（アプリ内カメラ画面）"
                aspectRatio="aspect-video"
                imageName="real-app-camera.png"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: How It Worksセクション
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "アプリを開く",
      description: "REALアプリを開いて、プロフィール写真を設定します。",
      image: "step1.png"
    },
    {
      number: "02",
      title: "アプリ内カメラで撮影",
      description: "アルバムから選択することはできません。アプリ内のカメラでその場で撮影します。",
      image: "step2-camera.png",
      highlight: true
    },
    {
      number: "03",
      title: "写真が設定される",
      description: "撮影した写真がプロフィール写真として設定されます。古い写真に戻すことはできません。",
      image: "step3-profile.png"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <Badge className="mb-6">仕組み</Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            3ステップで始まる
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto">
            シンプルで、確実な仕組み
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold ${
                    step.highlight
                      ? 'bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {step.number}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <ImagePlaceholder 
                  label={step.title}
                  aspectRatio="aspect-[9/16]"
                  imageName={step.image}
                  className="max-w-sm mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Benefitsセクション
function BenefitsSection() {
  const benefits = [
    {
      icon: "💙",
      title: "安心して会える",
      description: "写真と本人が一致するため、会う前の不安がありません。期待通りの出会いができます。"
    },
    {
      icon: "⏰",
      title: "時間の無駄がない",
      description: "写真と違う人に会ってがっかりすることがなくなります。お互いの時間を大切にできます。"
    },
    {
      icon: "🤝",
      title: "誠実なコミュニケーション",
      description: "写真から始まる信頼関係。最初から誠実に向き合える環境です。"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-sky-50">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            アプリ内カメラがもたらす安心
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto">
            写真詐欺のない環境で、本当の出会いを
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="text-5xl mb-6">{benefit.icon}</div>
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
      icon: "🚀",
      title: "先行アクセス",
      description: "リリース時に、待機リスト登録者を優先的にご案内します。"
    },
    {
      icon: "⭐",
      title: "初期ブースト",
      description: "サービス開始時から、より多くの方と出会える機会を提供します。"
    },
    {
      icon: "💬",
      title: "フィードバック参加",
      description: "開発中の機能や改善点について、ご意見をいただく機会を設けます。"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-sky-600 via-sky-500 to-blue-600 text-white relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
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
              className="bg-white/10 backdrop-blur-md p-8 sm:p-10 rounded-3xl border-2 border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-5xl mb-6">{benefit.icon}</div>
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
          <CTAButton variant="secondary" className="bg-white text-sky-600 border-white hover:bg-sky-50 text-xl px-12 py-6">
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
    }
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-slate-50">
      <Container>
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            よくある質問
          </h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
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
          <CTAButton className="text-xl px-12 py-6">
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
    <footer className="py-16 sm:py-20 bg-slate-900 text-slate-300">
      <Container>
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">R</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white">
              Real
            </div>
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
        <FeaturesSection />
        <ComparisonSection />
        <HowItWorksSection />
        <BenefitsSection />
        <EarlyBenefitsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
