import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="flex space-x-4 place-content-evenly  bg-yellow-300 h-14">
      <h1 className="absolute left-3 m-5 bg-slate-500 w-32">logo</h1>

      <input
        className=" m-5 rounded-xl content-center border-black border-collapse w-96 absolute"
        type="text"
        placeholder="Search by keywords"
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="  bg-slate-500 rounded-lg h-8 w-20 absolute right-3 m-3">
        <Link to="/cart">Cart</Link>
      </button>
      <div className="h-0.5 bg-black w-screen my-14 p-0"></div>
    </div>
  );
};

export default Navbar;
