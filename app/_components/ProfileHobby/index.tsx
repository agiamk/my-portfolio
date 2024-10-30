const ProfileHobby = () => {
  return (
    <>
      <h3 className="mb-5 mt-12 border-l-4 border-gray-600 pl-4 text-2xl font-bold">
        Hobby
      </h3>
      <div className="p-4">
        <div>
          <h4 className="mb-4 text-lg font-bold">楽器演奏（ギター/ベース）</h4>
          <p>
            高校時代はバンドを組んでおり、ベースを担当していました。
            <br />
            現在でも趣味として演奏を楽しんでいます。
          </p>
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
        <h4 className="mb-4 text-lg font-bold">海外サッカー観戦</h4>
        <p>
          最近見始めました。応援しているチームはブライトンです。イギリスへ行き、プレミアリーグを現地で観戦することが夢です。
        </p>
      </div>
      <div className="p-4">
        <h4 className="mb-4 text-lg font-bold">お酒</h4>
        <p>
          最近はコンビニのワインを飲み比べるのみハマっています。社会人になったら高めのワインを飲んでみたいです。
        </p>
      </div>
    </>
  );
};

export default ProfileHobby;
