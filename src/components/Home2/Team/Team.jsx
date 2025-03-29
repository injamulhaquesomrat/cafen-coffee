import Container from "../../shared/Container";
import TeamCarousel from "./TeamCarousel";

const Team = () => {
  return (
    <div className="py-[80px]">

    <Container>
      <h4 className="text-3xl md:text-4xl lg:text-5xl font-semibold pb-6 lg:pb-8 font-nunito tracking-tight text-cf-coffee text-center">Our team</h4>

      {/* start:: Team carousel */}
      <TeamCarousel />
      {/* end:: Team carousel */}
    </Container>
    </div>
  );
};

export default Team;
