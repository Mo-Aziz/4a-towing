import React from "react";
import { FaCarOn } from "react-icons/fa6";
import { FaMotorcycle } from "react-icons/fa";
import Image from "next/image";

{
  /* <FaCarOn /> */
}

const Popular = () => {
  return (
    <section id="popular" className="mb-40 mt-[20rem] pt-[10rem]">
      <div className="h-screen bg-gradient-to-b from-black via-gray-500 to-black ">
        {/* header section */}
        <div className="flex flex-col items-center gap-14 text-center mb-40  ">
          <h2 className="title tracking-widest text-5xl font-Jost">
            Popular services we offer
          </h2>
          <p className="max-w-2xl text-yellow-400 font-semibold text-2xl text-center">
            Our Special Services
          </p>
        </div>
        {/* cards */}
        <div className="container w-full grid grid-cols-1 gap-x-14 gap-y-36 lg:grid-cols-2">
          {/* card1 */}
          <div
            className=" popular_card bg-black p-10 pt-24 rounded-md relative flex flex-col items-center shadow-2xl shadow-yellow-500 
          
          "
          >
            <Image
              src="/assets/img2.jpg"
              alt="popular-service"
              className="w-[16rem] absolute -top-8  right-1/4  -translate-x-8.5/99 -translate-y-1/4 rounded-lg
              shadow-2xl  shadow-yellow-500 transform transition-all duration-500"
              width={200}
              height={200}
            />

            <h3 className="italic mt-40 text-blue-500 mb-6 font-semibold mx-4">
              Professional Motorcycle Towing
            </h3>
            <p className="mx-4 ">
              4A Team specializes in the safe and professional towing of
              motorcycles across Austin, Texas. Our team is trained to handle
              bikes with care, using state-of-the-art equipment designed
              specifically for motorcycles. Whether you ride a cruiser, sport
              bike, or touring motorcycle, we ensure your motorcycle is
              transported securely, giving you peace of mind.
            </p>
            <div className=" text-yellow-500 text-6xl flex flex-row items-center">
              {/* icon */}

              <FaMotorcycle />
            </div>
          </div>
          {/* card2 */}
          <div
            className=" popular_card bg-black p-10 pt-24 rounded-md relative flex flex-col items-center shadow-2xl shadow-blue-500 
          
          "
          >
            <Image
              src="/assets/img3.jpg"
              alt="popular-service"
              className="w-[16rem] absolute -top-8 left-1/4  -translate-x-8.5/9 -translate-y-1/4 rounded-lg
              shadow-2xl  shadow-blue-500 transform transition-all duration-500"
              width={200}
              height={200}
            />
            <h3 className="italic mt-40 text-yellow-400 mb-6 font-semibold">
              Antique & Valuable Vehicles Towing
              <br />
              with soft straps.
            </h3>
            <p className="mb-4">
              At 4A Towing, we understand the special care required for antique
              and valuable vehicles. With years of experience and the use of
              soft straps, we ensure your prized possession is transported
              safely and without damage. Our professional team handles every
              detail with precision, offering peace of mind for even the most
              delicate tows.
            </p>
            <div className=" text-yellow-500 text-6xl flex flex-row items-center">
              {/* icon */}

              <FaCarOn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
