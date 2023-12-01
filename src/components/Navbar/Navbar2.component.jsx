import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleIconClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="bg-transparent p-4 flex justify-between items-center">
      <div>
        <Link to="/">
          <img src="../src/asset/logo.png" alt="Logo" className="text-black" />
        </Link>
      </div>

      <div className="flex items-end space-x-4 text-black">
        <Link to="/">Home</Link>
        <Link to="/collections">Collections</Link>
        

       
        <div className="relative group flex items-center">
          <span>Category</span>
          <button onClick={handleIconClick}>
       
            <img  width="25" height="25" src="https://img.icons8.com/material-rounded/24/000/expand-arrow--v1.png" alt="expand-arrow--v1"/>
          </button>

          {isDropdownVisible && (
            <div className="absolute bg-black text-white flex flex-col">
      
              <Link to="/men">Men Collection</Link>
              <Link to="/women">Women Collection</Link>
            </div>
          )}
        </div>

        <Link to="/recommendation">Get Recommendation</Link>
        <Link to="/tryon">Try On</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">
        <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/000/like--v1.png" alt="like--v1"/>
        </Link>
        <Link to="/">
        <img width="25" height="25" src="https://img.icons8.com/ios/50/000/shopping-bag--v1.png" alt="shopping-bag--v1"/>
        </Link>
        <Link to="/">
        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/000/user-male-circle.png" alt="user-male-circle"/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar2;
