import React from 'react';
import { Dresscollection } from "../../utils/collection";
import Rating from "../Neccesary/Rating";

const DressCard = ({dress}) => {
  return (
    <div className="relative w-[20vw] h-[50vh] flex-col justify-center items-center bg-white px-10 pt-5 group" >
      <h1 className="text-lg font-normal text-center whitespace-normal">{dress.dress_name}</h1>
      <h1 className="text-xl font-semibold text-center">{dress.price}</h1>
      <Rating rating={dress.rating}/>
      <img src={dress.image} alt="Dress" />
      <button className="absolute  bottom-0 right-0  py-5 w-[20vw] bg-[#FF3754] text-white text-xl hidden group-hover:block">Add To Cart</button>
    </div>
  );
};

export default DressCard;
