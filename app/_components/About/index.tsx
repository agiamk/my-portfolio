import React from "react";
import Sheet from "../Sheet";

const About = () => {
  return (
    <Sheet bgBlack>
      <div className="flex flex-col md:flex-row md:gap-60">
        <h2 id="About" className="whitespace-nowrap text-2xl">
          About Me
        </h2>
        <div className="pt-4 md:pt-0">
          <h3>鎌田大河/Taiga Kamada</h3>
          <p className="pt-2">
            宮城県在住の大学3年生。
            <br />
            大学ではJavaを使ったシステム開発やコンピューターサイエンスについて学んでいます。
            Web制作会社でアルバイトをしており、ページの更新、量産や新規モジュールの開発などをしています。
            <br />
            メインはフロントエンドですが、将来的にはフルスタックエンジニアとして活躍したいです。
          </p>
        </div>
      </div>
      <h3 className="pt-4 text-xl">Hobby</h3>
      <div className="p-4">
        <div>
          <h4>楽器演奏（ギター/ベース）</h4>
          <p>高校時代はバンドを組んでおり、ベースを担当していました。</p>
        </div>
        <div>
          <div>FUJIGEN ベース</div>

          {/* ベースの写真 */}
        </div>
        <div>
          <div>YAMAHA PACIFIKA</div>

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
      <h3 className="pt-4 text-xl">Skills</h3>
      <div className="p-4">
        <h4>HTML/CSS</h4>
        <p>
          アルバイトで使用しており、ページ量産、運用（リンク、テキスト差し替えなど）、モジュール設計の経験があります。
          <br />
          アクセシビリティを意識したコーディングを勉強中です。
        </p>
      </div>
      <div className="p-4">
        <h4>JavaScript/Typescript</h4>
        <p>仕事では使っておらず、個人で勉強しています。</p>
      </div>
      <div className="p-4">
        <h4>React/Next.js</h4>
        <p>仕事では使っておらず、個人で勉強しています。</p>
      </div>
      <div className="p-4">
        <h4>Java</h4>
        <p>大学の授業、ゼミを通して学んでいます。</p>
      </div>
    </Sheet>
  );
};

export default About;
