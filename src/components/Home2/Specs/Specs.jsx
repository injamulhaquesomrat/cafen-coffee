import Container from "../../shared/Container";

const Specs = () => {
  return (
    <section className="bg-foreground py-20 md:py-[100px] lg:py-[120px] xl:py-[150px] border-y border-primary">
      <Container>
        <div>
          {/* start:: section heading */}
          <h2 className="text-[42px] xs:text-[50px] md:text-[54px] lg:text-[56px] xl:text-[60px] leading-[1.2] pb-[30px] xs:pb-10 lg:pb-[60px] xl:pb-[70px] font-sober text-primary text-center">
            Our commitment to sustainability
          </h2>
          {/* end:: section heading */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 lg:gap-x-[30px] xl:gap-y-0 text-primary ">
            {/* start:: left spec list */}
            <div className="flex flex-col md:justify-between gap-6 lg:gap-x-8 xl:gap-y-0">
              {specItems.slice(0, 2).map((item) => (
                <div
                  key={item?.id}
                  className="flex md:flex-row-reverse gap-3 lg:gap-6 items-start justify-between"
                >
                  <div className="bg-secondary px-1 py-2 rounded-full border border-primary w-10 h-10 flex items-center justify-center">
                    <img
                      className="min-w-8 h-[22px]"
                      src={item?.icon}
                      alt={item?.title}
                    />
                  </div>
                  <div className="w-fit md:text-right space-y-2 lg:space-y-4">
                    <h6 className="text-xl lg:text-[22px] xl:text-[32px] font-sober leading-[1.2]">
                      {item?.title}
                    </h6>
                    <p className="leading-[1.2] lg:text-base">
                      {item?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* end:: left spec list */}

            {/* start:: spec image */}
            <div className="md:basis-5/12 flex justify-center">
              <img
                className="border border-primary rounded-2xl object-cover"
                src="/public/assets/images/spec/book-a-table.avif"
                alt="about image"
              />
            </div>
            {/* end:: spec image */}

            {/* start:: right spec list */}
            <div className="flex flex-col md:justify-between gap-6 lg:gap-x-8 xl:gap-y-0">
              {specItems.slice(2, 4).map((item) => (
                <div
                  key={item?.id}
                  className="flex justify-between gap-3 lg:gap-5"
                >
                  <div className="bg-secondary px-1 py-2 rounded-full border border-primary w-10 h-10 flex items-center justify-center">
                    <img
                      className="min-w-8 h-[22px]"
                      src={item?.icon}
                      alt={item?.title}
                    />
                  </div>
                  <div className="w-fit md:text-left space-y-2 lg:space-y-4">
                    <h6 className="text-xl lg:text-[22px] xl:text-[32px] font-sober leading-[1.2]">
                      {item?.title}
                    </h6>
                    <p className="leading-[1.2] lg:text-base">
                      {item?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* end:: right spec list */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Specs;

// specs items
const specItems = [
  {
    id: 1,
    title: "Cozy atmosphere",
    description:
      "  We are committed to eco-friendly practices, from using biodegradable materials to sourcing locally",
    icon: "/public/assets/icons/props/cozy-atmosphere.svg",
  },
  {
    id: 2,
    title: " Community engagement",
    description:
      "We believe in giving back to our community through events, and local collaborations.",
    icon: "/public/assets/icons/props/community-engagement.svg",
  },
  {
    id: 3,
    title: "Artisanal coffee",
    description:
      "Our coffee is sourced from the finest regions around the world and roasted to perfection.",
    icon: "/public/assets/icons/props/artisanal-coffee.svg",
  },
  {
    id: 4,
    title: "Exceptional service",
    description:
      "Our friendly and knowledgeable staff are dedicated to providing you with the best service",
    icon: "/public/assets/icons/props/exceptional-services.svg",
  },
];
