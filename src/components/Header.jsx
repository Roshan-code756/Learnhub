import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex gap-5 justify-between max-w-6xl mx-auto py-3 items-center ">
        <p className="font-bold ">
          <i className="fa-solid fa-book-open text-green-500 "></i>LearnHub
        </p>
        <nav className=" hidden  gap-5 md:flex ">
          <Link to="/">Home</Link>
          <Link to="/Course" className="hover:text-green-400">
            Course
          </Link>
          <Link to="/Mentor" className="hover:text-green-400">
            Mentor
          </Link>
          <Link to="/Group" className="hover:text-green-400">
            Group
          </Link>
          <Link to="/Pricing" className="hover:text-green-400">
            pricing
          </Link>
          <Link to="/Testmoials" className="hover:text-green-400">
            Testmoials
          </Link>
        </nav>
        <div className="flex items-center gap-1.5">
          <button className="hidden md:flex bg-green-400 rounded-3xl px-4 text-white py-1 font-bold">
            Get Started
          </button>
          <a
            href="#"
            className="md:hidden block"
            id="myBtn"
            onClick={() => setOpen(!open)}
          >
            <i className="fa-solid fa-grip-lines "></i>
          </a>
        </div>
      </div>

      <nav
        className={`md:hidden overflow-hidden transition-all duration-500 bg-gray-100 flex flex-col gap-5 ${
          open ? "max-h-96 p-5" : "max-h-0 px-5"
        }`}
      >
        <Link to="/">Home</Link>
        <Link to="/Course" className="hover:text-green-400">
          Course
        </Link>
        <Link to="/Mentor" className="hover:text-green-400">
          Mentor
        </Link>
        <Link to="/Group" className="hover:text-green-400">
          Group
        </Link>
        <Link to="/Pricing" className="hover:text-green-400">
          Pricing
        </Link>
        <Link to="/Testmoials" className="hover:text-green-400">
          Testimonials
        </Link>
      </nav>
    </>
  );
};

export default Header;
