/* eslint-disable react/prop-types */
function Section({ id, children, judulsatu, juduldua, deskripsi, classStyle }) {
  return (
    <section
      id={id}
      className="pt-[90px] sm:pt-[105px] lg:pt-[115px] xl:pt-[120px]"
    >
      <div className="text-center mb-[40px] sm:mb-[50px] md:mb-[60px] lg:mb-[70px] xl:mb-[80px]">
        <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[45px] font-bold ">
          {judulsatu} <span className="text-blue-600">{juduldua}</span>
        </h1>
        <p className={classStyle}>{deskripsi}</p>
      </div>
      {children}
    </section>
  );
}

export default Section;
