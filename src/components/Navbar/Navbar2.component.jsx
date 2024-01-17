import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";


const Navbar2 = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleIconClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="bg-transparent p-4 flex justify-between items-center">
      <div>
      <Link to="/">
          <img src={logo} alt="Logo" className="text-black w-50 h-24" />
        </Link>
      </div>

      <div className="flex items-end space-x-4 text-black">
        <Link to="/">Home</Link>
        <Link to="/collections">Collections</Link>

        <div className="relative group flex items-center">
          <Link to="/category">Category</Link>
          <button onClick={handleIconClick}>
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/material-rounded/24/000/expand-arrow--v1.png"
              alt="expand-arrow--v1"
            />
          </button>

          {isDropdownVisible && (
            // <div className="absolute bg-white text-white flex flex-col">
            //   <div className="text-black block w-6 px-4 py-2 text-sm"><Link to="/men">Men Collection</Link></div>
            //   <Link to="/women">Women Collection</Link>
            // </div>
            <div class="hs-dropdown relative inline-flex">
  <button id="hs-dropdown-basic" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
    Actions
    <svg class="hs-dropdown-open:rotate-180 w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </button>

  <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-basic">
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
      Newsletter
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
      Purchases
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
      Downloads
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
      Team Account
    </a>
  </div>
</div>
          )}
        </div>

        <Link to="/recommendation">Get Recommendation</Link>
        <Link to="/tryon">Try On</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-glyphs/30/000/like--v1.png"
            alt="like--v1"
          />
        </Link>
        <Link to="/">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/000/shopping-bag--v1.png"
            alt="shopping-bag--v1"
          />
        </Link>
        <Link to="/profile">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-filled/50/000/user-male-circle.png"
            alt="user-male-circle"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar2;
