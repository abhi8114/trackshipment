import React from 'react';

const CareerHighlights = () => {
  const highlights = [
    { icon: '/Layer_1.svg', title: 'Highly Competitive Compensation' },
    { icon: '/Layer_1.svg', title: 'Supersonic Growth' },
    { icon: '/Layer_3.svg', title: 'Bi-Annual Appraisals' },
    { icon: '/Layer_4.svg', title: 'Fun, Dynamic Environment' },
    { icon: '/Layer_5.svg', title: 'Best Incentive Structure' }
  ];

  return (
    <div className="grid grid-cols-5 gap-8 pt-16 pl-20 pr-20">
      {highlights.map((item, index) => (
        <div key={index} className="text-center w-[200px] h-[180px] bg-[#F8F2F2] rounded-lg flex flex-col justify-center items-center">
          <img src={item.icon} alt={item.title} className="h-14 w-16 text-red-500 " />
          <h3 className="text-[15px] font-manrope font-semibold pt-3 p-2 line-height-[24px]">{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CareerHighlights;