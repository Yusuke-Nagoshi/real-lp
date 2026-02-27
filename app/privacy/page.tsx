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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            プライバシーポリシー（あるこ）
          </h1>
          
          <div className="text-sm text-slate-500 mb-8 space-y-1">
            <p>最終更新日：2026-02-26</p>
            <p>運営者：あるこ運営（以下「運営者」）</p>
            <p>連絡先：<a href="mailto:nagoshiyusuke@gmail.com" className="text-sky-600 hover:text-sky-700 underline">nagoshiyusuke@gmail.com</a></p>
          </div>
          
          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. はじめに</h2>
              <p className="text-slate-700 leading-relaxed">
                運営者は、本サービスの提供にあたり、ユーザーの情報を取り扱います。本ポリシーは、運営者が取得する情報、利用目的、第三者提供等について定めます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. 取得する情報</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                運営者は、本サービスの提供のため、以下の情報を取得します。
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2.1 アカウント情報（認証）</h3>
                  <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                    <li>認証プロバイダに関する情報（例：Apple/Google）</li>
                    <li>Supabase等の認証基盤上のユーザー識別子（UID）</li>
                    <li>（ユーザーが提供する場合）メールアドレス等の連絡先情報</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2.2 プロフィール情報</h3>
                  <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                    <li>表示名、性別、生年月日、都道府県、利用目的、自己紹介文、趣味等</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2.3 写真・画像</h3>
                  <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                    <li>アプリ内カメラ等で撮影・登録した写真</li>
                    <li>本サービスの機能提供のために生成される加工データ（例：ぼかし画像、透かし等）</li>
                    <li>写真の審査/管理に関する情報（例：安心マーク付与の有無、運営メモ等）</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2.4 利用状況・行動履歴</h3>
                  <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                    <li>いいね、マッチ、メッセージ、通報、ブロック等の操作履歴</li>
                    <li>アプリ内表示・機能提供に必要な状態情報</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2.5 端末・通知関連</h3>
                  <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                    <li>プッシュ通知のためのデバイストークン（APNs）</li>
                    <li>OSの通知設定状態（取得可能な範囲）</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2.6 ログ・技術情報</h3>
                  <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                    <li>不具合調査、セキュリティ対策、性能改善のためのアクセスログ（例：APIのリクエストID、エラー情報、処理時間など）</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. 利用目的</h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                運営者は、取得した情報を以下の目的で利用します。
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                <li>本サービスの提供、本人の識別、ログイン管理</li>
                <li>仲間検索、チャット、プロフィール表示等の機能提供</li>
                <li>不正利用・迷惑行為の検知、通報対応、BAN等の安全対策</li>
                <li>写真の審査（安心マーク付与を含む）および品質・安全性向上</li>
                <li>通知の送信（マッチ、メッセージ、運営からのお知らせ等）</li>
                <li>問い合わせ対応、障害対応、利用状況の分析、機能改善</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. 第三者提供</h2>
              <p className="text-slate-700 leading-relaxed">
                運営者は、法令に基づく場合その他正当な理由がある場合を除き、本人の同意なく個人情報を第三者に提供しません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. 外部サービスの利用（委託）</h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                運営者は、本サービス提供のため、以下の外部サービスを利用することがあります（例）。
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                <li><strong>Supabase</strong>：認証、データベース、ストレージ等</li>
                <li><strong>Google Cloud（Cloud Run等）</strong>：APIのホスティング、ログ等</li>
                <li><strong>Apple（APNs）</strong>：プッシュ通知配信</li>
                <li><strong>Apple/Google</strong>：サインイン（認証）</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-3">
                これら外部サービスへの情報の送信は、本サービスの提供に必要な範囲で行われます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. 保存期間</h2>
              <p className="text-slate-700 leading-relaxed">
                運営者は、利用目的の達成に必要な期間、情報を保存します。アカウント削除（退会）時の取り扱いは、運用上必要な範囲で削除・匿名化等を行います（バックアップ等に一定期間残存する場合があります）。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. 安全管理</h2>
              <p className="text-slate-700 leading-relaxed">
                運営者は、取得した情報の漏えい、滅失、毀損等を防止するため、アクセス制御、鍵管理等、合理的な安全管理措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. ユーザーの権利</h2>
              <p className="text-slate-700 leading-relaxed">
                ユーザーは、運営者所定の方法により、情報の開示、訂正、削除等を求めることができます。本人確認のうえ、合理的な範囲で対応します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. 通知設定</h2>
              <p className="text-slate-700 leading-relaxed">
                プッシュ通知は、OSの設定により受信可否を変更できます。通知をオフにすると、重要なお知らせを受け取れない場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. 改定</h2>
              <p className="text-slate-700 leading-relaxed">
                運営者は、必要に応じて本ポリシーを変更することがあります。変更後は、本サービス上での掲示等により周知します。
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
