import React from "react";
import Image from "next/image";

const Recent = () => {
  const cars = [
    {
      name: "All New Rush",
      type: "SUV",
      price: 72.0,
      originalPrice: null,
      fuel: "70L",
      transmission: "Manual",
      people: 6,
      image: "/hero1.png",
      image1: "/heart.png",
    },
    {
      name: "CR - V",
      type: "SUV",
      price: 80,
      originalPrice: 100,
      fuel: "80L",
      transmission: "Manual",
      people: 2,
      image: "/pC4.png",
      image1: "/heart.png",
    },
    {
      name: "All New Terios",
      type: "SUV",
      price: 74.0,
      originalPrice: null,
      fuel: "90L",
      transmission: "Manual",
      people: 4,
      image: "/pC3.png",
      image1: "/heart.png",
    },
    {
      name: "CR - V",
      type: "SUV",
      price: 80,
      originalPrice: 100,
      fuel: "80L",
      transmission: "Manual",
      people: 2,
      image: "/car.png",
      image1: "/heart.png",
    },
    {
      name: "CR - V",
      type: "SUV",
      price: 76.0,
      originalPrice: 100,
      fuel: "70L",
      transmission: "Manual",
      people: 2,
      image: "/car1.png",
      image1: "/heart.png",
    },
    {
      name: "New MG ZS",
      type: "SUV",
      price: 80,
      originalPrice: 100,
      fuel: "80L",
      transmission: "Manual",
      people: 2,
      image: "/car.png",
      image1: "/heart.png",
    },
  ];

  return (
    <div className="p-6 bg-[#F6F7F9] mx-auto w-full sm:w-[600px] md:w-[900px] xl:w-[1015px]">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-base font-semibold text-[#90A3BF] text-center">
          Recent Cars
        </h2>
      </div>

      {/* Cars Grid */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md bg-white overflow-hidden"
          >
            {/* Car Info */}
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <Image src={car.image1} alt="Favorite" width={24} height={24} />
              </div>
              <p className="text-sm text-gray-500">{car.type}</p>
            </div>

            {/* Car Image */}
            <div className="flex justify-center">
              <Image
                src={car.image}
                alt={car.name}
                className="w-auto h-[72px] object-contain"
                width={272}
                height={84}
              />
            </div>

            {/* Specifications */}
            <div className="p-4">
              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <p className="flex items-center gap-1">
                  {car.fuel}
                  <Image src="/gas.png" alt="Fuel" width={24} height={24} />
                </p>
                <p className="flex items-center gap-1">
                  {car.transmission}
                  <Image src="/c.png" alt="Transmission" width={24} height={24} />
                </p>
                <p className="flex items-center gap-1">
                  {car.people}
                  <Image src="/pro.png" alt="Seats" width={24} height={24} />{" "}
                  People
                </p>
              </div>

              {/* Price and Button */}
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-lg font-bold">
                    ${car.price.toFixed(2)} / day
                    {car.originalPrice && (
                      <span className="text-sm line-through text-gray-400 ml-2">
                        ${car.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </p>
                </div>
                <button className="bg-[#3563E9] text-white py-2 px-4 rounded hover:bg-blue-600">
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;
