import React from "react";
import Image from "next/image";

const CarRental = () => {
  const cars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      price: 99,
      originalPrice: null,
      fuel: "90L",
      transmission: "Manual",
      people: 2,
      image: "/pC1.png",
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      price: 80,
      originalPrice: 100,
      fuel: "80L",
      transmission: "Manual",
      people: 2,
      image: "/pC3.png",
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      price: 96,
      originalPrice: null,
      fuel: "70L",
      transmission: "Manual",
      people: 4,
      image: "/pC4.png",
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      price: 80,
      originalPrice: 100,
      fuel: "80L",
      transmission: "Manual",
      people: 2,
      image: "/pC3.png",
    },
  ];

  return (
    <div className="p-6 text-center bg-[#F6F7F9]">
      <div className="w-[92px] h-[24px]">
        
        <h2 className="text-base leading-[20.16px]  font-semibold mb-6  text-[#90A3BF]">
          Popular Car
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6">
        {cars.map((car, index) => (
          <div
            className="border border-gray-300 rounded-lg shadow-md bg-white overflow-hidden"
            key={index}
          >
            <div className="p-4 w-[304px] h-[200px]">
              <div className="flex justify-evenly">
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <Image src="/heart.png" alt="" width={24} height={20} />
              </div>
              <p className="text-sm text-gray-500">{car.type}</p>
            </div>
            <div className="object-center ml-7">
              <Image
                src={car.image}
                alt={car.name}
                className="w-[232px] h-[72px] object-center"
                width={232}
                height={72}
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <p>
                  {car.fuel}{" "}
                  <Image src="/gas.png" alt="" width={24} height={24} />
                </p>
                <p>
                  {car.transmission}{" "}
                  <Image src="/c.png" alt="" width={24} height={24} />
                </p>
                <p>
                  {car.people}{" "}
                  <Image src="/pro.png" alt="" width={24} height={24} />
                  People
                </p>
              </div>

              <div className="flex">
                <div className="w-[116px] h-[44px]">
                  <p className="text-lg font-bold mt-2 ">
                    ${car.price.toFixed(2)} / day
                    {car.originalPrice && (
                      <span className="text-sm line-through text-gray-400 ml-2">
                        ${car.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex">
                  <button className="mt-4 w-[116px] h-[44px] top-[320px] left-[164px]   gap-[8px]   ml-9 bg-[#3563E9] text-white py-2 px-4   rounded-[4px] hover:bg-blue-600">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarRental;
