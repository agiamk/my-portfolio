import { IconContext } from "react-icons";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const ProfileSkills = () => {
  return (
    <>
      <h3 className="mb-5 mt-12 border-l-4 border-gray-600 pl-4 text-2xl font-bold">
        Skills
      </h3>
      <div className="p-4">
        <p>使用する技術は以下になります。</p>
        <IconContext.Provider value={{ size: "60px" }}>
          <div>
            <div className="mt-8 flex gap-4">
              <div className="flex">
                <FaHtml5 />
                <FaCss3Alt />
              </div>
              <div>
                <p className="mb-4 text-lg font-bold">HTML/CSS</p>
                <p>現在勤めているアルバイト先で使用しています。</p>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="flex">
                <FaJs />
                <BiLogoTypescript />
              </div>
              <div>
                <p className="mb-4 text-lg font-bold">JavaScript/TypeScript</p>
                <p>個人で勉強してきました。</p>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="flex">
                <FaReact />
                <RiNextjsFill />
              </div>
              <div>
                <p className="mb-4 text-lg font-bold">React/Next.js</p>
                <p>
                  個人で勉強してきました。本サイトはNext.jsで作られています。
                </p>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default ProfileSkills;
