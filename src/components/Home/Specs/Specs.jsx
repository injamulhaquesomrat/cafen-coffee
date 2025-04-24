import { IoIosInformationCircle } from "react-icons/io";
import Container from "../../shared/Container";
import { specItems } from "../../../utils/specItems";
import DecorationButtonSecondary from "../../shared/Buttons/DecorationButtonSecondary";

const Specs = () => {
  return (
    <div className="bg-cf-foreground border-t border-b border-cf-coffee cf-section">
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

          {/* start::specs text content */}
          <div className="text-cf-coffee grid md:basis-7/12">
            {/* start:: section title */}
            <h5 className="text-3xl xs:text-[32px] md:text-[34px] lg:text-[38px] xl:text-[40px] pb-6 font-sober">
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
                  <h6 className="text-[22px] lg:text-2xl font-sober">
                    {item?.title}
                  </h6>
                  <p>{item?.description}</p>
                </div>
              ))}
              {/* end:: repeatative spec items */}

              <div className="flex flex-col justify-end gap-3">
                <div>
                  <DecorationButtonSecondary btnText={"More about"} />
                </div>
                <div className="inline-flex items-center gap-1">
                  <IoIosInformationCircle className="text-2xl" />
                  <p className="text-lg">See what sets us apart</p>
                </div>
              </div>
            </div>
            {/* end:: specs list */}
          </div>
          {/* end::specs text content */}
        </div>
      </Container>
    </div>
  );
};

export default Specs;
