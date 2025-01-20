import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { TfiShoppingCart } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import NavResponsiveProducts from "./NavResponsiveProducts";
import { useState } from "react";
import Keranjang from "../../components/navbar/Keranjang";
import KeranjangList from "../../components/navbar/KeranjangList";
function NavbarProducts() {
  const [isNavActive, setIsNavActive] = useState(false);
  //state untuk mengelola keranjang
  const [isCartActive, setIsCartActive] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 lg:hidden bg-black bg-opacity-85 z-[100] duration-300 ${
          isNavActive ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`px-[5%] md:px-[6%] lg:px-[5%] z-[9999] py-5  bg-slate-50 bg-opacity-95 fixed top-0 left-0 w-full lg:py-6 ${
          isNavActive ? "border-b-0" : "border-b"
        }  border-b-sky-600 shadow-md`}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[45px]  font-bold italic">
            Serba<span className="text-blue-600">trendi.</span>
          </h1>
          <NavResponsiveProducts
            isNavActive={isNavActive}
            setIsNavActive={setIsNavActive}
          />
          <div className="flex items-center gap-3 md:gap-5">
            {isCartActive ? (
              <IoClose
                className="mx-[0.5rem] hover:text-primary duration-300 cursor-pointer text-[1.5rem] sm:text-[1.5rem] hover:scale-110"
                onClick={() => {
                  setIsCartActive(false);
                }}
              />
            ) : (
              <TfiShoppingCart
                className="text-2xl md:text-3xl text-slate-900 cursor-pointer lg:ml-10"
                onClick={() => {
                  setIsCartActive(true);
                  setIsNavActive(false);
                }}
              />
            )}
            {isNavActive ? (
              <IoClose
                className="text-2xl md:text-3xl text-slate-900 cursor-pointer lg:hidden block"
                onClick={() => {
                  setIsNavActive(false);
                }}
              />
            ) : (
              <HiMiniBars3BottomRight
                className="text-2xl md:text-3xl text-slate-900 font-medium cursor-pointer lg:hidden block"
                onClick={() => {
                  setIsNavActive(true);
                }}
              />
            )}
          </div>
        </div>
        <Keranjang isCartActive={isCartActive} />
      </div>
    </>
  );
}

export default NavbarProducts;
