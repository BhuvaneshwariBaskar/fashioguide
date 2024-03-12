import React, { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar/Navbar2.component";
import { useLocation } from "react-router-dom";
import {
  addRemoveToCart,
  addRemoveWishlist,
} from "../axios/user.axios";
import { useDispatch } from "react-redux";
import axios from "axios";

const Individual = ({ user }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(false);
  const [fav, setFav] = useState(false);
console.log(user);
  const passedData = location.state && location.state.data;
  var size = passedData.size;
  var itemsize = ["XS", "S", "M", "L", "XL"];

  useEffect(() => {
    if (user && user.bag && passedData) {
      const isInFav = user.wishlist.some(
        (item) => item === passedData.dress_id
      );
      setFav(isInFav);
      const isInCart = user.bag.some(
        (item) => item.dress_id === passedData.dress_id
      );
      setCart(isInCart);
 
    }
  }, [user, passedData]);
  

  const handleAddToWishlist = async (action) => {
    try {
      let response;
      if (action === "add") {
        setFav(true);
        response = await addRemoveWishlist([passedData.dress_id], user.user_id, action);
      } else if (action === "remove") {
        setFav(false);
        response = await addRemoveWishlist([passedData.dress_id], user.user_id, action);
        
      }
      dispatch({
        type: "CREATE_USER",
        payload: { ...user, wishlist: response.data.wishlist },
      });
    } catch (error) {
      console.error("Error adding to cart:", error.message);
    }
  };
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleAddToCart = async (action) => {
    // Check if the dress_id already exists in the cart
    const item = {
      dress_id: passedData.dress_id,
      size: selectedSize,
      quantity: quantity,
      price: passedData.price,
    };
    try {
      let response;
      if (action === "add") {
        response = await addRemoveToCart([item], user.user_id, action);
        setCart(true);
      } else if (action === "remove") {
        response = await addRemoveToCart([item], user.user_id, action);
        setCart(false);
      }
      dispatch({
        type: "CREATE_USER",
        payload: { ...user, bag: response.data.userbag },
      });
    } catch (error) {
      console.error("Error adding to cart:", error.message);
    }
  };
  const HandleTryOn = () => {
    const imageUrl = passedData.image;
  
    axios.post("http://localhost:5000/tryon", { image_url: imageUrl }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        console.log(response.data);
        // Handle the response as needed
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  return (
    <>
      <div className="bg-[#EEEEEE]">
        <Navbar2></Navbar2>
        <div className="bg-[#EEEEEE] pl-20">
          <div className="flex w-full h-[85vh]">
            <div className=" p-4 w-5/12 h-full ">
              {/* <h1>{arr && arr.dress_name}</h1> */}
              <h6 className="p-4 font-bold text-3xl">
                {passedData.dress_name}
              </h6>
              <img
                src={passedData && passedData.image}
                alt="Your Image"
                className="l object-cover h-[70vh] w-[45vw]"
              />
            </div>

            <div className=" flex w-7/12 h-full flex-col items-center justify-center ">
              <div className="p-2 w-1/2 font-bold border-b-2 border-black">
                <h1 className="uppercase text-4xl font-bold py-2">
                  {passedData.brand}
                </h1>
                <h2 className="capitalize text-2xl font-medium pb-2">
                  {passedData.dress_name}
                </h2>
                <h2 className="mb-3  text-2xl">₹ {passedData.price}/-</h2>
              </div>

              <div className="flex w-1/2 mt-10 items-center font-bold">
                <div className="mr-2 text-xl">Size:</div>
                <div className="flex mb-3">
                  {Array.isArray(size) && size.length > 0 ? (
                    size.map((item, index) => (
                      <div
                        key={index}
                        className={`border h-10 w-10 p-2 mr-2 flex items-center justify-center ${
                          selectedSize === item
                            ? "bg-red-500 text-white"
                            : "border-black"
                        }`}
                        onClick={() => setSelectedSize(item)}
                      >
                        {item}
                      </div>
                    ))
                  ) : (
                    <>
                      {itemsize &&
                        itemsize.length > 0 &&
                        itemsize.map((item, index) => (
                          <div
                            key={index}
                            className="border border-black h-10 w-10 p-2 mr-2 flex items-center justify-center"
                          >
                            {item}
                          </div>
                        ))}
                    </>
                  )}
                </div>
              </div>
              <div className="flex w-1/2 mt-6 items-center font-bold">
                <h1 className="mr-2 flex relative justify-center items-center text-xl">
                  Quantity:
                </h1>
                <button
                  onClick={() => handleDecrement()}
                  className="bg-gray-500 text-white px-2 py-1 rounded"
                >
                  -
                </button>
                <input
                  type="text"
                  name="qty"
                  value={quantity}
                  className="w-12 text-center bg-gray-100 outline-none"
                />
                <button
                  onClick={() => handleIncrement()}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
              <div className="flex text-xl w-1/2 justify-between mt-8">
                {cart ? (
                  <button
                    className="bg-black text-white p-3 mr-2"
                    onClick={() => handleAddToCart("remove")}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="bg-black text-white p-3 mr-2"
                    onClick={() => handleAddToCart("add")}
                  >
                    Add to Cart
                  </button>
                )}
                <button className="bg-black text-white p-3 mr-2">
                  Buy Now
                </button>
                {fav ? (
                  <button
                    className="bg-black text-white p-3"
                    onClick={() => handleAddToWishlist("remove")}
                  >
                    Remove from Wishlist
                  </button>
                ) : (
                  <button
                    className="bg-black text-white p-3"
                    onClick={() => handleAddToWishlist("add")}
                  >
                    Add to Wishlist
                  </button>
                )}
              </div>

              <div className=" w-1/2 mt-8" >
                <button className="bg-[#FF3754] text-white text-xl p-3 h-full w-full" onClick={()=>HandleTryOn()}>
                  Try On
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Individual;

