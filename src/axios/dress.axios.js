import axios from "axios";

export const dress = async (token) =>
  await axios.get(`http://localhost:8080/api/dress`, {
    headers: { "x-access-token": token },
  });
   