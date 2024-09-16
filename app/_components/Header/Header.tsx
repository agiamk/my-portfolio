"use client";

import { Link as Scroll } from "react-scroll";

const Header: React.FC = () => {
  const navItem = ["Home", "About", "Portfolio", "Blog"];

  return (
    <div className="flex">
      <div>ポートフォリオ</div>
      <nav>
        {navItem.map((item) => (
          <Scroll to={item} smooth key={item}>
            {item}
          </Scroll>
        ))}
      </nav>
    </div>
  );
};

export default Header;
