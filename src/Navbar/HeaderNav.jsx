import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <header className="bg-indigo-500 text-white sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
          <NavLink to="/books" className="hover:text-gray-300">Knowledge</NavLink>
          <NavLink to="/onlinecom" className="hover:text-gray-300">About us</NavLink>
          <NavLink to="/login" className="hover:text-gray-300">Log in</NavLink>
          <NavLink to="/about" className="hover:text-gray-300">News</NavLink>
        </div>
      </div>
    </header>
  );
}

export default HeaderNav;
