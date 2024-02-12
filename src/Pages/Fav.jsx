import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar2 from '../components/Navbar/Navbar2.component';
import Singlecollection from '../components/Collectioncompo/Singlecollectioncard';
import { getWishlist } from '../axios/user.axios';

const Fav = ({ user }) => {
    // const [quantity, setQuantity] = useState(0);
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        getWishlist(user.user_id).then((res) => {
            console.log(res);
            setData(res.data.WishList);
        });
    }, []);
console.log(data);
let favorite=true;
    return (
        <>


            <section className="bg-[#EEEEEE]">
                {/* Navbar */}
                <Navbar2 />
                <div className="ml-[5%] mt-[3%] position:relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {data &&
                        data.map((dress, index) => (
                            <Singlecollection dress={dress} favorite={favorite} user={user}/>
                        ))}
                </div>
            </section>

        </>
    );
};

export default Fav;
