import React from "react";
import Sheet from "../Sheet";

const About = () => {
  return (
    <Sheet bgBlack>
      <div className="flex flex-col md:gap-60 md:flex-row">
        <h2 id="About" className="text-2xl whitespace-nowrap">
          About Me
        </h2>
        <div className="pt-4 md:pt-0">
          <h3>鎌田大河/Taiga Kamada</h3>
          <p className="pt-2">
            東北学院大学 教養学部 情報科学科3年生。
            <br />
            生まれ育ちともに宮城県です。大学ではJavaを使ったシステム開発やコンピューターサイエンスについて学んでいます。
            2023年の12月からWeb制作会社でアルバイトをはじめ、ページの更新、量産や新規モジュールの開発などをしています。
            メインはフロントエンドですが、将来的にはフルスタックエンジニアとして活躍したいです。
          </p>
        </div>
      </div>
      <h3 className="text-xl pt-4 md:pt-0">Hobby</h3>
      <div className="p-4">
        <div>
          <h4>楽器演奏（ギター/ベース）</h4>
          <p>高校時代はバンドを組んでおり、ベースを担当していました。</p>
        </div>
        <div>
          <div>FUJIGEN ベース</div>
          <img src="" alt="" />
          {/* ベースの写真 */}
        </div>
        <div>
          <div>YAMAHA PACIFIKA</div>
          <img src="" alt="" />
          {/* ギターの写真 */}
        </div>
      </div>
      <div className="p-4">
        <h4>海外サッカー観戦</h4>
        <p>
          最近見始めました。応援しているチームはブライトンです。プレミアリーグを現地で観戦することが夢です。
        </p>
      </div>
      <div className="p-4">
        <h4>お酒</h4>
        <p>
          最近はコンビニのワインを飲み比べるのみハマっています。社会人になったら高めのワインを飲んでみたいです。
        </p>
      </div>
      <h3 className="text-xl">Skills</h3>
      <div className="p-4">
        <dl>
          <dt>HTML/CSS</dt>
          <dd>
            アルバイトで使用しており、ページ量産、運用（リンク、テキスト差し替えなど）、モジュール設計の経験があります。アクセシビリティを意識したコーディングを勉強中です。
          </dd>
          <dt>JavaScript/Typescript</dt>
          <dd>仕事では使っておらず、個人で勉強しています。</dd>
          <dt>React/Next.js</dt>
          <dd>
            仕事では使っておらず、個人で勉強しています。本サイトはNext.jsで作られています。
          </dd>
          <dt>Java</dt>
          <dd>大学の授業、ゼミを通して学んでいます。</dd>
        </dl>
      </div>
    </Sheet>
  );
};

export default About;
