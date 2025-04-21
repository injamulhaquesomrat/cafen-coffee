const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row mt-[30px] mb-20 md:mb-[100px] lg:mb-[120] xl:mb-[150px] border border-cf-coffee rounded-2xl overflow-hidden">
      {/* start:: intro image */}
      <div className="basis-1/2 md:basis-5/12">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c97d18a23cbf4ea02c1405_about-hero-image.avif"
          alt="about intro image"
        />
      </div>
      {/* end:; intro image */}

      {/* start:: intro text container */}
      <div className="p-5 md:p-10 lg:p-[60px] bg-cf-light-yellow basis-1/2 md:basis-7/12">
        <h1 className="text-[56px] xs:tex-[62px] md:text-[68px] lg:text-[70px] xl:text-[80px] leading-[1.2] pb-4 md:pb-7 text-cf-coffee font-sober">
          About cafen café
        </h1>
        <p className="pb-[50px] md:pb-[60px] max-w-[600px] text-cf-coffee xl:text-lg ">
          Welcome to Cafen Café, where every cup of coffee is crafted with love
          and every visit feels like coming home.
        </p>
        <div className="w-full xl:h-1/2 flex xl:items-center">
          <ul className="text-cf-coffee">
            {introList.map((item) => (
              <li key={item?.id} className={item?.classNames}>
                <img
                  className="h-5 w-5"
                  src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c5dd9223f789cfded54897_about-list-icon.svg"
                  alt="tick icon"
                />
                <span className=" text-sm md:text-base xl:text-lg">
                  {item?.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* end:: intro text container */}
    </section>
  );
};

export default Intro;

// intro list
const introList = [
  {
    id: 1,
    text: "From a dream to reality",
    classNames: "flex items-center gap-2.5 pb-2.5 md:pb-4",
  },
  {
    id: 2,
    text: "Opening our doors",
    classNames: "flex items-center gap-2.5 pb-2.5 md:pb-4",
  },
  {
    id: 3,
    text: "Growing with our community",
    classNames: "flex items-center gap-2.5 pb-2.5 md:pb-0",
  },
];
