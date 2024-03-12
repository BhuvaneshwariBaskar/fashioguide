import axios from "axios";

export const dress = async (token) =>
  await axios.get(`http://localhost:8000/api/dress`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getCart = async (user_id) =>
  await axios.post(`http://localhost:8000/api/getcart`, {
    user_id,
  });
