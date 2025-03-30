import Container from "../../shared/Container";
import TeamCarousel from "./TeamCarousel";

const Team = () => {
  return (
    <section className="py-[80px]">
      <Container>
        {/* start:: section heading */}
        <h4 className="text-3xl md:text-4xl lg:text-5xl font-semibold pb-6 lg:pb-8 font-nunito tracking-tight text-cf-coffee text-center">
          Our team
        </h4>
        {/* end:: section heading */}

        {/* start:: Team carousel */}
        <TeamCarousel />
        {/* end:: Team carousel */}
      </Container>
    </section>
  );
};

export default Team;
