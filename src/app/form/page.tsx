import React from "react";
import Image from "next/image";
import PaymentConfirmation from "../components/Payment";

const RentalForm = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 min-h-screen bg-[#F6F7F9] rounded-lg">
      {/* Form Section */}
      <div className="flex-1 bg-[#F6F7F9] p-6 h-auto gap-[32px] rounded-lg">
        {/* Billing Info */}
        <div className="shadow-lg border border-gray-200 rounded-lg mt-8 bg-white mb-6">
          <h2 className="text-xl font-bold p-4">Billing Info</h2>
          <p className="text-[#90A3BF] font-medium text-sm p-4">Please enter your billing info</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <label>
              Name
              <input
                type="text"
                placeholder="Your name"
                className="border rounded-lg p-3 bg-[#F6F7F9] w-full"
              />
            </label>
            <label>
              Phone Number
              <input
                type="text"
                placeholder="Phone number"
                className="border rounded-lg p-3 bg-[#F6F7F9] w-full"
              />
            </label>
            <label>
              Address
              <input
                type="text"
                placeholder="Address"
                className="border rounded-lg p-3 bg-[#F6F7F9] w-full"
              />
            </label>
            <label>
              Town/City
              <input
                type="text"
                placeholder="Town or City"
                className="border rounded-lg p-3 bg-[#F6F7F9] w-full"
              />
            </label>
          </div>
        </div>

        {/* Rental Info */}
        <div className="shadow-lg border border-gray-200 bg-white mb-6">
          <h2 className="text-xl font-bold p-4">Rental Info</h2>
          <p className="text-[#90A3BF] font-medium text-sm p-4">Please select your rental date</p>

          {/* Pick-Up Info */}
          <div className="p-4">
            <h3 className="flex items-center font-medium mb-2 gap-2">
              <Image src="/Mark.png" alt="Pick-Up" width={20} height={16} />
              Pick-Up
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="border rounded-lg bg-[#F6F7F9] p-4 w-full">
                <option>Select your city</option>
              </select>
              <input
                type="date"
                className="border rounded-lg bg-[#F6F7F9] p-4 w-full"
              />
              <select className="border rounded-lg bg-[#F6F7F9] p-4 w-full">
                <option>Select your time</option>
              </select>
            </div>
          </div>

          {/* Drop-Off Info */}
          <div className="p-4">
            <h3 className="flex items-center font-medium mb-2 gap-2">
              <Image src="/Mark.png" alt="Drop-Off" width={20} height={16} />
              Drop-Off
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="border rounded-lg bg-[#F6F7F9] p-4 w-full">
                <option>Select your city</option>
              </select>
              <input
                type="date"
                className="border rounded-lg bg-[#F6F7F9] p-4 w-full"
              />
              <select className="border rounded-lg bg-[#F6F7F9] p-4 w-full">
                <option>Select your time</option>
              </select>
            </div>
          </div>
        </div>

        <PaymentConfirmation />
      </div>

      {/* Summary Section */}
      <div className="bg-white w-[492px] h-[560px] p-6 shadow-lg rounded-lg flex flex-col  mt-8 lg:mt-0">
        <h2 className="text-xl font-bold mb-4">Rental Summary</h2>
        <div className="flex items-center mb-4">
          <Image
            src="/View 1.png"
            alt="Nissan GT-R"
            className="rounded-lg bg-[#3563E9]"
            width={132}
            height={108}
          />
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-[#1A202C]">Nissan GT-R</h3>
            <p className="text-sm font-medium text-[#596780]">440+ Reviewer</p>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>$80.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Tax</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between border p-3 mb-4 rounded-lg bg-[#F6F7F9]">
            <span>Apply promo code</span>
            <button className="font-semibold text-blue-600">Apply Now</button>
          </div>
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Total Rental Price</span>
            <span className="text-2xl font-bold">$80.00</span>
          </div>
          <p className="text-sm text-[#90A3BF]">Overall price includes rental discount</p>
        </div>
      </div>
    </div>
  );
};

export default RentalForm;
