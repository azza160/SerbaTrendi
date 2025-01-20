/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import Beranda from "./pages/Beranda";
import { getData, getTopProducts } from "./API/function";
import { Routes, Route } from "react-router";
import Products from "./pages/Products";

export const globalContext = createContext();

function App() {
  //state untuk mengelola data product
  const [dataProducts, setDataProducts] = useState([]);
  const [productsTop, setProductsTop] = useState([]);
  const [showData, setShowData] = useState([]);
  const [category, setCategory] = useState("semua");
  const [bySort, setBySort] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  //state untuk mengeolola data keranjang
  const [dataKeranjang, setDataKeranjang] = useState([]);

  //function yang akan dijalankan saat App pertama kali dirender

  //function mengambil datatopproduct
  const getTopProductFromApi = async () => {
    const data = await getTopProducts();
    setProductsTop(data.data);
  };

  //function mengambil semua data products
  const getAllProductsFromApi = async () => {
    const data = await getData();
    setDataProducts(data.data);
  };

  //memfilter product berdasarkan kategori
  const filterProducts = (products, category) => {
    if (category === "semua") {
      return products;
    } else {
      return products.filter((e) => e.category === category);
    }
  };

  // Function untuk melakukan sort produk berdasarkan harga
  const sortProductsByPrice = (products, sortBy) => {
    if (sortBy === "harga termahal") {
      return [...products].sort((a, b) => b.price - a.price);
    } else if (sortBy === "harga termurah") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortBy === "A - Z") {
      return [...products].sort((a, b) => (a.title > b.title ? 1 : -1));
    } else {
      return products;
    }
  };

  //function cari data
  const searchProducts = (products, searchTerm) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  //function mengelola products
  const handleProducts = () => {
    let filteredData = filterProducts(dataProducts, category);
    let sortedData = sortProductsByPrice(filteredData, bySort);
    let searchData = searchProducts(sortedData, searchTerm);
    setShowData(searchData);
  };

  useEffect(() => {
    getAllProductsFromApi();
    getTopProductFromApi();
  }, []);

  useEffect(() => {
    handleProducts();
  }, [dataProducts, category, bySort, searchTerm]);

  return (
    <globalContext.Provider
      value={{
        dataProducts,
        productsTop,
        category,
        setCategory,
        showData,
        bySort,
        setBySort,
        searchTerm,
        setSearchTerm,
        handleProducts,
        dataKeranjang,
        setDataKeranjang,
      }}
    >
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </globalContext.Provider>
  );
}

export default App;
