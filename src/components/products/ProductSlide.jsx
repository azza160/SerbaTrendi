/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IoMdHeartEmpty } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
import { useContext } from "react";
import { globalContext } from "../../App";
import ProductStar from "./productStar";

function ProductSlide() {
  //ambil data product melalui usecontext
  const { productsTop, setDataKeranjang } = useContext(globalContext);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={"auto"}
      grabCursor={true}
      modules={[Navigation, Pagination, A11y]}
      pagination={true}
      navigation={{
        nextEl: "#next",
        prevEl: "#prev",
      }}
      className="pt-[70px] pb-[40px]"
    >
      {productsTop.map((e) => {
        return (
          <SwiperSlide
            className="border-2 rounded-md max-w-[330px] mx-auto lg:max-w-[400px] h-[480px] relative"
            key={e.id}
          >
            <span className="bg-slate-300 absolute w-[30px] h-[30px] inline-flex justify-center top-1 left-1 rounded-md items-center">
              <IoMdHeartEmpty className="font-medium text-2xl text-blue-600" />
            </span>
            <div className="px-5 flex justify-center w-full py-5">
              <img src={e.image} className="h-[200px]"></img>
            </div>
            <p className="w-full bg-sky-300 text-sky-700 py-1 font-medium text-center text-sm">
              {e.category}
            </p>
            <div className="px-5 py-5 flex flex-col justify-center">
              <h3 className="font-semibold text-lg">{e.title}</h3>
              <div className="flex mt-2">
                <div className="pr-2 border-r border-r-slate-800 flex gap-2">
                  <ProductStar jumlahRating={e.rating.rate} />
                </div>
                <span className="text-sm pl-2">{e.rating.count} reviews</span>
              </div>
            </div>
            <div className="w-[96%] flex justify-between pl-3 bg-sky-300 rounded-e-md items-center rounded-s-md mt-[30px] absolute bottom-2 left-2 right-1">
              <span className="text-black font-semibold">${e.price}</span>
              <button
                className="w-[35px] h-[35px] rounded-md inline-flex justify-center items-center bg-sky-800"
                onClick={() => {
                  setDataKeranjang((prev) => {
                    return [...prev, e];
                  });
                }}
              >
                <PiShoppingCartBold className="text-white text-lg" />
              </button>
            </div>
          </SwiperSlide>
        );
      })}
      <div className="absolute top-0 right-[0px] flex gap-5">
        <button
          className="w-[50px] h-[50px] bg-blue-500 rounded-full inline-flex justify-center items-center"
          id="prev"
        >
          <FaArrowLeftLong className="text-2xl text-white" />
        </button>
        <button
          className="w-[50px] h-[50px] bg-blue-500 rounded-full inline-flex justify-center items-center"
          id="next"
        >
          <FaArrowRightLong className="text-2xl text-white" />
        </button>
      </div>
    </Swiper>
  );
}

export default ProductSlide;
