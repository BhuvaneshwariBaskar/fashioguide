import axios from "axios";

export const signup=(email,name,password,phone)=>
    axios.post(`http://localhost:8080/api/register`,{
        email,name,password,phone
})

    export const login=(email,password)=>
    axios.post(`http://localhost:8080/api/login`,{
        email,password
    })    


    export const addWishlist = async (wishlist,user_id) =>
    await axios.post(`http://localhost:8080/api/wishlist`, {
    wishlist,user_id
    }); 

    export const addRemoveCart = async (bag,user_id) =>
    await axios.post(`http://localhost:8080/api/addcart`, {
    bag,user_id
    }); 

    export const getWishlist = async (user_id) =>
    await axios.post(`http://localhost:8080/api/getwishlist`, {
    user_id
    }); 

    