"use client";

import { Link as Scroll } from "react-scroll";
import Sheet from "../Sheet";

const Header: React.FC = () => {
  const navItem = ["Home", "About", "Portfolio", "Blog"];

  return (
    <Sheet>
      <div className="flex p-6 justify-between items-center">
        <h1>ポートフォリオ</h1>
        <nav className="flex justify-center items-center gap-7 underline underline-offset-2">
          {navItem.map((item) => (
            <Scroll to={item} smooth key={item} className="cursor-pointer">
              {item}
            </Scroll>
          ))}
        </nav>
      </div>
    </Sheet>
  );
};

export default Header;
