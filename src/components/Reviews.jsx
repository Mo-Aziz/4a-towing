import Link from "next/link";
import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <section id="review" className="container mt-20 pt-[10rem]">
      {/* header section */}
      <div className="flex flex-col items-center gap-14 text-center mb-10 md:mb-20  ">
        <h2 className="title tracking-widest text-4xl font-Jost text-yellow-400">
          Our services reviews on <span className="text-blue-600">G</span>
          <span className="text-red-600">o</span>
          <span className="text-yellow-600">o</span>
          <span className="text-blue-600">g</span>
          <span className="text-green-600">l</span>
          <span className="text-red-600">e</span>
        </h2>
        <div className="flex flex-row items-center gap-4">
          <p className="max-w-2xl text-yellow-400 font-semibold text-2xl text-center">
            Be our next customer to leave us 5 stars review :
          </p>

          <a
            href="https://g.page/r/CXdW4MmEBEFTEBE/review"
            className="font-bold text-blue-500 text-xl nav-hover"
            target="_blank"
          >
            Reviews Link
          </a>
        </div>
      </div>
      {/* end of the header */}
      {/* reviews section */}

      <div className="container">
        <div className="py-12">
          <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <li className="review_card">
              <div className="flex flex-col gap-5 bg-gray-600 rounded-md p-6">
                <div className="flex items-center">
                  <img
                    src="/assets/review.png"
                    alt="review default image"
                    className="rounded-full border-none w-12 h-12"
                  />
                  <div className="ml-2">
                    <p className="text-yellow-500 uppercase ">Emily Woolley</p>
                  </div>
                  <RiDoubleQuotesR className="text-4xl ml-4" />
                </div>
                <p>
                  Between an issue with Kia’s Roadside Service request app not
                  sending over my detailed message and info, and my phone
                  switching itself into sleep mode, Adai had 3 hours of his time
                  wasted this morning, ultimately ending with not being able to
                  tow my vehicle because my keys were stolen and I was unable to
                  put the vehicle in neutral. He was still very friendly and
                  helpful, and told me the type of tow service I needed to
                  request. I figured the least I can do is leave a great review
                  since he tried everything possible
                </p>
              </div>
            </li>
            <li className="review_card">
              <div className="flex flex-col gap-5 bg-gray-600 rounded-md p-6">
                <div className="flex items-center">
                  <img
                    src="/assets/review.png"
                    alt="review default image"
                    className="rounded-full border-none w-12 h-12"
                  />
                  <div className="ml-2">
                    <p className="text-yellow-500 uppercase ">Rick Vasquez</p>
                  </div>
                  <RiDoubleQuotesR className="text-4xl  ml-4" />
                </div>
                <p>
                  The customer service is EXCELLENT! As a USAA member, it took 4
                  companies to finally have this company assigned to tow my car
                  off of an extremely busy and dangerous interstate. The owner
                  of this company took it upon himself to get the work done. He
                  was very professional, polite and assured me that he would get
                  the work done. He did just that. Honest company and one of
                  high integrity. I highly recommend this company.
                </p>
              </div>
            </li>
            <li className="review_card">
              <div className="flex flex-col gap-5 bg-gray-600 rounded-md p-6">
                <div className="flex items-center">
                  <img
                    src="/assets/review.png"
                    alt="review default image"
                    className="rounded-full border-none w-12 h-12"
                  />
                  <div className="ml-2">
                    <p className="text-yellow-500 uppercase ">LANA STUBBLE</p>
                  </div>
                  <RiDoubleQuotesR className="text-4xl ml-4" />
                </div>
                <p>
                  I stuck in the mud with my dog in the wood on my Camry two
                  month ago....I didn't know the mud in Texas like a glue!!!!! I
                  could not move and was going deeper and dipper into the
                  mud...I called my insurance and thanks God they sent the
                  person who did the BEST job ever!!! He was so carefully with
                  my car not to damage any parts and so professional. Thank you
                  so much for helping people like me!!! Professionalism A++++
                  Time A++++ Communication A++++
                </p>
              </div>
            </li>
            <li className="review_card ">
              <div className="flex flex-col gap-5 bg-gray-600 rounded-md p-6">
                <div className="flex items-center">
                  <img
                    src="/assets/review.png"
                    alt="review default image"
                    className="rounded-full border-none w-12 h-12"
                  />
                  <div className="ml-2">
                    <p className="text-yellow-500 uppercase ">Felix M</p>
                  </div>
                  <RiDoubleQuotesR className="text-4xl ml-4" />
                </div>
                <p>
                  Professional towing company, friendly driver, he picked my
                  vehicle easily although it was in a difficult situation.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
