import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { addRemoveWishlist } from "../../axios/user.axios";
import { useDispatch } from "react-redux";

const Singlecollection = ({ dress, user }) => {
  const [favorites, setFavorites] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateToPage = (e) => {
    navigate("/individual", { state: { data: e } });
  };

  useEffect(() => {
    if (user && user.bag && dress) {
      const isInFav = user.wishlist.some(
        (item) => item === dress.dress_id
      );
      setFavorites(isInFav);
    }
  }, [user, dress]);
  

  const handleAddToWishlist = async (action) => {
    try {
      let response;
      if (action === "add") {
        setFavorites(true);
        response = await addRemoveWishlist([dress.dress_id], user.user_id, action);
      } else if (action === "remove") {
        setFavorites(false);
        response = await addRemoveWishlist([dress.dress_id], user.user_id, action);
        
      }
      dispatch({
        type: "CREATE_USER",
        payload: { ...user, wishlist: response.data.wishlist },
      });
    } catch (error) {
      console.error("Error adding to cart:", error.message);
    }
  };

  return (
    <div
      className="sm:w-96 h-[80vh] position:relative justify-center items-center"
      
    >
      <div
        className="w-96 h-[60vh] position:relative justify-center items-center bg-white my-7 mt-7 mb-4 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${dress.image})` }}
      >
        {favorites ? (
          <IoIosHeart className="absolute top-2 right-2 h-8 w-8 text-[#FF3754] cursor-pointer" onClick={()=>handleAddToWishlist("remove")} />
        ) : (
          <MdFavoriteBorder className="absolute top-2 right-2 h-8 w-8 text-[#FF3754] cursor-pointer" onClick={()=>handleAddToWishlist("add")}/>
        )}
      </div>
      <div onClick={() => navigateToPage(dress)}>
      <h1 className="text-left text-xl font-[inter]">{dress.brand}</h1>
      <h2 className="text-left font-light text-lg font-[inter]">
        {dress.dress_name}
      </h2>
      <h2 className="text-left font-light text-lg font-[inter]">
        {dress.price}
      </h2>
      </div>
    </div>
  );
};

export default Singlecollection;
