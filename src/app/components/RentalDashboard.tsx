import React from "react";
import Image from "next/image";


const RentalDashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-1/5 bg-white p-6 shadow-md">
        <nav className="space-y-4">
          <div className="font-semibold text-gray-700 mb-4">MAIN MENU</div>
          <ul className="space-y-2">
            <li className="text-blue-500 font-medium">Dashboard</li>
            <li className="text-gray-600 hover:text-blue-500">Car Rent</li>
            <li className="text-gray-600 hover:text-blue-500">Insight</li>
            <li className="text-gray-600 hover:text-blue-500">Reimburse</li>
            <li className="text-gray-600 hover:text-blue-500">Inbox</li>
            <li className="text-gray-600 hover:text-blue-500">Calendar</li>
          </ul>
          <div className="mt-8 font-semibold text-gray-700">PREFERENCES</div>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-blue-500">Settings</li>
            <li className="text-gray-600 hover:text-blue-500">Help & Center</li>
            <li className="text-gray-600 hover:text-blue-500">Dark Mode</li>
          </ul>
          <div className="mt-8">
            <button className="text-gray-600 hover:text-blue-500">
              Log Out
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Details Rental */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-semibold text-lg mb-4">Details Rental</h2>
            <div className="w-[534px] h-[836px] top-[32px] left-[318px] rounded-[10px]">
              <div className="bg-gray-100 rounded-lg h-40 mb-6">
                <Image src="/Maps.png" alt="" width={486} height={272} />
              </div>
              <div className="flex items-center  mt-44">
                <Image
                  src="/View 1.png"
                  alt="Nissan GT-R"
                  className=" rounded-lg object-cover mr-4 w-[132px] h-[72px]"
                  width={132}
                  height={72}
                />
              </div>
              <div>
                <h3 className=" w-[152px] h-[32px] font-bold text-2xl leading-[36px] tracking-[-3%] text-[#1A202C]">
                  Nissan GT-R
                </h3>
                <p className="text-sm text-gray-500">Sport Car</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium">Pick-Up</h4>
                <p className="text-sm text-gray-500">Kota Semarang</p>
                <p className="text-sm text-gray-500">20 July 2022</p>
                <p className="text-sm text-gray-500">07:00</p>
              </div>
              <div>
                <h4 className="font-medium">Drop-Off</h4>
                <p className="text-sm text-gray-500">Kota Semarang</p>
                <p className="text-sm text-gray-500">21 July 2022</p>
                <p className="text-sm text-gray-500">01:00</p>
              </div>
            </div>

            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total Rental Price</span>
                <span>$80.00</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Top 5 Car Rental */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-semibold text-lg mb-4">Top 5 Car Rental</h2>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="absolute inset-0 w-full h-full">
                  {/* SVG for circular chart */}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-semibold text-lg">
                  72,030
                </div>
              </div>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>Sport Car - 17,439</li>
                <li>SUV - 9,478</li>
                <li>Coupe - 18,197</li>
                <li>Hatchback - 12,106</li>
                <li>MPV - 14,405</li>
              </ul>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-semibold text-lg mb-4">
                Recent Transactions
              </h2>
              <ul className="text-sm space-y-4">
                <li className="flex justify-between">
                  <span>Nissan GT-R</span>
                  <span>$80.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Koenigsegg</span>
                  <span>$99.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Rolls-Royce</span>
                  <span>$96.00</span>
                </li>
                <li className="flex justify-between">
                  <span>CR-V</span>
                  <span>$80.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalDashboard;