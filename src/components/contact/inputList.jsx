import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

function InputList() {
  return (
    <>
      <div className="flex gap-3 items-center bg-slate-100 border border-slate-500 rounded px-5 sm:px-7">
        <input
          type="text"
          placeholder="username..."
          className="w-full bg-transparent py-3 lg:py-4 xl:py-5 2xl:py-6  focus:outline-none"
        ></input>
        <FaRegUser className="text-xl xl:text-2xl" />
      </div>
      <div className="flex gap-3 items-center bg-slate-100 border border-slate-500 rounded px-5 sm:px-7">
        <input
          type="email"
          placeholder="email..."
          className="w-full bg-transparent py-3 lg:py-4 xl:py-5 2xl:py-6 focus:outline-none"
        ></input>
        <MdOutlineEmail className="text-2xl xl:text-3xl" />
      </div>
      <div className="flex gap-3 items-center bg-slate-100 border border-slate-500 rounded px-5 sm:px-7">
        <input
          type="number"
          placeholder="no telephone..."
          className="w-full bg-transparent py-3 lg:py-4 xl:py-5 2xl:py-6 focus:outline-none"
        ></input>
        <FiPhone className="text-2xl xl:text-3xl" />
      </div>
      <button className="bg-blue-600 w-full py-3 lg:py-4 xl:py-5 2xl:py-6 rounded lg:text-lg text-slate-50 font-semibold">
        kirim
      </button>
    </>
  );
}

export default InputList;
