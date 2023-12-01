import React, { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar/Navbar2.component";
import Roundcard from "../components/Collectioncompo/Roundcard";
import { Dresscollection } from "../utils/collection";

import CircleSlider from "../components/swiper/Swiper";
import { Category } from "../utils/category";

const Collection = () => {
  const [womenDress, setWomenDress] = useState([]);
  const [menDress, setMenDress] = useState([]);
  console.log(Category);

  useEffect(() => {
    if (Category && Category.length > 0) {
      const data = Category.filter((event) => event.gender_type === "Female");
      setWomenDress(data);
      console.log(womenDress);
    }
    if (Category && Category.length > 0) {
      const data = Category.filter((event) => event.gender_type === "Male");
      setMenDress(data);
      console.log(menDress);
    }
  }, []);

  return (
    <section className="bg-[#EEEEEE]">
      {/* Navbar */}
      <Navbar2 />
      <div className=" h-52 m-5 ml-[5%] mt-5 flex-row position: relative">
        {Category && Category ? <CircleSlider category={Category} /> : null}
      </div>
      {/* women collection */}
      <div className=" h-full my-5 mr-5 ml-[5%] pb-5 flex-row position: relative">
        <h1 className=" text-3xl  font-[JejuMyeongjo]">Women's collection</h1>
        <div class="position:relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {womenDress &&
            womenDress.map((dress, index) => (
              <Roundcard womendress={dress} index={index} />
            ))}
        </div>
       
      </div>
       {/* men collection */}
       <div className=" h-full mt-5 mr-5 ml-[5%] pb-5 flex-row position: relative">
        <h1 className=" text-3xl  font-[JejuMyeongjo]">Men's collection</h1>
        <div class="position:relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {menDress &&
            menDress.map((dress, index) => (
              <Roundcard womendress={dress} index={index} />
            ))}
        </div>
       
      </div>
       
    </section>
  );
};

export default Collection;
{
  /* <h1 className="text-3xl  font-[JejuMyeongjo]">Men's collection</h1>
        {menDress && menDress ? (
          <Roundcard mendress={menDress} />
        ) : null} */
}
