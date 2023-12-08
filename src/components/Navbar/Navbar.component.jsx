import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleIconClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="bg-[#525D62] w-[100vw] p-4 flex justify-between items-center">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="text-white w-50 h-24" />
        </Link>
      </div>

      <div className="flex items-end space-x-8 text-white">
        <Link to="/">Home</Link>
        <Link to="/collections">Collections</Link>

        <div className="relative group flex items-center">
          <Link to="/category">Category</Link>
          <button onClick={handleIconClick}>
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/material-rounded/24/ffffff/expand-arrow--v1.png"
              alt="expand-arrow--v1"
            />
          </button>

          {isDropdownVisible && (
            <div className="absolute bg-white text-black flex flex-col">
              <Link to="/men">Men Collection</Link>
              <Link to="/women">Women Collection</Link>
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
            src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png"
            alt="search--v1"
          />
        </Link>
        <Link to="/">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-glyphs/30/ffffff/like--v1.png"
            alt="like--v1"
          />
        </Link>
        <Link to="/">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/ffffff/shopping-bag--v1.png"
            alt="shopping-bag--v1"
          />
        </Link>
        <Link to="/profile">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png"
            alt="user-male-circle"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
