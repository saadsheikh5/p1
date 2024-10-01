import React from "react";
import Card from "./Card";
export const Products = () => {
  return (
    <div className="h-screen w-full bg-slate-400 flex">
      <Card heading="this is card 1" name="saad" number={"265"} />
      <Card heading="this is card 3" name="ali" number={"261"} />
      <Card heading="this is card 4" name="cena" number={"262"} />
      <Card heading="this is card 5" name="john" number={"264"} />
    </div>
  );
};

export default Products;
