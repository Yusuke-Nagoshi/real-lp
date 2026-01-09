function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
            プライバシーポリシー
          </h1>
          
          <div className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. 収集する情報</h2>
              <p className="text-slate-700 leading-relaxed">
                事前登録において、以下の情報を収集いたします：
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                <li>メールアドレス</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. 利用目的</h2>
              <p className="text-slate-700 leading-relaxed">
                収集した情報は、以下の目的で利用いたします：
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                <li>アプリリリース時の先行案内</li>
                <li>β版の優先招待</li>
                <li>サービスに関する重要なお知らせ</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. 第三者提供</h2>
              <p className="text-slate-700 leading-relaxed">
                お客様の個人情報を第三者に提供することはございません。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. 保管期間</h2>
              <p className="text-slate-700 leading-relaxed">
                収集した情報は、サービス提供に必要な期間、またはお客様から削除依頼があるまで保管いたします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. お問い合わせ</h2>
              <p className="text-slate-700 leading-relaxed">
                プライバシーポリシーに関するお問い合わせは、<a href="/company" className="text-sky-600 hover:text-sky-700 underline">運営者情報</a>のページよりご連絡ください。
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

