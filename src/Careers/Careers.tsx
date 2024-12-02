"use client";
import Image from 'next/image';

const Careers = () => {
  return (
    <div className="">
            <Image
                src="../../Group 867.svg"
                alt="Three people having a discussion in a modern office setting"
                width={1383}
                height={580}
                className="w-full h-full object-cover relative"
                priority
            />
            <div className="absolute top-0 left-0 z-10 flex items-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-xl">
                        <h1 className="text-white text-4xl md:text-6xl mb-7">Careers</h1>
                        <button className="bg-red-600 text-white text-md md:text-xl px-10 py-3 rounded">Explore Vacancies</button>
                    </div>
                </div>
            </div>
        </div>

    
  );
};

export default Careers;