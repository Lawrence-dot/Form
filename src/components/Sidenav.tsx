import React, { useContext } from "react";
import { Homecontext, hometype } from "./Home";

function Sidenav() {
  const homecontext = useContext<hometype | null>(Homecontext);

  return (
    <div className="sidenav py-12 pb-14 justify-center md:justify-left flex  md:flex-col">
      <div
        className="nav flex-row flex text-white  h-13"
        onClick={() => {
          homecontext?.verified > 0 && homecontext.activeNav(1);
        }}
      >
        <div
          className="w-7 cursor-pointer nave rounded-full nav-active border border-white px-2 mr-2 nav-icon"
          id="1"
        >
          <span className="flex justify-center font-semibold"> 1 </span>
        </div>
        <div className=" flex flex-col hidden md:block cursor-pointer">
          <div className="w-full text-xs opacity-75">STEP 1</div>
          <div className="w-full nav-big font-bold">YOUR INFO </div>
        </div>
      </div>

      <div
        className="nav flex-row flex text-white h-13"
        onClick={() => homecontext?.verified > 1 && homecontext.activeNav(2)}
      >
        <div
          id="2"
          className="w-7 cursor-pointer nave rounded-full border border-white px-2 mr-2 nav-icon "
        >
          <span className="flex justify-center font-semibold"> 2 </span>
        </div>
        <div className="flex flex-col hidden md:block cursor-pointer">
          <div className="w-full text-xs opacity-75">STEP 2</div>
          <div className="w-full nav-big font-bold">SELECT A PLAN</div>
        </div>
      </div>

      <div
        className="nav flex-row flex text-white h-13"
        onClick={() => homecontext?.verified > 2 && homecontext.activeNav(3)}
      >
        <div
          id="3"
          className="nave w-7 cursor-pointer rounded-full border border-white px-2 mr-2 nav-icon "
        >
          <span className="flex justify-center font-semibold"> 3 </span>
        </div>
        <div className="flex flex-col hidden md:block cursor-pointer">
          <div className="w-full text-xs opacity-75">STEP 3</div>
          <div className="w-full nav-big font-bold">ADD-ONS</div>
        </div>
      </div>

      <div
        className="nav flex-row flex text-white h-13"
        onClick={() => homecontext?.verified > 3 && homecontext.activeNav(4)}
      >
        <div
          id="4"
          className="w-7 cursor-pointer nave rounded-full border border-white px-2 mr-2 nav-icon "
        >
          <span className="flex justify-center font-semibold"> 4 </span>
        </div>
        <div className="flex flex-col hidden md:block cursor-pointer">
          <div className="w-full text-xs opacity-75">STEP Four</div>
          <div className="w-full nav-big font-bold">SUMMARY</div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
