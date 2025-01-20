import { sosmed } from "../../utils/Contants";

function FooterSosmed() {
  return (
    <>
      {sosmed.map((e, i) => {
        return (
          <a key={i} className="text-2xl lg:text-3xl xl:text-4xl">
            {e.element}
          </a>
        );
      })}
    </>
  );
}

export default FooterSosmed;
