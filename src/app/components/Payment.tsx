"use client"
import React, { useState } from "react";

const PaymentConfirmation: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>("credit-card");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [newsletterAccepted, setNewsletterAccepted] = useState<boolean>(false);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200 space-y-8">
      {/* Payment Method Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Payment Method</h3>
        <p className="text-sm text-gray-600 mb-4">Please enter your payment method</p>

        <div className="space-y-4">
          {/* Credit Card Option */}
          <div>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="payment-method"
                value="credit-card"
                checked={selectedPayment === "credit-card"}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700 font-medium flex items-center">
                Credit Card
                <img src="/visa-mastercard.png" alt="Visa and Mastercard logos" className="ml-2 w-10" />
              </span>
            </label>

            {selectedPayment === "credit-card" && (
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Expiration Date (MM/YY)"
                    className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Card Holder"
                    className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* PayPal Option */}
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="payment-method"
              value="paypal"
              checked={selectedPayment === "paypal"}
              onChange={(e) => setSelectedPayment(e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-3 text-gray-700 font-medium flex items-center">
              PayPal
              <img src="/paypal.png" alt="PayPal logo" className="ml-2 w-10" />
            </span>
          </label>

          {/* Bitcoin Option */}
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="payment-method"
              value="bitcoin"
              checked={selectedPayment === "bitcoin"}
              onChange={(e) => setSelectedPayment(e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-3 text-gray-700 font-medium flex items-center">
              Bitcoin
              <img src="/bitcoin.png" alt="Bitcoin logo" className="ml-2 w-10" />
            </span>
          </label>
        </div>
      </div>

      {/* Confirmation Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Confirmation</h3>
        <p className="text-sm text-gray-600 mb-4">We are getting to the end. Just a few clicks and your rental is ready!</p>

        <div className="space-y-3">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={newsletterAccepted}
              onChange={(e) => setNewsletterAccepted(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-3 text-gray-700 text-sm">
              I agree with sending marketing and newsletter emails. No spam, promised!
            </span>
          </label>

          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-3 text-gray-700 text-sm">
              I agree with our terms and conditions and privacy policy.
            </span>
          </label>
        </div>
      </div>

      {/* Rent Now Button */}
      <div>
        <button
          className={`w-full py-3 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 transition ${{
            'opacity-50 cursor-not-allowed': !termsAccepted,
          }}`}
          disabled={!termsAccepted}
        >
          Rent Now
        </button>
        <p className="mt-4 text-xs text-gray-500 flex items-center">
          <span className="material-icons text-blue-500 mr-2">lock</span>
          All your data are safe. We are using the most advanced security to provide you the best experience ever.
        </p>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
