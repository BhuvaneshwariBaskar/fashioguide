import React, { useState } from "react";
import { useEffect } from "react";

import Navbar2 from "../components/Navbar/Navbar2.component";
import { getCart } from "../axios/dress.axios";
// import { addRemoveCart } from "../axios/user.axios";
import { useDispatch } from "react-redux";
import { RemoveFromCart, sendEmail } from "../axios/user.axios";

const Cart = ({ user }) => {
  const dispatch = useDispatch();

  const [indiv, setIndiv] = useState([]);

  useEffect(() => {
    getCart(user.user_id).then((res) => {
      const updatedIndiv = res.data.DressList || [];
      setIndiv(updatedIndiv);
    });
  }, []);

  let totalPrice = indiv.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );
  let totalQuantity = indiv.reduce((total, item) => total + item.quantity, 0);
  let discount = 0;
  const handleIncrement = (index) => {
    const updatedIndiv = [...indiv];
    indiv[index].quantity += 1;
    setIndiv(updatedIndiv);
  };

  const handleDecrement = (index) => {
    const updatedIndiv = [...indiv];
    if (updatedIndiv[index].quantity > 1) {
      updatedIndiv[index].quantity -= 1;
      setIndiv(updatedIndiv);
    }
  };

  const handleRemoveFromCart = async (dressdata) => {
    // Check if the dress_id already exists in the cart
    const item = {
      dress_id: dressdata.dress.dress_id,
      size: dressdata.size,
      quantity: dressdata.quantity,
      price: dressdata.price,
    };
    try {
      let response;
      response = await RemoveFromCart([item], user.user_id);
      dispatch({
        type: "CREATE_USER",
        payload: { ...user, bag: response.data.userbag },
      });
      window.location.reload();
    } catch (error) {
      console.error("Error adding to cart:", error.message);
    }
  };

  const handleProceedToPay = async () => {
    const emailData = {
      to: user.email, 
      subject: 'Order Confirmation',
      text: 'Thank you for your order!'
    };
    try {
        const response = await sendEmail(emailData);
        console.log(response.message);
      } catch (error) {
        console.error('Error sending email:', error);
      }
}
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
            <div className="shadow-inner overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#FF3754] scrollbar-track-gray-300">
              <table className="w-3/5 ">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 font-bold whitespace-nowrap">
                      Image
                    </th>
                    <th className="px-6 py-3 font-bold whitespace-normal ">
                      Product
                    </th>
                    <th className="px-6 py-3 font-bold whitespace-nowrap">
                      Size
                    </th>
                    <th className="px-6 py-3 font-bold whitespace-nowrap">
                      Quantity
                    </th>
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
                              src={item.dress.image}
                              className="object-cover h-28 w-28 rounded-2xl"
                              alt="image"
                            />
                          </div>
                        </td>
                        <td className="p-4 px-6 text-center whitespace-nowrap">
                          <div className="flex flex-col items-center justify-center">
                            <h3>{item.dress.dress_name}</h3>
                            <h3>{item.dress.brand}</h3>
                          </div>
                        </td>
                        <td className="p-4 px-6 text-center whitespace-nowrap">
                          <div className="flex flex-col items-center justify-center">
                            <h3>{item.size}</h3>
                          </div>
                        </td>

                        <td className="p-4 px-6 text-center whitespace-nowrap">
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
                              value={item.quantity}
                              className="w-12 text-center bg-gray-100 outline-none"
                            />
                            <button
                              onClick={() => handleIncrement(index)}
                              className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-4 px-6 text-center whitespace-nowrap">
                          <td className="p-4 px-6 text-center whitespace-nowrap">
                            ₹ {item.dress.price * item.quantity}
                          </td>
                        </td>

                        <td className="p-4 px-6 text-center whitespace-nowrap">
                          <button onClick={() => handleRemoveFromCart(item)}>
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
            </div>
          </div>
        </div>

        <div className="w-4/12 h-[70vh] px-6 border-l-2 border-black ">
          <h3 className="text-4xl font-bold  tracking-wider py-5  mb-5 ">
            Order summary
          </h3>
          <div className="">
            <div className="flex justify-between mb-2">
              <div>Total Item</div>
              <div>{totalQuantity}</div>
            </div>

            <div className="flex justify-between mb-2">
              <div>Total MRP</div>
              <div>{totalPrice}</div>
            </div>

            <div className="flex justify-between mb-2">
              <div>Discount on MRP</div>
              <div>₹ {discount}</div>
            </div>

            <div className="flex justify-between mb-2">
              <div>Delivary</div>
              <div>₹ 65</div>
            </div>

            <div className="flex justify-between mt-4">
              <div className="text-red-500">Total</div>
              <div className="text-red-500">₹ {totalPrice + discount}</div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-5">
            <button className="bg-red-500 text-white py-2 px-4 mt-4 rounded"
             onClick={handleProceedToPay}>
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
