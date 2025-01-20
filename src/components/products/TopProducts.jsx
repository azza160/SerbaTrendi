/* eslint-disable no-unused-vars */
import Section from "../section/Section";
import produk1 from "../../assets/product1.png";
import produk2 from "../../assets/product2.png";
import produk3 from "../../assets/product3.png";
import produk4 from "../../assets/product4.png";

import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductSlide from "./ProductSlide";
import { useContext } from "react";
import { globalContext } from "../../App";

function TopProducts() {
  const arr = [produk1, produk2, produk3, produk4];
  const { productsTop } = useContext(globalContext);

  return (
    <Section
      id="topProducts"
      judulsatu="products"
      juduldua="unggulan kami"
      deskripsi="product product unggulan di toko kami"
      classStyle="max-w-[200px] mx-auto mt-3 sm:mt-4 md:mt-5 font-light lg:mt-6 xl:mt-7 lg:text-lg lg:max-w-[250px]"
    >
      <div className="px-[5%] md:px-[6%] lg:px-[5%]">
        {productsTop.length > 0 ? (
          <ProductSlide />
        ) : (
          <h1 className="text-center text-3xl font-bold">Loading....</h1>
        )}
      </div>
    </Section>
  );
}

export default TopProducts;
