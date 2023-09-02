import React, { useContext } from "react";
import { Homecontext, hometype } from "./Home";

function Sidenav() {
  const homecontext = useContext<hometype | null>(Homecontext);

  return (
    <div className="sidenav py-12 pb-14 justify-center md:justify-left flex flex-row sm:flex-col">
      <div
        className="nav row flex text-white  h-13"
        onClick={() => {
          homecontext?.verified > 0 && homecontext.activeNav(1);
        }}
      >
        <div
          className="w-7 cursor-pointer nave rounded-full nav-active border border-white px-2 mr-2 nav-icon"
          id="1"
        >
          <span className="flex justify-center font-bold"> 1 </span>
        </div>
        <div className="w-full flex flex-col hidden sm:block cursor-pointer">
          <div className="w-full text-xs">Step 1</div>
          <div className="w-full font-bold">Your Info</div>
        </div>
      </div>

      <div
        className="nav row flex text-white h-13"
        onClick={() => homecontext?.verified > 1 && homecontext.activeNav(2)}
      >
        <div
          id="2"
          className="w-7 cursor-pointer nave rounded-full border border-white px-2 mr-2 nav-icon "
        >
          <span className="flex justify-center font-bold"> 2 </span>
        </div>
        <div className="w-full flex flex-col hidden sm:block cursor-pointer">
          <div className="w-full text-xs">Step 2</div>
          <div className="w-full font-bold">Select a plan</div>
        </div>
      </div>

      <div
        className="nav row flex text-white h-13"
        onClick={() => homecontext?.verified > 2 && homecontext.activeNav(3)}
      >
        <div
          id="3"
          className="nave w-7 cursor-pointer rounded-full border border-white px-2 mr-2 nav-icon "
        >
          <span className="flex justify-center font-bold"> 3 </span>
        </div>
        <div className="w-full flex flex-col hidden sm:block cursor-pointer">
          <div className="w-full text-xs">Step 3</div>
          <div className="w-full font-bold">ADD-ONS</div>
        </div>
      </div>

      <div
        className="nav row flex text-white h-13"
        onClick={() => homecontext?.verified > 3 && homecontext.activeNav(4)}
      >
        <div
          id="4"
          className="w-7 cursor-pointer nave rounded-full border border-white px-2 mr-2 nav-icon "
        >
          <span className="flex justify-center font-bold"> 4 </span>
        </div>
        <div className="w-full flex flex-col hidden sm:block cursor-pointer">
          <div className="w-full text-xs">Step Four</div>
          <div className="w-full font-bold">Summary</div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
