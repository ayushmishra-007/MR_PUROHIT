import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when a NavLink is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="flex justify-between items-center h-[60px] shadow-lg  px-4 md:px-20 text-white z-10 bg-orange-400">
      <div className="font-bold">
        <h1>Mr. PUROHIT</h1>
      </div>

      {/* Mobile menu toggle */}
      <div className="md:hidden">
        <GiHamburgerMenu className="text-xl cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Navbar items */}
      <div
        className={`${isOpen ? 'flex' : 'hidden'
          } flex-col absolute bg-orange-400 w-full top-[60px] left-0  md:flex md:flex-row md:static md:bg-transparent md:w-auto text-center`}
      >
        <NavLink onClick={closeMenu} to="/" className=" p-2">
          HOME
        </NavLink>
        <NavLink onClick={closeMenu} to="/about" className=" p-2">
          ABOUT
        </NavLink>
        <NavLink onClick={closeMenu} to="/contact" className=" p-2">
          CONTACT
        </NavLink>
        <NavLink onClick={closeMenu} to="/our-pandit" className=" p-2">
          OUR-PANDIT
        </NavLink>
        <NavLink onClick={closeMenu} to="/product" className=" p-2">
          PRODUCT
        </NavLink>
      </div>

      {/* Icons */}
      <div className="flex gap-5 text-xl cursor-pointer">
        <NavLink to="/login"><CgProfile  /></NavLink>
        <FaCartPlus />
        <MdOutlineLightMode />
      </div>
    </div>
  )
}

export default Navbar
