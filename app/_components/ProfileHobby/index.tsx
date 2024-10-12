const ProfileHobby = () => {
  return (
    <>
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
    </>
  );
};

export default ProfileHobby;
