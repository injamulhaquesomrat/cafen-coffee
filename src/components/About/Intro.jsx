import Container from "../shared/Container";

const Intro = () => {
  return (
    <div className="bg-foreground pt-[30px] pb-20 md:pb-[100px] lg:pb-[120] xl:pb-[150px] ">
      <Container>
        <section className="flex flex-col md:flex-row border border-primary rounded-2xl overflow-hidden">
          {/* start:: intro image */}
          <div className="basis-1/2 md:basis-5/12">
            <img
              className="h-full w-full object-cover"
              src="/assets/images/about/about-hero.avif"
              alt="about intro image"
            />
          </div>
          {/* end:; intro image */}

          {/* start:: intro text container */}
          <div className="p-5 md:p-10 lg:p-[60px] bg-secondary-foreground basis-1/2 md:basis-7/12">
            <h1 className="text-[56px] xs:tex-[62px] md:text-[68px] lg:text-[70px] xl:text-[80px] leading-[1.1] pb-4 md:pb-7 text-primary font-sober">
              About cafen café
            </h1>
            <p className="pb-[50px] md:pb-[60px] max-w-[600px] text-primary-foreground">
              Welcome to Cafen Café, where every cup of coffee is crafted with
              love and every visit feels like coming home.
            </p>
            <div className="w-full xl:h-1/2 flex xl:items-center">
              <ul className="text-primary-foreground">
                {introList.map((item) => (
                  <li key={item?.id} className={item?.classNames}>
                    <img
                      className="h-5 w-5"
                      src="/public/assets/icons/props/list-tick.svg"
                      alt="tick icon"
                    />
                    <span className="text-sm md:text-base">{item?.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* end:: intro text container */}
        </section>
      </Container>
    </div>
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
