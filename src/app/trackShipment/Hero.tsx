"use client";
import Image from "next/image";
import TrackShipFaq from "./TrackShipFaq";

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] font-manrope layout-fill ">
      {/* Background Image */}

      <div className="absolute inset-0 bg-black/50 z-1"></div>

      {/* Content */}
      <div className="relative pt-36 z-10 h-full text-white max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[40px] font-manrope leading-[50px]">
            Track Your Shipment
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-[16px] leading-[26px] text-center">
            Enter your docket number/booking ID/order <br /> number/reference ID
          </p>

          {/* Input and Button */}
          <div className="mt-28 flex">
            <div className="flex w-[860px] h-[120px] p-6 bg-[#FFFFFF] rounded-lg">
              <div className="rounded-md w-[550px] h-[50px]">
                <input
                  type="text"
                  placeholder="Enter AWB or Order ID"
                  className="p-3 w-[550px] border border-gray-300 rounded-md bg-[#E6E6E6] text-gray-800"
                />
                <p className="text-gray-400 text-[14px] leading-[24px]">
                  *For multiple queries use comma (,)
                </p>
              </div>

              <div>
                <button className="w-[250px] ml-3 p-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
                  Track Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrackShipFaq />
    </div>
  );
};

export default Hero;
