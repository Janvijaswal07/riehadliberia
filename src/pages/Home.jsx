import React from 'react';
import bg from '../assets/homeimg/whole-group-orig_orig.jpg';
import education from '../assets/homeimg/education.jpg'
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
  <div>
    <section>
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img 
        src={bg} 
        alt="Background" 
        className="w-full h-full object-cover"
      />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-50">
        <h1 className="text-white font-black text-8xl tracking-wider mb-4">Next Generation</h1>
        <p className="text-white font-bold text-lg mb-8">Our future. Our Generation</p>
        <NavLink to="/contact">
          <button className="border-none px-10 py-2 text-sm rounded font-medium bg-green-400 hover:bg-green-500 shadow-lg text-white tracking-wider">
            Contact
          </button>
        </NavLink>
      </div>
    </div>
    </section>
    {/* mission */}
   <main className='p-10'>
    <section>
      {/* Heading and Subtitle */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold tracking-wide text-[#006D28]">Our Mission</h1>
        <p className="text-[#006D28] font-medium mt-3 text-center tracking-wider">
          Liberia Rural Intervention for Education, Health, and Agriculture Development (RIEHAD-LIBERIA) INC.
        </p>
      </div>

      {/* Flex Container for Paragraph and Image */}
      <div className="flex flex-wrap items-center justify-between">
        {/* Paragraph */}
        <div className="flex-1 mr-4 mb-4">
          <p className="text-black font-medium text-lg tracking-wider">
            RIEHAD-Liberia's mission is to make positive changes in our communities by fighting societal ills of today in the areas of education, health, and agriculture and engaging in rural communities' economic empowerment programs in line with the Sustainable Development Goals 2, 3, 4, 5, 6, & 13. We aim to reduce disparities in key areas affecting our communities, such as inadequate education, a struggling healthcare system, persistent poverty, food insecurity, and harmful environmental practices impacting people's lives, especially children, girls, and women.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 ml-4 mb-4">
          <img src={education} alt="Education" className="w-full h-auto object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </section>
    {/* key pair */}
    <section>
    <div className='text-[#006D28] text-5xl font-bold tracking-wide'>Education</div>
    </section>
  </main>
  </div>
   
  );
};
