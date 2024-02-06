import React, { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar/Navbar2.component";
import Roundcard from "../components/Collectioncompo/Roundcard";
import { Dresscollection } from "../utils/collection";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Individual = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (index) => {
    setSelectedSize(index);
  };

  const location = useLocation();
  const passedData = location.state && location.state.data;
  console.log(passedData);
  var size = passedData.size;
  var itemsize = ["XS", "S", "M", "L", "XL"];

  const TryOn = async (e) => {
    const imageLink = passedData.image;
    console.log("Hello");
    try {
      await axios
        .post("http://localhost:5000/tryon", { imageLink })
        .then((res) => {
          console.log(res);
        });
      console.log("Success");
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  };

  return (
    <>
      <div className="bg-[#EEEEEE]">
        <Navbar2></Navbar2>
        <div className="bg-[#EEEEEE]">
          <h6 className="p-4 font-bold">{passedData.dress_name}</h6>
          <div className="flex w-full-screen h-[70vh]">
            <div className=" p-4 w-5/12 h-full ">
              {/* <h1>{arr && arr.dress_name}</h1> */}
              <div className="h-[20] w-[20]"></div>
              <div class="position:relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 h-[50] w-[50]">
                <img
                  src={passedData && passedData.image}
                  alt="Your Image"
                  className="l object-cover"
                />
              </div>
            </div>

            <div className=" flex w-7/12 h-full flex-col items-center justify-start ">
              <div className="p-2 w-1/2 font-bold border-b-2 border-black">
                <div>{passedData.brand}</div>
                <div>{passedData.dress_name}</div>
                <div className="mb-3">{passedData.price}</div>
              </div>

              <div className="flex w-1/2 mt-10 items-center font-bold">
                <div className="mr-2">Size:</div>
                <div className="flex mb-3">
                  {Array.isArray(size) && size.length > 0 ? (
                    size.map((item, index) => (
                      <div
                        key={index}
                        className={`border h-10 w-10 p-2 mr-2 flex items-center justify-center ${
                          selectedSize === index
                            ? "bg-red-500 text-white"
                            : "border-black"
                        }`}
                        onClick={() => handleSizeClick(index)}
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
              <div className="flex w-1/2 justify-between mt-8">
                <button className="bg-black text-white p-2 mr-2">
                  Add to Cart
                </button>
                <button className="bg-black text-white p-2 mr-2">
                  Buy Now
                </button>
                <button className="bg-black text-white p-2">Wishlist</button>
              </div>

              <div className="mt-4 w-1/2 mt-10">
                <button
                  className="bg-[#FF3754] text-white p-2 h-full w-full"
                  onClick={() => TryOn()}
                >
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
