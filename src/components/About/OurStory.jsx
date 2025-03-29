import Container from "../shared/Container";

const OurStory = () => {
  return (
    <section className="py-20 md:py-[100px] border-y border-cf-coffee bg-foreground text-center">
      <Container>
        {/* start:: section title */}
        <h2 className="text-[42px] sm:text-[50px] md:text-[54px] lg:text-6xl font-nunito leading-tight tracking-tighter text-cf-coffee font-medium">
          Our story
        </h2>
        {/* end:: section title */}

        {/* start:: story paragraph text */}
        <p className="text-cf-coffee xl:text-lg mt-5 lg:mt-10 pb-2.5 md:w-[578px] lg:w-[780px] xl:w-[900px] mx-auto">
          At Cafen, we believe that every cup of coffee tells a story. Ours
          began with a simple desire—to create a space where people could pause,
          connect, and savor the beauty of a well-brewed cup.
        </p>
        <p className="text-cf-coffee xl:text-lg mb-10 md:w-[578px] lg:w-[780px] xl:w-[900px] mx-auto">
          Founded by passionate coffee lovers, Cafen was born from a love for
          both the craft of coffee and the community it fosters.
        </p>
        {/* end:: story paragraph text */}

        {/* start:: story counter */}
        <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-between items-center max-w-[900px]  mx-auto">
          {storyList.map((item) => (
            <div
              key={item?.id}
              className="flex gap-2.5 xl:gap-3 items-center text-cf-coffee"
            >
              <div>
                <h4 className="text-[40px] xl:text-5xl font-nunito leading-tight tracking-tighter font-medium">
                  {item?.count}
                </h4>
              </div>
              <div>
                <span className="xl:text-lg">{item?.desc}</span>
              </div>
            </div>
          ))}
        </div>
        {/* end:: story counter */}

        {/* start:: story image */}
        <img
          className="mt-10 rounded-2xl"
          src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c97d18c7adaa727aaa92c3_story-image.avif"
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
