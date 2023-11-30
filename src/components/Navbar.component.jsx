import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import "../App.css";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleIconClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="bg-[#525D62] p-4 flex justify-between items-center">
      <div>
        <Link to="/">
          <img src="./asset/logo.png" alt="Logo" className="text-white" />
        </Link>
      </div>

      <div className="flex items-end space-x-4 text-white">
        <Link to="/">Home</Link>
        <Link to="/">Collections</Link>
        

       
        <div className="relative group">
          <span>Category</span>
          <button onClick={handleIconClick}>
       
            <img className="flex items-center justify-center" width="24" height="24" src="https://img.icons8.com/material-rounded/24/000000/expand-arrow--v1.png" alt="expand-arrow--v1"/>
          </button>

          {isDropdownVisible && (
            <div className="absolute bg-neutral-500 text-white flex flex-col">
      
              <Link to="/men">Men Collection</Link>
              <Link to="/women">Women Collection</Link>
            </div>
          )}
        </div>

        <Link to="/recommendation">Get Recommendation</Link>
        <Link to="/tryon">Try On</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">
        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png" alt="like--v1"/>
        </Link>
        <Link to="/">
        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png" alt="like--v1"/>
        </Link>
        <Link to="/">
        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png" alt="like--v1"/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
