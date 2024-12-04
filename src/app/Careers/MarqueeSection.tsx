import Image from "next/image";

const MarqueeSection = () => {
  return (
    <div className="pt-10  grid grid-rows-2 gap-4">
      <div className="h-24 w-[500px] bg-[#F8F2F2]">div1 </div>
      <div className="h-48 w-[500px] bg-[#ebe1e1]">div 2</div>
      <div className="h-24 w-[500px] bg-[#F8F2F2]">div 3 </div>
      <div className="h-48 w-[500px] bg-[#F8F2F2]">div 4</div>
      <div className="h-24 w-[500px] bg-[#F8F2F2]">div 5</div>
      <div className="h-48 w-[500px] bg-[#F8F2F2]">div 6</div>
      <div className="h-24 w-[500px] bg-[#F8F2F2]">div 7</div>
      <div className="h-48 w-[500px] bg-[#F8F2F2]">div 8</div>
    </div>
  );
};

export default MarqueeSection;
