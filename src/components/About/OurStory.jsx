import Container from "../shared/Container";

const OurStory = () => {
  return (
    <div className="py-20 md:py-[100px] border-y border-cf-coffee bg-foreground text-center">
      <Container>
        <h2 className="text-[42px] sm:text-[50px] md:text-[54px] lg:text-6xl font-nunito leading-tight tracking-tighter text-cf-coffee font-medium">Our story</h2>
        <p className="text-cf-coffee mt-5 lg:mt-10 pb-2.5 md:w-[578px] lg:w-[780px] mx-auto">
          At Cafen, we believe that every cup of coffee tells a story. Ours
          began with a simple desire—to create a space where people could pause,
          connect, and savor the beauty of a well-brewed cup.
        </p>
        <p className="text-cf-coffee mb-10 md:w-[578px] lg:w-[780px] mx-auto">
          Founded by passionate coffee lovers, Cafen was born from a love for
          both the craft of coffee and the community it fosters.
        </p>
        <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
          <div className="flex gap-2.5 items-center text-cf-coffee">
            <div>
              <h4 className="text-[40px] font-nunito leading-tight tracking-tighter font-medium">12K</h4>
            </div>
            <div>
              <span>Happy customers</span>
            </div>
          </div>
          <div className="flex gap-2.5 items-center text-cf-coffee">
            <div>
              <h4 className="text-[40px] font-nunito leading-tight tracking-tighter font-medium">8+</h4>
            </div>
            <div>
              <span>Years in business</span>
            </div>
          </div>
          <div className="flex gap-2.5 items-center text-cf-coffee">
            <div>
              <h4 className="text-[40px] font-nunito leading-tight tracking-tighter font-medium">100+</h4>
            </div>
            <div>
              <span>Daily visitors</span>
            </div>
          </div>
        </div>
        <img className="mt-10 rounded-2xl"
          src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c97d18c7adaa727aaa92c3_story-image.avif"
          alt="our story banner"
        />
      </Container>
    </div>
  );
};

export default OurStory;
