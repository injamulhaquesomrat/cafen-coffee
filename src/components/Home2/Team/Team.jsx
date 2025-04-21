import Container from "../../shared/Container";
import TeamCarousel from "./TeamCarousel";

const Team = () => {
  return (
    <section className="bg-cf-light-white py-20 md:py-[100px] lg:py-[120px] xl:py-[150px]">
      <Container>
        {/* start:: section heading */}
        <h4 className="text-[42px] xs:text-[50px] md:text-[54px] lg:text-[56px] xl:text-[60px] leading-[1.2]  pb-6 lg:pb-8 font-sober tracking-tight text-cf-coffee text-center">
          Our team
        </h4>
        {/* end:: section heading */}

        {/* start:: Team carousel */}
        <div className="max-w-[940px] mx-auto">
          <TeamCarousel />
        </div>
        {/* end:: Team carousel */}
      </Container>
    </section>
  );
};

export default Team;
