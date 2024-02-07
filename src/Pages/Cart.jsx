import React, { useState } from "react";
import { useEffect } from "react";

import Navbar2 from "../components/Navbar/Navbar2.component";
import { getCart } from "../axios/dress.axios";
import { addRemoveCart } from "../axios/user.axios";
import { useDispatch } from "react-redux";

const Cart = ({ user }) => {

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [indiv, setIndiv] = useState([]);

  useEffect(() => {
    getCart(user.user_id).then((res) => {
      console.log(res);
      setIndiv(res.data.DressList || []); // Set indiv to res.DressList if it exists, otherwise set it to an empty array
    });
  }, []);
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleAddToCart = async (actionType,dress_id) => {
    let currentCart = user.bag ? user.bag : [];
    let updatedCart;
    if (actionType === "remove") {
      updatedCart = currentCart.filter(
        (itemId) => itemId !== dress_id
      );
    }
    try {
      const response = await addRemoveCart(updatedCart, user.user_id);
      console.log(response);
      dispatch({
        type: "CREATE_USER",
        payload: { ...user, bag: updatedCart },
      });
      window.location.reload()
    } catch (error) {
      console.error("Error adding to wishlist:", error.message);
    }
  };
  return (
    <>
      <Navbar2></Navbar2>
      <div className="flex flex-row">
        <div className="w-8/12 h-auto flex items-start justify-center p-4">
          <div className="w-[70%] ">
            <div className="my-2">
              <h3 className="text-4xl font-bold tracking-wider  px-10 mb-6">
                Shopping Cart
              </h3>
            </div>

            <table className="w-3/5 shadow-inner overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#FF3754] scrollbar-track-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 font-bold whitespace-nowrap">
                    Image
                  </th>
                  <th className="px-6 py-3 font-bold whitespace-nowrap">
                    Product
                  </th>
                  <th className="px-6 py-3 font-bold whitespace-nowrap">Size</th>
                  <th className="px-6 py-3 font-bold whitespace-nowrap">
                    Price
                  </th>
                  <th className="px-6 py-3 font-bold whitespace-nowrap">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {indiv &&
                  indiv.map((item, index) => (
                    <tr key={index}>
                      <td className="pt-3">
                        <div className="flex justify-center">
                          <img
                            src={item.image}
                            className="object-cover h-28 w-28 rounded-2xl"
                            alt="image"
                          />
                        </div>
                      </td>
                      <td className="p-4 px-6 text-center whitespace-nowrap">
                        <div className="flex flex-col items-center justify-center">
                          <h3>{item.dress_name}</h3>
                          <h3>{item.brand}</h3>
                        </div>
                      </td>
                      <td className="p-4 px-6 text-center whitespace-nowrap">
                        <div className="flex flex-col items-center justify-center">
                          <h3>xl</h3>
                        </div>
                      </td>
                      {/* <td className="p-4 px-6 text-center whitespace-nowrap">
                      <div>
                        <button
                          onClick={() => handleDecrement(index)}
                          className="bg-blue-500 text-white px-2 py-1 rounded"
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
                          onClick={() => handleIncrement(index)}
                          className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                          +
                        </button>
                      </div>
                    </td> */}
                      <td className="p-4 px-6 text-center whitespace-nowrap">
                        {item.price}
                      </td>

                      <td className="p-4 px-6 text-center whitespace-nowrap">
                        <button onClick={() => handleAddToCart("remove",item.dress_id)}>
                          <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/ios-glyphs/30/filled-trash.png"
                            alt="filled-trash"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            {/* 
                        <div className="w-1/3 p-4 mt-40">
                            <div className="text-5xl mb-4">
                                Order summary
                            </div>


                            <div className="flex justify-between mb-2">
                                <div>Total Item</div>
                                <div>12</div>
                            </div>



                            <div className="flex justify-between mb-2">
                                <div>Total MRP</div>
                                <div>₹ Price</div>
                            </div>

                            <div className="flex justify-between mb-2">
                                <div>Discount on MRP</div>
                                <div>₹ Price</div>
                            </div>


                            <div className="flex justify-between mb-2">
                                <div>Delivary</div>
                                <div>₹ Price</div>
                            </div>

                            <div className="flex justify-between mt-4">
                                <div className="text-red-500">Total</div>
                                <div className="text-red-500">₹ TotalAmount</div>
                            </div>
                        </div> */}
          </div>
        </div>

        <div className="w-4/12 h-[70vh] px-6 border-l-2 border-black">
          <h3 className="text-4xl font-bold  tracking-wider py-5  mb-5">
            Order summary
          </h3>
          {/* {indiv.map((item) => (
            <div key={item.dress_id} className="">
              <div className="flex justify-between mb-2">
                <div>Total Item</div>
                <div>12</div>
              </div>

              <div className="flex justify-between mb-2">
                <div>Total MRP</div>
                <div>{item.price}</div>
              </div>

              <div className="flex justify-between mb-2">
                <div>Discount on MRP</div>
                <div>₹ 0</div>
              </div>

              <div className="flex justify-between mb-2">
                <div>Delivary</div>
                <div>₹ 0</div>
              </div>

              <div className="flex justify-between mt-4">
                <div className="text-red-500">Total</div>
                <div className="text-red-500">
                  ₹ {12 * parseFloat(item.price)}
                </div>
              </div>
            </div>
          ))} */}
          <div className="flex items-center justify-center mt-5">
            <button className="bg-red-500 text-white py-2 px-4 mt-4 rounded">
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
