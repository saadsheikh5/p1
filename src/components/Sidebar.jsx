import { Icon, HomeIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-40 h-screen py-20 bg-slate-600 absolute">
      <ul>
        {sidebarData.map((val, key) => {
          return (
            <div className="flex py-5 px-2">
              <li>{val?.icon}</li>
              <li>{val.title}</li>
              <li>{val?.link}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

export const sidebarData = [
  {
    title: <Link to="/"> Home</Link>,
    icon: (
      <Link to="/home">
        <HomeIcon />
      </Link>
    ),
  },
  {
    title: <Link to="/products"> PRODUCTS</Link>,
  },
  {
    title: "VENDOR",
  },
  {
    title: "SOLOUTION",
  },
];
