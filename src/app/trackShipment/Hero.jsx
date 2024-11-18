"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-[80vh] font-manrope">
      {/* Background Image */}
      <Image
        src="/trackshipmentbg.svg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-1"></div>

      {/* Content */}
      <div className="pt-36 relative z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Heading */}
        <h1 className="text-[40px] md:text-[50px] ">Track Your Shipment</h1>

        {/* Subheading */}
        <p className="mt-4 text-lg md:text-xl text-center ">
          Enter your docket number/booking ID/order <br /> number/reference ID
        </p>

        {/* Input and Button */}
        <div className="mt-6 flex">
          <div className="border border-none rounded-md bg-yellow-50">
          <input
            type="text"
            placeholder="Enter AWB or Order ID"
            className="w-[350px] md:w-[400px] p-3  rounded-l-lg   text-gray-800 "
          />
          <button className="ml-3 px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
            Track Now
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
