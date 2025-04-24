import DecorationButtonPrimary from "../shared/Buttons/DecorationButtonPrimary";
import Container from "../shared/Container";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-secondary-foreground pt-8 overflow-hidden">
      <Container>
        <div className="flex flex-col sm:flex-row gap-8 justify-between">
          {/* start:: hero text container */}
          <div className="w-full md:w-3/6 flex flex-col justify-center pb-10 lg:py-0 gap-[30px] md:gap-[50px] md:basis-2/3 lg:basis-1/2">
            {/* start:: section heading */}
            <h1 className="text-[46px] md:text-5xl xl:text-[80px] leading-[1.2] font-sober text-primary">
              Discover the perfect brew at Cafen café
            </h1>
            {/* end:: section heading */}

            {/*start::hero menu button container */}
            <div>
              <Link to="/menu">
                <DecorationButtonPrimary
                  className={"mb-2.5"}
                  btnText={"View our menu"}
                />
              </Link>
              <div className="flex items-center gap-2">
                <img
                  src="/public/assets/icons/props/star-one.svg"
                  alt="star icon"
                />
                <span className="text-primary">
                  4.95/5 from over 100 reviews
                </span>
              </div>
            </div>
            {/* end::hero menu button container*/}

            {/* start:: specifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-x-8 xl:gap-y-0 text-primary pt-4 xl:pt-8">
              <div className="flex items-start gap-3 xl:gap-5">
                <div className="bg-secondary p-1.5 md:p-3 xl:p-3.5 rounded-xl border border-primary w-fit">
                  <img
                    src="/assets/icons/about/about-icon-01.svg"
                    alt="coffee ICON"
                  />
                </div>
                <div>
                  <h6 className="text-xl xl:text-2xl font-sober ">
                    Artisanal Coffee
                  </h6>
                  <p className="xl:text-lg">
                    Savor fresh, locally sourced menu items.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 xl:gap-5">
                <div className="bg-secondary p-1.5 md:p-3 xl:p-3.5 rounded-xl border border-primary w-fit">
                  <img
                    src="/assets/icons/about/about-icon-03.svg"
                    alt="ABOUT ICON"
                  />
                </div>
                <div>
                  <h6 className="text-xl xl:text-2xl font-sober ">
                    Free Wi-Fi
                  </h6>
                  <p className="xl:text-lg">
                    Stay connected with our complimentary Wi-Fi.
                  </p>
                </div>
              </div>
            </div>
            {/* end:: specifications */}
          </div>
          {/* end:: hero text container */}

          {/* start::hero banner content */}
          <div className="-mb-6 -mt-14 md:-mt-16 md:-mr-4 lg:mr-0 lg:-mt-32 lg:-mb-36 -rotate-6 md:basis-1/3 lg:basis-1/2">
            <div>
              <img
                className="w-[600px] h-[600px] lg:h-[800px] lg:w-[800px] xl:w-full xl:h-full object-cover"
                src="/public/assets/images/hero-2-banner.avif"
                alt="hero banner image"
              />
            </div>
          </div>
          {/* end::hero banner content */}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
