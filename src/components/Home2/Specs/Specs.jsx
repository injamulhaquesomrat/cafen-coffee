import Container from "../../shared/Container";

const Specs = () => {
  return (
    <section className="bg-cf-light-white border-t border-b border-cf-coffee py-14 md:py-20">
      <Container>
        <div>
          {/* start:: section heading */}
          <h5 className="text-3xl md:text-4xl lg:text-5xl font-semibold pb-6 lg:pb-8 font-nunito tracking-tight text-cf-coffee text-center">
            Our commitment to sustainability
          </h5>
          {/* end:: section heading */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-x-8 xl:gap-y-0 text-cf-coffee ">
            {/* start:: left spec list */}
            <div className="flex flex-col md:justify-between gap-6 lg:gap-x-8 xl:gap-y-0">
              <div className="flex md:flex-row-reverse gap-3 lg:gap-8 items-start justify-between">
                <div className="bg-cf-yellow px-1 py-2 rounded-full border border-cf-coffee w-10 h-10 flex items-center justify-center">
                  <img
                    className="min-w-8 h-[22px]"
                    src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c5ad98f12558cb20c6ee66_about-icon-05.svg"
                    alt="ABOUT ICON"
                  />
                </div>
                <div className="w-fit md:text-right space-y-2 lg:space-y-4">
                  <h6 className="text-xl lg:text-2xl xl:text-[32px] font-semibold font-nunito tracking-tight">
                    Cozy atmosphere
                  </h6>
                  <p className="font-nunito tracking-tight lg:text-base">
                    We are committed to eco-friendly practices, from using
                    biodegradable materials to sourcing locally
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row-reverse gap-3 lg:gap-8 items-start justify-between">
                <div className="bg-cf-yellow px-1 py-2 rounded-full border border-cf-coffee flex items-center justify-center w-10 h-10">
                  <img
                    className="min-w-8 h-[22px]"
                    src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c5ad984041a6256d0d16fb_about-icon-06.svg"
                    alt="ABOUT ICON"
                  />
                </div>
                <div className="w-fit md:text-right space-y-2 lg:space-y-4">
                  <h6 className="text-xl lg:text-2xl xl:text-[32px] font-semibold font-nunito tracking-tight">
                    Community engagement
                  </h6>
                  <p className="font-nunito tracking-tight lg:text-base">
                    We believe in giving back to our community through events,
                    and local collaborations.
                  </p>
                </div>
              </div>
            </div>
            {/* end:: left spec list */}

            {/* start:: spec image */}
            <div className="md:basis-5/12 flex justify-center">
              <img
                className="border border-cf-coffee rounded-2xl object-cover"
                src="/icons/about/about-image-01.avif"
                alt="about image"
              />
            </div>
            {/* end:: spec image */}

            {/* start:: right spec list */}
            <div className="flex flex-col md:justify-between gap-6 lg:gap-x-8 xl:gap-y-0">
              <div className="flex justify-between gap-3 lg:gap-8">
                <div className="bg-cf-yellow px-1 py-2 rounded-full border border-cf-coffee flex items-center justify-center w-10 h-10">
                  <img
                    className="min-w-8 h-[22px]"
                    src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c5ad981e9f0a172b181a40_about-icon-07.svg"
                    alt="ABOUT ICON   "
                  />
                </div>
                <div className="space-y-2 lg:space-y-4">
                  <h6 className="text-xl lg:text-2xl xl:text-[32px] font-semibold font-nunito tracking-tight">
                    Artisanal coffee
                  </h6>
                  <p className="font-nunito tracking-tight lg:text-base">
                    Our coffee is sourced from the finest regions around the
                    world and roasted to perfection.
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-3 lg:gap-8">
                <div className="bg-cf-yellow px-1 py-2 rounded-full border border-cf-coffee flex items-center justify-center w-10 h-10">
                  <img
                    className="min-w-8 h-[22px]"
                    src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c5ad988193824040953f74_about-icon-08.svg"
                    alt="ABOUT ICON   "
                  />
                </div>
                <div className="space-y-2 lg:space-y-4">
                  <h6 className="text-xl lg:text-2xl xl:text-[32px] font-semibold font-nunito tracking-tight">
                    Exceptional service
                  </h6>
                  <p className="font-nunito tracking-tight lg:text-base">
                    Our friendly and knowledgeable staff are dedicated to
                    providing you with the best service
                  </p>
                </div>
              </div>
            </div>
            {/* end:: right spec list */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Specs;
