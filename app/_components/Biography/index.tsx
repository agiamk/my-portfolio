const Biography = () => {
  return (
    <div className="sm:container">
      <h3 className="mb-5 mt-12 border-l-4 border-gray-600 pl-4 text-2xl font-bold">
        Biography
      </h3>
      <div className="p-4">
        <ul className="border-l-4 border-slate-400">
          <li className="relative -ml-2 min-h-32 pb-7 pl-7 before:absolute before:-top-1 before:left-0 before:h-3 before:w-3 before:rounded-xl before:bg-slate-400">
            <div className="flex gap-6 font-bold">
              <time dateTime="2003">2003年10月15日</time>
              <div>宮城県で生まれる</div>
            </div>
            <div className="pt-7">
              <p className="pb-4">2003年の主な出来事</p>
              <ul>
                <li className="relative mb-2 pl-4 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-lg before:bg-slate-400">
                  SMAPが35枚目のシングル「世界に一つだけの花」をリリース
                </li>
                <li className="relative mb-2 pl-4 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-lg before:bg-slate-400">
                  六本木ヒルズが開業
                </li>
                <li className="relative mb-2 pl-4 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-lg before:bg-slate-400">
                  「千と千尋の神隠し」が第75回アカデミー賞・長編アニメ賞を受賞
                </li>
              </ul>
            </div>
          </li>
          <li className="relative -ml-2 min-h-32 pb-7 pl-7 before:absolute before:-top-1 before:left-0 before:h-3 before:w-3 before:rounded-xl before:bg-slate-400">
            <div className="flex gap-6 font-bold">
              <time dateTime="2016">2016</time>
              <div>中学入学</div>
            </div>
            <p className="pt-4">
              部活は弓道部に所属していました。当時はプログラミングに関心がなく、パソコンすら持っていませんでした。
              <br />
              また趣味でギターを始めたのもこの頃です。
            </p>
          </li>
          <li className="relative -ml-2 min-h-32 pb-7 pl-7 before:absolute before:-top-1 before:left-0 before:h-3 before:w-3 before:rounded-xl before:bg-slate-400">
            <div className="flex gap-6 font-bold">
              <time dateTime="2019">2019</time>
              <div>高校入学</div>
            </div>
            <p className="pt-4">
              軽音楽部に入部し、バンド活動を始めました。バンドでは主にベースを担当しました。
              <br />
              高校時代はバンド活動に力を入れ、大会に出場したり定禅寺ストリートジャズフェスティバルに出演しました。
            </p>
          </li>
          <li className="relative -ml-2 min-h-32 pb-7 pl-7 before:absolute before:-top-1 before:left-0 before:h-3 before:w-3 before:rounded-xl before:bg-slate-400">
            <div className="flex gap-6 font-bold">
              <time dateTime="2022">2022年4月</time>
              <div>東北学院大学入学</div>
            </div>
            <p className="pt-4">
              大学ではプログラミングや情報工学を学んでいます。
              <br />
              作り出したプロダクトが世の中に影響を与えることができることに惹かれ、プログラミングを勉強し始めました。
            </p>
          </li>
          <li className="relative -ml-2 min-h-32 pb-7 pl-7 before:absolute before:-top-1 before:left-0 before:h-3 before:w-3 before:rounded-xl before:bg-slate-400">
            <div className="flex gap-6 font-bold">
              <time dateTime="2022">2023年12月～現在</time>
              <div>Web制作会社でアルバイトを開始</div>
            </div>
            <p className="pt-4">
              大手のWeb制作会社にアルバイトとして勤務。大企業のWebページの量産、改修に携わり自分の書いたコードが多くの人に閲覧されることを経験し、Webが与える影響力を肌で実感する。
              <br />
              影響力を実感する中で、Webにアクセスしづらい人の目線も意識するようになりWebアクセシビリティを意識したコーディングを勉強するようになる。
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Biography;
