import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavMenu = () => {
  const location = useLocation();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setSelected("home");
    } else if (location.pathname === "/about") {
      setSelected("about");
    } else if (location.pathname === "/projects") {
      setSelected("projects");
    } else if (location.pathname === "/services") {
      setSelected("services");
    } else if (location.pathname === "/contact") {
      setSelected("contact");
    }
  }, [location]);

  return (
    <div className="flex flex-row px-3 sm:flex-row sm:space-x-4 mt-4 sm:mt:0 justify-between w-full sm:w-auto">
      <Link
        to=""
        className={`px-1 ${
          selected === "home" ? "text-yellow-500" : "text-white"
        } hover:text-yellow-500 transition-colors duration-300 ease-in-out`}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`px-1 ${
          selected === "about" ? "text-yellow-500" : "text-white"
        } hover:text-yellow-500 transition-colors duration-300 ease-in-out`}
      >
        About
      </Link>
      <Link
        to="/projects"
        className={`px-1 ${
          selected === "projects" ? "text-yellow-500" : "text-white"
        } hover:text-yellow-500 transition-colors duration-300 ease-in-out`}
      >
        Projects
      </Link>
      <Link
        to="/services"
        className={`px-1 ${
          selected === "services" ? "text-yellow-500" : "text-white"
        } hover:text-yellow-500 transition-colors duration-300 ease-in-out`}
      >
        Services
      </Link>
      <Link
        to="/contact"
        className={`px-1 ${
          selected === "contact" ? "text-yellow-500" : "text-white"
        } hover:text-yellow-500 transition-colors duration-300 ease-in-out`}
      >
        Contact Us
      </Link>
    </div>
  );
};

export default NavMenu;
