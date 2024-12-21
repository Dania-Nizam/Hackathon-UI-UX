import React from "react";
import Image from "next/image";
import FilterComponent from "./Filter";
import Reviews from "./Reviews";
import Recent from "./Recent";

const Detail = () => {
  return (
    <div className="p-6 mt-0 bg-[#F6F7F9] flex flex-col lg:flex-row  lg:w-[1440px] lg:space-x-6">
      {/* Filter Section */}
      <div className="lg:w-1/4">
        <FilterComponent />
      </div>

      {/* Main Content Section */}
      <section className="text-gray-600 body-font bg-[#F6F7F9]  flex-1">
        <div className="container mx-auto px-5 py-12">
          {/* Flex Container for Sports Car and Nissan GT */}
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            {/* Sports Car Section */}
            <div className="flex-1 bg-[#3563E9] rounded-[10px] lg:w-[492px] h-[350px] p-6 text-white">
              <h1 className="font-sans font-semibold text-[32px] lg:text-4xl mb-4 leading-[48px] tracking-[-3%]">
                Sports car with the best design and acceleration
              </h1>
              <p className="font-medium text-base leading-[24px] tracking-[-2%] mb-6">
                Safety and comfort while driving a futuristic and elegant sports
                car
              </p>

              {/* Main Sports Car Image */}
              <div className="mb-4">
                <Image
                  alt="Sports Car"
                  className="rounded"
                  src="/car8.png" // Image must exist in public folder
                  width={380}
                  height={220}
                />
              </div>
            </div>

            {/* Nissan GT Section */}
            <div className="flex-1 bg-white rounded-[10px] lg:w-[492px] h-[508px] p-6 mt-8 lg:mt-0">
              <h1 className="text-gray-900 text-3xl font-semibold mb-4">
                Nissan GT - R
              </h1>
              <div className="flex items-center mb-4">
                <span className="text-gray-600">440+ Reviewer</span>
              </div>

              <p className="leading-relaxed mb-6 text-gray-700">
                NISMO has become the embodiment of Nissan's outstanding
                performance, inspired by the most unforgiving proving ground,
                the "race track".
              </p>

              {/* Specifications */}
              <div className="border-t-2 border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-[#90A3BF]">
                  <span>
                    Type Car: <span className="text-black">Sport</span>
                  </span>
                  <span>
                    Capacity: <span className="text-black">2 Person</span>
                  </span>
                </div>
                <div className="flex justify-between text-sm text-[#90A3BF]">
                  <span>
                    Steering: <span className="text-black">Manual</span>
                  </span>
                  <span>
                    Gasoline: <span className="text-black">70L</span>
                  </span>
                </div>
              </div>

              {/* Price and Rent Button */}
              <div className="flex items-center mt-6">
                <span className="lg:text-2xl text-gray-900 font-medium">
                  $80.00/day
                </span>
                <span className="ml-2 text-base sm:block hidden text-[#90A3BF] line-through">
                  $100.00
                </span>
                <button className="ml-auto bg-[#3563E9] lg:w-[140px] h-[56px] w-[100px]  text-white py-2 px-6 rounded hover:bg-[#2A4EBA]">
                  Rent Now
                </button>
              </div>
            </div>
          </div>

          {/* Smaller Images outside the blue div */}
          <div className="flex sm:flex-row flex-col justify-center  lg:mr-[500px] gap-3 mt-6 lg:mt-0">
            {[1, 2, 3].map((_, idx) => (
              <Image
                key={idx}
                src={`/View ${idx + 1}.png`} // Ensure these images exist in public
                alt={`View ${idx + 1}`}
                width={148}
                height={124}
                className="rounded shadow-md  "
              />
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="">
          <Reviews />
        </div>

        {/* Recent Section */}
        <div className="">
          <Recent />
        </div>
      </section>
    </div>
  );
};

export default Detail;
