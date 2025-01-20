/* eslint-disable react/prop-types */
import { IoStarSharp } from "react-icons/io5";

function ProductStar({ jumlahRating }) {
  let star = [];
  const jumlahrating = Math.ceil(jumlahRating);
  for (let index = 0; index < jumlahrating; index++) {
    star.push(<IoStarSharp className=" text-amber-400 text-lg" />);
  }

  return (
    <>
      {star.map((e, i) => (
        <span key={i}>{e}</span>
      ))}
    </>
  );
}

export default ProductStar;
