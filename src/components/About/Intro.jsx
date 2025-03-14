const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row mt-8 mb-20 md:mb-24 lg:mb-32 border border-cf-coffee rounded-2xl overflow-hidden">
      <div className="basis-1/2 md:basis-5/12">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c97d18a23cbf4ea02c1405_about-hero-image.avif"
          alt="about intro image"
        />
      </div>
      <div className="p-5 md:p-10 bg-cf-light-yellow basis-1/2 md:basis-7/12">
        <h1 className="text-[56px] md:text-6xl pb-4 md:pb-7 leading-[1.125] tracking-tighter text-cf-coffee font-nunito font-semibold">
          About cafen café
        </h1>
        <p className="pb-[50px] md:pb-[60px] text-cf-coffee">
          Welcome to Cafen Café, where every cup of coffee is crafted with love
          and every visit feels like coming home.
        </p>
        <ul className="text-cf-coffee mb-auto">
          <li className="flex items-center gap-2.5 pb-2.5 md:pb-4 text-sm md:text-base">
            <img
              className="h-5 w-5"
              src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c5dd9223f789cfded54897_about-list-icon.svg"
              alt="tick icon"
            />
            <span>From a dream to reality</span>
          </li>
          <li className="flex items-center gap-2.5 pb-2.5 md:pb-4 text-sm md:text-base">
            <img
              className="h-5 w-5"
              src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c5dd9223f789cfded54897_about-list-icon.svg"
              alt="tick icon"
            />
            <span>Opening our doors</span>
          </li>
          <li className="flex items-center gap-2.5 pb-2.5 md:pb-0 text-sm md:text-base">
            <img
              className="h-5 w-5"
              src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c5dd9223f789cfded54897_about-list-icon.svg"
              alt="tick icon"
            />
            <span>Growing with our community</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
