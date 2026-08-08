Netlify CMS ローカル導入メモ

このリポジトリに追加したファイル:
- `admin/index.html` — Netlify CMS のエントリ (CDN 版)
- `admin/config.yml` — CMS 設定（`git-gateway` を想定）
- `content/works/` — CMS が保存するコンテンツのフォルダ（例: Markdown）
- `data/works.json` — サイトが参照するサンプル JSON（手動で同期）

動かし方（Netlify 上で本番にする手順）:
1. GitHub にこのリポジトリを push。
2. Netlify にサイトを接続してデプロイ。
3. Netlify サイトの「Identity」タブを有効にする。
4. Identity の設定で外部認証 (GitHub) をオンにするか、招待でユーザーを作る。
5. Netlify の「Git Gateway」を有効にする（Identity と連携）。
6. `admin/` にアクセスすると Netlify CMS 管理画面が表示され、コンテンツの作成・編集が行えます。

ローカルで試す場合:
- Netlify Dev を使うと `git-gateway` と Identity をローカルでエミュレートできます。
- 公式ドキュメント: https://www.netlifycms.org/docs/intro/

注意:
- Netlify CMS は Git ベースでコンテンツを保存します。つまり "編集" は Git のコミット/プッシュになります。
- 既存の静的 HTML を CMS 連携させるには、ビルドプロセスで `content/works` の内容を HTML に反映するステップが必要です（静的サイトジェネレータを使うか、ビルドスクリプトで `data/works.json` を生成するなど）。

次の作業候補:
- `work/index.html` を `data/works.json` を読み込む方式に差し替えて、CMS側のコンテンツ変更が即座に表示されるようにする（簡易プロトタイプ）。
- Netlify にデプロイして Identity/Git Gateway を設定し、実際に CMS から編集できるか確認する。
