import Section from "./section/Section";
import aboutImg from "../assets/about.jpg";

function About() {
  return (
    <Section id="tentang" judulsatu="Tentang" juduldua="kami">
      <div className="px-[5%] md:px-[6%] lg:px-[5%] text-slate-900 ">
        <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10 xl:gap-12">
          <div className="md:w-[50%] 2xl:w-[48%]">
            <img
              src={aboutImg}
              className="rounded-md shadow-md w-full lg:shadow-lg xl:shadow-xl"
            ></img>
          </div>
          <div className="mt-8 md:mt-0 md:w-[50%] 2xl:w-[52%]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] xl:leading-[3.7rem] font-bold">
              kenapa memilih product kami?
            </h1>
            <p className="mt-5 xl:text-lg">
              Kami bangga menyajikan produk kualitas tinggi yang dibangun dengan
              fokus pada inovasi dan kreativitas. Dari pakaian hingga
              elektronik, setiap item kami dipilih dengan teliti untuk sangat
              memastikan keunggulan dalam desain dan performa.
            </p>
            <p className="mt-4 xl:mt-6 xl:text-lg">
              Selain itu, kami mengutamakan juga pelayanan pelanggan yang prima,
              siap memberikan dukungan penuh untuk memastikan kepuasan Anda.
              Dengan berbagai pilihan produk yang konsisten dalam kualitas dan
              layanan yang ramah.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
