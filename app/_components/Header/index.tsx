"use client";

import { Link as Scroll } from "react-scroll";
import Sheet from "../Sheet";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { MouseEventHandler, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { RxOpenInNewWindow } from "react-icons/rx";

type HeaderProps = {
  isTopPage?: boolean;
};

const Header = ({ isTopPage = false }: HeaderProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  const navItem = [
    { page: "Home", path: "/" },
    { page: "About", path: "/#About" },
    { page: "Blog", path: "/#Blog" },
  ];

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleSetActive = (to: string) => {
    console.log(to);
    const destination: HTMLElement = document.querySelector("#" + to)!;
    destination.setAttribute("tabIndex", "0");
    destination.focus();
  };

  return (
    <Sheet>
      <header className="flex items-center justify-between">
        {isTopPage ? (
          <h1 className="text-xl font-bold">
            <Link href="/" className="text-xl font-bold">
              PORTFOLIO
            </Link>
          </h1>
        ) : (
          <div>
            <Link href="/" className="text-xl font-bold">
              PORTFOLIO
            </Link>
          </div>
        )}
        <div className="md:hidden">
          {openMenu ? (
            <button
              onClick={toggleMenu}
              className="fixed right-4 top-4 z-50 bg-black"
              type="button"
              aria-label="メニューを開く"
            >
              <IconContext.Provider
                value={{
                  size: "30px",
                  color: "white",
                }}
              >
                <MdOutlineClose />
              </IconContext.Provider>
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="absolute right-4 top-4 z-50"
              type="button"
              aria-label="メニューを閉じる"
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
              ? "fixed right-0 top-0 z-20 h-full w-2/5 bg-white p-6 pt-16"
              : "hidden"
          } items-center justify-center gap-7 underline underline-offset-2 md:flex`}
        >
          {navItem.map((item) =>
            isTopPage ? (
              <Scroll
                key={item.page}
                to={item.page}
                smooth
                className="m-2 block cursor-pointer p-2"
                onSetActive={handleSetActive}
                spy={true}
                href="#"
              >
                {item.page}
              </Scroll>
            ) : (
              <Link
                key={item.page}
                href={item.path}
                className="m-2 block cursor-pointer p-2"
                onClick={() => setOpenMenu(false)}
              >
                {item.page}
              </Link>
            ),
          )}
          <Link
            href="https://github.com/agiamk"
            target="_blank"
            className="m-2 cursor-pointer p-2"
          >
            GitHub
            <RxOpenInNewWindow className="inline-block" />
          </Link>
        </nav>
        {openMenu ? (
          <div
            className="fixed left-0 top-0 z-10 h-full w-full bg-zinc-900 opacity-25 md:hidden"
            onClick={toggleMenu}
          ></div>
        ) : null}
      </header>
    </Sheet>
  );
};

export default Header;
