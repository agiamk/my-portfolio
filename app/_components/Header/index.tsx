"use client";

import { Link as Scroll } from "react-scroll";
import Sheet from "../Sheet";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { useEffect, useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";

type HeaderProps = {
  isScroll?: boolean;
};

const Header = ({ isScroll = false }: HeaderProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const headerHeightRef = useRef<HTMLElement>(null);

  const navItem = [
    { page: "Home", path: "/" },
    { page: "About", path: "/#About" },
    { page: "Portfolio", path: "/portfolio" },
    { page: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    if (!headerHeightRef.current) throw Error("headerRef is not assigned");
    console.log(headerHeightRef.current.offsetHeight);
  }, []);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <Sheet>
      <header
        className="flex justify-between items-center"
        ref={headerHeightRef}
      >
        <h1>ポートフォリオ</h1>
        <div className="md:hidden">
          {openMenu ? (
            <button
              onClick={toggleMenu}
              className="fixed top-4 right-4 bg-black z-50"
            >
              <IconContext.Provider
                value={{
                  size: "30px",
                  color: "white",
                }}
              >
                {/* TODO:アクセシビリティ的にこの記述大丈夫か */}
                <MdOutlineClose />
              </IconContext.Provider>
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 z-50"
            >
              <IconContext.Provider
                value={{
                  size: "30px",
                }}
              >
                <GiHamburgerMenu />
              </IconContext.Provider>
            </button>
          )}
        </div>
        <nav
          className={`${
            openMenu
              ? "fixed top-0 right-0 z-20 p-6 pt-16 bg-white w-[calc(100vw_-_13rem)] h-full"
              : "hidden"
          } md:flex justify-center items-center gap-7 underline underline-offset-2`}
        >
          {isScroll
            ? navItem.map((item) => {
                return item.page === "Portfolio" ? null : (
                  <Scroll
                    to={item.page}
                    smooth
                    key={item.page}
                    className="cursor-pointer block p-2 m-2"
                    onClick={toggleMenu}
                  >
                    {item.page}
                  </Scroll>
                );
              })
            : navItem.map((item) => {
                return item.page === "Portfolio" ? null : (
                  <Link
                    href={item.path}
                    key={item.page}
                    className="cursor-pointer block p-2 m-2"
                    onClick={toggleMenu}
                  >
                    {item.page}
                  </Link>
                );
              })}
        </nav>
        {openMenu ? (
          <div
            className="fixed bg-zinc-900 w-full h-full top-0 left-0 z-10 opacity-25 md:hidden"
            onClick={toggleMenu}
          ></div>
        ) : null}
      </header>
    </Sheet>
  );
};

export default Header;
