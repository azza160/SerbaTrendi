/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { globalContext } from "../../App";

function ProductFilter() {
  //state untuk mengelola kemunculan filter component
  const [isFilterActive, setIsFilterActive] = useState(false);

  const {
    category,
    setCategory,
    bySort,
    setBySort,
    searchTerm,
    setSearchTerm,
    handleProducts,
  } = useContext(globalContext);

  return (
    <>
      <div
        className={`bg-slate-50 rounded-e-md w-[330px] border-2 h-[384px] z-[1000] shadow fixed lg:static lg:translate-x-0 top-[20%] left-0 duration-300 ${
          isFilterActive ? "translate-x-0 " : "-translate-x-full"
        } `}
      >
        <div className="py-2 border-b-2  bg-slate-100 flex justify-between">
          <h3 className="text-xl font-medium capitalize px-4">filter</h3>
          <span
            className="w-[30px] h-[30px] inline-flex justify-center lg:hidden items-center cursor-pointer bg-red-500 rounded text-white mr-2"
            onClick={() => {
              setIsFilterActive(false);
            }}
          >
            <IoClose className="text-xl" />
          </span>
        </div>
        <div className="py-4 border-b-2 px-4">
          <h4 className="font-medium mb-2">Cari product</h4>
          <div className="flex">
            <input
              type="text"
              placeholder="cari..."
              className="w-[250px] py-1.5 border rounded-s px-3 focus:outline-none text-sm"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            ></input>
            <button
              className="bg-gray-400 w-[37px] rounded-e h-[38px] inline-flex justify-center items-center"
              onClick={handleProducts}
            >
              <FaSearch className="text-white" />
            </button>
          </div>
        </div>
        <div className="py-5 border-b-2 px-4">
          <h4 className="font-medium mb-2">Kategori</h4>
          <div>
            <select
              className="w-full bg-slate-200 py-2 px-3 rounded"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option>semua</option>
              <option>men's clothing</option>
              <option>women's clothing</option>
              <option>electronics</option>
              <option>jewelery</option>
            </select>
          </div>
        </div>
        <div className="py-4 pb-6 px-4">
          <h4 className="font-medium mb-2">urutkan</h4>
          <select
            className="w-full bg-slate-200 py-2 px-3 rounded"
            value={bySort}
            onChange={(e) => {
              setBySort(e.target.value);
            }}
          >
            <option></option>
            <option>harga termahal</option>
            <option>harga termurah</option>
            <option>A - Z</option>
          </select>
        </div>
      </div>
      <span
        className={`w-[40px] h-[40px]  justify-center items-center z-[9999] lg:hidden duration-500 cursor-pointer bg-blue-600 rounded-e fixed top-[30%] left-0 ${
          isFilterActive ? "hidden" : "inline-flex"
        }`}
        onClick={() => {
          setIsFilterActive(true);
        }}
      >
        <FaSearch className="text-white text-lg" />
      </span>
    </>
  );
}

export default ProductFilter;
