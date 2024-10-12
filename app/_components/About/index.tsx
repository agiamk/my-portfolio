"use client";

import Sheet from "../Sheet";
import ProfileTab from "../ProfileTab";

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
      <ProfileTab />
    </Sheet>
  );
};

export default About;
