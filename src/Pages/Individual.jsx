import React, { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar/Navbar2.component";
import { useLocation } from "react-router-dom";
import { addToCart, addWishlist, removeFromCart } from "../axios/user.axios";
import { useDispatch } from "react-redux";

const Individual = ({ user }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(false);
  const [fav, setFav] = useState(false);

  const passedData = location.state && location.state.data;
  var size = passedData.size;
  var itemsize = ["XS", "S", "M", "L", "XL"];

  useEffect(() => {
    // Check if the dress_id is already in the cart when component mounts
    const isInCart = user.bag.some(
      (item) => item.dress_id === passedData.dress_id
    );
    setCart(isInCart);
  }, [user.bag, passedData.dress_id]);

  const handleAddToWishlist = async () => {
    setFav(!fav);
    let currentWishlist = user.wishlist ? user.wishlist : [];
    console.log("Current wishlist:", currentWishlist);

    const updatedWishlist = [...currentWishlist, passedData.dress_id];

    try {
      const response = await addWishlist(updatedWishlist, user.user_id);
      const updatedUser = response.data;
      dispatch({
        type: "CREATE_USER",
        payload: { ...user, wishlist: updatedWishlist },
      });

      console.log("Item added to wishlist successfully:", updatedUser);
    } catch (error) {
      console.error("Error adding to wishlist:", error.message);
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
  const handleAddToCart = async () => {
    // Check if the dress_id already exists in the cart
    const isInCart = user.bag.some(
      (item) => item.dress_id === passedData.dress_id
    );

    if (isInCart) {
      console.log("Item is already in the cart");
      // Handle the case where the item is already in the cart
    } else {
      // Item is not in the cart, add it
      const item = {
        dress_id: passedData.dress_id,
        size: selectedSize,
        quantity: quantity,
        price: passedData.price,
      };

      try {
        const response = await addToCart([item], user.user_id);
        console.log(response);
        dispatch({
          type: "CREATE_USER",
          payload: { ...user, bag: response.data.userbag },
        });
        setCart(true);
      } catch (error) {
        console.error("Error adding to cart:", error.message);
      }
    }
  };

  const handleRemoveFromCart = async () => {
    const item = [
      {
        dress_id: passedData.dress_id,
        size: selectedSize,
        quantity: quantity,
        price: passedData.price,
      },
    ];
    try {
      const response = await removeFromCart(item, user.user_id);
      console.log(response);
      dispatch({
        type: "CREATE_USER",
        payload: { ...user, bag: response.data.userbag },
      });
      setCart(false);
    } catch (error) {
      console.error("Error removing from cart:", error.message);
    }
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
                    onClick={() => handleRemoveFromCart()}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="bg-black text-white p-3 mr-2"
                    onClick={() => handleAddToCart()}
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
                    onClick={handleAddToWishlist}
                  >
                    Remove from Wishlist
                  </button>
                ) : (
                  <button
                    className="bg-black text-white p-3"
                    onClick={handleAddToWishlist}
                  >
                    Add to Wishlist
                  </button>
                )}
              </div>

              <div className=" w-1/2 mt-8">
                <button className="bg-[#FF3754] text-white text-xl p-3 h-full w-full">
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
//fav=false->add to wishlist->true(remove from wish list)
