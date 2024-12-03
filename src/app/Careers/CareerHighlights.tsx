import React from 'react';

interface Highlight {
  icon: string;
  title: string;
}

const CareerHighlights: React.FC = () => {
  const highlights: Highlight[] = [
    { icon: '/Layer_1.svg', title: 'Highly Competitive Compensation' },
    { icon: '/Layer_1.svg', title: 'Supersonic Growth' },
    { icon: '/Layer_3.svg', title: 'Bi-Annual Appraisals' },
    { icon: '/Layer_4.svg', title: 'Fun, Dynamic Environment' },
    { icon: '/Layer_5.svg', title: 'Best Incentive Structure' },
  ];

  return (
  <div className="grid grid-cols-2 gap-2 pl-8 pr-8   pt-20 md:grid md:grid-cols-5 md:gap-8 md:pt-20 md:pl-18 md:pr-18 lg:grid lg:grid-cols-5 lg:gap-[43px] lg:pt-20 lg:pl-20 lg:pr-20 lg:max-w-[1368px] lg:mx-auto">
      {highlights.map((item, index) => (
        <div
          key={index}
          className="p-8  text-center  lg:w-[200px] lg:h-[180px] bg-[#F8F2F2] rounded-lg flex flex-col justify-center items-center"
        >
          <img
            src={item.icon}
            alt={item.title}
            className="h-10 w-10  sm:h-14 sm:w-16 text-red-500 "
          />
          <h3 className="text-[12px]  md:text-[15px] md:font-manrope md:font-medium md:line-height-[24px] pt-4  ">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CareerHighlights;
