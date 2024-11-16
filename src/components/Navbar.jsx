import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContex } from '../PriveatRoute/AuthProvider';

const Navbar = () => {
   const {user,handleSinOut}=useContext(AuthContex)
   const handleSinout=()=>{
      handleSinOut()
   }
   const links = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/allthitment'>All thiments</NavLink></li>
      <li><NavLink to='/myappoienment'>My Appioment</NavLink></li>
      <li><NavLink to='/profile'>Profile</NavLink></li>
   </>
   return (
      <div>
         <div className="navbar bg-purple-400/50 rounded-xl">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16" />
                     </svg>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                     {links}
                  </ul>
               </div>
               <h1 className='text-5xl font-bold text-purple-500 pl-3'>Thith Dantal</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {links}
               </ul>
            </div>
            <div className="navbar-end">
              {
               user&& user?
               <button onClick={handleSinout} className='btn btn-neutral'>Sign Out</button>
               :
                <NavLink to='/login' className='btn btn-neutral'>Login</NavLink>
              }
            </div>
         </div>
      </div>
   );
};

export default Navbar;