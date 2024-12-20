"use client"

import React from "react";
import Image from "next/image";
import PickupDropoffSection from "./PickupDropoffSection";

import FilterComponent1 from "./filter1";

const Category = () => {
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
      image1:"/heart.png",
    },
    {
      name: "CR  - V",
      type: "SUV",
      price: 80,
      originalPrice: 100,
      fuel: "80L",
      transmission: "Manual",
      people: 2,
      image: "/hero2.png",
      image1:"/heart.png",
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
      image1:"/heart.png",
    },
    {
      name: "CR  - V",
      type: "SUV",
      price: 80,
      originalPrice: 100,
      fuel: "80L",
      transmission: "Manual",
      people: 2,
      image: "/Car.png",
      image1:"/heart.png",
    },

    {
      name: "CR  - V",
      type: "SUV",
      price: 76.0,
      originalPrice: 100,
      fuel: "70L",
      transmission: "Manual",
      people: 2,
      image: "/car1.png",
      image1:"/heart.png",
    },

    {
      name: "New MG ZS",
      type: "SUV",
      price: 80,
      originalPrice: 100,
      fuel: "80L",
      transmission: "Manual",
      people: 2,
      image: "/Car.png",
      image1:"/heart.png",
    },

    {
      name: "MG ZX Excite",
      type: "Hatchback",
      price: 74.0,
      originalPrice: 100,
      fuel: "90L",
      transmission: "Manual",
      people: 2,
      image: "/car6.png",
      image1:"/heart.png",
    },

    {
      name: "New MG ZS",
      type: "SUV",
      price: 80,
      originalPrice: 100,
      fuel: "80L",
      transmission: "Manual",
      people: 2,
      image: "/car5.png",
      image1:"/heart.png",
    },
    {
      name: "MG ZX Excite",
      type: "Hatchback",
      price: 74.0,
      originalPrice: 100,
      fuel: "90L",
      transmission: "Manual",
      people: 2,
      image: "/car6.png",
      image1:"/heart.png",
    },
  ];

  return (
    <div className=" lg:w-[1440px] p-0 lg:h-[1600px] bg-[#F6F7F9] flex flex-col lg:flex-row lg:space-x-6">
      <div className="lg:w-1/3 ">
       <FilterComponent1/>
      </div>

      <div className="lg:w-3/4">
        <div className="mb-10 pb-4">
          <PickupDropoffSection />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <div
              className="border lg:w-[317px] lg:h-[388px] gap-2 border-gray-300 rounded-lg shadow-md bg-white overflow-hidden"
              key={index}
            >
              <div className="p-4">
                <div className="flex"><h3 className="text-lg font-semibold mb-2">{car.name}</h3><div className="w-[24px] h-[24px] ml-24 "><Image src={car.image1} alt="" width={24} height={24}/></div></div>
                <p className="text-sm text-gray-500 mb-4">{car.type}</p>

                <div className="flex justify-center mb-4">
                  <Image
                    src={car.image}
                    alt={car.name}
                    className="w-full h-auto object-contain"
                    width={232}
                    height={72}
                  />
                </div>

                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <p className="flex items-center gap-1">
                    <Image src="/gas.png" alt="Fuel" width={16} height={16} />{" "}
                    {car.fuel}
                  </p>
                  <p className="flex items-center gap-1">
                    <Image
                      src="/c.png"
                      alt="Transmission"
                      width={16}
                      height={16}
                    />{" "}
                    {car.transmission}
                  </p>
                  <p className="flex items-center gap-1">
                    <Image src="/pro.png" alt="People" width={16} height={16} />{" "}
                    {car.people} People
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold">
                    ${car.price.toFixed(2)} / day
                    {car.originalPrice && (
                      <span className="text-sm line-through text-gray-400 ml-2">
                        ${car.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </p>

                  <button className="bg-[#3563E9] text-white py-2 px-4 rounded hover:bg-blue-600">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
