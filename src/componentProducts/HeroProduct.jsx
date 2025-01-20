import hero from "../assets/heroProduct.jpg";

function HeroProduct() {
  return (
    <div
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
      }}
      className="bg-cover h-[50vh] w-full text-slate-800 relative"
    >
      <div className="flex justify-center items-center h-full">
        <h1 className="text-white text-4xl font-bold sm:text-5xl lg:text-6xl">
          Product kami
        </h1>
      </div>
      <span
        className="absolute block w-full h-[10%]  bottom-0"
        id="sudo-home"
      ></span>
    </div>
  );
}

export default HeroProduct;
