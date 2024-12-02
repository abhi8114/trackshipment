
import Image from 'next/image';
import CareerHighlights from './CareerHighlights';

const Careers = () => {
    return (
        <div>
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
            <div>
            <div className= "  h-[185px] ">
                <p className='sm:pt-14 sm:pl-64 sm:pr-[256px] text-[#272727] text-[16px] line-height-[28px] text-center'>Our office culture thrives on a foundation of collaboration, innovation, and inclusivity. We foster an environment where every voice is heard, ideas are valued, and diversity is celebrated. Whether through team brainstorming sessions, cross-departmental projects, or company-wide initiatives, we encourage open communication and mutual respect. Flexibility and adaptability are key components of our culture, allowing us to navigate challenges with resilience and creativity</p>

            </div>
        </div>
        <CareerHighlights />

        </div>
        

    );
};

export default Careers;