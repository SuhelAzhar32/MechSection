import React from "react";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute z-10 w-screen bg-gradient-to-b from-black">
      <div className="max-w-screen-xl flex flex-col sm:flex-row items-center justify-between mx-auto p-4">
        <Link to="/" className="text-white font-bold text-2xl sm:text-2xl ">
          MechSection Co.
        </Link>
        <NavMenu />
      </div>
      <hr class="hidden sm:block h-[1px] my-8 bg-gray-700 " />
    </nav>
  );
};

export default Navbar;
