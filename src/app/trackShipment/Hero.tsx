"use client";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import TrackShipFaq from "./TrackShipFaq";
import ShipmentDetails from "./ShipmentDetails";
import TrackingTimeline from "./TrackingTimeline";


const Hero: React.FC = () => {  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const trackingNumber = searchParams.get("trackingNumber");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentParams = new URLSearchParams(searchParams);
    currentParams.set("trackingNumber", "123456");
    router.push(`${pathname}?${currentParams.toString()}`);
  }

  return (
    <div className="relative h-[75vh] w-full md:h-[80vh] font-manrope layout-fill ">
      
      {/* Background Image */}
      <Image
        src="../../Group 866.svg"
        alt="Background Image"
        fill
        className="object-cover md:h-[80vh] md:w-[1368px] "
      />

      {/* Content */}
      <div className="relative pt-28 w-full md:pt-36 z-10 md:h-full text-white mx-auto ">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[32px] md:text-[40px] font-manrope leading-[40px] md:leading-[50px]">
            Track Your Shipment
          </h1>

          {/* Subheading */}
          <p className="md:mt-4 text-[14px] md:text-[16px] leading-[26px] text-center">
            Enter your docket number/booking ID/order <br /> number/reference ID
          </p>

          {/* Input and Button */}
          <div className="mt-20 md:mt-28  w-full">
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="flex justify-center flex-col md:flex-row p-4 w-11/12 mx-auto md:w-[860px] md:h-[120px] md:p-6 bg-[#FFFFFF] rounded-lg"
            >
              <div className="rounded-md w-full md:w-[550px] md:h-[50px]">
                <input
                  type="text"
                  placeholder="Enter AWB or Order ID"
                  className="p-3 w-full md:w-[550px] border border-gray-300 rounded-md bg-[#E6E6E6] text-gray-800 focus:outline-none"
                />
                <p className="text-[#B0B0B0] text-[12px] md:text-[14px] leading-[24px]">
                  *For multiple queries use comma (,)
                </p>
              </div>

              <div className="md:block flex md:justify-start justify-center md:mt-0 mt-2 w-full">
                <input type="submit" value="Track Now" className="w-[120px] h-[42px] mx-auto md:h-[50px] text-[14px] md:text-[16px] md:w-[250px] md:ml-3 md:p-3 bg-[#C2202B] text-white font-semibold rounded-md" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {
        !trackingNumber ? (
          <TrackShipFaq />
        ) : 
        <>
          <ShipmentDetails />
        </>
      }

      
    
     
    
    </div>
  );
};

export default Hero;

