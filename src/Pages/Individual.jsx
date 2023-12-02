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
    console.log(arr);

    return (
        <>
            <Navbar2></Navbar2>
            <div className="bg-[#EEEEEE]">
                <h6 className='mt-6 p-4'>Home/Dresses & Jumpsuits for Women/LOV Dark Brown Layered Shimmer Dress</h6>
                <div className="flex w-[100vw] h-[100vh]">

                    <div className=" p-4 w-1/3 h-full ">
                        {/* <div className=" h-full my-5 mr-5 ml-[5%] pb-5 flex-row position: relative">
                            <div class="position:relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {indiv &&
                                    indiv.map((dress, index) => (
                                        <Roundcard individual={dress} index={index} />
                                    ))}
                            </div>
                        </div> */}
                        <h1>{arr && arr.dress_name}</h1>
                        <div className="h-[20] w-[20]">


                            {/* <img
                                src={arr && arr.image}
                                alt="Your Image"
                                className="l object-cover"
                            /> */}

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

                    <div className=" flex w-2/3 h-full flex-col items-center justify-center ">
                        <div className="p-2 font-bold">
                            <div>LOV</div>
                            <div>LOV Wine Paisley Printed Midi Dress</div>
                            <div>₹ 2,499.00</div>
                        </div>
                        <div className="flex items-center">
                            <div className="mr-2">Size:</div>
                            {arr && arr.size && arr.size.length > 0 && (
                                <div className="flex">
                                    {arr.size.map((size, index) => (
                                        <div key={index} className="mr-2">{size}</div>
                                    ))}
                                </div>
                            )}
                        </div>
                       

                    </div>
                </div>
            </div>
        </>
    )
}

export default Individual