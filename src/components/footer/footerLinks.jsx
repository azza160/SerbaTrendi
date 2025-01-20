import { links } from "../../utils/Contants";

function FooterLinks() {
  return (
    <>
      {links.map((e, i) => {
        return (
          <a href={e.link} key={i} className="text-sm xl:text-base">
            {e.nama}
          </a>
        );
      })}
    </>
  );
}

export default FooterLinks;
