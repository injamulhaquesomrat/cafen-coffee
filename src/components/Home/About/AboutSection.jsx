import { Link } from "react-router-dom";
import Container from "../../shared/Container";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-primary">
      <Container>
        {/* start:: About section image */}
        <div className="flex justify-center items-center mb-4">
          <img
            className=" h-20 w-20"
            src="/icons/hero/hero-decorative-02.avif"
            alt="section icon"
          />
        </div>
        {/* end:: About section image */}
        {/* start:: About section text container */}
        <div className="w-full md:w-4/5 mx-auto text-center flex flex-col gap-5">
          <h2 className="text-[34px] sm:text-[40px] md:text-[54px] lg:text-[56px] xl:text-[60px] leading-[1.2] text-secondary font-sober">
            Cafen started with a simple idea: to create a space where people can
            enjoy{" "}
            <Link href="/products" className="">
              <button className=" bg-primary mr-2 border border-secondary hover:bg-secondary hover:text-primary font-sober px-5 md:px-10 lg:px-[60px] py-2.5 rounded-full text-secondary text-[22px] md:text-4xl leading-[1.1] transition-all duration-300 ease-in-out">
                Great coffee
              </button>
            </Link>
            and even better company.
          </h2>
          <p className="text-secondary">
            Our passion for quality and community is what drives us every day.
          </p>
        </div>
        {/* end:: About section text container */}
      </Container>
    </section>
  );
};

export default AboutSection;
