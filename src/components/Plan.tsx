import React, { useContext } from "react";
import { MainContext, maintype } from "./Main";

interface Props {
  name: string;
  amount: string;
  duration?: string;
  click?: () => void;
}

function Plan(props: Props) {
  const setplan = useContext<maintype>(MainContext);
  const selectPlan = () => {
    setplan.setplantype(props.name);
    var plans: Element[] = Array.from(document.getElementsByClassName("plan"));
    plans.forEach((each) => {
      each.classList.remove("border-blue-700");
      each.classList.remove("active");
      each.id === props.name && each.classList.add("border-blue-700");
      each.id === props.name && each.classList.add("active");
    });
  };
  return (
    <div
      onClick={() => {
        selectPlan();
        props.click();
      }}
      id={props.name}
      className="plan p-3  cursor-pointer sm:mx-2 flex flex-row sm:flex-col border w-fit rounded-md"
    >
      <div className="plan-img my-2 mb-5">
        <img
          src={
            props.name === "Arcade"
              ? "icon-arcade.svg"
              : props.name === "Pro"
              ? "icon-pro.svg"
              : "icon-advanced.svg"
          }
          alt=""
        />
      </div>
      <div className="flex flex-col ml-2 sm:ml-none">
        <span className="text-blue-900 font-bold m1-2"> {props.name} </span>
        <span className="mb-2">
          {" "}
          ${props.amount}/{props.duration === "Yearly" ? "yr" : "mo"}
        </span>
      </div>
    </div>
  );
}

export default Plan;
