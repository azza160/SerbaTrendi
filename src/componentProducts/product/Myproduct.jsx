import { useContext } from "react";
import { globalContext } from "../../App";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartBold } from "react-icons/pi";
import ProductStar from "../../components/products/productStar";

function Myproduct() {
  let { showData } = useContext(globalContext);

  return (
    <>
      {showData.length > 0 ? (
        <div className="flex gap-4 flex-wrap">
          {showData.map((e) => {
            return (
              <div
                className="border-2 rounded-md w-full sm:w-[330px] lg:w-[280px] h-[550px] relative"
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
                    <span className="text-sm pl-2">
                      {e.rating.count} reviews
                    </span>
                  </div>
                </div>
                <div className="w-[96%] flex justify-between pl-3 bg-sky-300 rounded-e-md items-center rounded-s-md mt-[30px] absolute bottom-2 left-2 right-1">
                  <span className="text-black font-semibold">${e.price}</span>
                  <button className="w-[35px] h-[35px] rounded-md inline-flex justify-center items-center bg-sky-800">
                    <PiShoppingCartBold className="text-white text-lg" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default Myproduct;
