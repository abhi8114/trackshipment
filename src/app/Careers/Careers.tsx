"use client";
import Image from 'next/image';
import CareerHighlights from './CareerHighlights';
import CareersGridSlider from './CareersSlider';
import TrackingTimeline from '../trackShipment/TrackingTimeline';
import ProgressBar from '../trackShipment/ProgressBar';
import { useRef } from 'react';



const Careers = () => {
    
    return (
        <div>
            {/*             
        <div className="relative h-[540px]  ">
            <Image
                src="../../Group 867.svg"
                alt="Three people having a discussion in a modern office setting"
                fill
                className="object-cover md:h-[540px] md:w-[1368px] "
            />
            <div className="absolute top-0 left-0  z-10 flex items-center"  >
                <div className="container mx-auto pl-6 pt-[270px] sm:pl-[98px] sm:pt-[219px] font-manrope">
                    <div className="font-manrope ">
                        <h1 className="text-white text-[36px] line-height-[40px] md:text-[40px] md:line-height-[50px] mb-7">Careers</h1>
                        <button className="bg-[#C2202B] text-[#FFFFFF] text-[16px]  px-10 py-3 rounded">Explore Vacancies</button>
                    </div>
                </div>
            </div>
        </div>
            {/* second section */}
            {/* <div>
            <div className= " md:h-[185px] ">
                <p className='pt-12 pl-10 pr-10 font-manrope   lg:pt-14 lg:pl-64 lg:pr-[256px] text-[#272727] text-[16px] line-height-[28px] text-center'>Our office culture thrives on a foundation of collaboration, innovation, and inclusivity. We foster an environment where every voice is heard, ideas are valued, and diversity is celebrated. Whether through team brainstorming sessions, cross-departmental projects, or company-wide initiatives, we encourage open communication and mutual respect. Flexibility and adaptability are key components of our culture, allowing us to navigate challenges with resilience and creativity</p>

            </div>
            
        </div> */}
            
            <section id="progress-section" className="h-[300vh] relative">
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gray-50">
                    <ProgressBar />
                    <div className="mt-20 text-center max-w-2xl">
                        <h2 className="text-3xl font-semibold mb-4">Progress Section</h2>
                        <p className="text-gray-600">Watch the progress bar fill as you scroll through this section</p>
                    </div>
                </div>
            </section>
           



            <CareerHighlights />
            <CareersGridSlider />
            <TrackingTimeline />
        </div>




    );
};

export default Careers;