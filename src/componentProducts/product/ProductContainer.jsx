import ProductFilter from "./ProductFilter";
import Myproduct from "./Myproduct";

function ProductContainer() {
  return (
    <section
      id="myProduct"
      className="px-[5%] md:px-[6%] lg:px-[5%] mt-[80px] mb-[1000px] flex gap-5"
    >
      <ProductFilter />
      <Myproduct />
    </section>
  );
}

export default ProductContainer;
