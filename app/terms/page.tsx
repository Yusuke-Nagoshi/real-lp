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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            利用規約（あるこ）
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
                本利用規約（以下「本規約」）は、運営者が提供する位置情報ゲーム好きの友達探しサービス「あるこ」（以下「本サービス」）の利用条件を定めます。ユーザーは、本規約に同意のうえ本サービスを利用するものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. 定義</h2>
              <ul className="list-disc list-inside text-slate-700 space-y-3 ml-4">
                <li><strong>ユーザー</strong>：本サービスを利用する個人</li>
                <li><strong>投稿コンテンツ</strong>：プロフィール情報、自己紹介文、写真、メッセージ等、ユーザーが本サービスに送信・登録する一切の情報</li>
                <li><strong>安心マーク（写真確認マーク）</strong>：運営者が登録写真を目視確認し、一定の基準に照らして「本サービス内での表示に適切」と判断したことを示すマーク
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>※本人確認（身分証等）とは別物であり、本人確認マークを付与する場合は別途の手続・基準によります</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. 利用条件・年齢</h2>
              <ol className="list-decimal list-inside text-slate-700 space-y-3 ml-4">
                <li>ユーザーは、法令・本規約を遵守して本サービスを利用します。</li>
                <li>未成年者（18歳未満）は本サービスを利用できません。</li>
                <li>運営者は、必要に応じて年齢確認や本人確認を求める場合があります。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. アカウント</h2>
              <ol className="list-decimal list-inside text-slate-700 space-y-3 ml-4">
                <li>ユーザーは、真実かつ正確な情報を登録するものとします。</li>
                <li>アカウントの管理責任はユーザーにあります。第三者に利用されたことにより生じた損害について、運営者は故意または重過失がある場合を除き責任を負いません。</li>
                <li>運営者は、以下の場合にアカウントの利用制限・停止・削除（BAN等）を行うことがあります。
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>本規約違反の疑いがある場合</li>
                    <li>迷惑行為・不正利用・セキュリティ上のリスクがある場合</li>
                    <li>その他、運営者が合理的に必要と判断する場合</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. 写真・投稿コンテンツ</h2>
              <ol className="list-decimal list-inside text-slate-700 space-y-3 ml-4">
                <li>ユーザーは、自身が権利を有し、または適法に利用許諾を得た投稿コンテンツのみを登録できます。</li>
                <li>運営者は、投稿コンテンツが本規約に違反すると判断した場合、事前通知なく削除・非表示等の措置を行うことができます。</li>
                <li>本サービス運営・機能提供（表示、モデレーション、審査、セキュリティ対策、トラブル対応等）のため、運営者は必要な範囲で投稿コンテンツを取り扱います。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. 安心マーク（写真確認マーク）について</h2>
              <ol className="list-decimal list-inside text-slate-700 space-y-3 ml-4">
                <li>安心マークは、運営者が当該写真を目視確認し、一定の基準に照らして「本サービス内での表示に適切」と判断したことを示すものです。</li>
                <li>安心マークは、以下を保証するものではありません。
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>被写体が当該ユーザー本人であること（本人確認）</li>
                    <li>実在性、年齢、所属、交際状況等の真実性</li>
                    <li>事故・トラブルの不発生</li>
                  </ul>
                </li>
                <li>運営者は、運用上の必要に応じて、安心マークの付与・取り消し・基準変更を行うことがあります。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. 禁止事項</h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                ユーザーは、本サービスの利用にあたり以下の行為をしてはなりません。
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                <li>虚偽情報の登録、なりすまし、第三者になりすます行為</li>
                <li>迷惑行為、脅迫、誹謗中傷、差別的表現、嫌がらせ、ストーキング行為</li>
                <li>性的搾取、児童に関する不適切行為、違法・危険行為の勧誘</li>
                <li>わいせつ・露骨な性的表現、過度なヌード、暴力表現等の不適切コンテンツの投稿</li>
                <li>営業・勧誘、マルチ商法、投資勧誘、売春・援助交際の勧誘等</li>
                <li>不正アクセス、リバースエンジニアリング、スクレイピング、脆弱性探索、妨害行為</li>
                <li>反社会的勢力への利益供与、またはこれに準ずる行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. 通報・ブロック・利用停止</h2>
              <p className="text-slate-700 leading-relaxed">
                本サービスは、ユーザー保護のため通報・ブロック機能を提供します。運営者は、通報内容等に基づき調査を行い、必要に応じて警告・利用制限・停止（BAN）等の対応を行います。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. 通知</h2>
              <p className="text-slate-700 leading-relaxed">
                本サービスは、マッチ成立、メッセージ受信、運営からのお知らせ、審査結果等に関する通知（プッシュ通知等）を送信する場合があります。通知の受信可否は、OSの設定等によりユーザーが制御できます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. 免責</h2>
              <ol className="list-decimal list-inside text-slate-700 space-y-3 ml-4">
                <li>運営者は、本サービスが常に安全・正確・完全に提供されることを保証しません。</li>
                <li>本サービスは友達探しの結果を保証しません。ユーザー間のトラブルは当事者間で解決するものとします。ただし運営者は、必要に応じて合理的な範囲で調査・対応を行います。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. 規約の変更</h2>
              <p className="text-slate-700 leading-relaxed">
                運営者は、必要に応じて本規約を変更できます。変更後の規約は、本サービス上での掲示等、運営者が適切と判断する方法で周知し、周知後にユーザーが利用を継続した場合、変更に同意したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. 準拠法・裁判管轄</h2>
              <p className="text-slate-700 leading-relaxed">
                本規約は日本法を準拠法とし、本サービスに関して紛争が生じた場合、運営者の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
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
