import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/contact/Contact";
import TopProducts from "../components/products/TopProducts";
import Footer from "../components/footer/Footer";
import { globalContext } from "../App";
import { useContext } from "react";

function Beranda() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TopProducts />
      <Contact />
      <Footer />
    </div>
  );
}

export default Beranda;
