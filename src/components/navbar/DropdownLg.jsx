import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

function DropdownLg() {
  const [isDopActive, setIsDopActive] = useState(false);

  return (
    <div className="hidden lg:block relative">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => {
          setIsDopActive(!isDopActive);
        }}
      >
        <span className="text-lg lg:text-xl">Product</span>
        {isDopActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <div
        className={`absolute bg-white border rounded-md top-[110%] flex flex-col p-5 px-5 py-6 w-[200px] ${
          isDopActive ? "scale-y-100" : "scale-y-0"
        } duration-300 origin-top`}
      >
        <a
          href="#topProducts"
          className="capitalize pb-3 border-b"
          onClick={() => {
            setIsDopActive(false);
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

export default DropdownLg;
