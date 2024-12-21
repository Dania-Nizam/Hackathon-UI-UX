import React from "react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Alex Stanton",
    role: "CEO at Bukalapak",
    date: "21 July 2022",
    review:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    rating: 4,
    imageUrl: "/Image.png", // Replace with profile image URL
  },
  {
    id: 2,
    name: "Skylar Dias",
    role: "CEO at Amazon",
    date: "20 July 2022",
    review:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    rating: 4,
    imageUrl: "/Profil.png", // Replace with profile image URL
  },
];

const Reviews = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 overflow-auto mx-auto 
                    w-full  lg:w-[1016px] 
                    h-[452px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
          {reviews.length}
        </span>
      </div>

      {/* Reviews List */}
      <div className="space-y-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col sm:flex-row items-start gap-4 border-b pb-6"
          >
            {/* User Image */}
            <div className="flex-shrink-0">
              <Image
                src={review.imageUrl}
                alt={review.name}
                className="rounded-full object-cover"
                width={56}
                height={56}
              />
            </div>

            {/* Review Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                {/* Name and Role */}
                <div>
                  <h3 className="text-lg font-bold">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>

                {/* Date and Rating */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 sm:mt-0">
                  <p className="text-gray-400 text-sm">{review.date}</p>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={i < review.rating ? "orange" : "none"}
                        viewBox="0 0 24 24"
                        stroke="orange"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4l2.09 6.26H20l-5.2 3.77 1.98 6.15L12 16l-5.78 4.18 1.98-6.15L3 10.26h5.91z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm">{review.review}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Button */}
      <div className="flex justify-center mt-6">
        <button className="text-blue-600 hover:underline flex items-center gap-1">
          Show All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
