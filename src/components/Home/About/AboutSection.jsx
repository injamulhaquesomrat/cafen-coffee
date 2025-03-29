import Container from "../../shared/Container";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-cf-coffee">
      <Container>
        {/* start:: About section image */}
        <div className="flex justify-center items-center mb-5">
          <img
            className="w-fit"
            src="/icons/hero/hero-decorative-02.avif"
            alt="section icon"
          />
        </div>
        {/* end:: About section image */}
        {/* start:: About section text container */}
        <div className="w-full md:w-4/5 mx-auto text-center flex flex-col gap-5">
          <h2 className="text-3xl md:text-6xl leading-snug tracking-tighter text-cf-yellow font-nunito font-bold">
            Cafen started with a simple idea: to create a space where people can
            enjoy{" "}
            <button className=" bg-cf-coffee border border-cf-yellow px-4 py-1 rounded-full text-cf-yellow text-xl md:text-4xl">
              Great coffee
            </button>{" "}
            and even better company.
          </h2>
          <p className="text-cf-yellow">
            Our passion for quality and community is what drives us every day.
          </p>
        </div>
        {/* end:: About section text container */}
      </Container>
    </section>
  );
};

export default AboutSection;
