import Link from 'next/link";

function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export const metadata = {
  title: 'サポート・お問い合わせ | REAL',
  description: 'REALアプリに関するお問い合わせ・サポート窓口です。ご質問や不具合の報告はこちらからお願いします。',
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
            サポート・お問い合わせ
          </h1>
          <p className="text-slate-600 mb-8">
            REALアプリについてのご質問、不具合の報告、その他のお問い合わせは下記よりご連絡ください。
          </p>

          {/* お問い合わせ方法 */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">お問い合わせ方法</h2>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">メールでのお問い合わせ</h3>
                <p className="text-slate-700 text-sm mb-2">
                  アプリの使い方、不具合の報告、アカウントに関するお問い合わせはメールにて受け付けております。
                </p>
                <a
                  href="mailto:nagoshiyusuke@gmail.com"
                  className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium"
                >
                  nagoshiyusuke@gmail.com
                </a>
              </div>
              <p className="text-slate-600 text-sm">
                通常、2〜3営業日以内にご返信いたします。お急ぎの場合は件名に「【要対応】」とご記載いただくと優先的に対応いたします。
              </p>
            </div>
          </section>

          {/* 事前登録・その他のご連絡 */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">事前登録・その他</h2>
            <p className="text-slate-700 mb-4">
              アプリの事前登録（待機リストへの登録）や、その他のご連絡は以下のフォームからも受け付けております。
            </p>
            <Link
              href="/go/form"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 text-slate-800 rounded-lg hover:bg-slate-200 transition-colors font-medium border border-slate-200"
            >
              事前登録・お問い合わせフォームへ
            </Link>
          </section>

          {/* よくある質問 */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">よくある質問</h2>
            <ul className="space-y-4">
              <li className="border-b border-slate-200 pb-4">
                <h3 className="font-semibold text-slate-800 mb-1">Q. アプリが起動しない・動作がおかしい</h3>
                <p className="text-slate-600 text-sm">
                  お手数ですが、使用機種・OSバージョンとあわせて上記メールアドレスまでご連絡ください。できる限り早く対応いたします。
                </p>
              </li>
              <li className="border-b border-slate-200 pb-4">
                <h3 className="font-semibold text-slate-800 mb-1">Q. アカウントを削除したい</h3>
                <p className="text-slate-600 text-sm">
                  アプリ内の設定から削除手続きが可能です。手順が分からない場合や削除ができない場合は、メールにてお問い合わせください。
                </p>
              </li>
              <li className="border-b border-slate-200 pb-4">
                <h3 className="font-semibold text-slate-800 mb-1">Q. 不適切なユーザーを通報したい</h3>
                <p className="text-slate-600 text-sm">
                  アプリ内の通報機能をご利用ください。緊急を要する場合や、通報後に追加でご連絡いただきたい場合はメールでも受け付けております。
                </p>
              </li>
              <li className="pb-2">
                <h3 className="font-semibold text-slate-800 mb-1">Q. その他の質問がある</h3>
                <p className="text-slate-600 text-sm">
                  上記メールアドレスまたはフォームよりお気軽にご連絡ください。
                </p>
              </li>
            </ul>
          </section>

          {/* 運営者情報へのリンク */}
          <section className="mb-8">
            <p className="text-slate-600 text-sm">
              運営者情報は
              <Link href="/company" className="text-sky-600 hover:text-sky-700 underline ml-1">
                こちら
              </Link>
              をご覧ください。
            </p>
          </section>

          <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200">
            <Link
              href="/"
              className="text-sky-600 hover:text-sky-700 underline"
            >
              ← トップページに戻る
            </Link>
            <Link
              href="/company"
              className="text-sky-600 hover:text-sky-700 underline"
            >
              運営者情報
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
