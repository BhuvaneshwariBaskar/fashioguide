import axios from "axios";

export const signup = (email, name, password, phone) =>
  axios.post(`http://localhost:8000/api/register`, {
    email,
    name,
    password,
    phone,
  });

export const login = (email, password) =>
  axios.post(`http://localhost:8000/api/login`, {
    email,
    password,
  });

export const addRemoveWishlist = async (dress_id, user_id, action) =>
  await axios.post(`http://localhost:8000/api/wishlist`, {
    dress_id,
    user_id,
    action,
  });

export const addRemoveToCart = async (item, user_id, action) =>
  await axios.post(`http://localhost:8000/api/addremovecart`, {
    item,
    user_id,
    action,
  });
export const RemoveFromCart = async (item, user_id) =>
  await axios.post(`http://localhost:8000/api/removecart`, {
    item,
    user_id,
  });
export const getWishlist = async (user_id) =>
  await axios.post(`http://localhost:8000/api/getwishlist`, {
    user_id,
  });

export const updateProfile = async (
  user_id,
  name,
  country,
  phone,
  gender,
  address,
  pincode
) =>
  await axios.post(`http://localhost:8000/api/profile`, {
    user_id,
    name,
    country,
    phone,
    gender,
    address,
    pincode,
  });
// export const makePayment = async (products) =>
//   await axios.post(`http://localhost:8000/api/create-checkout-session`, {
//     products,
//   });

export const sendEmail = async (emailData) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/email`,
      emailData
    );
    console.log(response.data.message);
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
