import { teamMembers } from "../../utils/teamMembers";
import Container from "../shared/Container";
import TeamMember from "./TeamMember";

const OurTeam = () => {
  return (
    <section className="cf-section border-t border-cf-coffee bg-[#fffbed] text-center">
      <Container>
        {/* start:: section title */}
        <h2 className="text-[42px] xs:text-[50px] md:text-[54px] lg:text-[56px] xl:text-6xl font-sober  text-cf-coffee font-medium">
          Meet our team
        </h2>
        {/* end:: section title */}

        {/* start:: our teams container */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-[30px] mt-[30px] xs:mt-10 lg:mt-[60px] xl:mt-[70px] max-w-[940px] mx-auto">
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
