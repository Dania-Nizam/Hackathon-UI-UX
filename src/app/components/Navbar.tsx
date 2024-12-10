"use client";

import React, { useState } from "react";
import Link from "next/link";

import { IoHeart, IoSearch } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap justify-between items-center p-4 bg-white w-full">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <div>
            <Image
              src="/command.png"
              alt="Command Icon"
              width={32}
              height={32}
            />
          </div>
          <h1 className="text-[#1A202C] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[40px]">
            High Fidelity Dashboard - Home Rent
          </h1>

          <div className="ml-20 flex flex-wrap gap-4">
            <Link href="/category" className="text-base sm:text-lg md:text-xl">
              Category
            </Link>
            <Link href="/contact" className="text-base sm:text-lg md:text-xl">
              Contact
            </Link>
            <Link href="/form" className="text-base sm:text-lg md:text-xl">
              Form
            </Link>
            <Link href="/Detail" className="text-base sm:text-lg md:text-xl">
              Detail
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <div className="text-[#666666] font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            Last Updated:
          </div>
          <div className="text-black font-bold text-sm sm:text-base md:text-lg lg:text-xl">
            8 Aug 2022
          </div>
        </div>
      </div>

      <header className="text-gray-600 bg-white shadow-md body-font">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          {/* Logo */}
          <a className="flex title-font font-medium items-center text-gray-900">
            <span className="ml-3 text-[#3563E9] font-sans font-bold text-3xl">
              MORENT
            </span>
          </a>

          {/* Search Bar */}
          <div className="hidden md:flex items-center border w-[492px] h-[44px] border-[#C3D4E966] rounded-[70px] px-3 py-2">
            <IoSearch className="text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search something here"
              className="ml-2 outline-none text-sm text-gray-600"
            />
            <Image
              src="/filter.png"
              alt=""
              width={24}
              height={24}
              className="ml-48"
            />
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 border border-[#C3D4E966] rounded-full">
              <IoHeart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 border border-[#C3D4E966] rounded-full">
              <Image
                src="/notification.png"
                alt="Notification"
                width={24}
                height={24}
              />
            </button>
            <button className="p-2 border border-[#C3D4E966] rounded-full">
              <IoMdSettings className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 border border-[#C3D4E966] rounded-full">
              <Image
                src="/Image.png"
                alt="Profile"
                width={24}
                height={24}
                className="rounded-full"
              />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 border border-[#C3D4E966] rounded-md"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="p-4">
              {/* Search Bar */}
              <div className="flex items-center border border-[#C3D4E966] rounded-md px-3 py-2 mb-4">
                <IoSearch className="text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search something here"
                  className="ml-2 outline-none text-sm text-gray-600"
                />
              </div>

              {/* Icons */}
              <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-center p-2 border border-[#C3D4E966] rounded-full">
                  <IoHeart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="flex items-center justify-center p-2 border border-[#C3D4E966] rounded-full">
                  <Image
                    src="/notification.png"
                    alt="Notification"
                    width={24}
                    height={24}
                  />
                </button>
                <button className="flex items-center justify-center p-2 border border-[#C3D4E966] rounded-full">
                  <IoMdSettings className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-[236px] h-[44px] top-[40px] left-[1172px] gap-[20px] ">
                  <Image
                    src="/Image.png"
                    alt=""
                    width={44}
                    height={44}
                    className="left-[192px] rounded-[90px]"
                  />{" "}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
