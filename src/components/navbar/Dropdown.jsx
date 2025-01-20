/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

function Dropdown({ setIsNavActive }) {
  const [isDopActive, setIsDopActive] = useState(false);

  return (
    <div className="lg:hidden">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => {
          setIsDopActive(!isDopActive);
        }}
      >
        <span className="text-lg ">Product</span>
        {isDopActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <div
        className={`bg-white flex rounded-md overflow-hidden duration-300 ${
          isDopActive ? "h-[107px] p-5 mt-3 border" : "h-[0px] p-0"
        } flex-col gap-1`}
      >
        <a
          href="#topProducts"
          className={`capitalize pb-2 ${isDopActive && "border-b"}`}
          onClick={() => {
            setIsDopActive(false);
            setIsNavActive(false);
          }}
        >
          top product
        </a>
        <Link to="/products" className="capitalize pt-1">
          products
        </Link>
      </div>
    </div>
  );
}

export default Dropdown;
