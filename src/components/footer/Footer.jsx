import FooterSosmed from "./FooterSosmed";
import FooterLinks from "./footerLinks";

function Footer() {
  return (
    <footer className="bg-blue-600  mt-[100px] text-slate-50">
      <div className="px-[5%] md:px-[6%] lg:px-[5%] flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-7 py-[50px]">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[45px]  font-bold italic">
            Serba<span className="text-black">trendi.</span>
          </h1>
          <p className="text-sm mt-2 lg:mt-3 max-w-[387px] xl:max-w-[450px] xl:text-base xl:mt-4">
            Temukan koleksi fashion terkini dan produk elektronik terbaru untuk
            gaya hidup modern Anda di toko kami yang inovatif.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-medium xl:text-xl">Menu links</h2>
          <div className="flex flex-col gap-2 mt-2 lg:mt-3 xl:mt-4 lg:gap-3 xl:gap-4">
            <FooterLinks />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-medium xl:text-xl">Hubungi kami</h2>
          <div className="text-sm flex flex-col gap-2 mt-2 lg:mt-3 xl:mt-4 lg:gap-3 xl:gap-4">
            <p className="xl:text-base">azzairul@gmail.com</p>
            <p className="xl:text-base">Simpang Batu Hampa,Indonesia</p>
            <div className="flex  gap-3 lg:gap-5 xl:gap-6">
              <FooterSosmed />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-t-slate-500 py-2 xl:py-3 mt-2 text-center">
        <span className="font-medium text-sm xl:text-lg ">
          Copyright 2024 Azzairul
        </span>
      </div>
    </footer>
  );
}

export default Footer;
