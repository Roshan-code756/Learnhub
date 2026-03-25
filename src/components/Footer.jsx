import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap py-[70px] md-px-0 px-3">
          <div className="w-full md:w-1/5 text-[14px] ">
            <p className="font-bold pb-4">
              <i className="fa-solid fa-book-open text-green-500 "></i>LearnHub
            </p>
            <p className="text-gray-700 py-3">
              Empowering millions of learners worldwide with 
              industry-leading courses and expert mentors.
            </p>
            <p className="text-gray-800">
              <i className="fa-solid fa-at text-green-500"></i>
              hello@learnhub.com
            </p>
            <p className="text-gray-800">
              <i className="fa-regular fa-message text-green-500"></i>+1 (234)
              567-890
            </p>
            <p className="text-gray-800">
              <i className="fa-solid fa-location-crosshairs text-green-500"></i>
              Roshan, CA
            </p>
          </div>
          <div className="w-full md:w-1/5 ">
            <ul className="md:pb-0 pb-2">
              <li className="pb-4 md:pt-0 pt-4 font-bold">
                <a href="#" className="text-[18px]">Product</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">Features</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">pricing</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">Courses</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">Community</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5">
            <ul className="md:pb-0 pb-2">
              <li className="pb-4 font-bold">
                <a href="#" className="text-[18px]">Company</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">about us</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">Careers</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">blog</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">press</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5">
            <ul className="md:pb-0 pb-2">
              <li className="pb-4 font-bold">
                <a href="#" className="text-[18px]">Support</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">Help Center</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">Contact us</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">privacy policy</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">Terms of Services</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5">
            <ul className="md:pb-0 pb-2">
              <li className="pb-4 font-bold">
                <a href="#" className="text-[18px]">Help Center</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">Web development</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">Data Science</a>
              </li>
              <li>
                <a href="#" className=" hover:text-green-500 hover:duration-500">Marketing</a>
              </li>
            </ul>
          </div>
          <hr />
        <p className=" text-gray-500  lg:py-0 py-3 text-[13px]">© 2026 LearnHub. All rights reserved. Developed by <a href="#" className="text-green-500">Codescandy</a> • Distributed by <a href="#"className="text-green-500">ThemeWagon</a></p>
        </div>
      </div>
    </>
  );
};

export default Footer;
