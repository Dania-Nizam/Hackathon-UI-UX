import React from "react";
import PickupDropoffSection from "./PickupDropoffSection";
import Image from "next/image";



const HeroSection = () => {
  const heroData = [
    {
      title: "The Best Platform for Car Rental",
      description:
        "Ease of doing a car rental safely and reliably. Of course at a low price.",
      buttonText: "Rental Car",
      image: "/hero1.png",
    },
    {
      title: "Easy way to rent a car at a low price",
      description:
        "Providing cheap car rental services and safe and comfortable facilities.",
      buttonText: "Rental Car",
      image: "/hero2.png",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-blue-100">
        {heroData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center bg-blue-500 text-white rounded-lg p-6 shadow-lg"
          >
            <div className="lg:w-1/2">
              <h2 className=" font-semibold  leading-[48px] tracking-[-3%] text-3xl mb-4  w-[272px] h-[96px]">
                {item.title}
              </h2>
              <p className="mb-6 text-base  leading-[24px] tracking-[-2%] font-medium">
                {item.description}
              </p>
              <button className="text-white bg-[#3563E9] font-semibold py-2 px-4 rounded hover:bg-blue-100  leading-[24px] tracking-[-2%] text-base">
                {item.buttonText}
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
              <Image src={item.image} alt={item.title} width={406} height={116} className="w-3/4 h-auto " />
            </div>
          </div>
        ))}
      </div>
      <PickupDropoffSection />
    </div>
  );
};

export default HeroSection;
