import ProfileHobby from "../ProfileHobby";
import ProfileSkills from "../ProfileSkills";
import { useState } from "react";

const ProfileTab = () => {
  const [activeTab, setActiveTab] = useState("Hobby");

  const tabContent = () => {
    switch (activeTab) {
      case "Hobby":
        return <ProfileHobby />;
      case "Skills":
        return <ProfileSkills />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mt-8 flex rounded-2xl bg-slate-50 text-[#171717]">
        <button
          className={`w-1/3 rounded-2xl pb-2 pt-2 text-center transition duration-150 hover:bg-stone-300 hover:text-white ${activeTab === "Hobby" && "bg-stone-500 text-white"}`}
          onClick={() => setActiveTab("Hobby")}
        >
          Hobby
        </button>
        <button
          className={`w-1/3 rounded-2xl pb-2 pt-2 text-center transition duration-150 hover:bg-stone-300 hover:text-white ${activeTab === "Skills" && "bg-stone-500 text-white"}`}
          onClick={() => setActiveTab("Skills")}
        >
          Skills
        </button>
        <button className="w-1/3 rounded-2xl pb-2 pt-2 text-center transition duration-150 hover:bg-stone-300 hover:text-white">
          なんか適当に
        </button>
      </div>
      <div>{tabContent()}</div>
    </>
  );
};

export default ProfileTab;