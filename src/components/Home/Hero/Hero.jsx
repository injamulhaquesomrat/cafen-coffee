import { Link } from "react-router-dom";
import Container from "../../shared/Container";
import HeroVideoContent from "./HeroVideoContent";
import DecorationButtonPrimary from "../../shared/Buttons/DecorationButtonPrimary";

const Hero = () => {
  return (
    <section className="bg-cf-light-yellow pt-8 md:pt-12 overflow-hidden">
      <Container>
        {/* start:: hero text container */}
        <div className="text-center w-full xl:w-2/3 mx-auto grid gap-[1.375rem]">
          {/* start:: hero text */}
          <h1 className="text-[50px] sm:text-[60px] md:text-[68px] lg:text-[70px] xl:text-[80px] leading-[1.2] font-sober text-cf-coffee">
            Discover the perfect blend of taste and ambiance.
          </h1>
          {/* end:: hero text */}

          {/*start::hero menu button */}
          <div>
            <Link to="/menu">
              <DecorationButtonPrimary btnText={"Explore our specials"} />
            </Link>
          </div>
          {/* end::hero menu button */}
        </div>
        {/* end:: hero text container */}

        {/* start::hero video content */}
        <div className="mt-10 md:mt-[100px]">
          <HeroVideoContent />
        </div>
        {/* end::hero video content */}
      </Container>
    </section>
  );
};

export default Hero;
