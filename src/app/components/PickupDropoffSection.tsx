import { HiOutlineArrowsUpDown } from "react-icons/hi2";

const PickupDropoffSection = () => {
    return (
      <div className="flex flex-col xl:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-md mt-4    ">
        {/* Pickup Section */}
        <div className="flex-1 flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Pick-Up</h3>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="w-full lg:w-1/3">
              <select className="border border-gray-300 rounded px-4 py-2 w-full">
                <option>Select your city</option>
              </select>
            </div>
            <div className="w-full lg:w-1/3">
            
              <input
                type="date"
                
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
            <div className="w-full lg:w-1/3">
              <input
                type="time"
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
          </div>
        </div>
  
        {/* Button to Swap Pick-Up and Drop-Off */}
        <div className="flex justify-center my-4 lg:my-0 lg:mt-10">
          <button className="bg-[#3563E9] text-white rounded-lg p-3 hover:bg-blue-600">
            <HiOutlineArrowsUpDown />
          </button>
        </div>
  
        {/* Drop-Off Section */}
        <div className="flex-1 flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Drop-Off</h3>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="w-full lg:w-1/3">
              <select className="border border-gray-300 rounded px-4 py-2 w-full">
                <option>Select your city</option>
              </select>
            </div>
            <div className="w-full lg:w-1/3">
              <input
                type="date"
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
            <div className="w-full lg:w-1/3">
              <input
                type="time"
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PickupDropoffSection;