const Intro = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-8 mb-20 lg:mb-32 border border-cf-coffee rounded-2xl overflow-hidden">
      <div>
        <img
          src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c97d18a23cbf4ea02c1405_about-hero-image.avif"
          alt="about intro image"
        />
      </div>
      <div className="p-5">
        <h1 className="text-[56px] pb-4 leading-[1.125] text-cf-coffee font-nunito font-semibold">About cafen café</h1>
        <p className="pb-[50px] text-cf-coffee">Welcome to Cafen Café, where every cup of coffee is crafted with love and every visit feels like coming home.</p>
        <ul className="text-cf-coffee">
            <li className="flex items-center gap-2.5 pb-2.5 text-sm">
                <img src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c5dd9223f789cfded54897_about-list-icon.svg" alt="tick icon" />
                <span>From a dream to reality</span></li>
            <li className="flex items-center gap-2.5 pb-2.5 text-sm"><img src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c5dd9223f789cfded54897_about-list-icon.svg" alt="tick icon" /><span>Opening our doors</span></li>
            <li className="flex items-center gap-2.5 pb-2.5 text-sm"><img src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c5dd9223f789cfded54897_about-list-icon.svg" alt="tick icon" /><span>Growing with our community</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
