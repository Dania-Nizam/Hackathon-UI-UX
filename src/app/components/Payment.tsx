"use client";
import React, { useState } from "react";
import Image from "next/image";

const PaymentConfirmation: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>("credit-card");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
 
  return (
    <div>
      <div className=" lg:w-[852px] lg:h-[596px] w-full h-full rounded-[10px] p-6   bg-white shadow-lg border border-gray-200 space-y-8 mt-6 mb-2 ">
        {/* Payment Method Section */}
        <div>
          <h3 className=" w-[200px] h-[24px] font-medium  text-xl leading-[30px] tracking-[-3%] text-[#1A202C] mb-2">
            Payment Method
          </h3>
          <p className=" lg:w-[236px] h-[20px] leading-[21px] tracking-[-2%] text-sm text-[#90A3BF]  font-medium mb-4">
            Please enter your payment method
          </p>

          <div className="space-y-4 bg-[#F6F7F9] lg:w-[804px] lg:h-[308px]  ">
            {/* Credit Card Option */}
            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="payment-method"
                  value="credit-card"
                  checked={selectedPayment === "credit-card"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-4 h-4 ml-2 mt-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-7 mt-4 text-gray-700 font-medium flex items-center">
                  
                  Credit Card
                </span>
              </label>
              <Image
                src="/visa.png"
                alt="Visa and Mastercard logos"
                width={92}
                height={20}
                className=" lg:w-[92px] lg:h-[20px] top-[24px]  lg:ml-[700px] mb-20 gap-[12px]"
              />

              {selectedPayment === "credit-card" && (
                <div className="mt-4 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-2  ">
                    <label>
                      {" "}
                      Card Number
                      <input
                        type="text"
                        placeholder="Card Number"
                        className=" flex p-3 lg:w-[362px] lg:h-[56px] w-[180px] sm:w-[220px] rounded-[10px] border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </label>
                    <label>
                      Expiration Date
                      <input
                        type="text"
                        placeholder="Expiration Date (MM/YY)"
                        className="flex p-3 border lg:w-[362px] h-[56px] w-[180px] sm:w-[220px] rounded-[10px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </label>
                  </div>
                  <div className="grid sm:grid-cols-2  gap-4 ">
                    <label>
                      {" "}
                      Card holder
                      <input
                        type="text"
                        placeholder="Card Holder"
                        className=" flex p-3  border lg:w-[362px] h-[56px] w-[180px] sm:w-[220px] rounded-[10px] border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </label>
                    <label>
                      CVC
                      <input
                        type="text"
                        placeholder="CVC"
                        className=" flex p-3  border lg:w-[362px] h-[56px] w-[180px] sm:w-[220px] rounded-[10px] border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>
            </div>

            {/* PayPal Option */}
            <div className="mt-10 bg-[#F6F7F9] rounded-[10px] lg:w-[804px] w-[200px] sm:w-[400px] h-[56px]  top-[436px] left-[24px] p-4 mb-3 ">
              {" "}
              <label className="flex items-center cursor-pointer ">
              <input
                  type="radio"
                  name="payment-method"
                  value="paypal"
                  checked={selectedPayment === "paypal"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-[20px] h-[20px] appearance-none rounded-full border border-gray-300 cursor-pointer checked:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span className="ml-3 text-gray-700 font-medium flex items-center">
                  PayPal
                  <Image
                    src="/paypal.png"
                    alt="PayPal logo"
                    width={100}
                    height={24}
                    className="lg:ml-[600px] sm:ml-20 lg:w-[100px] ml-2 h-[24px] "
                  />
                </span>
              </label>
            </div>

            {/* Bitcoin Option */}
            <div className=" bg-[#F6F7F9] rounded-[10px] lg:w-[804px] w-[200px] sm:w-[400px] h-[56px] top-[436px] left-[24px] p-4 mb-20 ">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="payment-method"
                  value="bitcoin"
                  checked={selectedPayment === "bitcoin"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-[20px] h-[20px] appearance-none rounded-full border border-gray-300 cursor-pointer checked:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                />

                <span className="ml-3 text-gray-700 font-medium flex items-center">
                  Bitcoin
                  <Image
                    src="/bitcoin.png"
                    alt="Bitcoin logo"
                    width={94}
                    height={20}
                    className="lg:ml-[600px] sm:ml-20 ml-2 sm:w-[94px] h-[20px] "
                  />
                </span>
              </label>
            </div>
         
        </div>
      </div>
      {/* Confirmation Section */}
      <div className="lg:w-[852px] sm:h-[484px] space-y-8 rounded-[10px] shadow-lg border border-gray-200 p-6 mt-14 bg-[#FFFFFF]">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Confirmation
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          We are getting to the end. Just a few clicks and your rental is ready!
        </p>

        <div className="space-y-3  ">
          <label className="flex items-center cursor-pointer  lg:w-[804px] lg:h-[56px]  rounded-[10px] bg-[#F6F7F9]">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="w-[24px] h-[24px] p-0 m-4 appearance-none text-white bg-[#F6F7F9] border border-[#90A3BF] focus:ring-blue-500 cursor-pointer"
              style={{
                backgroundColor: termsAccepted ? "#2563EB" : "#F6F7F9", // Blue when checked, gray when unchecked
                borderColor: termsAccepted ? "#2563EB" : "#D1D5DB", // Match border color with the state
              }}
            />

            <span className="ml-3 text-gray-700 text-sm lg:w-[804px] lg:h-[56px] rounded-[10px] bg-[#F6F7F9] p-4">
              I agree with sending marketing and newsletter emails. No spam,
              promised!
            </span>
          </label>

          <label className="flex items-center cursor-pointer lg:w-[804px] lg:h-[56px] rounded-[10px] bg-[#F6F7F9]">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="w-[24px] h-[24px] p-0 m-4 appearance-none text-white bg-[#F6F7F9] border border-[#90A3BF] focus:ring-blue-500 cursor-pointer"
              style={{
                backgroundColor: termsAccepted ? "#2563EB" : "#F6F7F9", // Blue when checked, gray when unchecked
                borderColor: termsAccepted ? "#2563EB" : "#D1D5DB", // Match border color with the state
              }}
            />

            <span className="ml-3 text-gray-700 text-sm lg:w-[804px] lg:h-[56px] rounded-[10px]  bg-[#F6F7F9] p-4">
              I agree with our terms and conditions and privacy policy.
            </span>
          </label>
        </div>

        {/* Rent Now Button */}
        <div>
          <button
            className={`w-[140px] h-[56px] top-[272px] left-[24px] rounded-[10px] pr-[20px] pl-[20px] gap-[8px] py-3 text-white text-sm font-medium bg-[#3563E9] shadow-md hover:bg-blue-700 transition ${{
              "opacity-50 cursor-not-allowed": !termsAccepted,
            }}`}
            disabled={!termsAccepted}
          >
            Rent Now
          </button>
          <Image
            src="/safety.png"
            alt=""
            width={34}
            height={34}
            className="w-[26.71px] h-[28.03px] top-[2px] left-[2.63px] mt-6"
          />
          <h1 className="mt-4">All your data are safe</h1>
          <p className="mt-4 text-xs text-gray-500 flex items-center">
            We are using the most advanced security to provide you the best
            experience ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
