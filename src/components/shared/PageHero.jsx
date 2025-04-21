const PageHero = ({ pageTitle, subContent }) => {
  return (
    <div className="py-[80px] px-5 xs:px-[30px] md:py-[100px] bg-cf-light-yellow border border-cf-coffee rounded-lg shadow-lg mt-5">
      <h1 className="text-[56px] xs:text-[62px] md:text-[68px] lg:text-[70px] xl:text-[80px] leading-[1.2] text-center font-sober text-cf-coffee">
        {pageTitle}
      </h1>

      {subContent && <div>{subContent}</div>}
    </div>
  );
};

export default PageHero;
