import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import korean from "../assests/korean.png"
import Black from "../assests/Black.png"
import White from "../assests/white.png"
import Kid from "../assests/kid.png"
import Navbar2 from "../components/Navbar/Navbar2.component";


const Home = () => {
  return (
    <>
<div className="bg-[#525D62]">
      <Navbar></Navbar>
      {/* <Navbar2></Navbar2> */}

      <div className="flex w-auto h-[90vh]">

        <div className="bg-[#525D62] flex items-center justify-center w-1/2 h-full ">
          <img
            src={korean}
            alt="Your Image"
            className="rounded-full object-cover"
          />

        </div>

        <div className="flex w-1/2 h-full flex-col items-center justify-center bg-[#525D62]">
          <p className="mb-3 font-dancing-script text-5xl text-white">Unique</p>

          <p className="mb-6 text-7xl text-white">Collections</p>

          <button className="bg-[#795E4A] text-white px-4 py-2 rounded">
            Shop The Latest
          </button>
        </div>
      </div>
      {/* second */}
      <div className="flex w-auto h-[90vh] flex items-center justify-center">

        <div className="flex w-1/2 h-full flex-col items-center justify-center  bg-[#795E4A]">
          <p className="mb-3 font-dancing-script text-5xl text-white">Limited</p>

          <p className="mb-6 text-7xl text-white">Edition</p>

          <button className="bg-[#525D62] text-white px-4 py-2 rounded">
            Explore Now
          </button>
        </div>
        <div className="bg-[#795E4A] w-1/2  h-full ">
          <img
            src={Black}
            alt="Your Image"
            className="rounded-full object-cover"
          />

        </div>
      </div>

      {/* third */}
      <div className="flex w-auto h-[110vh]">

        <div className="bg-[#936A68] flex items-center justify-center  w-1/2 h-full ">
          <img
            src={White}
            alt="Your Image"
            className="rounded-full object-cover"
          />

        </div>

        <div className="flex w-1/2 h-full flex-col items-center justify-center bg-[#936A68]">
          <p className="mb-3 font-dancing-script text-5xl text-white">AW Collections</p>

          <p className="mb-6 text-7xl text-white">Worn Out</p>
          <p className="mb-6 text-7xl text-white">Elegantly</p>

          <button className="bg-[#795E4A] text-white px-4 py-2 rounded">
            Dive in to the store
          </button>
        </div>

      </div>

      {/* fourth */}
      <div className="flex w-auto h-[100vh]">

        <div className="flex w-1/2 h-full flex-col items-center justify-center  bg-[#4F2C23]">
          <p className="mb-3 font-dancing-script text-5xl text-white">Limited</p>

          <p className="mb-6 text-6xl text-white">Edition</p>

          <button className="bg-[#936A68] text-white px-4 py-2 rounded">
            Explore Now
          </button>
        </div>
        <div className="bg-[#4F2C23]  w-1/2 h-full ">
          <img
            src={Kid}
            alt="Your Image"
            className="rounded-full object-cover"
          />

        </div>
      </div>
      </div>
    </>

  );

};

export default Home;
