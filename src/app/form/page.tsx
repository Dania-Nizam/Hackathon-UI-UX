import React from "react";
import Image from "next/image";


const RentalForm = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 bg-gray-100 min-h-screen">
      {/* Form Section */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        {/* Billing Info */}
        <div className="mt-6">
          <div className="mb-8  ">
            <h2 className="text-lg font-semibold mb-4">Billing Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="border rounded-lg p-3 w-full bg-[#F6F7F9]"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="border rounded-lg p-3 w-full bg-[#F6F7F9]"
              />
              <input
                type="text"
                placeholder="Address"
                className="border rounded-lg p-3 w-full bg-[#F6F7F9]"
              />
              <input
                type="text"
                placeholder="Town / City"
                className="border rounded-lg p-3 w-full bg-[#F6F7F9]"
              />
            </div>
          </div>
        </div>

        {/* Rental Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Rental Info</h2>

          {/* Pick-Up Info */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Pick-Up</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select className="border rounded-lg p-3 w-full bg-[#F6F7F9]">
                <option>Select your city</option>
              </select>
              <input
                type="date"
                className="border rounded-lg p-3 w-full bg-[#F6F7F9]"
              />
              <select className="border rounded-lg p-3 w-full bg-[#F6F7F9]">
                <option>Select your time</option>
              </select>
            </div>
          </div>

          {/* Drop-Off Info */}
          <div>
            <h3 className="font-medium mb-2">Drop-Off</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select className="border rounded-lg p-3 w-full bg-[#F6F7F9]">
                <option>Select your city</option>
              </select>
              <input
                type="date"
                className="border rounded-lg p-3 w-full bg-[#F6F7F9] "
              />
              <select className="border rounded-lg p-3 w-full bg-[#F6F7F9]">
                <option>Select your time</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/3">
        <h2 className="text-lg font-semibold mb-4">Rental Summary</h2>
        <div className="flex items-center mb-4">
          <Image
            src="/View 1.png"
            alt="Nissan GT-R"
            className="w-20 h-12 rounded-lg object-cover mr-4"
            width={20}
            height={12}
          />
          <div>
            <h3 className="font-medium">Nissan GT-R</h3>
            <p className="text-sm text-gray-500">4.8 ★ Reviewer</p>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$80.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Tax</span>
            <span>$0</span>
          </div>

          <input
            type="text"
            placeholder="Apply promo code"
            className="border rounded-lg p-3 w-full mb-4"
          />
          <button className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600">
            Apply Now
          </button>
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total Rental Price</span>
            <span>$80.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalForm;