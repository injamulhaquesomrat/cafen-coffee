import { Link } from "react-router-dom";
import Container from "../shared/Container";
import HeroVideoContent from "./HeroVideoContent";

const Hero = () => {
  return (
    <section className="bg-cf-light-yellow pt-8 overflow-hidden">
      <Container>
        {/* start:: hero text container */}
        <div className="text-center w-full md:w-2/3 mx-auto grid gap-[1.375rem] py-10">
          <h1 className="text-[50px] md:text-6xl leading-tight tracking-tighter font-nunito font-bold text-cf-coffee">
            Discover the perfect blend of taste and ambiance.
          </h1>

          {/*start::hero menu button  */}
          <Link to="/menu">
            <button className="cf-btn text-cf-coffee relative overflow-hidden group mb-10 z-10">
              <img
                className="absolute top-0 -left-8 group-hover:-left-2 transition-all duration-500"
                src="/button-vector-01.svg"
                alt="button hover"
              />
              Explore our specials
              <img
                className="absolute -bottom-2 -right-10 group-hover:-right-5 transition-all duration-500"
                src="/button-vector-02.svg"
                alt="button hover"
              />
            </button>
          </Link>
          {/* end::hero menu button */}
        </div>
        {/* end:: hero text container */}

        {/* start::hero video content */}
        <div className="mt-10 ">
          <HeroVideoContent />
        </div>
        {/* end::hero video content */}
      </Container>
    </section>
  );
};

export default Hero;
