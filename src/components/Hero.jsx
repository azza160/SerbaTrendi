import HeroImg from "../assets/hero.jpg";

function Hero() {
  return (
    <div
      className="w-full h-screen bg-cover relative flex items-center"
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-[5%] md:px-[6%] lg:px-[5%] text-slate-100">
        <h3
          className="sm:text-lg lg:text-xl lg:font-semibold font-medium"
          style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)" }}
          id="mytextSm"
        >
          Toko serba trendi
        </h3>
        <h2
          className="font-bold text-4xl sm:text-5xl lg:text-6xl  max-w-[398px] sm:max-w-[500px]  md:max-w-[650px] lg:max-w-[800px]  mt-1 sm:mt-[2px] leading-[3rem] sm:leading-[4rem] md:leading-[4rem] lg:leading-[5rem]"
          style={{
            textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
          }}
          id="mytext"
        >
          Merajut gaya dengan inovasi pintar!
        </h2>
        <p
          style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)" }}
          className="my-4 sm:my-5 max-w-[443px] md:font-medium  lg:text-xl lg:max-w-[600px] xl:max-w-[650px]"
          id="mytextMd"
        >
          Temukan koleksi fashion terkini dan produk elektronik terbaru untuk
          gaya hidup modern Anda di toko kami yang inovatif.
        </p>
        <div className="flex gap-4 items-center">
          <a className="py-2.5 bg-blue-600 w-[130px] rounded-lg text-center shadow-lg">
            registrasi
          </a>
          <a className="py-2.5 bg-blue-600 w-[130px] rounded-lg text-center shadow-lg">
            lihat product
          </a>
        </div>
      </div>
      <span
        className="absolute block w-full h-[20%]  bottom-0"
        id="sudo-home"
      ></span>
    </div>
  );
}

export default Hero;
