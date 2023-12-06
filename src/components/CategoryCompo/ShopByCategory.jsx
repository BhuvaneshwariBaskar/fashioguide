import React, { useState } from "react";

const ShopByCategory = () => {
  const [femaleTopic, setFemaleTopic] = useState(true);
  const [options, setOptions] = useState("");

  // const toggleClosedTopic = () => {
  //   setFemaleTopic(!femaleTopic);
  // };

  const handleOptionChange = (cat) => {
    setOptions(cat);
    console.log(options);
  };

  let Cat = ["Kurta", "Tops", "Tunics", "Pants", "kurti", "Jeans"];
  return (
    <div className="w-[25%] h-[80vh] flex-col justify-center items-center relative bg-white pr-7">
      <h1 className="p-10 text-2xl text-[#FF3754] font-bold font-[Inter] text-center">
        Shop By Category
      </h1>
      {/* overflow-y-scroll  */}
      <div className="w-[90%] h-[80%] flex-col justify-center items-center relative px-10 pb-10">
        <div className="flex justify-start items-center relative">
          <button>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/material-rounded/24/000000/expand-arrow--v1.png"
              alt="expand-arrow--v1"
            />
          </button>
          <h2 className="pl-3 text-xl">Women</h2>
        </div>
        {femaleTopic &&
          Cat.map((cat, index) => (
            <div className="pl-16 text-lg">
                <input
                  type="radio"
                  // checked={options.option1}
                  onChange={() => handleOptionChange(`${cat}`)}
                />
                {cat}
            </div>
          ))}
          <div className="flex justify-start items-center relative">
          <button>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/material-rounded/24/000000/expand-arrow--v1.png"
              alt="expand-arrow--v1"
            />
          </button>
          <h2 className="pl-3 text-xl">Men</h2>
        </div>
        {femaleTopic &&
          Cat.map((cat, index) => (
            <div className="pl-16 text-lg">
                <input
                  type="radio"
                  // checked={options.option1}
                  onChange={() => handleOptionChange(`${cat}`)}
                />
                {cat}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
