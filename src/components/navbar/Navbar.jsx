import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // handling state for the hamburger icon clicking and events triggering.
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //adding the overlay color for the header when scroll down
  const [color, setColor] = useState(false);

  // change color function when scrolling down
  const changeColor = () => {
    if (window.scrollY >= 120) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // adding event listener.
  useEffect(() => {
    // Only run this in the browser
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeColor);
    }

    return () => {
      // Cleanup the event listener
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link href="/">
        <div className="flex flex-col sm:gap-1 gap-3 items-center text-blue-600">
          {" "}
          <p className="font-extrabold text-4xl lg:text-6xl  "> 4A </p>
          <p className="font-bold text-2xl">Towing Services LLC.</p>
        </div>
      </Link>
      {/* navagation menu */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-hover uppercase">
          <Link href="/" onClick={handleClick}>
            {" "}
            Home{" "}
          </Link>
        </li>
        <li className="nav-hover uppercase">
          <Link href="#about" onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="nav-hover uppercase">
          <Link href="#services" onClick={handleClick}>
            services
          </Link>
        </li>
        <li className="nav-hover uppercase">
          <Link href="#popular" onClick={handleClick}>
            Popular
          </Link>
        </li>
        <li className="nav-hover uppercase">
          <Link href="#review" onClick={handleClick}>
            reviews
          </Link>
        </li>

        <li className="nav-hover  ">
          <Link href="tel:+1512 590 5050">
            <button
              className={clsx(
                "btn",
                "flex justify-center items-center gap-1 text-black bg-yellow-500 hover:scale-105 transform transition-all duration-300 ease-in-out w-[150px] h-[50px] "
              )}
            >
              <span>Call Us </span> <IoIosCall className="text-xl" />
            </button>
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
    </div>
  );
};

export default Navbar;
