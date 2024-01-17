import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Singlecollection = ({ dress, index }) => {
  const navigate = useNavigate();
  const navigateToPage=(e)=>{
    navigate('/individual', { state: { data: e } });
  }

  return (
    <div className="sm:w-96 h-[80vh] position:relative justify-center items-center" onClick={()=>navigateToPage(dress)}>
      <div
        className="w-96 h-[60vh] position:relative justify-center items-center bg-white my-7 mt-7 mb-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${dress.image})` }}
      ></div>
      <h1 className="text-left text-xl font-[inter]">{dress.brand}</h1>
      <h2 className="text-left font-light text-lg font-[inter]">
        {dress.dress_name}
      </h2>
      <h2 className="text-left font-light text-lg font-[inter]">
        {dress.price}
      </h2>
    </div>
  );
};

export default Singlecollection;
