import React from "react";


const Recomendation = () => {
  const cars = [
    {
      name: "All New Rush",
      type: "SUV",
      price: 72.0,
      originalPrice: null,
      fuel: "70L",
      transmission: "Manual",
      people: 6,
      image: "/car.png",
    },
    {
      name: "CR  - V",
      type: "SUV",
      price: 80,
      originalPrice: 100,
      fuel: "80L",
      transmission: "Manual",
      people: 2,
      image: "/car1.png",
    },
    {
      name: "All New Terios",
      type: "SUV",
      price: 74.0,
      originalPrice: null,
      fuel: "90L",
      transmission: "Manual",
      people: 4,
      image: "/car2.png",
    },
    {
      name: "CR  - V",
      type: "SUV",
      price: 80,
      originalPrice: 100,
      fuel: "80L",
      transmission: "Manual",
      people: 2,
      image: "/car1.png",
    },

    {
      name: "CR  - V",
      type: "SUV",
      price: 76.0,
      originalPrice: 100,
      fuel: "70L",
      transmission: "Manual",
      people: 2,
      image: "/car4.png",
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
    },

    {
      name: "New MG ZS",
      type: "SUV",
      price: 80,
      originalPrice: 100,
      fuel: "80L",
      transmission: "Manual",
      people: 2,
      image: "/pC3.png",
    },
  ];

  return (
    <div className="p-6 text-center bg-[#F6F7F9] ">
      <div className="w-[196px] h-[44px]">
        <h2 className="  text-base leading-[20.16px]  font-semibold mb-6  text-[#90A3BF] ">
          Recomendation Car
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6">
        {cars.map((car, index) => (
          <div
            className="border border-gray-300 rounded-lg shadow-md bg-white overflow-hidden"
            key={index}
          >
            <div className="p-4 w-[304px] h-[200px]">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p className="text-sm text-gray-500">{car.type}</p>
            </div>
            <div className="object-center ml-7">
              <img
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
                  {car.fuel}
                  <img src="/gas.png" alt="" width={24} height={24} />
                </p>
                <p>
                  {car.transmission}{" "}
                  <img src="/c.png" alt="" width={24} height={24} />
                </p>
                <p>
                  {car.people}{" "}
                  <img src="/pro.png" alt="" width={24} height={24} /> People
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
                <div className="flex justify-center items-center">
                  <button className="mt-4 w-[116px] h-[44px] top-[320px] left-[164px] pr-[20px] pl-[20px] gap-[8px]  ml-9 bg-[#3563E9] text-white py-2 px-4 rounded-[4px] hover:bg-blue-600">
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

export default Recomendation;