// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom';
// import { CgProfile } from "react-icons/cg";
// import { FaCartPlus } from "react-icons/fa";
// import { MdOutlineLightMode } from "react-icons/md";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   // Toggle menu visibility
//   const toggleMenu = () => setIsOpen(!isOpen);

//   // Close menu when a NavLink is clicked
//   const closeMenu = () => setIsOpen(false);

//   return (

//     // <div className="flex justify-between items-center h-[60px] shadow-lg  px-4 md:px-20 text-white z-10 bg-orange-400">
//     //   <div className="font-bold">
//     //     <h1>Mr. PUROHIT</h1>
//     //   </div>

//       <div className="flex justify-between items-center h-[60px] shadow-lg   px-4 md:px-20 text-white z-10 bg-orange-400">
//         <div className="font-bold">
//           <h1>Mr. PUROHIT</h1>
//         </div>


//         {/* Mobile menu toggle */}
//         <div className="md:hidden">
//           <GiHamburgerMenu className="text-xl cursor-pointer" onClick={toggleMenu} />
//         </div>

//         {/* Navbar items */}
//         <div
//           className={`${isOpen ? 'flex' : 'hidden'
//             } flex-col absolute bg-orange-400 w-full top-[60px] left-0  md:flex md:flex-row md:static md:bg-transparent md:w-auto text-center`}
//         >
//           <NavLink onClick={closeMenu} to="/" className=" p-2">
//             HOME
//           </NavLink>
//           <NavLink onClick={closeMenu} to="/about" className=" p-2">
//             ABOUT
//           </NavLink>
//           <NavLink onClick={closeMenu} to="/contact" className=" p-2">
//             CONTACT
//           </NavLink>
//           <NavLink onClick={closeMenu} to="/our-pandit" className=" p-2">
//             OUR-PANDIT
//           </NavLink>
//           <NavLink onClick={closeMenu} to="/product" className=" p-2">
//             PRODUCT
//           </NavLink>
//         </div>

//         {/* Icons */}
//         <div className="flex gap-5 text-xl cursor-pointer">
//           <NavLink to="/login"><CgProfile /></NavLink>
//           <FaCartPlus />
//           <MdOutlineLightMode />
//         </div>
//       </div>
//     // </div>
//   )
// }

// export default Navbar


import React from "react";
import { NavLink } from 'react-router-dom';
import { FaUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-orange-400 py-4 px-16 flex justify-between items-center ">
      {/* Logo */}
      <div className="text-white font-bold text-xl flex items-center mx-16">
       
        MyWebsite
      </div>

      {/* Search Bar with Icon */}
      <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-md flex-grow mx-6 max-w-md">
        <FaSearch className="text-gray-500 text-xl mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-2 py-1 outline-none text-gray-700"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-white text-2xl">
      <NavLink to="/login"><FaUserCircle /></NavLink> 
      <NavLink to="/cart"><FaShoppingCart /></NavLink> 
        <img
          src="/temple-icon.png"
          alt="Temple Icon"
          className="h-8 w-8"
        />
      </div>
    </nav>
  );
};

export default Navbar;
