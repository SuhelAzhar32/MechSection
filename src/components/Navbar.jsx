import React from "react";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [isVisible, setIsVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   let timeoutId;

  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY) {
  //       // User is scrolling down
  //       setIsVisible(false);
  //     } else {
  //       // User is scrolling up
  //       setIsVisible(true);
  //     }
  //     setLastScrollY(window.scrollY);

  //     // Clear any previous timeout and set a new one to show the navbar after stopping
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => setIsVisible(true), 150);
  //   };

  //   // Attach the scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup event listener and timeout on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     clearTimeout(timeoutId);
  //   };
  // }, [lastScrollY]);

  return (
    <nav className="absolute z-10 w-screen bg-gradient-to-b from-black">
      {/* className=
      {`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 z-10 w-screen bg-gradient-to-b from-black transition-transform duration-300`} */}
      <div className="max-w-screen-xl flex flex-col sm:flex-row items-center justify-between mx-auto p-4">
        <Link to="/" className="text-white font-bold text-2xl sm:text-2xl ">
          Mechsection Engineers Pvt Ltd
        </Link>
        <NavMenu />
      </div>
      <hr class="hidden sm:block h-[1px] my-8 bg-gray-700 " />
    </nav>
  );
};

export default Navbar;
