import { teamMembers } from "../../utils/teamMembers";
import Container from "../shared/Container";
import TeamMember from "./TeamMember";

const OurTeam = () => {
  return (
    <section className="py-20 md:py-[100px] border-y border-cf-coffee bg-[#fffbed] text-center">
      <Container>
        {/* start:: section title */}
        <h2 className="text-[42px] sm:text-[50px] md:text-[54px] lg:text-6xl font-sober  text-cf-coffee font-medium">
          Meet our team
        </h2>
        {/* end:: section title */}

        {/* start:: our teams container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
        {/* end:: our teams container */}
      </Container>
    </section>
  );
};

export default OurTeam;
