import { FaGasPump } from "react-icons/fa";
import { BiSolidCarCrash } from "react-icons/bi";
import { GiFlatTire } from "react-icons/gi";
import { FaUserLock } from "react-icons/fa";
import Image from "next/image";

function Services() {
  return (
    <section id="services" className="mt-[20rem]">
      <div className="h-screen  py-20 bg-gradient-to-b from-black via-blue-500 to-black  ">
        {/* header section */}
        <div className="flex flex-col items-center gap-14 text-center mb-40  ">
          <h2 className="title tracking-widest text-6xl font-Jost">
            Our Services
          </h2>
        </div>
        <div className="container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8   ">
          {/* bg-gradient-to-t from-gray-500 to-black */}
          {/* card 1*/}
          <div className="border-none  p-5 cursor-pointer rounded-md hover:shadow-3xl hover:border-black-600 hover:-translate-y-1 duration-300 bg-slate-500 text-gray-800 font-semibold space-y-5 cursor-pointer">
            <div className="flex items-center gap-3 ">
              {/* icon */}

              <FaGasPump className="text-3xl md:text-4xl text-yellow-500" />
              <p className="md:text-lg font-bold ">Refuel</p>
            </div>
            <p>
              We provide fuel delivery services to get you back on the road
              quickly and safely.
            </p>
            <div>
              <Image
                src="/assets/srvc1.jpg"
                alt="refuel"
                className="rounded-md"
                height={240}
                width={240}
              />
            </div>
          </div>
          {/* card 2*/}
          <div className="border-none border-black p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300  bg-slate-500  space-y-8 text-gray-800  font-semibold">
            <div className="flex items-center gap-3">
              {/* icon */}

              <BiSolidCarCrash className="text-3xl md:text-4xl text-blue-600" />
              <p className="md:text-lg font-bold "> Accident</p>
            </div>
            <p className="mb-4">
              Had an accident? We provide towing services to get you to safety
            </p>

            <div className="">
              <Image
                src="/assets/srvc2.jpg"
                alt="refuel"
                className="rounded-md "
                height={240}
                width={240}
              />
            </div>
          </div>
          {/* card 3*/}
          <div className="border-none border-black p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 bg-slate-500 text-gray-800  font-semibold  space-y-5">
            <div className="flex items-center gap-3">
              {/* icon */}
              <GiFlatTire className="text-3xl md:text-4xl text-black" />

              <p className="md:text-lg font-bold ">Flat Tire</p>
            </div>
            <p>
              Our professional team will help you change your tire and get you
              back on the road quickly and safely.
            </p>

            <div>
              <Image
                src="/assets/srvc3.jpg"
                alt="refuel"
                className="rounded-md"
                height={240}
                width={240}
              />
            </div>
          </div>
          {/* card 4*/}
          <div className="border-none border-black p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 bg-slate-500 text-gray-800  font-semibold space-y-5">
            <div className="flex items-center gap-3">
              {/* icon */}
              <FaUserLock className="text-3xl md:text-4xl text-gray-400" />

              <p className="md:text-lg font-bold ">Lock Out</p>
            </div>
            <p>
              Locked out of your car? We provide lockout services to get you
              back on the road quickly and safely.
            </p>

            <div>
              <Image
                src="/assets/srvc4.jpg"
                alt="refuel"
                className="rounded-md"
                height={240}
                width={240}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
