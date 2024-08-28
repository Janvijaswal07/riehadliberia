import { useState } from "react";
import { NavLink } from "react-router-dom";
//import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full h-24  grid grid-cols-[10rem,1fr,2fr,1fr,10rem] lg:border-b  items-center sticky top-0 bg-white opacity-90 z-50	">
      <div className="lg:col-start-2 lg:col-end-3 lg:grid lg:content-center lg:text-2xl grid content-center text-2xl justify-items-center ">
      <NavLink to="/">
         <h2>logo</h2>
        </NavLink>
        
      </div>

      <nav className="lg:col-start-3 lg:col-end-4 lg:h-24 lg:flex lg:justify-around lg:items-center hidden text-black  ">
        <NavLink className={`hover:scale-110 hover:text-black`} to="/" end>
          Home
        </NavLink>
        <NavLink className={`hover:scale-110 hover:text-black `} to="/staff">
          Staff
        </NavLink>
        <NavLink className={`hover:scale-110 hover:text-black`} to="/about">
          About
        </NavLink>
        <NavLink className={`hover:scale-110 hover:text-black`} to="/sponsor">
          Sponsor a child
        </NavLink>
        
        
        <NavLink className={`hover:scale-110 hover:text-black`} to="/donate">
          Donate
        </NavLink>
        <NavLink className={`hover:scale-110 hover:text-black`} to="/news">
          News
        </NavLink>
      </nav>

      <div className="lg:col-start-4 lg:col-end-5 lg:flex lg:justify-end  lg:items-center lg:gap-3 lg:text-xl hidden md:col-start-3 md:col-end-4 md:flex md:justify-center  md:items-center md:gap-3">
       
        <NavLink to="/contact">
          <button className="border px-4 py-2 text-sm rounded font-medium bg-green-400 hover:bg-green-500 shadow-lg text-white tracking-wider">
            Contact
          </button>
        </NavLink>
      </div>

      <menu className="col-start-5 col-end-6 grid content-center text-2xl justify-items-center lg:hidden ">
        <GiHamburgerMenu onClick={toggleDropdown} />
        {/* import Hamburger from 'hamburger-react'
     <Hamburger rounded /> */}
      </menu>
      <div className="relative col-start-4 col-end-5 grid justify-center xl:col-start-5 xl:col-end-6 z-10  ">
        {isOpen && (
          <div className="absolute text-black   bg-white rounded-md shadow-lg">
            <NavLink
              to="/"
              className="block px-8 py-2 m-5  hover:text-zinc-400 "
              onClick={closeDropdown}
            >
              Home
            </NavLink>
            <NavLink
              to="/staff"
              className="block px-8 py-2 m-5  hover:text-zinc-400 "
              onClick={closeDropdown}
            >
              Staff
            </NavLink>
            <NavLink
              to="/about"
              className="block px-8 py-2 m-5  hover:text-zinc-400 "
              onClick={closeDropdown}
            >
              About
            </NavLink>
            
           
            <NavLink
              to="/"
              className="block px-8 py-2 m-5 tracking-tighter hover:text-zinc-400 "
              onClick={closeDropdown}
            >
              Sponsor a child
            </NavLink>
            <NavLink
              to="/"
              className="block px-8 py-2 m-5  hover:text-zinc-400"
              onClick={closeDropdown}
            >
              Donate
            </NavLink>
            <NavLink
              to="news"
              className="block px-8 py-2 m-5  hover:text-zinc-400"
              onClick={closeDropdown}
            >
              News
            </NavLink>
           
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
