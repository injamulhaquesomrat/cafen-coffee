const PageHero = ({ pageTitle, subContent }) => {
  return (
    <div className="py-[80px] px-5 bg-cf-light-yellow border border-cf-coffee rounded-lg shadow-lg mt-5">
      <h1 className="text-[50px] text-center md:text-7xl er  font-sober font-bold text-cf-coffee">
        {pageTitle}
      </h1>

      {subContent && (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-6 mt-5 lg:mt-8 flex-wrap">
          {subContent}
        </div>
      )}
    </div>
  );
};

export default PageHero;
