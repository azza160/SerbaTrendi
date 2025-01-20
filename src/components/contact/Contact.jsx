import Section from "../section/Section";
import InputList from "./inputList";

function Contact() {
  return (
    <Section
      id="contact"
      judulsatu="Contact"
      juduldua="kami"
      deskripsi="Contact dan alamat dari toko Serba trendi"
      classStyle="max-w-[200px] mx-auto mt-2 sm:mt-3 font-light lg:mt-4 xl:mt-6 lg:text-lg lg:max-w-[250px]"
    >
      <div className="px-[5%] md:px-[6%] lg:px-[5%] text-slate-900">
        <div className="bg-slate-200 rounded-md p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-10 flex flex-col md:flex-row md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10 md:items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.60965018193!2d107.5607556805953!3d-6.903271953467887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd8b43fb4d7d%3A0x401e8f1fc28c730!2sCimenyan!5e0!3m2!1sid!2sid!4v1710320399957!5m2!1sid!2sid"
            allowFullScreen=""
            loading="lazy"
            className="w-full rounded-md h-[200px] sm:h-[250px] md:h-[350px] md:w-[50%] md:rounded-e-none lg:h-[450px] xl:h-[550px] border-2 border-slate-300"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <form className="mt-8 sm:mt-10 md:mt-0 flex flex-col gap-3  sm:gap-5 lg:gap-7 xl:gap-8 2xl:gap-10 md:w-[50%]">
            <InputList />
          </form>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
