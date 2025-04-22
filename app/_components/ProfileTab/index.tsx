"use client";

import { useState } from "react";
import Biography from "../Biography";
import ProfileHobby from "../ProfileHobby";
import ProfileSkills from "../ProfileSkills";

const ProfileTab = () => {
  const [activeTab, setActiveTab] = useState("Hobby");

  const tabContent = () => {
    switch (activeTab) {
      case "Hobby":
        return <ProfileHobby />;
      case "Skills":
        return <ProfileSkills />;
      case "Biography":
        return <Biography />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mt-8 flex rounded-2xl bg-slate-200" role="tablist">
        <button
          className={`w-1/3 rounded-2xl pb-2 pt-2 text-center transition duration-150 hover:bg-stone-500 hover:text-white ${activeTab === "Hobby" && "bg-stone-500 text-white"}`}
          onClick={() => setActiveTab("Hobby")}
          role="tab"
          aria-selected={activeTab === "Hobby"}
          aria-controls="hobby-tabpanel"
          id="hobby-tab"
        >
          Hobby
        </button>
        <button
          className={`w-1/3 rounded-2xl pb-2 pt-2 text-center transition duration-150 hover:bg-stone-500 hover:text-white ${activeTab === "Skills" && "bg-stone-500 text-white"}`}
          onClick={() => setActiveTab("Skills")}
          role="tab"
          aria-selected={activeTab === "Skills"}
          aria-controls="skills-tabpanel"
          id="skills-tab"
        >
          Skills
        </button>
        <button
          className={`w-1/3 rounded-2xl pb-2 pt-2 text-center transition duration-150 hover:bg-stone-500 hover:text-white ${activeTab === "Biography" && "bg-stone-500 text-white"}`}
          onClick={() => setActiveTab("Biography")}
          role="tab"
          aria-selected={activeTab === "Biography"}
          aria-controls="biography-tabpanel"
          id="biography-tab"
        >
          Biography
        </button>
      </div>
      <div
        role="tabpanel"
        aria-labelledby={`${activeTab.toLowerCase()}-tab`}
        id={`${activeTab.toLowerCase()}-tabpanel`}
        className="mt-4 rounded-2xl bg-slate-200 p-4"
      >
        {tabContent()}
      </div>
    </>
  );
};

export default ProfileTab;
