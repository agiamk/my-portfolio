This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

microCMSとは？
ヘッドレスCMSの一種
ヘッドは見た目のこと。それがレスしてる。

コンテンツの管理とWebページのフロントエンドを切り離す。
* Webページを構築する技術を自由に選択できる
* これによってWebサイトだけでなくモバイルアプリやデジタルサイネージなどWebページ以外のマルチデバイスでコンテンツを配信できる。
apiを叩くとコンテンツをjsonで取得


フレームワークと併用することで効果を発揮
フレームワークルーティング設定やキャッシュの制御がしやすい
特にNext.jsはページごとにレンダリング方式を設定できる
学習コスト、アップデートでされる破壊的変更に対応する必要ある

みつえーでは・・
Next.jsなどの古スタックフレームワークを使った案件は少ない
フロントエンド（制作スタッフ）とバックエンド（TSD）の分業が浸透しているから
microcms+Next.jsを使うことでフロントエンドだけで完結できるようになるため人件費なコストが浮く
webアプリケーションの開発ではNextは主流だがwebサイト制作の現場ではなぜ普及しない？
理由は学習コストだけ？フレームワーク使うよりejsの方が適している？



作ったもの/どういうものが作れるか

apiのキーどうする問題



いい点
開発元が日本の会社なのでドキュメントが読みやすい。学習コストはほかと比べて低い？
日本の会社のため日本語でのサポート体制が充実
（メールサポート、チャットサポート）

慣れれば非エンジニアにもコンテンツ管理ができそうな管理画面
サイトの一部分だけをCMS化できる
クラウドサービスのためサーバー・インフラ管理が不要


わるい点


リクエスト数による料金の増加に対応できるapiの設計力が求められる


microcmsの注目機能（既存cmsにもある機能かも）
* webhook
cmsのコンテンツが変更されたことを他サービスに通知（vercelなど）
vercel側は通知を受けてビルドするように設定しておくとSSGのコンテンツが変更されたとき自動でビルドするようになるためコンテンツを管理しやすくなる


* レビュー機能

* 権限管理機能（Businessプランから）
案件関係者の作業スコープごとに権限を付与。担当外のページにアクセスできなくすることで誤操作防止
