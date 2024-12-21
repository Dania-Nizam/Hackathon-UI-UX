"use client"
import React, { useState } from "react";

const FilterComponent1: React.FC = () => {
  const [price, setPrice] = useState<number>(100);

  return (
    <div className="p-6 mt-0 w-full h-full lg:w-[360px] lg:h-[1600px]    bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Type Section */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-gray-800 mb-4">Type</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <input type="checkbox" id="sport" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <label htmlFor="sport" className="ml-3 text-sm text-gray-700">Sport (10)</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="suv" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" defaultChecked />
            <label htmlFor="suv" className="ml-3 text-sm text-gray-700">SUV (12)</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="mpv" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <label htmlFor="mpv" className="ml-3 text-sm text-gray-700">MPV (16)</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="sedan" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <label htmlFor="sedan" className="ml-3 text-sm text-gray-700">Sedan (20)</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="coupe" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <label htmlFor="coupe" className="ml-3 text-sm text-gray-700">Coupe (14)</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="hatchback" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <label htmlFor="hatchback" className="ml-3 text-sm text-gray-700">Hatchback (14)</label>
          </div>
        </div>
      </div>

      {/* Capacity Section */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-gray-800 mb-4">Capacity</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <input type="checkbox" id="2-person" className="w-4 h-4 bg-[#3563E9] text-blue-600 border-gray-300 focus:ring-blue-500" />
            <label htmlFor="2-person" className="ml-3 text-sm text-gray-700">2 Person (10)</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="4-person" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <label htmlFor="4-person" className="ml-3 text-sm text-gray-700">4 Person (14)</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="6-person" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <label htmlFor="6-person" className="ml-3 text-sm text-gray-700">6 Person (12)</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="8-or-more" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" defaultChecked />
            <label htmlFor="8-or-more" className="ml-3 text-sm text-gray-700">8 or More (16)</label>
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div>
        <h3 className="text-base font-semibold text-gray-800 mb-4">Price</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full h-2 bg-[#3563E9] rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-2 text-xl font-semibold text-[#596780] leading-[30px] tracking-[-2%] w-full">
          Max: ${price}.00
        </p>
      </div>
    </div>
  );
};

export default FilterComponent1;
