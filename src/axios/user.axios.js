import axios from "axios";

export const signup = (email, name, password, phone) =>
  axios.post(`http://localhost:8080/api/register`, {
    email,
    name,
    password,
    phone,
  });

export const login = (email, password) =>
  axios.post(`http://localhost:8080/api/login`, {
    email,
    password,
  });

export const addWishlist = async (wishlist, user_id) =>
  await axios.post(`http://localhost:8080/api/wishlist`, {
    wishlist,
    user_id,
  });

export const addToCart = async (item, user_id) =>
  await axios.post(`http://localhost:8080/api/addcart`, {
    item,
    user_id,
  });
export const removeFromCart = async (item, user_id) =>
  await axios.post(`http://localhost:8080/api/removecart`, {
    item,
    user_id,
  });
export const getWishlist = async (user_id) =>
  await axios.post(`http://localhost:8080/api/getwishlist`, {
    user_id,
  });


export const updateProfile = async (user_id,name, country, phone, gender,address, pincode) =>
  await axios.post(`http://localhost:8080/api/profile`, {
    user_id,
    name,
    country,
    phone,
    gender,
    address,
    pincode,
    
  });

