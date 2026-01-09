function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
            利用規約
          </h1>
          
          <div className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. 年齢制限</h2>
              <p className="text-slate-700 leading-relaxed">
                本サービスは18歳以上の方のみご利用いただけます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. 禁止事項</h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                以下の行為を禁止いたします：
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                <li>虚偽の情報を登録すること</li>
                <li>他人になりすますこと</li>
                <li>法令に違反する行為</li>
                <li>他の利用者に迷惑をかける行為</li>
                <li>サービス運営を妨害する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. 免責事項</h2>
              <p className="text-slate-700 leading-relaxed">
                本サービスは開発中のため、仕様は変更される可能性があります。また、サービス提供の中断や終了により生じた損害について、運営者は一切の責任を負いません。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. 規約の変更</h2>
              <p className="text-slate-700 leading-relaxed">
                本規約は予告なく変更される場合があります。変更後は本ページにて最新の規約を確認してください。
              </p>
            </section>

            <section>
              <p className="text-sm text-slate-500 mt-8">
                最終更新日: 2024年1月
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/"
              className="text-sky-600 hover:text-sky-700 underline"
            >
              ← トップページに戻る
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

