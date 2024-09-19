import React from "react";
import Sheet from "../Sheet";

const About = () => {
  return (
    <Sheet bgBlack>
      <div className="flex gap-60">
        <h2 id="About" className="text-2xl whitespace-nowrap">
          About Me
        </h2>
        <div>
          <h3>鎌田大河/Taiga Kamada</h3>
          <p>
            東北学院大学 教養学部 情報科学科3年生。
            <br />
            生まれ育ちともに宮城県です。大学ではJavaを使ったシステム開発やコンピューターサイエンスについて学んでいます。
            2023年の12月からWeb制作会社でアルバイトをはじめ、ページの更新、量産や新規モジュールの開発などをしています。
            メインはフロントエンドですが、将来的にはフルスタックエンジニアとして活躍したいです。
          </p>
        </div>
      </div>
      <h3 className="text-xl">Skills</h3>
      <dl>
        <dt>HTML</dt>
        <dd>
          アルバイトで使っています。アクセシビリティを意識したコーディングを勉強中です。
        </dd>
        <dt>CSS</dt>
        <dd>
          アルバイトで使っています。設計手法はBEMを導入し、保守しやすいコードを心がけています。
        </dd>
        <dt>JavaScript</dt>
        <dd>
          アルバイトで使っています。アクセシビリティを意識したコーディングを勉強中です。
        </dd>
        <dt>React/Next.js</dt>
        <dd>
          仕事では使っておらず、個人で勉強しています。本サイトはNext.jsで作られています。
        </dd>
        <dt>Java</dt>
        <dd>学校で使っています</dd>
      </dl>
    </Sheet>
  );
};

export default About;
