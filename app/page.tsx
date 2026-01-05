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
      className={`inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-sky-600 rounded-2xl hover:bg-sky-700 transition-colors shadow-lg shadow-sky-500/30 ${className}`}
    >
      {children}
    </a>
  );
}

// コンポーネント: バッジ
function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 text-sm font-medium text-sky-700 bg-sky-100 rounded-full ${className}`}>
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
    <div className={`${aspectRatio} bg-sky-50 rounded-3xl flex items-center justify-center border-2 border-dashed border-sky-200 ${className}`}>
      <p className="text-sky-400 text-sm font-medium">{label}</p>
    </div>
  );
}

// コンポーネント: ヘッダー
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
    }`}>
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            {/* ロゴ画像があれば使用、なければテキストロゴ */}
            {!logoError ? (
              <img 
                src="/logo.png" 
                alt="REAL" 
                className="h-8 sm:h-10 w-auto"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">
                Real
              </div>
            )}
          </div>
          <nav className="flex items-center gap-4 sm:gap-6">
            <a
              href="#faq"
              className="hidden sm:inline-block text-sm font-medium text-sky-700 hover:text-sky-800 transition-colors"
            >
              FAQ
            </a>
            <CTAButton className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
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
    <section className="pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 lg:pb-32 bg-gradient-to-b from-sky-50 via-white to-white">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6">開発中</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 sm:mb-8 leading-tight">
            写真詐欺に疲れた方へ
            <br />
            <span className="text-sky-600">誠実な出会いを、REALから</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
            疑う前提を減らす設計で、安心して出会えるマッチングアプリを目指しています。
            <br className="hidden sm:block" />
            待機リストにご登録いただくと、リリース時に優先的にご案内いたします。
          </p>
          <div className="mb-12 sm:mb-16">
            <CTAButton className="text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5">
              待機リストに登録する
            </CTAButton>
          </div>
          <ImagePlaceholder 
            label="Hero画像（モヤ→クリアのモック）"
            aspectRatio="aspect-[16/9]"
            className="max-w-4xl mx-auto"
          />
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Problemセクション
function ProblemSection() {
  const problems = [
    {
      title: "写真と本人が違う",
      description: "プロフィール写真が古かったり、加工されすぎていたり。実際に会ってみると印象が大きく異なることがあります。"
    },
    {
      title: "会う前の不安",
      description: "「本当にこの人と会って大丈夫？」「写真は本物？」と、出会いの前から疑いの気持ちが生まれてしまいます。"
    },
    {
      title: "時間と感情の無駄",
      description: "期待して会ったのに、写真と違ってがっかり。お互いの時間と感情が無駄になってしまうことがあります。"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-sky-50">
      <Container>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            写真詐欺、あるある
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            多くの方が経験している、マッチングアプリでの課題です
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-sky-100"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4">
                {problem.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Solutionセクション
function SolutionSection() {
  const solutions = [
    {
      title: "写真の信頼性を高める",
      description: "本人確認や写真の検証プロセスを導入し、できるだけ写真と本人が一致するように設計します。"
    },
    {
      title: "疑う前提を減らす",
      description: "透明性の高い仕組みにより、会う前から安心感を持てる環境づくりを目指します。"
    },
    {
      title: "誠実なコミュニケーション",
      description: "写真だけでなく、プロフィールやメッセージでも誠実さを大切にできる場を提供します。"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            REALが目指す設計
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            写真詐欺の課題を解決するための、3つのポイント
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-sky-50 p-6 sm:p-8 rounded-3xl border border-sky-100"
            >
              <div className="text-3xl sm:text-4xl font-bold text-sky-300 mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4">
                {solution.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
        <ImagePlaceholder 
          label="仕組み図（3ステップの図）"
          aspectRatio="aspect-[16/9]"
          className="max-w-4xl mx-auto"
        />
      </Container>
    </section>
  );
}

// コンポーネント: Trust/Privacyセクション
function TrustSection() {
  const trustPoints = [
    {
      title: "誠実さを大切に",
      description: "写真やプロフィールの正確性を重視し、お互いが誠実に向き合える環境を目指します。"
    },
    {
      title: "個人情報の最小化",
      description: "必要最小限の情報のみを収集し、プライバシーを尊重した設計にしています。"
    },
    {
      title: "18歳以上のみ",
      description: "年齢確認を行い、18歳以上の方のみがご利用いただけるサービスです。"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-sky-50">
      <Container>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            信頼とプライバシー
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            REALが大切にしている価値観
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-sky-100"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {point.description}
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
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            待機リスト特典
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            今ご登録いただくと、以下の特典をご用意しています
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-sky-50 p-6 sm:p-8 rounded-3xl border-2 border-sky-200"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <CTAButton className="text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5">
            待機リストに登録する
          </CTAButton>
        </div>
        <div className="mt-12 sm:mt-16">
          <ImagePlaceholder 
            label="アプリUIモック（画面遷移のダミー）"
            aspectRatio="aspect-[16/9]"
            className="max-w-4xl mx-auto"
          />
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: FAQセクション
function FAQSection() {
  const faqs = [
    {
      question: "REALはいつリリースされますか？",
      answer: "現在開発中です。具体的なリリース時期は未定ですが、準備が整い次第、待機リストにご登録いただいた方に優先的にご案内いたします。"
    },
    {
      question: "待機リストに登録すると、必ず使えますか？",
      answer: "待機リストへの登録は、リリース時の優先案内を受けるためのものです。サービス開始時には、登録者を優先的にご案内する予定です。"
    },
    {
      question: "写真詐欺を完全に防げますか？",
      answer: "残念ながら、100%完全に防ぐことは難しいかもしれません。しかし、本人確認や写真の検証プロセスを導入し、できるだけ写真と本人が一致するように設計しています。"
    },
    {
      question: "どのような年齢層を想定していますか？",
      answer: "18歳以上の方を対象としています。具体的な年齢層のターゲットは、開発を進めながら検討していく予定です。"
    },
    {
      question: "個人情報は安全ですか？",
      answer: "個人情報の保護を最優先に考えています。必要最小限の情報のみを収集し、適切に管理いたします。詳細は、サービスリリース時にプライバシーポリシーとして公開予定です。"
    },
    {
      question: "仕様は変更される可能性がありますか？",
      answer: "はい、開発中のため、仕様は変更される可能性があります。待機リストにご登録いただいた方には、重要な変更点についてご案内する予定です。"
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-sky-50">
      <Container>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            よくある質問
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-sky-100"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3 sm:mb-4">
                {faq.question}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 sm:mt-16">
          <CTAButton className="text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5">
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
    <footer className="py-12 sm:py-16 bg-slate-800 text-slate-300">
      <Container>
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Real
          </div>
          <div className="text-sm sm:text-base space-y-2 max-w-2xl mx-auto leading-relaxed">
            <p>
              ※ 本サービスは開発中です。仕様やリリース時期は変更される可能性があります。
            </p>
            <p>
              ※ 18歳以上の方のみがご利用いただけます。
            </p>
            <p>
              ※ 待機リストへの登録は、リリース時の優先案内を受けるためのものです。
            </p>
            <p className="pt-4 text-slate-400">
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
        <TrustSection />
        <EarlyBenefitsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
