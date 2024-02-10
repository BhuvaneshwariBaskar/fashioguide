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

export const addRemoveWishlist = async (dress_id, user_id, action) => 
  await axios.post(`http://localhost:8080/api/wishlist`, {
    dress_id,
    user_id,
    action
  });

export const addRemoveToCart = async (item, user_id,action) =>
  await axios.post(`http://localhost:8080/api/addremovecart`, {
    item,
    user_id,
    action
  });
  export const RemoveFromCart = async (item, user_id) =>
  await axios.post(`http://localhost:8080/api/removecart`, {
    item,
    user_id
    
  });
export const getWishlist = async (user_id) =>
  await axios.post(`http://localhost:8080/api/getwishlist`, {
    user_id,
  });
