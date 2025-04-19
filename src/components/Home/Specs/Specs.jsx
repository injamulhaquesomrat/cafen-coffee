import { IoIosInformationCircle } from "react-icons/io";
import Container from "../../shared/Container";
import { specItems } from "../../../utils/specItems";

const Specs = () => {
  return (
    <div className="bg-cf-light-white border-t border-b border-cf-coffee py-14 md:py-20">
      <Container>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-between">
          {/* start:: specs image content */}
          <div className="md:basis-5/12 flex justify-center">
            <img
              className="border border-cf-coffee rounded-[2.5rem] object-cover"
              src="/icons/about/about-image-01.avif"
              alt="about image"
            />
          </div>
          {/* end:: specs image content */}

          <div className="text-cf-coffee grid md:basis-7/12">
            {/* start:: section title */}
            <h5 className="text-3xl md:text-4xl lg:text-5xl font-semibold pb-6 font-sober tracking-tight">
              Discover our coffee
            </h5>
            {/* end:: section title */}

            {/* start:: specs list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-x-8 xl:gap-y-0">
              {/* start: repeatative spec items */}
              {specItems.map((item) => (
                <div key={item?.id} className={item?.classNames}>
                  <div className="bg-cf-yellow p-3 rounded-xl border border-cf-coffee w-fit">
                    <img src={item?.logoSrc} alt="ABOUT ICON   " />
                  </div>
                  <h6 className="text-xl lg:text-2xl font-semibold font-sober tracking-tight">
                    {item?.title}
                  </h6>
                  <p className="font-sober tracking-tight lg:text-lg">
                    {item?.description}
                  </p>
                </div>
              ))}
              {/* end:: repeatative spec items */}

              <div className="flex flex-col justify-end gap-3">
                <div>
                  <button className="bg-cf-coffee text-cf-yellow px-6 md:px-8 p-2 md:py-4 md:text-lg rounded-full">
                    More about
                  </button>
                </div>
                <div className="inline-flex items-center gap-1">
                  <IoIosInformationCircle className="text-2xl" />
                  <p className="text-lg">See what sets us apart</p>
                </div>
              </div>
            </div>
            {/* end:: specs list */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Specs;
