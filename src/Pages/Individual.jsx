import React, { useState, useEffect } from 'react'
import Navbar2 from "../components/Navbar/Navbar2.component"
import Roundcard from '../components/Collectioncompo/Roundcard'
import { Dresscollection } from '../utils/collection'

const Individual = () => {
    const [indiv, setIndiv] = useState([]);
    useEffect(() => {
        // console.log(Dresscollection);
        if (Dresscollection && Dresscollection.length > 0) {
            setIndiv(Dresscollection);


        }
    }, [indiv]);
    console.log(indiv);
    let arr = indiv[0];
    // let size=indiv[0].size;
    let size = ["XS", "S", "M", "L", "XL"];
    // console.log(arr.size);
    return (
        <>
            <Navbar2></Navbar2>
            <div className="bg-[#EEEEEE]">
                <h6 className='p-4 font-bold'>Home/Dresses & Jumpsuits for Women/LOV Dark Brown Layered Shimmer Dress</h6>
                <div className="flex w-[100vw] h-[100vh]">

                    <div className=" p-4 w-5/12 h-full ">
                        
                        {/* <h1>{arr && arr.dress_name}</h1> */}
                        <div className="h-[20] w-[20]">


                           

                        </div>
                        <div class="position:relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 h-[50] w-[50]">

                            <img
                                src={arr && arr.image}
                                alt="Your Image"
                                className="l object-cover"
                            />
                            <img
                                src={arr && arr.image}
                                alt="Your Image"
                                className="l object-cover"
                            />
                            <img
                                src={arr && arr.image}
                                alt="Your Image"
                                className="l object-cover"
                            />
                            <img
                                src={arr && arr.image}
                                alt="Your Image"
                                className="l object-cover"
                            />
                        </div>


                    </div>

                    <div className=" flex w-7/12 h-full flex-col items-center justify-start ">
                        <div className="p-2 w-1/2 font-bold border-b-2 border-black ">
                            <div>LOV</div>
                            <div>LOV Wine Paisley Printed Midi Dress</div>
                            <div className='mb-5'>₹ 2,499.00</div>
                        </div>

                        <div className="flex w-1/2 mt-10 items-center font-bold">
                            <div className="mr-2">Size:</div>
                            {size && size.length > 0 && (
                                <div className="flex mb-3">
                                    {size.map((sizeOption, index) => (
                                        <div key={index} className="border border-black h-10 w-10 p-2 mr-2 flex items-center justify-center">{sizeOption}</div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="flex w-1/2 justify-between mt-8">
                            <button className="bg-black text-white p-2 mr-2">Add to Cart</button>
                            <button className="bg-black text-white p-2 mr-2">Buy Now</button>
                            <button className="bg-black text-white p-2">Wishlist</button>
                        </div>

                        <div className="mt-4 w-1/2 mt-10">
                            <button className="bg-[#FF3754] text-white p-2 h-full w-full">Try On</button>
                        </div>





                    </div>
                </div>
            </div>
        </>
    )
}

export default Individual