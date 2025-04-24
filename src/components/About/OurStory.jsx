import Container from "../shared/Container";

const OurStory = () => {
  return (
    <section className="py-20 md:py-[100px] border-y border-primary bg-background text-center">
      <Container>
        {/* start:: section title */}
        <h2 className="text-[42px] xs:text-[50px] md:text-[54px] lg:text-[56px] xl:text-6xl font-sober text-primary font-medium">
          Our story
        </h2>
        {/* end:: section title */}

        {/* start:: story paragraph text */}
        <p className="text-primary-foreground mt-5 lg:mt-10 pb-2.5 lg:max-w-[570px] xl:max-w-[780px] mx-auto">
          At Cafen, we believe that every cup of coffee tells a story. Ours
          began with a simple desire—to create a space where people could pause,
          connect, and savor the beauty of a well-brewed cup.
        </p>
        <p className="text-primary-foreground mb-10 lg:max-w-[570px] xl:max-w-[780px] mx-auto">
          Founded by passionate coffee lovers, Cafen was born from a love for
          both the craft of coffee and the community it fosters.
        </p>
        {/* end:: story paragraph text */}

        {/* start:: story counter */}
        <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-5 justify-center lg:justify-between items-center md:max-w-[640px] lg:max-w-[664px] xl:max-w-[780px] mx-auto">
          {storyList.map((item) => (
            <div
              key={item?.id}
              className="flex gap-2.5 xl:gap-3 items-center text-primary col-span-1"
            >
              <div>
                <h4 className="text-[40px] xl:text-5xl font-sober  font-medium">
                  {item?.count}
                </h4>
              </div>
              <div>
                <span className="xl:text-lg text-primary-foreground">
                  {item?.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* end:: story counter */}

        {/* start:: story image */}
        <img
          className="mt-10 xs:mt-[60px] lg:mt-[100px]  rounded-2xl"
          src="/assets/images/about/about-story.avif"
          alt="our story banner"
        />
        {/* end:: story image */}
      </Container>
    </section>
  );
};

export default OurStory;

// our story list
const storyList = [
  {
    id: 1,
    count: "12K",
    desc: "Happy customers",
  },
  {
    id: 2,
    count: "8+",
    desc: "Years in business",
  },
  {
    id: 3,
    count: "100+",
    desc: "Daily visitors",
  },
];
