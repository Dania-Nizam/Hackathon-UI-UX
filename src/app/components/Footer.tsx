import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font lg:w-[1440px] lg:h-[480px]">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-wrap flex-wrap flex-col">
        {/* Logo and Description */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left pl-6 ">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 tracking-[-3%] text-[#3563E9] font-sans font-bold text-3xl leading-[48px]">
              MORENT
            </span>
          </a>
          <p className="mt-2 text-[#13131399] tracking-[-2%]  text-base font-medium  leading-[50px]">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {/* About Section */}
          <div className="lg:w-1/4 md:w-1/2 px-4 w-full lg:ml-32  leading-[50px]">
            <h2 className="title-font font-sans font-semibold mb-3 text-xl leading-[30px] tracking-[-2%] text-[#1A202C]">
              About
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  How it works
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Featured</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Partnership</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Business Relation
                </a>
              </li>
            </nav>
          </div>

          {/* Community Section */}
          <div className="lg:w-1/4 md:w-1/2 px-4 w-full lg:ml-6 leading-[50px]">
            <h2 className="title-font font-sans font-semibold mb-3 text-xl leading-[30px] tracking-[-2%] text-[#1A202C]">
              Community
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Events</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Podcast</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Invite a friend
                </a>
              </li>
            </nav>
          </div>

          {/* Socials Section */}
          <div className="lg:w-1/4 md:w-1/2 px-4 w-full lg:ml-14  leading-[50px]">
            <h2 className="title-font font-sans font-semibold mb-3 text-xl leading-[30px] tracking-[-2%] text-[#1A202C]">
              Socials
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Discord</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Instagram</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Twitter</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Facebook</a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-[#1A202C] text-sm text-center sm:text-left font-semibold">
            ©2022 MORENT. All rights reserved
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-[#1A202C] font-semibold mr-4">
              Privacy & Policy
            </a>
            <a className="text-[#1A202C] font-semibold">Terms & Condition</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;