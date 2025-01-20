import axios from "axios";

export const getData = async () => {
  return await axios.get("https://fakestoreapi.com/products/");
};

export const getTopProducts = async () => {
  return await axios.get("https://fakestoreapi.com/products?limit=8");
};
