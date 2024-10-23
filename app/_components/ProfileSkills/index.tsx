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
      <h3 className="pt-4 text-xl">Skills</h3>
      <div className="p-4">
        <p>仕様する技術は以下になります。</p>
        <IconContext.Provider value={{ size: "60px" }}>
          <div>
            <div className="mt-8 flex">
              <div className="flex">
                <FaHtml5 />
                <FaCss3Alt />
              </div>
              <div>
                <h4>HTML/CSS</h4>
                <p>現在勤めているアルバイト先で使用しています。</p>
              </div>
            </div>
            <div className="mt-8 flex">
              <div className="flex">
                <FaJs />
                <BiLogoTypescript />
              </div>
              <div>
                <h4>JavaScript/TypeScript</h4>
                <p>個人で勉強してきました。</p>
              </div>
            </div>
            <div className="mt-8 flex">
              <div className="flex">
                <FaReact />
                <RiNextjsFill />
              </div>
              <div>
                <h4>React/Next.js</h4>
                <p>個人で勉強してきました。</p>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default ProfileSkills;
