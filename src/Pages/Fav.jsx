// import React, { useEffect, useState } from 'react';
// import Navbar2 from '../components/Navbar/Navbar2.component';
// import Singlecollection from '../components/Collectioncompo/Singlecollectioncard';
// import { addWishlist, getWishlist } from '../axios/user.axios';


// const Fav = ({ user }) => {
//     const [wishlist, setWishlist] = useState([]);
//     console.log(wishlist);

//     useEffect(() => {
//         getWishlist(user.user_id).then((res) => {
//             setWishlist(res.data);
//             console.log(res);
//         });
//     }, []);



//     return (
//         <section className="bg-[#EEEEEE]">
//             {/* Navbar */}
//             <Navbar2 />
//             <div className="ml-[5%] mt-[3%] position:relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {wishlist &&
//                     wishlist.map((dress, index) => (
//                         <Singlecollection
//                             key={index}
//                             dress={dress}
//                             index={index}
//                         />
//                     ))}
//             </div>
//         </section>
//     );
// };

// export default Fav;

import React, { useState } from 'react';
import { useEffect } from 'react';
import { Dresscollection } from '../utils/collection'
import Navbar2 from '../components/Navbar/Navbar2.component';
import Singlecollection from '../components/Collectioncompo/Singlecollectioncard';
import { getWishlist } from '../axios/user.axios';

const Fav = ({ user }) => {
    // const [quantity, setQuantity] = useState(0);
    const [wishlist, setWishlist] = useState([]);
    console.log(wishlist);
    useEffect(() => {
        getWishlist(user.user_id).then((res) => {
            setWishlist(res.data.wishlist);
            console.log(res);
        });
    }, []);


    return (
        <>
            <Navbar2></Navbar2>

            <section className="bg-[#EEEEEE]">
                {/* Navbar */}
                <Navbar2 />
                <div className="ml-[5%] mt-[3%] position:relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {wishlist &&
                        wishlist.map((dress, index) => (
                            <Singlecollection key={index} dress={dress} index={index} />
                        ))}
                </div>
            </section>

        </>
    );
};

export default Fav;
