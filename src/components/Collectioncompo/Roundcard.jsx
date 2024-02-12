import React from "react";
import { useNavigate } from "react-router-dom";

const Roundcard = ({ womendress }) => {
  const navigate = useNavigate();
  const navigateToPage = (e) => {
    navigate("/singlecollection", { state: { data: e } });
  };

  return (
    <div
      className="sm:w-96 position:relative justify-center items-center"
      onClick={() => navigateToPage(womendress.category_name)}
    >
      <div
        className="w-96 h-[50vh] position:relative justify-center items-center bg-white my-7 mt-7 mb-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${womendress.image})` }}
      ></div>
      <h1 className="text-center text-2xl font-[inter]">
        {womendress.category_name}
      </h1>
    </div>
  );
};

export default Roundcard;
