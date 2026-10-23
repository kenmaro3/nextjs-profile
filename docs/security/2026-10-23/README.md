# セキュリティ更新 — 2026-10-23

## 調査と更新

公式情報、npm registry、Yarn lockfile 全依存監査と本番依存監査、ソースの利用機能を確認。

| 対象 | 更新前 | 更新後 |
| --- | --- | --- |
| Next.js | 16.2.4 | 16.4.2 |
| React / React DOM | 19.2.5 | 19.2.9 |
| sharp | 0.34.5 | 0.35.5 |
| プロジェクトの Node.js 指定 | >=22 <25 / .nvmrc 24 | >=24.22.1 <25 / .nvmrc 24.22.1 |
| Vercel プロジェクト設定 | 18.x（package.json が優先） | 24.x |

Node.js 24.22.1 公式 macOS arm64 バイナリを SHA256 照合してローカル検証に使用。マシン全体の既定 Node.js 22.2.0 は変更していないため、このプロジェクトでは `.nvmrc` の版を選択すること。
Vercel のマイナー・パッチ版はプラットフォーム管理。prebuild で実版をログに出力する。

Next.js 10月14日告知の修正版 16.4.1 以上、Node.js 10月21日告知の修正版 24.22.1 を採用。
既存範囲内で推移依存を更新し、commitizen は 4.3.2 に更新。external-editor の tmp は API 互換性を確認する対象として 0.2.7 に限定上書き。
JSON-LD の `<` を Unicode escape に変換し、閉じ script タグの混入を防止。

## 監査結果

`audit-results.json` に修正前後の集計・アドバイザリ・依存経路を保存。

- 修正前: critical 8 / high 100 / moderate 59 / low 13（依存経路を含む Yarn 集計）。
- 修正後の本番依存: すべて 0。
- 修正後の全依存: high 4、その他 0。4件は同じ braces アドバイザリへの4依存経路。
- 残件: CVE-2026-93687 / GHSA-vfj7-8cjw-p6xm、braces 3.0.3。確認時点で修正版なし。
- 経路: lint-staged、commitizen、@typescript-eslint/parser、@typescript-eslint/eslint-plugin。開発ツール内の glob 処理で、本番依存監査には含まれない。未信頼の glob パターンをこれらのツールへ渡さず、修正版公開後に更新する。指摘の除外・隠蔽はしていない。

## 利用状況と検証範囲

App Router を利用。画像最適化は `unoptimized: true`。Server Actions、use cache、middleware/proxy、next/og の使用は見つからなかった。MDX はリポジトリ内ファイルから読み込む。
本調査は既知依存脆弱性の監査と対象箇所のソース確認であり、侵害履歴の調査や網羅的ペネトレーションテストではない。

- Node.js 24.22.1 で frozen-lockfile インストール成功。
- TypeScript type-check 成功。
- Next.js 16.4.2 webpack 本番ビルド成功。
- ローカル本番サーバー: 公開生成ルート30件が HTTP 200、存在しないルートが404。
- JSON-LD: `</script><script>` を含む値でも script 要素が1個で、JSON値が保持される回帰チェック成功。
- Git diff whitespace check 成功。

## 一次情報

- https://nextjs.org/blog/nextjs-security-update-october-14-2026
- https://nodejs.org/en/blog/vulnerability/october-2026-security-releases
- https://github.com/advisories/GHSA-vfj7-8cjw-p6xm
- https://vercel.com/docs/functions/runtimes/node-js/node-js-versions
