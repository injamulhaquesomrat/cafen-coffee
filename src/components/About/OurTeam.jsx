import Container from "../shared/Container";
import TeamMember from "./TeamMember";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "Head Barista",
    image:
      "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c5d445c6015f7491aaea7a_team-image-03.avif",
    socials: {
      facebook: "https://facebook.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Pastry Chef",
    image:
      "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c97d590188acfb128ced31_team-image-01-p-500.avif",
    socials: {
      facebook: "https://facebook.com/janesmith",
      instagram: "https://instagram.com/janesmith",
      twitter: "https://twitter.com/janesmith",
    },
  },
  {
    id: 3,
    name: "Robert Brown",
    position: "Cafe Manager",
    image:
      "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c5d45c1ec92beb3c13f0ab_team-image-02.avif",
    socials: {
      facebook: "https://facebook.com/robertbrown",
      instagram: "https://instagram.com/robertbrown",
      twitter: "https://twitter.com/robertbrown",
    },
  },
];

const OurTeam = () => {
  return (
    <div className="py-20 md:py-[100px] border-y border-cf-coffee bg-[#fffbed] text-center">
      <Container>
        <h2 className="text-[42px] sm:text-[50px] md:text-[54px] lg:text-6xl font-nunito leading-tight tracking-tighter text-cf-coffee font-medium">
          Meet our team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurTeam;
