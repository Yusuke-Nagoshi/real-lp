# あるこ - 待機リストLP

「あるこ（位置情報ゲーム好きの友達探し）」の待機リストランディングページです。

## 技術スタック

- Next.js 16（App Router）
- TypeScript
- Tailwind CSS

## ローカルでの起動方法

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

### 3. ブラウザで確認

[http://localhost:3000](http://localhost:3000) を開いて、LPを確認できます。

### その他のコマンド

```bash
# 本番用ビルド
npm run build

# 本番サーバーの起動（ビルド後）
npm start

# リンターの実行
npm run lint
```

## Vercelへのデプロイ手順

### 方法1: GitHubリポジトリ経由でデプロイ（推奨）

#### 1. GitHubにリポジトリを作成

```bash
# 既にGitリポジトリが初期化されている場合
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/real-lp.git
git push -u origin main
```

#### 2. Vercelでプロジェクトをインポート

1. [Vercel](https://vercel.com) にアクセスしてログイン
2. 「Add New...」→「Project」を選択
3. 「Import Git Repository」からGitHubリポジトリを選択
4. プロジェクト設定を確認（通常はそのままでOK）
5. 「Deploy」をクリック

#### 3. 自動デプロイ

- プッシュのたびに自動でデプロイされます
- デプロイが完了すると、URLが発行されます

### 方法2: Vercel CLIで直接デプロイ（GitHubなし）

#### 1. Vercel CLIのインストール

```bash
npm i -g vercel
```

#### 2. Vercelにログイン

```bash
vercel login
```

#### 3. プロジェクトのデプロイ

```bash
# プロジェクトディレクトリで実行
cd real-lp
vercel
```

初回デプロイ時は、以下の質問に答えます：

- **Set up and deploy "~/real-lp"?** → `Y`
- **Which scope?** → 自分のアカウントを選択
- **Link to existing project?** → `N`（新規プロジェクトの場合）
- **What's your project's name?** → `real-lp`（任意）
- **In which directory is your code located?** → `./`（そのままEnter）
- **Want to override the settings?** → `N`（通常はそのままでOK）

#### 4. 本番環境へのデプロイ

```bash
vercel --prod
```

#### 5. 今後の更新

コードを変更したら、再度以下を実行：

```bash
vercel --prod
```

または、GitHubと連携すれば自動デプロイが有効になります。

## プロジェクト構成

```
real-lp/
├── app/
│   ├── layout.tsx      # ルートレイアウト（メタデータ含む）
│   ├── page.tsx         # LP本体
│   └── globals.css      # グローバルスタイル
├── public/              # 静的ファイル
├── package.json
└── README.md
```

## 公式LINEボタン経由の回数（中継ページ + 通常の Analytics）

LP全体の訪問数はこれまでどおり **Vercel Web Analytics** のページビューで分かります。

公式LINEへの導線だけを別カウントしたいので、ボタンは一度 **`/go/line?from=（場所）`** を踏んでから `lin.ee` へ飛ぶようにしています。**`/go/line` のページビュー数が「LINE ボタンを押した回数」**に相当します（追加の DB や Pro の Events は不要）。

- Vercel プロジェクトの **Analytics** で、パス別・URL 別の表示を確認してください。
- `from` クエリ付きで集計される場合は、ボタン位置ごとの内訳も見られます。

## 注意事項

- 画像はプレースホルダーとして実装されています。後で実際の画像に差し替えてください。
- CTAは公式LINE（`lin.ee`）へ遷移します。URLは `app/page.tsx` の `LINE_URL` で管理されています。

## ライセンス

このプロジェクトはプライベートプロジェクトです。
