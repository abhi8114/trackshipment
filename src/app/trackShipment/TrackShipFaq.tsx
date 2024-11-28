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
      question:
        "How can I get the delivery of my shipment if I missed it today?",
      answer:
        "Your shipment can be delivered between 10:00 am and 8:00 pm on the same day when it is marked out for delivery.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative py-10 md:py-14 font-manrope bg-white text-primary">
      <div className="md:flex md:space-x-56 p-5 md:p-0 md:max-w-[1440px] md:mx-auto">
        {/* Left Section */}
        <div className="md:space-y-4 md:flex md:flex-col md:w-[50%] md:pl-20 md:mb-0 mb-10">
          <h2 className="text-3xl  md:text-[40px] md:line-height-[50px] text-left md:pb-4 ">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-[14px] line-height-[20px] mt-3 md:mt-0 md:text-[16px] md:line-height-[24px]  text-primary">
            Find answers to common questions about our shipping services, rates,
            delivery times, and more.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-[60%]  space-y-2 md:space-y-4 md:pr-20 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md  md:text-left  "
            >
              <div
                className="bg-[#F8F2F2] flex justify-between p-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-[16px] md:text-[20px] md:line-height:[28px] ">
                  {faq.question}
                </h3>
                <span className="text-red-500 text-[16px] md:text-[20px]">
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
