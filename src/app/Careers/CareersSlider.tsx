import React from "react";

// Define a type for the card data
interface Card {
  id: number;
  title: string;
  description: string;
  imagePosition: "top" | "bottom";
  background: "red" | "black";
  imageUrl: string;
}

const CareersGridSlider: React.FC = () => {
  // Card data with layout and background details
  const cards: Card[] = [
    {
      id: 1,
      title: "Culture",
      description:
        "We empower our people to drive the success of our clients and colleagues and to better our communities.",
      imagePosition: "top",
      background: "red",
      imageUrl: "/image1.jpg",
    },
    {
      id: 2,
      title: "Culture",
      description:
        "We succeed through teamwork, diversity, and respect. Discover how we demonstrate this core value, every day.",
      imagePosition: "bottom",
      background: "black",
      imageUrl: "/image2.jpg",
    },
    {
      id: 3,
      title: "Culture",
      description:
        "Innovation means we expect, value, and deliver new ideas and approaches.",
      imagePosition: "top",
      background: "red",
      imageUrl: "/image3.jpg",
    },
    {
      id: 4,
      title: "Culture",
      description:
        "We empower our people to drive the success of our clients and colleagues and to better our communities.",
      imagePosition: "bottom",
      background: "black",
      imageUrl: "/image4.jpg",
    },
  ];

  return (
    <div className="overflow-hidden bg-white py-20">
      <div className="relative flex space-x-3 animate-marquee">
        {/* Duplicate cards for seamless looping */}
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="w-[400px] h-[480px] flex-shrink-0 shadow-lg rounded-md overflow-hidden"
          >
            {card.imagePosition === "top" ? (
              <>
                {/* Image Section */}
                <div
                  className={`rounded-md ${
                    card.background === "black" ? "h-[calc(60%+40px)]" : "h-3/5"
                  }`}
                  style={{
                    backgroundImage: `url(${card.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                {/* Text Section */}
                <div
                  className={`p-4 mt-3 text-white rounded-md ${
                    card.background === "black"
                      ? "bg-black h-[calc(40%-40px)]"
                      : "bg-[#C2202B] h-2/5"
                  }`}
                >
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <p className="text-sm mt-2">{card.description}</p>
                </div>
              </>
            ) : (
              <>
                {/* Text Section */}
                <div
                  className={`p-4 mb-3 text-white rounded-md ${
                    card.background === "black"
                      ? "bg-black h-[calc(40%-40px)]"
                      : "bg-[#C2202B] h-2/5"
                  }`}
                >
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <p className="text-sm mt-2">{card.description}</p>
                </div>
                {/* Image Section */}
                <div
                  className={`rounded-md ${
                    card.background === "black" ? "h-[calc(60%+40px)]" : "h-3/5"
                  }`}
                  style={{
                    backgroundImage: `url(${card.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareersGridSlider;
