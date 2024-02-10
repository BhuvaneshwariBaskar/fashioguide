import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";

const Singlecollection = ({ dress, index }) => {
  const[favorites,setFavorites]=useState(false);
  const navigate = useNavigate();
  const navigateToPage = (e) => {
    navigate('/individual', { state: { data: e } });
  }
  // const isInFavorites = userFavorites && userFavorites.includes(dress.dress_id);

  useEffect(() => {
    
    const isInFav = user.bag.some(
      (item) => item.dress_id === dress.dress_id
    );
    setFavorites(isInFav);
  }, [user.wishlist, dress.dress_id]);

  // const handleRemoveFromFavorites = () => {
  //   removeFromFavorites(index);
  // };


  return (
    // <div className="sm:w-96 h-[80vh] position:relative justify-center items-center" onClick={()=>navigateToPage(dress)}>
    //   <div
    //     className="w-96 h-[60vh] position:relative justify-center items-center bg-white my-7 mt-7 mb-4 bg-cover bg-center"
    //     style={{ backgroundImage: `url(${dress.image})` }}
    //   ></div>
    //   <h1 className="text-left text-xl font-[inter]">{dress.brand}</h1>
    //   <h2 className="text-left font-light text-lg font-[inter]">
    //     {dress.dress_name}
    //   </h2>
    //   <h2 className="text-left font-light text-lg font-[inter]">
    //     {dress.price}
    //   </h2>
    // </div>
    <div className="sm:w-96 h-[80vh] position:relative justify-center items-center" onClick={() => navigateToPage(dress)}>
      <div
        className="w-96 h-[60vh] position:relative justify-center items-center bg-white my-7 mt-7 mb-4 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${dress.image})` }}
      >

{isInFavorites ? (
          <IoIosHeart
            className="absolute top-2 right-2 h-8 w-8 text-[#FF3754] cursor-pointer"
            onClick={handle}
          />
        ) : (
          <MdFavoriteBorder
            className="absolute top-2 right-2 h-8 w-8 text-[#FF3754] cursor-pointer"
            onClick={handle}
          />
        )}
      </div>
      <h1 className="text-left text-xl font-[inter]">{dress.brand}</h1>
      <h2 className="text-left font-light text-lg font-[inter]">{dress.dress_name}</h2>
      <h2 className="text-left font-light text-lg font-[inter]">{dress.price}</h2>
    </div>
  );
};

export default Singlecollection;
