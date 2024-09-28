import { IoIosCall } from "react-icons/io";
import { GiGiftOfKnowledge } from "react-icons/gi";
import clsx from "clsx";
import img1 from "../../public/assets/img1.jpg";

import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section>
      <div className="container mt-40">
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          {/* content */}
          <div className="w-full space-y-5 lg:w-1/2">
            <h1>
              <span className="text-yellow-500">Stuck </span>
              on the road? <br />
              We are here to help.
            </h1>
            <p className="text-slate-300 font-Jost">
              At 4A Towing in Austin, we provide fast, reliable 24/7 service
              when you need it most. Whether it’s a breakdown or lockout, trust
              us to get you back on the road quickly and safely.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xl:pt-10">
              <a href="tel:+1512 590 5050">
                <button
                  className={clsx(
                    "btn",
                    "flex justify-center items-center gap-1 text-black bg-yellow-500 hover:scale-105 transform transition-all duration-300 ease-in-out"
                  )}
                >
                  <span>Call Us Now </span> <IoIosCall className="text-xl" />
                </button>
              </a>
              <Link href="#about">
                <button
                  className={clsx(
                    "btn",
                    "flex  justify-center items-center gap-1 text-yellow-500 bg-transparent hover:scale-105 transform transition-all duration-300 ease-in-out "
                  )}
                >
                  <span>Learn More</span>
                  <GiGiftOfKnowledge className="text-xl" />
                </button>
              </Link>
            </div>
            {/* referral  */}
            <p className="text-sm font-jost">
              Refer a friend and get{" "}
              <span className="text-blue-500 font-bold">10% </span> discount of
              your next service granted for you or one of your family or
              friends.
            </p>
          </div>
          {/* image and carousel */}
          <div className="w-full  lg:w-1/2">
            <Image
              src={img1}
              alt="4a towing services"
              className="rounded-md border border-yellow-400 shadow-xl shadow-blue-500"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
