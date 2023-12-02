import React,{useState} from 'react';
import { useEffect } from 'react';
import { Dresscollection } from '../utils/collection'

const Cart = () => {
    const [quantity, setQuantity] = useState(0); 
    const [indiv, setIndiv] = useState([]);
    useEffect(() => {
       
        if (Dresscollection && Dresscollection.length > 0) {
            setIndiv(Dresscollection);


        }
    }, [indiv]);

    const handleIncrement = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 0) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      };
    }

  return (
    <div className="flex">
      {/* Left Side */}
      <div className="w-2/3 h-screen flex items-center justify-center p-4">
        {/* Card */}
        <div className="bg-white p-6 w-full rounded shadow">
          {/* Card Header */}
          <div className="flex justify-between mb-4">
            <div className="font-bold text-lg">Shopping Cart</div>
          </div>

          {/* Card Content */}
          <div className="grid grid-cols-4 gap-4">
            {/* Column Headings */}
            <div className="font-bold ">Items</div>
            <div className="font-bold">Quantity</div>
            <div className="font-bold">Subtotal</div>
            <div className="font-bold"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/filled-trash.png" alt="filled-trash"/></div>

           {/* row */}

            {indiv.map((item, index) => (
          <div key={index} className="flex items-center mt-2">
            {/* Image on the left */}
            <img src={item.image} alt={item.dress_name} className="w-12 h-12 object-cover rounded mr-2 " />

            <div className="flex items-center  space-x-2">
              <div>
                <div className="font-bold">{item.dress_name}</div>
                <div>Brand: {item.brand}</div>
                <div>{item.size}</div>
                
              </div>
             
            </div>
          </div>
        ))}


            <div className="flex items-center space-x-2 ml-2">
      <button onClick={handleDecrement} className="bg-blue-500 text-white px-2 py-1 rounded">-</button>
      <div className="border border-gray-300 p-1 w-8 text-center">{quantity}</div>
      <button onClick={handleIncrement} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
    </div>
            
            {/* <div>$30.00</div> */}
            {indiv.map((item, index) => (
          <div key={index} className="flex items-center mt-2 ">
            <div>{item.price}</div>
            </div>
             ))}
            {/* <div className='flex items-centre justify-centre'> */}
            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/filled-trash.png" alt="filled-trash"/>

            {/* </div> */}
            {/* <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/filled-trash.png" alt="filled-trash"/> */}

          </div>
        </div>
      </div>

 
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
</div>

    </div>
  );
};

export default Cart;
