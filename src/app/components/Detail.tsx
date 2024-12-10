import React from "react";

import Sidebar from "./Sidebar";

const Detail = () => {
  return (
    <div className="p-6 bg-[#F6F7F9] flex flex-col lg:flex-row lg:space-x-6">
      {/* Sidebar Section */}
      <div className="lg:w-1/4">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <section className="text-gray-600 body-font overflow-hidden bg-[#F6F7F9] lg:w-3/4">
        <div className="container mx-auto px-5 py-12">
          <div className="flex flex-col lg:flex-row lg:space-x-6">
            {/* Sports Car Section */}
            <div className="flex-1 bg-[#3563E9] rounded-[10px] p-6 text-white">
              <h1 className="font-sans font-semibold text-4xl mb-4">
                Sports car with the best design and acceleration
              </h1>
              <p className="font-medium text-base mb-6">
                Safety and comfort while driving a futuristic and elegant sports
                car
              </p>
              <div className="flex justify-center mb-6">
                <img
                  alt="Sports Car"
                  className="rounded"
                  src="/car8.png"
                  width={380}
                  height={220}
                />
              </div>
              <div className="flex gap-4 justify-center">
                {[1, 2, 3].map((_, idx) => (
                  <img
                    key={idx}
                    src={`/View ${idx + 1}.png`}
                    alt={`View ${idx + 1}`}
                    width={148}
                    height={124}
                  />
                ))}
              </div>
            </div>

            {/* Nissan GT Section */}
            <div className="flex-1 bg-white rounded-[10px] p-6">
              <h1 className="text-gray-900 text-3xl font-medium mb-4">
                Nissan GT - R
              </h1>
              <div className="flex mb-4 items-center">
                {[...Array(4)].map((_, idx) => (
                  <svg
                    key={idx}
                    fill="currentColor"
                    className="w-4 h-4 text-[#FBAD39]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <svg
                  fill="none"
                  className="w-4 h-4 text-[#FBAD39]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-gray-600 ml-3">440+ Reviewer</span>
              </div>
              <p className="leading-relaxed mb-6">
                NISMO has become the embodiment of Nissan's outstanding
                performance, inspired by the most unforgiving proving ground,
                the "race track".
              </p>
              <div className="border-t-2 border-gray-100 pt-4">
                <div className="flex justify-between text-sm text-[#90A3BF] mb-2">
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
              <div className="flex items-center mt-6">
                <span className="text-2xl text-gray-900 font-medium">
                  $80.00/day
                </span>
                <span className="ml-2 text-base text-[#90A3BF] line-through">
                  $100.00
                </span>
                <button className="ml-auto bg-[#3563E9] text-white py-2 px-6 rounded">
                  Rent Now
                </button>
              </div>
            </div>
          </div>

          {/* Recent Cars Section */}
          <div className="mt-12 bg-white rounded-[10px] p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Cars</h2>
            {/* Adjust content inside as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
