/* eslint-disable react/prop-types */
import { useContext } from "react";
import KeranjangList from "./KeranjangList";
import { globalContext } from "../../App";

function Keranjang({ isCartActive }) {
  const { dataKeranjang } = useContext(globalContext);

  return (
    <div
      className={`absolute top-full right-0 h-screen pb-[100px] overflow-y-auto bg-white w-[330px] sm:w-[400px] md:w-[600px] text-slate-800 pt-8 px-5 border-l-4 border-l-primary shadow-md duration-300 ${
        isCartActive ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <h2 className="text-2xl  font-bold mb-8">
        Keranjang <span className="text-primary">produk</span>
      </h2>
      {dataKeranjang.length > 0 ? (
        <div className="flex flex-col">{<KeranjangList />}</div>
      ) : (
        <div className="w-full h-full flex justify-center pt-[250px]">
          <h2 className="text-xl font-bold">data produk masih kosong</h2>
        </div>
      )}
    </div>
  );
}

export default Keranjang;
