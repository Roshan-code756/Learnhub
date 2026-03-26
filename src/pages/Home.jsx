import React from "react";
import CardData from "../components/CardData";

const Home = () => {
  return (
    <>
      <div className="bg-[#f2fcf4] py-10">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row">
          <div className="w-full lg:w-1/2">
            <span className="border-2 bg-green-100 rounded-3xl px-2 border-green-300 text-green-500 py-1 flex w-72">
              <img src="src/assests/img/asset 12.svg" alt="" /> New Courses Available
            </span>
            <h1 className="text-5xl font-bold px-4">
              Master New Skills{" "}
              <span className="text-green-500">Online Anytime,</span> Anywhere
            </h1>
            <p className="pr-20  py-5 text-[18px] text-gray-600">
              Join over 50,000+ students learning from world-class mentors.
              Transform your career with industry-leading courses
            </p>
            <button className="border-2 p-2.5 rounded-4xl bg-blue-600 text-white">
              Start Learning <i className="ri-arrow-right-line"></i>
            </button>
            <button className=" p-2.5 rounded-4xl bg-[#ebf2ed]">
              <i className="ri-youtube-line text-red-500"></i>Youtube Channel
            </button>
            <div className="flex justify-between pr-[130px] py-5">
              <span className="text-gray-600">
                <i className="ri-group-line text-green-500"></i>
                <span className="font-bold"> 50K+</span> Students
              </span>
              <span className="text-gray-600">
                <i className="ri-book-open-line text-green-500"></i>
                <span className="font-bold"> 200+</span> Courses
              </span>
              <span className="text-gray-600">
                <i className="ri-award-line text-green-500"></i>
                <span className="font-bold"> 4.9</span> Rating
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
          <div className=" border-gray-300 rounded-3xl  shadow-2xl shadow-olive-800 relative">
            <img src="src/assests/img/asset 0.jpeg" className="w-full h-full object-top  rounded-3xl" alt=""/>
            <div className="absolute -top-2 -right-2 border-2 px-8 rounded-2xl py-2 z-10 bg-white">roshan</div>
            <div className="absolute -left-2 -bottom-2 border-2  border-gray-400 px-4 rounded-4xl py-2 z-10 bg-white flex items-center ">
              <i className="ri-book-open-line text-green-500 text-3xl bg-green-100 p-2 rounded-4xl flex items-center text-[20px]"></i> 
              <span className="px-3">
                <p className="font-bold leading-3 text-[15px]">200 + Course</p>
                <span className=" text-gray-400 text-[12px]">Available Now</span></span>
                </div>
            </div>
          </div>  
        </div>
      </div>

      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 py-6">
        {CardData &&
          CardData.map((data, index) => {
            return (
              <div className="border border-gray-300 rounded-3xl relative overflow-hidden my-10 hover:-translate-y-2 transition-all ">
                <span className="absolute top-3 left-3 bg-red-600 px-2 rounded-4xl text-white text-[12px]">
                  {data.title}
                </span>
                <img src={data.image} alt="" />
                <div className="p-5">
                  <h1 className="font-bold text-[22px]">{data.heading}</h1>
                  <h4 className="text-[16px] text-gray-500">{data.name}</h4>
                  <hr className="my-4 block border-gray-300" />
                  <div className="flex justify-between items-center">
                    <h5 className="font-bold text-[22px]">{data.price}</h5>
                    <a href="#">Enroll Now</a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* <div className="max-w-6xl mx-auto grid  md:grid-cols-4 gap-4">
        {CardData &&
          CardData.map((data, index) => {
            return (
              <div className="w-full border-gray-500 border-2 rounded-2xl relative overflow-hidden" key={index}>
                <p className="bg-yellow-300 text-white px-3 absolute left-3 top-3 rounded-2xl">
                  {data.title}
                </p>
                <img src={data.image} alt="" />
                <div className="px-4">
                  <h2>{data.heading}</h2>
                  <p>{data.name}</p>
                  <hr />
                  <div className="flex justify-between">
                    <h1>{data.price}</h1>
                    <h4>Enroll now</h4>
                  </div>
                </div>
              </div>
            );
          })}
      </div> */}
    </>
  );
};

export default Home;
