import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className=" overflow-hidden mt-[20rem] pt-[10rem]">
      {/* section head */}
      <div className="flex flex-col items-center gap-14 text-center mb-10 md:mb-20">
        <h2 className=" title text-6xl tracking-widest font-Poppins">
          {" "}
          About Us
        </h2>
        <p className="max-w-3xl text-yellow-400 font-semibold text-2xl text-center  ">
          Our mission and Story is here.
        </p>
      </div>
      {/* items */}
      <div className="container space-y-10 xl:space-y-0">
        {/* item 1 */}
        <div className="flex flex-col items-center lg:flex-row gap-5 md:space-x-12">
          {/* image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/assets/img7.jpg"
              alt="about_image"
              className="about-image"
              height={500}
              width={500}
            />
          </div>
          {/* content */}
          <div className="w-full md:ml-6 lg:w-1/2">
            <div className="space-y-5">
              <h3 className="font-semibold">Our Story</h3>
              <p>
                <span className="text-blue-500 font-bold"> 4A Towing </span> is
                your trusted partner for roadside emergencies in Austin, Texas.
                With years of experience and a dedicated team, we offer 24/7
                towing, vehicle recovery, and roadside assistance services to
                help you when you need it most. Whether it’s{" "}
                <span className="text-yellow-400">a breakdown</span>,
                <span className="text-yellow-400"> flat tire, or lockout,</span>
                our skilled professionals are just a call away, ready to respond
                quickly with the right tools and expertise. We pride ourselves
                on our fast response times, transparent pricing, and a
                commitment to delivering excellent customer service. At 4A
                Towing, we don’t just tow your vehicle—we make sure you feel
                safe, informed, and satisfied throughout the entire process.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[40px]"></div>
        {/* item 2 */}
        <div className="flex flex-col items-center lg:flex-row-reverse gap-5 ">
          {/* image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/assets/img6.jpg"
              alt="about_image"
              className="about-image xl:w-full"
              height={500}
              width={500}
            />
          </div>
          {/* content */}
          <div className="w-full lg:w-1/2 ">
            <div className="space-y-5">
              <h3 className="font-semibold">Our Mission</h3>
              <p>
                Our mission is to provide the best{" "}
                <span className="text-blue-500">towing services</span> to our
                community and to ensure that our customers are{" "}
                <span className="text-yellow-400">happy</span> with our
                services. At 4A Towing, our mission is to provide fast,
                reliable, and professional towing and emergency roadside
                services to Austin, Texas. We are committed to delivering
                top-tier customer care, ensuring every driver in need feels safe
                and supported. Our goal is to get you back on the road quickly
                and safely, with the peace of mind that comes from knowing
                you’re in good hands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
