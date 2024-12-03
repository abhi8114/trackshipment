import Image from "next/image";

const MarqueeSection = () => {
  return (
    <section className="p-6 bg-gray-100">
      {/* Marquee Section */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="flex-shrink-0 w-full flex justify-center">
              <Image
                src="/image-marquee.jpg" // Replace with your marquee image
                alt="Marquee"
                width={1440}
                height={200}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-12 gap-4 mt-6">
        {/* Left Column */}
        <div className="col-span-3 grid gap-4">
          <div className="bg-black text-white rounded-md flex items-center justify-center p-6 h-48">
            <p className="text-center">Culture</p>
          </div>
          <div>
            <Image
              src="/image1.jpg" // Replace with your image
              alt="Person"
              width={400}
              height={300}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Middle Column */}
        <div className="col-span-6 grid gap-4">
          <div>
            <Image
              src="/image2.jpg" // Replace with your image
              alt="Team on Beach"
              width={600}
              height={400}
              className="rounded-md"
            />
          </div>
          <div className="bg-red-600 text-white rounded-md flex flex-col justify-center items-start p-6 h-48">
            <h3 className="text-xl font-bold">Culture</h3>
            <p className="text-sm mt-2">
              We empower our people to drive the success of our clients and
              colleagues and to better our communities.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-3 grid gap-4">
          <div className="bg-black text-white rounded-md flex flex-col justify-center items-start p-6 h-48">
            <h3 className="text-xl font-bold">Culture</h3>
            <p className="text-sm mt-2">
              We succeed through teamwork, diversity, and respect.
            </p>
          </div>
          <div>
            <Image
              src="/image3.jpg" // Replace with your image
              alt="Happy Couple"
              width={400}
              height={300}
              className="rounded-md"
            />
          </div>
          <div>
            <Image
              src="/image4.jpg" // Replace with your image
              alt="Origami"
              width={400}
              height={300}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
