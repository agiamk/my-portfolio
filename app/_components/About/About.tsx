import React from "react";
import Sheet from "../Sheet";
import Circle from "react-circle";

const About = () => {
  return (
    <Sheet bgBlack>
      <div className="flex p-6 gap-60">
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
          <h3 className="text-xl">Skills</h3>
          <div>
            <div className="relative w-28 h-28 bg-white rounded-full text-center overflow-hidden z-10 before:block before:absolute before:top-0 before:left-14 before:w-28 before:h-28 before:bg-orange-500 before:origin-right before:z-20">
              <div>HTML</div>
            </div>
          </div>
        </div>
      </div>
    </Sheet>
  );
};

export default About;
