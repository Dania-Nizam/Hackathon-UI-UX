import React from "react";
import Image from "next/image";

const RentalDashboard = () => {
  return (
    <div className="lg:w-[1440px] lg:h-[900px] flex flex-col lg:flex-row  bg-[#F6F7F9] w-full h-full">
      {/* Sidebar */}
      <div className="lg:w-[286px] w-full  flex justify-center  lg:justify-between h-[900px]  bg-white p-6 shadow-md">
        <nav className="space-y-4 ">
          <div className="font-semibold text-[#90A3BF] ml-4 mt-6">MAIN MENU</div>
          <ul className="space-y-2 ">
            <div className="w-[254px] h-[56px] top-[80px] rounded-[10px] bg-[#3563E9] p-4 mt-2"><li className="text-white font-medium flex gap-4"> <Image src="/home.png" alt="" width={24} height={24} />Dashboard</li></div>
            <div className="mt-2"><li className="text-[#90A3BF]  text-base font-medium hover:text-blue-500 flex gap-4 ml-4 mt-7"><Image src="/carrent.png" alt="" width={24} height={24}/>Car Rent</li></div>
            
            <div className="mt-20"><li className="text-[#90A3BF] text-base font-medium hover:text-blue-500 flex gap-4 ml-4  mt-7  "><Image src="/chartd.png" alt="" width={24} height={24}/>Insight</li></div>
            
           <div className="mt-24"> <li className="text-[#90A3BF] text-base font-medium hover:text-blue-500 flex gap-4 ml-4 mt-7"><Image src="/wallet.png" alt="" width={24} height={24}/>Reimburse</li></div>
            <div className="mt-32"><li className="text-[#90A3BF] text-base font-medium hover:text-blue-500 flex gap-4 ml-4  mt-7"><Image src="/msg.png" alt="" width={24} height={24}/>Inbox</li></div>
            <div className="mt-40"><li className="text-[#90A3BF] text-base font-medium hover:text-blue-500 flex gap-4 ml-4  mt-7"><Image src="/calendar.png" alt="" width={24} height={24}/>Calendar</li></div>
          </ul>
          <div className=" font-semibold text-[#90A3BF] ml-7  ">PREFERENCES</div>
          <ul className="space-y-2">
            <div className="mt-9"><li className="text-[#90A3BF] mt-3 text-base font-medium hover:text-blue-500 flex gap-4 ml-4  "><Image src="/setting.png" alt="" width={24} height={24}/>Settings</li></div>
            <div className="mt-56"><li className="text-[#90A3BF] mt-8 text-base font-medium hover:text-blue-500 flex gap-4 ml-4  "><Image src="/info.png" alt="" width={24} height={24}/>Help & Center</li></div>
            <div className="mt-16"><li className="text-[#90A3BF] mt-10 text-base font-medium hover:text-blue-500 flex gap-4 ml-4  "><Image src="/briefcase.png" alt="" width={24} height={24}  />Dark Mode  <Image src="/group.png" alt="" width={68} height={34} className="ml-6 " /></li></div>
          </ul>
          <div className="mt-24">
            <button className="text-[#90A3BF] gap-4 text-base font-medium hover:text-blue-500 flex mt-32 ml-2 "> <Image src="/logout.png" alt="" width={24} height={24}/>Log Out</button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-x-6">
          {/* Details Rental */}
          <div className="flex-1 w-full h-[836px] lg:w-[534px]   bg-white p-6 shadow-md rounded-lg">
            <h2 className="mb-4 text-xl font-bold text-[#1A202C]">Details Rental</h2>
            <div>
              <Image src="/Maps.png" alt="Map" width={486} height={272} className="mb-6  md:w-[486px]" />
              <div className="flex mb-4">
                <div className="flex items-center mr-4">
                  <Image
                    src="/Look.png"
                    alt="Nissan GT-R"
                    className="w-[132px] h-[72px] rounded-[8px] object-cover"
                    width={132}
                    height={72}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-[#1A202C] mt-12">Nissan GT-R</h3>
                  <p className="text-sm text-[#3D5278]">Sport Car</p>
                </div>
              </div>

              {/* Pick-Up and Drop-Off Section */}
              <div className="space-y-6 mt-20">
                <div className="font-semibold text-base leading-[24px] tracking-[-2%] text-[#1A202C] w-[68px] h-[20px] ">Pick-Up</div>
                <div className="flex flex-col lg:flex-row gap-4">
                  <select className="flex-1 border border-gray-300 rounded px-4 py-2">
                    <option>Select your city</option>
                  </select>
                  <input
                    type="date"
                    className="flex-1 border border-gray-300 rounded px-4 py-2"
                  />
                  <input
                    type="time"
                    className="flex-1 border border-gray-300 rounded px-4 py-2"
                  />
                </div><div className="font-semibold text-base leading-[24px] tracking-[-2%] text-[#1A202C] w-[68px] h-[20px] ">Drop-Off</div>
                <div className="flex flex-col lg:flex-row gap-4">
                  <select className="flex-1 border border-gray-300 rounded px-4 py-2">
                    <option>Select your city</option>
                  </select>
                  <input
                    type="date"
                    className="flex-1 border border-gray-300 rounded px-4 py-2"
                  />
                  <input
                    type="time"
                    className="flex-1 border border-gray-300 rounded px-4 py-2"
                  />
                </div>
              </div>

              {/* Rental Price */}
              <div className="mt-4 border-t pt-4">
                <div className="flex justify-between font-semibold mb-4">
                  <span className="w-[200px] h-[24px] font-bold text-xl leading-[30px] tracking-[-3%]">Total Rental Price</span>
                  <span className="text-[32px] font-bold leading-[40.32px] text-[#1A202C] w-[128px] h-[48px]  ">$80.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Car Rental */}
          <div className="lg:w-[524px] lg:h-[324px] mt-4 h-[500px] w-full bg-white p-6 shadow-md rounded-lg">
            <h2 className="leading-[30px] font-bold text-xl tracking-[-3%] mb-4">
              Top 5 Car Rental
            </h2>
            <div className="flex">
              <div className="sm:relative absolute mt-52 md:ml-28  md:mt-16 sm:mt-0 w-[220px] h-[220px] lg:absolute lg:mt-0 lg:ml-0">
                <Image
                  src="/Chart.png"
                  alt=""
                  width={220}
                  height={220}
                  className="absolute inset-0  "
                />
                <div className="absolute leading-[36px] tracking-[-3%] inset-0 font-bold sm:text-2xl text-xl sm:mt-20 sm:ml-16 ml-20 mt-20 text-[#1A202C] ">
                  72,030
                </div>
              </div>
              <ul className="text-sm text-gray-500 space-y-2 mt-7 md:mt-16 md:ml-36 ml-6 lg:ml-72">
                <div className="flex gap-[39px] w-[232px] h-[24px]">
                  <li className="text-sm font-semibold text-[#90A3BF] leading-[21px] tracking-[-2%]">
                    Sport Car
                  </li>
                  <li className="font-semibold text-sm leading-[21px] tracking-[-2%] text-[#1A202C] ml-9">
                    17,439
                  </li>
                </div>
                <div className="flex gap-[73px] w-[232px] h-[24px]">
                  <li className="text-sm font-semibold text-[#90A3BF] leading-[21px] tracking-[-2%]">
                    SUV
                  </li>
                  <li className="font-semibold text-sm leading-[21px] tracking-[-2%] text-[#1A202C] ml-9">
                    9,478
                  </li>
                </div>
                <div className="flex gap-[63px] w-[232px] h-[24px]">
                  <li className="text-sm font-semibold text-[#90A3BF] leading-[21px] tracking-[-2%]">
                    Coupe
                  </li>
                  <li className="font-semibold text-sm leading-[21px] tracking-[-2%] text-[#1A202C] ml-9">
                    18,197
                  </li>
                </div>
                <div className="flex gap-[39px] w-[232px] h-[24px]">
                  <li className="text-sm font-semibold text-[#90A3BF] leading-[21px] tracking-[-2%]">
                    Hatchback
                  </li>
                  <li className="font-semibold text-sm leading-[21px] tracking-[-2%] text-[#1A202C] ml-9">
                    12,106
                  </li>
                </div>
                <div className="flex gap-[73px] w-[232px] h-[24px]">
                  <li className="text-sm font-semibold text-[#90A3BF] leading-[21px] tracking-[-2%]">
                    MPV
                  </li>
                  <li className="font-semibold text-sm leading-[21px] tracking-[-2%] text-[#1A202C] ml-9">
                    14,405
                  </li>
                </div>
              </ul>
            </div>
            {/* Recent Transactions */}
            <div className="mr-20 lg:w-[524px] lg:h-[480px] rounded-[10px]  mt-14 bg-[#FFFFFF]   p-4 shadow-inner hidden lg:block ">
              <div className="w-[476px] h-[376px]  gap-[16px] top-[80px] left-[24px]  ">
                <h2 className="mt-4  font-bold text-xl leading-[30px] tracking-[-3%] w-[192px] h-[24px] text-[#1A202C]">
                  Recent Transactions
                </h2>
                <div className="mt-20 ml-6">
                  <div className="w-[476px] h-[70px]">
                    <div className="flex justify-between"><Image src="/car8.png" alt="" width={114} height={36}/>

                      <span className="text-base font-bold leading-[24px] tracking-[-2%] ml-8 text-[#1A202C] w-[108px] h-[20px]">Nissan GT-R</span>  <p className="text-sm text-[#3D5278]">Sport Car</p>
                      <span className=" font-bold text-base leading-[24px] tracking-[-2%] w-[108px] h-[20px] text-[#1A202C]">$80.00</span>
                    </div>
                  </div>
                  <div  className="w-[476px] h-[70px] border-t" >
                    <div className="flex justify-between mt-6"><Image src="/hero1.png" alt="" width={116} height={36}/>
                      <span className="text-base font-bold leading-[24px] ml-8 tracking-[-2%] text-[#1A202C] w-[108px] h-[20px]">Koenigsegg</span> <p className="text-sm text-[#3D5278]">Sport Car</p>
                      <span  className=" font-bold text-base leading-[24px] tracking-[-2%] w-[108px] h-[20px] text-[#1A202C]">$99.00</span>
                    </div>
                  </div>
                  <div  className="w-[476px] h-[70px] border-t">
                    <div className="flex justify-between mt-6"><Image src="/pC3.png" alt="" width={116} height={36}/>
                      <span className="text-base font-bold leading-[24px]  ml-8 tracking-[-2%] text-[#1A202C] w-[108px] h-[20px]">Rolls-Royce</span> <p className="text-sm text-[#3D5278]">Sport Car</p>
                      <span  className=" font-bold text-base leading-[24px] tracking-[-2%] w-[108px] h-[20px] text-[#1A202C]">$96.00</span>
                    </div>
                  </div>
                  <div  className="w-[476px] h-[70px] border-t">
                    <div className="flex justify-between mt-6"><Image src="/car1.png" alt="" width={110} height={44}/>
                      <span className="text-base font-bold leading-[24px]  ml-8 tracking-[-2%] text-[#1A202C] w-[108px] h-[20px]">CR-V</span> <p className="text-sm text-[#3D5278]">Sport Car</p>
                      <span  className=" font-bold text-base leading-[24px] tracking-[-2%] w-[108px] h-[20px] text-[#1A202C]">$80.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalDashboard;
