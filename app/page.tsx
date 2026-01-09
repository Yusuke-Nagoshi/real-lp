'use client';

import { useState, useEffect } from 'react';

const FORM_URL = '/go/form';

// コンポーネント: コンテナ
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
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
        className={`inline-flex items-center justify-center px-6 py-3 text-base font-bold text-sky-600 bg-white border-2 border-sky-400 rounded-full hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl ${className}`}
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
      className={`inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 rounded-full hover:from-sky-500 hover:via-blue-500 hover:to-cyan-500 transition-all shadow-2xl shadow-sky-400/50 hover:shadow-3xl hover:scale-110 ${className}`}
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
      isScrolled ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-sky-100/50' : 'bg-white/95 backdrop-blur-sm'
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
            <div className="hidden w-8 h-8 bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-400 rounded-lg items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Real
            </div>
          </div>
          <CTAButton className="text-sm px-5 py-2.5">
            無料で先行案内
          </CTAButton>
        </div>
      </Container>
    </header>
  );
}

// コンポーネント: Heroセクション
function HeroSection() {
  return (
    <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white relative overflow-hidden">
      {/* 水彩画風の背景装飾 - 白を中心に、周りに薄い青、紫、ピンク */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 左上: 薄い青 */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-sky-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        {/* 左下: 薄い青 */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        {/* 右上: 薄い紫 */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-100/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        {/* 右下: 薄いピンク */}
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-pink-100/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100/80 text-sky-700 text-sm font-bold rounded-full mb-4 backdrop-blur-sm border border-sky-200/50">
            <span>🚀</span>
            <span>5月リリース予定</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
            写真詐欺、<span className="bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">ゼロ</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 mb-3 max-w-2xl mx-auto font-medium">
            アプリ内カメラで撮影した写真のみ使える
            <br />
            マッチングアプリ
          </p>
          <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            アプリ内カメラ限定＋一定のやりとり後にクリア表示で、写真詐欺を防ぎます
          </p>
          
          <CTAButton className="mb-4">
            無料で先行案内を受け取る（30秒）
          </CTAButton>
          
          <div className="mb-6 text-xs sm:text-sm text-slate-500 space-y-1">
            <p>✓ 登録は無料 / メールアドレスだけ / いつでも解除OK</p>
            <p>✓ 事前登録者にβ版の優先招待を送ります</p>
            <p className="text-slate-400 mt-2">※ 事前登録は無料です。リリース時に優先的にご案内します。</p>
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
                </div>
              </div>
            </div>
            {/* 説明テキスト */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-sky-200/50">
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
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* 水彩画風の背景装飾 - 白を中心に、周りに薄い青、紫、ピンク */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-sky-100/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-[450px] h-[450px] bg-blue-100/25 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 left-40 w-[400px] h-[400px] bg-purple-100/15 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            通常のアプリとの違い
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {/* 通常のアプリ */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-slate-200/50 shadow-lg">
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
          <div className="bg-gradient-to-br from-sky-50/90 via-blue-50/90 to-cyan-50/70 backdrop-blur-sm p-8 rounded-2xl border-2 border-sky-300/50 relative shadow-lg">
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
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
        
        {/* 中間CTA */}
        <div className="text-center">
          <p className="text-sm text-slate-600 mb-4">
            <span className="font-semibold text-sky-600">30秒で完了</span>
            <span className="mx-2">・</span>
            <span className="font-semibold text-sky-600">完全無料</span>
          </p>
          <CTAButton>
            無料で先行案内を受け取る（30秒）
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: How It Worksセクション（簡潔に）
function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* 水彩画風の背景装飾 - 白を中心に、周りに薄い青、紫、ピンク */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-sky-100/25 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-100/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-40 w-[400px] h-[400px] bg-purple-100/15 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-[450px] h-[450px] bg-pink-100/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
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
          <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-sky-100/50">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-400 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
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
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-200 to-blue-200 border-4 border-white shadow-lg relative overflow-hidden">
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
          <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-sky-100/50">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-400 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
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
          <div className="bg-gradient-to-br from-sky-50/90 via-blue-50/90 to-cyan-50/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-sky-300/50 relative">
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              重要
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-400 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
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
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-200 to-blue-200 border-4 border-white shadow-lg relative overflow-hidden">
                    {/* 顔の簡易的な表現 */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl animate-fade-in">😊</div>
                    </div>
                    {/* モヤが解除されるアニメーション */}
                    <div className="absolute inset-0 bg-white/0 backdrop-blur-0 animate-blur-out"></div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-md">
                    クリアに！
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 補足説明 */}
        <div className="mt-12 text-center max-w-3xl mx-auto mb-12">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-sky-100/50">
            <p className="text-slate-700 leading-relaxed">
              <strong className="bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">この設計により、</strong>写真だけで判断せず、プロフィールやメッセージの内容で判断できるため、より深い出会いが生まれます。また、3往復のメッセージをやり取りすることで、お互いの顔を確認してから会うことができます。
            </p>
          </div>
        </div>
        
        {/* 中盤CTA */}
        <div className="text-center">
          <p className="text-sm text-slate-600 mb-4">
            <span className="font-semibold text-sky-600">30秒で完了</span>
            <span className="mx-2">・</span>
            <span className="font-semibold text-sky-600">完全無料</span>
            <span className="mx-2">・</span>
            <span className="font-semibold text-sky-600">メールアドレスのみ</span>
          </p>
          <CTAButton>
            無料で先行案内を受け取る（30秒）
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Pricingセクション
function PricingSection() {
  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* 水彩画風の背景装飾 - 白を中心に、周りに薄い青、紫、ピンク */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-sky-100/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-100/25 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-purple-100/15 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-sky-50/90 via-blue-50/90 to-cyan-50/70 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border-2 border-sky-200/50 text-center shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
              料金
            </h2>
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-sky-100/50">
                <div className="text-slate-600 text-sm mb-2">男性</div>
                <div className="text-4xl font-extrabold text-slate-900 mb-1">
                  ¥2,970
                </div>
                <div className="text-slate-500 text-sm">/月</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border-2 border-sky-300/50">
                <div className="text-slate-600 text-sm mb-2">女性</div>
                <div className="text-4xl font-extrabold bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-1">
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
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* 水彩画風の背景装飾 - 白を中心に、周りに薄い青、紫、ピンク */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-sky-100/25 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-[450px] h-[450px] bg-blue-100/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-40 w-[400px] h-[400px] bg-purple-100/15 rounded-full mix-blend-multiply filter blur-3xl"></div>
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
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-sky-100/50"
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
          <div className="mb-4">
            <p className="text-sm text-slate-600 mb-2">
              <span className="font-semibold text-sky-600">30秒で完了</span>
              <span className="mx-2">・</span>
              <span className="font-semibold text-sky-600">完全無料</span>
            </p>
          </div>
          <CTAButton>
            無料で先行案内を受け取る（30秒）
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Messageセクション（開発チームの想い）
function MessageSection() {
  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* 水彩画風の背景装飾 - 白を中心に、周りに薄い青、紫、ピンク */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-sky-100/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-100/25 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-40 w-[450px] h-[450px] bg-purple-100/15 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-[400px] h-[400px] bg-pink-100/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-12 rounded-3xl shadow-xl border-2 border-sky-100/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                開発チームの想い
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p className="text-lg">
                開発・運営を担当している私も、マッチングアプリに<strong className="text-slate-900">3年以上どっぷりつかった経験</strong>があります。そこで数多くの「写真と違う」を経験してきました。
              </p>
              
              <p className="text-lg">
                貴重な休みが無駄になる。もし、詐欺のない本当の自分を最初から出してくれれば、<strong className="text-slate-900">お互いにとって無駄の少ない時間になるのになあ</strong>と思うことが度々ありました。
              </p>
              
              <p className="text-lg">
                そこで、<span className="bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent font-bold">誠実で安心な出会い</span>のために、<strong className="text-slate-900">無加工で自撮りの写真しか使用できない</strong>マッチングアプリを開発しています。
              </p>
              
              <p className="text-lg">
                とは言っても、いきなり自撮り全開は抵抗のある人も多いと思うので、<strong className="text-slate-900">マッチして会話をするまでは薄いぼかしを入れよう</strong>と思っています。
              </p>
              
              <div className="pt-6 mt-8 border-t border-sky-100">
                <p className="text-xl font-bold text-center bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  お互いがお互いのことを思う誠実なマッチングアプリをよろしくお願いします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// コンポーネント: Footer
function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 text-slate-300 relative overflow-hidden">
      {/* 水彩画風の背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
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
            <div className="hidden w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-400 rounded-lg items-center justify-center">
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
            
            {/* フッターリンク */}
            <div className="pt-6 border-t border-slate-600/30 mt-6">
              <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
                <a href="/privacy" className="hover:text-slate-200 transition-colors underline">
                  プライバシーポリシー
                </a>
                <span className="text-slate-600">|</span>
                <a href="/terms" className="hover:text-slate-200 transition-colors underline">
                  利用規約
                </a>
                <span className="text-slate-600">|</span>
                <a href="/company" className="hover:text-slate-200 transition-colors underline">
                  運営者情報
                </a>
              </div>
            </div>
            
            <p className="pt-4 text-slate-400">© 2024 REAL. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// コンポーネント: モバイル下部固定CTA（Sticky bottom CTA）
function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-bottom">
      <div className="bg-white/98 backdrop-blur-lg border-t-2 border-sky-200/50 shadow-2xl">
        <div className="px-4 py-3 pb-safe">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-6 py-4 text-lg font-bold text-white bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 rounded-full hover:from-sky-500 hover:via-blue-500 hover:to-cyan-500 transition-all shadow-xl shadow-sky-400/40 active:scale-95"
          >
            無料で先行案内を受け取る（30秒）
          </a>
          <p className="text-xs text-slate-500 text-center mt-2">
            登録無料 / メールだけ / いつでも解除OK
          </p>
        </div>
      </div>
    </div>
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
        <MessageSection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
