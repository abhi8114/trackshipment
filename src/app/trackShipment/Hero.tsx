"use client";
import Image from "next/image";
import TrackShipFaq from "./TrackShipFaq";
import ShipmentDetails from "./ShipmentDetails";

const Hero: React.FC = () => {
  return (
    <div className="relative  h-[40vh] w-full  sm:h-[80vh] font-manrope layout-fill ">
      {/* Background Image */}
      <Image
        src="../../Group 866.svg"
        alt="Background Image"
        fill
        className="object-cover  sm:h-[80vh] sm:w-[1368px] "
      />

      {/* Content */}
      <div className="relative pt-20 w-full  sm:pt-36 z-10 sm:h-full text-white mx-auto ">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[32px] sm:text-[40px] font-manrope leading-[40px] sm:leading-[50px]">
            Track Your Shipment
          </h1>

          {/* Subheading */}
          <p className="sm:mt-4 text-[14px] sm:text-[16px] leading-[26px] text-center">
            Enter your docket number/booking ID/order <br /> number/reference ID
          </p>

          {/* Input and Button */}
          <div className="mt-20   sm:mt-28 flex :">
            <div className="flex p-4  w-[350px] sm:w-[860px] sm:h-[120px] sm:p-6 bg-[#FFFFFF] rounded-lg">
              <div className="rounded-md  sm:w-[550px] sm:h-[50px]">
                <input
                  type="text"
                  placeholder="Enter AWB or Order ID"
                  className="p-3 w-[200px] sm:w-[550px] border border-gray-300 rounded-md bg-[#E6E6E6] text-gray-800"
                />
                <p className="text-gray-400 text-[14px] leading-[24px]">
                  *For multiple queries use comma (,)
                </p>
              </div>

              <div>
                <button className="w-[100px] h-[50px] text-[14px] sm:text-[16px] sm:w-[250px] ml-3 p-3 bg-[#C2202B] text-white font-semibold rounded-md ">
                  Track Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrackShipFaq />
      {/* <ShipmentDetails /> */}
    </div>

  );
};

export default Hero;

