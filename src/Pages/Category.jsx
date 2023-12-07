import React from "react";
import FilterCard from "../components/CategoryCompo/FilterCard";
import Navbar2 from "../components/Navbar/Navbar2.component";
import ShopByCategory from "../components/CategoryCompo/ShopByCategory";
import DressCard from "../components/CategoryCompo/DressCard";
import { Dresscollection } from "../utils/collection";

const Category = () => {
  return (
    <section className="bg-[#EEEEEE]">
      <Navbar2 />
      <div className="w-[98vw] h-72 flex relative justify-center items-center pb-5">
        <FilterCard />
      </div>
      <div className="w-full h-full flex relative justify-center items-center px-32 pb-10">
        <ShopByCategory />
        <div className="w-[75%] h-[80vh] pl-10 flex relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#FF3754] scrollbar-track-gray-300 rounded-lg">
         
            {Dresscollection &&
              Dresscollection.map((dress, index) => (
                <DressCard dress={dress} />
              ))}
        
        </div>
      </div>
    </section>
  );
};

export default Category;
