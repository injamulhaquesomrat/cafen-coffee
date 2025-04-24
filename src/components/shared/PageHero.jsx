const PageHero = ({ pageTitle, subContent }) => {
  return (
    <div className="pt-5">
      <div className="py-[80px] px-5 xs:px-[30px] md:py-[100px] bg-secondary-foreground border border-primary rounded-lg shadow-lg">
        <h1 className="text-[56px] xs:text-[62px] md:text-[68px] lg:text-[70px] xl:text-[80px] leading-[1.2] text-center font-sober text-primary">
          {pageTitle}
        </h1>

        {subContent && (
          <div className="text-center text-primary">{subContent}</div>
        )}
      </div>
    </div>
  );
};

export default PageHero;
