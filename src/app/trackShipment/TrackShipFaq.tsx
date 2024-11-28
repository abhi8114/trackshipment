"use client";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const TrackShipFaq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "How can I track my shipment?",
      answer:
        "You can track your shipment using the tracking number provided via email after placing your order.",
    },
    {
      question: "My shipment status is still at 'Pick up.' What should I do?",
      answer:
        "If your shipment is still marked as 'Pick up,' please contact customer support for further assistance.",
    },
    {
      question: "My shipment is out for delivery. When will I receive it?",
      answer:
        "Your shipment can be delivered between 10:00 am and 8:00 pm on the same day when it is marked out for delivery.",
    },
    {
      question: "How can I get the delivery of my shipment if I missed it today?",
      answer:
        "Your shipment can be delivered between 10:00 am and 8:00 pm on the same day when it is marked out for delivery.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative mt-14 font-manrope">
      <div className=" sm:flex sm:space-x-56 p-5 sm:p-0 sm:max-w-[1440px] sm:mx-auto">
        {/* Left Section */}
        <div className=" grid grid-cols-2 sm:space-y-4 sm:flex sm:flex-col  sm:w-[50%] sm:pl-20 ">
          <h2 className="text-3xl  sm:text-[40px] sm:line-height-[50px] text-left sm:pb-4 ">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-[14px] line-height-[20px] mt-3 sm:mt-0 sm:text-[16px] sm:line-height-[24px]  text-[#272727]">
            Find answers to common questions about our shipping services,
            rates, delivery times, and more.
          </p>
          <button className="bg-themeRed text-white py-2 px-4 rounded-md mb-8 transition duration-200">
            Calculate Shipping Cost
          </button>
        </div>

        {/* Right Section */}
        <div className="sm:w-[60%]  space-y-2 sm:space-y-4 sm:pr-20 ">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-md  sm:text-left  ">
              <div
                className="bg-[#F8F2F2] flex justify-between p-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-[16px] sm:text-[20px] sm:line-height:[28px] ">{faq.question}</h3>
                <span className="text-red-500 text-[16px] sm:text-[20px]">
                  {index === activeIndex ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="bg-[#F8F2F2] p-4 text-black">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackShipFaq;
