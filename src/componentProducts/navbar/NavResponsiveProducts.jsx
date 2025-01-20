/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function NavResponsiveProducts({ isNavActive, setIsNavActive }) {
  return (
    <div
      className={`absolute top-full right-0  bg-slate-50 lg:bg-transparent bg-opacity-95 w-full ${
        isNavActive ? "scale-y-100" : "scale-y-0"
      } origin-top duration-300 lg:static lg:scale-y-100`}
    >
      <div className="flex flex-col lg:flex-row gap-8 px-[5%] md:px-[6%] lg:px-0 py-10 lg:py-0 lg:justify-end lg:items-center ">
        <Link to="/" className="text-lg lg:text-xl">
          Home
        </Link>
        <a
          href="#myProduct"
          className="text-lg lg:text-xl"
          onClick={() => {
            setIsNavActive(false);
          }}
        >
          Our products
        </a>
      </div>
    </div>
  );
}

export default NavResponsiveProducts;
