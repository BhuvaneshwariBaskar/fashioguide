import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";


const Navbar = () => {
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

<<<<<<< HEAD
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
            <div className="absolute bg-black text-white flex flex-col">
              <div className="w-6 bg-transparent"><Link to="/men">Men Collection</Link></div>
              <Link to="/women">Women Collection</Link>
            </div>
          )}
        </div>
=======
        <Link to="/category">Category</Link>
>>>>>>> 56a785c5871bb4246e973349ce154dcd8d684199

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

export default Navbar;
