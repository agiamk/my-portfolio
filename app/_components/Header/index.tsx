"use client";

import { Link as Scroll } from "react-scroll";
import Sheet from "../Sheet";
import Link from "next/link";

type HeaderProps = {
  isScroll: boolean;
};

const Header = ({ isScroll = false }: HeaderProps) => {
  const navItem = [
    { page: "Home", path: "/" },
    { page: "About", path: "/#About" },
    { page: "Portfolio", path: "/portfolio" },
    { page: "Blog", path: "/blog" },
  ];

  return (
    <Sheet>
      <div className="flex justify-between items-center">
        <h1>ポートフォリオ</h1>
        <nav className="flex justify-center items-center gap-7 underline underline-offset-2">
          {isScroll
            ? navItem.map((item) => (
                <Scroll
                  to={item.page}
                  smooth
                  key={item.page}
                  className="cursor-pointer"
                >
                  {item.page}
                </Scroll>
              ))
            : navItem.map((item) => (
                <Link
                  href={item.path}
                  key={item.page}
                  className="cursor-pointer"
                >
                  {item.page}
                </Link>
              ))}
        </nav>
      </div>
    </Sheet>
  );
};

export default Header;
