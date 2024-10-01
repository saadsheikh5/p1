import React from "react";

export const Card = ({ heading, name, number }) => {
  return (
    <div className="bg-slate-800 h-72 w-80 p-6 m-5">
      <ul>
        <li>this is heading {heading}</li>
        <li>this is name {name}</li>
        <li>this is number {number}</li>
      </ul>
    </div>
  );
};

export default Card;
