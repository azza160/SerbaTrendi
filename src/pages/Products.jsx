import HeroProduct from "../componentProducts/HeroProduct";
import NavbarProducts from "../componentProducts/navbar/NavbarProducts";
import ProductContainer from "../componentProducts/product/ProductContainer";

function Products() {
  return (
    <div>
      <NavbarProducts />
      <HeroProduct />
      <ProductContainer />
    </div>
  );
}

export default Products;
