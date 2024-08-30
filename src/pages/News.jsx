import React from 'react';
import img1 from '../assets/news/img1.png';
import img2 from '../assets/news/img2.jpg';
import img3 from '../assets/news/img3.jpg';
import img4 from '../assets/news/img4.jpg';
import img5 from '../assets/news/img5.jpg';
import img6 from '../assets/news/img6.jpg';
import img7 from '../assets/news/img7.jpg';
import img8 from '../assets/news/img8.jpg';
import img9 from '../assets/news/img9.jpg';
import img10 from '../assets/news/img10.jpg';
import img11 from '../assets/news/img11.jpg';
import img12 from '../assets/news/img12.jpg';
import img13 from '../assets/news/img13.jpg';

import { IoMdHeartEmpty } from "react-icons/io";

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
];

const News = () => {
  return (
    <div className="container mx-auto p-4 font-roboto-condensed">
      <h1 className="text-4xl font-bold text-center text-green-500">News</h1>
     
      <div className="grid gap-6">

        {/* Grid of images */}
        <div className="text-center  ">
            
            <p className="text-[#006D28] font-medium mt-5 text-sm md:text-base tracking-wider">
            Students' Tuition and Registration fees payment 
            </p>
          </div>
        <div className="grid grid-cols-3 gap-6">
          
          {images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 lg:col-span-1"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover object-top lg:h-64"
              />
              <div className="absolute inset-0 opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-red-600 text-5xl font-semibold"><IoMdHeartEmpty /></span>
              </div>
              <div className="absolute inset-0 border-4 border-transparent rounded-xl group-hover:border-red-200 transition-all duration-300"></div>
            </div>
          ))}
        </div>
        <div className="text-center  ">
            
            <p className="text-[#006D28] font-medium mt-3 text-sm md:text-base tracking-wider">
            Anti Bully, Stigmatization, Discrimination School Club in King's Arm Academy, Montserrado. 
            </p>
          </div>
        <div className="grid grid-cols-2 gap-6">
  {images.slice(3, 5).map((image, index) => (
    <div
      key={index}
      className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 lg:col-span-1"
    >
      <img
        src={image}
        alt={`Gallery ${index + 4}`}
        className="w-full h-80 object-cover object-top-1" // Added object-cover
      />
      <div className="absolute inset-0 opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-red-600 text-5xl font-semibold">
          <IoMdHeartEmpty />
        </span>
      </div>
      <div className="absolute inset-0 border-4 border-transparent rounded-xl group-hover:border-red-200 transition-all duration-300"></div>
    </div>
  ))}
</div>


        <div className="grid grid-cols-3 gap-6">
          {images.slice(5, 8).map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 lg:col-span-1"
            >
              <img
                src={image}
                alt={`Gallery ${index + 6}`}
                className="w-full h-full object-cover object-top-5 lg:h-64"
              />
              <div className="absolute inset-0 opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-red-600 text-5xl font-semibold"><IoMdHeartEmpty /></span>
              </div>
              <div className="absolute inset-0 border-4 border-transparent rounded-xl group-hover:border-red-200 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          {images.slice(8, 10).map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 lg:col-span-1"
            >
              <img
                src={image}
                alt={`Gallery ${index + 9}`}
                className="w-full h-full object-cover  object-top lg:h-80"
              />
              <div className="absolute inset-0 opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-red-600 text-5xl font-semibold"><IoMdHeartEmpty /></span>
              </div>
              <div className="absolute inset-0 border-4 border-transparent rounded-xl group-hover:border-red-200 transition-all duration-300"></div>
            </div>
          ))}
        </div>
        <div className="text-center  ">
            
            <p className="text-[#006D28] font-medium mt-3 text-sm md:text-base tracking-wider">
            Donation of Sanitation Materials to Air Field Public School in Sanniquellie. 
            </p>
          </div>
        <div className="grid grid-cols-3 gap-6">
          {images.slice(10, 13).map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 lg:col-span-1"
            >
              <img
                src={image}
                alt={`Gallery ${index + 11}`}
                className="w-full h-full object-cover object-top lg:h-64"
              />
              <div className="absolute inset-0 opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-red-600 text-5xl font-semibold"><IoMdHeartEmpty /></span>
              </div>
              <div className="absolute inset-0 border-4 border-transparent rounded-xl group-hover:border-red-200 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center  ">
            
            <p className="text-[#006D28] font-medium mt-3 text-sm md:text-base tracking-wider">
            ​The Sopea community welcomes RIEHAD-Liberia, and parents are excited to see their children dress in uniform for school with the help of RIEHAD-Liberia. Some of the children in this picture have never been to school, and some were school drop out because of extreme poverty.
            </p>
          </div>
    </div>
  );
};

export default News;
