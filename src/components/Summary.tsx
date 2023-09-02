import React from "react";

interface Props {
  name: string;
  amount: string;
  duration?: string;
}

function Summary(props: Props) {
  return (
    <div id={props.name} className="flex">
      <span>{props.name} </span>
      <span className="ml-auto">
        ${props.amount}/{props.duration === "Monthly" ? "mo" : "yr"}
      </span>
    </div>
  );
}

export default Summary;
