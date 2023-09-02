import React from "react";

interface Props {
  name: string;
  amount: string;
  info?: string;
  duration?: string;
  check?: (arr: Addonstype, type: string, num?: number) => void;
}

export interface Addonstype {
  name: string;
  amount: string;
}

function Pick(props: Props) {
  const selectPlan = (elem: any) => {
    var plans: Element[] = Array.from(document.getElementsByClassName("pick"));

    elem.target.checked
      ? props.check({ name: props.name, amount: props.amount }, "add")
      : props.check({ name: props.name, amount: props.amount }, "remove");

    plans.forEach((each) => {
      each.id === props.name && each.classList.toggle("border-blue-700");
      each.id === props.name && each.classList.toggle("active");
    });
  };

  return (
    <div
      id={props.name}
      className="p-3 md:mx-2 pick flex flex-row my-2 border rounded-md"
    >
      <div className="pick-check my-2 mb-5">
        <input
          onClick={(e) => {
            selectPlan(e);
          }}
          type="checkbox"
          name=""
          className="pickcheck"
        />
      </div>

      <div className="flex flex-col ml-3 sm:ml-none">
        <span className="pick-text font-bold m1-2"> {props.name} </span>
        <span className="mb-2"> {props.info} </span>
      </div>

      <div className="ml-auto">
        <span>
          {" "}
          +{props.amount}/{props.duration === "Yearly" ? "yr" : "mo"}{" "}
        </span>
      </div>
    </div>
  );
}

export default Pick;
