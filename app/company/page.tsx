function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
            運営者情報
          </h1>
          
          <div className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">運営者名</h2>
              <p className="text-slate-700 leading-relaxed">
                REAL運営チーム
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">サポート・お問い合わせ</h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                ご質問やサポートのご要望は、サポートページよりお問い合わせください。
              </p>
              <a
                href="/support"
                className="inline-flex items-center justify-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium text-sm"
              >
                サポート・お問い合わせページへ
              </a>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">所在地</h2>
              <p className="text-slate-700 leading-relaxed">
                東京都
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">サービスについて</h2>
              <p className="text-slate-700 leading-relaxed">
                REALは、写真詐欺のない誠実な出会いを目指すマッチングアプリです。
                アプリ内カメラで撮影した写真のみを使用できる設計により、写真詐欺のリスクを大幅に削減します。
              </p>
            </section>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="/support" className="text-sky-600 hover:text-sky-700 underline">
              サポート・お問い合わせ
            </a>
            <a href="/" className="text-sky-600 hover:text-sky-700 underline">
              ← トップページに戻る
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

