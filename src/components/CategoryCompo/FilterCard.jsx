import React, { useState } from "react";

const FilterCard = () => {
  const [sizeOfDress, setsizeOfDress] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [price, setPrice] = useState(0);
  let size = ["XS", "S", "M", "L", "XL"];
  let rating = [1, 2, 3, 4, 5];

  return (
    <div className="w-[85%] h-[90%] flex justify-center items-center relative bg-white px-10">
      {/* size */}
      <div className="w-[23%] h-[85%] flex-col justify-center items-center relative">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Size</h3>
        <div class="flex position:relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-5">
          {size.map((size, index) => (
            <div className="w-16 h-14 border-2 border-black flex position:relative justify-center items-center">
              <h1>{size}</h1>
            </div>
          ))}
        </div>
      </div>
      {/* price */}
      <div class="h-48 mx-auto border-l-2 border-black" />
      <div className="w-[23%] h-[85%] flex-col justify-center items-center relative">
        <h3 className="text-xl font-bold text-gray-700 mb-4 ml-6">Price</h3>
        <input
          type="range"
          min={100}
          max={10000}
          step={100}
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="w-[10vw] ml-16 mt-12"
          style={{ accentColor: "#FF3754" }}
          id="myRange"
        />
        <h1 className=" mt-4 text-center">{price}</h1>
      </div>
      {/* rating */}
      <div class="h-48 mx-auto border-l-2 border-black" />

      <div className="w-[23%] h-[85%] flex-col justify-center items-center relative">
        <h3 className="text-xl font-bold text-gray-700 mb-4 ml-6">Rating</h3>
        <div class="flex position:relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-5 ml-6">
          {rating.map((rating, index) => (
            <div className="w-16 h-14 border-2 border-black flex position:relative justify-center items-center">
              <h1>{rating}</h1>
            </div>
          ))}
        </div>
      </div>
      {/* sort by */}
      <div class="h-48 mx-auto border-l-2 border-black" />

      <div className="w-[23%] h-[85%] flex-col justify-center items-center relative">
        <h3 className="text-xl font-bold text-gray-700 mb-4 ml-6">Sort By</h3>

        <select
          id="mySelect"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-48 h-14 bg-[#D9D9D9] ml-[20%] rounded-xl mt-6 text-lg"
        >
          <option value="">Select an option</option>
          <option value="option1">Male</option>
          <option value="option2">Female</option>
        </select>
      </div>
      <div className="w-[8%] h-[85%] flex-col justify-center items-center relative p-4 space-y-5">
        <div className="w-[70px] h-[70px] rounded-full border-2 border-[#FF3754] flex justify-center items-center relative">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/long-arrow-right.png"
            alt="long-arrow-right"
          />
        </div>
        <div className="w-[70px] h-[70px] rounded-full border-2 border-[#FF3754] flex justify-center items-center relative">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/reboot.png"
            alt="reboot"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
