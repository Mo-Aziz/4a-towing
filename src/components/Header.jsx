import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "../../public/assets/img1.jpg";

import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // handle click event
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle between true and false
  };
  return (
    <header id="navbar" className="bg-black fixed w-full top-0 left-0 z-50">
      <nav className="container flex items-center justify-between  h-16 sm:h-20">
        {/* logo */}
        <div>
          <Link href="#home" className="nav-link">
            <div className=" text-md flex flex-col   font-bold text-blue-700 justify-center items-center   font-Jost sm:pl-[-3] ">
              <div>
                {" "}
                <p className="lg:text-7xl text-4xl">4A</p>
              </div>
              <div>
                {" "}
                <p className="">Towing Services LLC.</p>
              </div>
            </div>
          </Link>
        </div>
        {/* end of log set */}
        {/* nav menu */}
        <div
          id="nav-menu"
          className="absolute top-0 min-h-[80vh] w-full bg-black  backdrop-blur-sm flex items-center justify-center duration-300 left-[-100%] overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto"
        >
          <ul className="flex flex-col items-center gap-8">
            <li>
              <Link href="#home" className="nav-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="nav-link" onClick={toggleMenu}>
                services
              </Link>
            </li>
            <li>
              <Link href="#about" className="nav-link  onClick={toggleMenu}">
                About
              </Link>
            </li>
            <li>
              <Link href="#reviews" className="nav-link  onClick={toggleMenu}">
                Reviews
              </Link>
            </li>
          </ul>
          {/* image to */}
          {/* <div className="absolute bottom-0 -right-10 opacity-90">
            <Image
              src={img1}
              alt="user needs towing services"
              width={50}
              height={50}
              className="w-32"
            />
          </div>
          <div className="absolute -top-5 -left-5 opacity-90">
            <Image
              src={img2}
              alt="user needs towing services"
              width={50}
              height={50}
              className="w-32"
            />
          </div> */}
        </div>

        {/* side menu icon */}
        <div className="text-xl sm:text-3xl cursor-pointer z-50 sm:mt-6 sm:mr-[-2] lg:hidden">
          <RiMenu3Line id="hamburger" onClick={toggleMenu} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
