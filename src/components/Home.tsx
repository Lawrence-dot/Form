import React, { createContext, useState } from "react";
import "./Home.css";
import Main from "./Main";
import Sidenav from "./Sidenav";

export type hometype = {
  activeNav: (num: number) => void;
  verified: number;
  setverified: (b: number) => void;
};

export const Homecontext = createContext<hometype | null>(null);

function Home() {
  const [verified, setverified] = useState<number>(1);
  const activeNav = (num: number) => {
    let navs: Element[] = Array.from(document.getElementsByClassName("nave"));
    let pages: Element[] = Array.from(
      document.getElementsByClassName("main-body")
    );
    navs.forEach((each) => {
      each.classList.remove("nav-active");
      each.id === `${num}` && each.classList.add("nav-active");
      num === 5 && each.id === "4" && each.classList.add("nav-active");
    });

    pages.forEach((each) => {
      each.classList.add("hided");
      each.id === `${num}` && each.classList.remove("hided");
    });
  };

  return (
    <Homecontext.Provider value={{ activeNav, verified, setverified }}>
      <div className="body flex flex-col md:flex-row">
        <div className="sideNav">
          <Sidenav />
        </div>
        <div className="mainform w-full transition">
          <Main />
        </div>
      </div>
    </Homecontext.Provider>
  );
}

export default Home;
