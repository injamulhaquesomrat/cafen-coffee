import { teamMembers } from "../../../utils/teamMembers";
import TeamItem from "./TeamItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// team carousel options
const teamCarouselOptions = {
  gap: "1.5rem",
  rewind: true,
  type: "loop",
  perMove: 1,
  perPage: 1,
  pagination: false,
  classes: {
    arrows:
      "splide__arrows absolute top-1/2 w-full md:w-[108%] md:-right-[4%] z-50 flex justify-between",
    arrow:
      "splide__arrow !bg-white !fill-cf-coffee !h-[45px] !w-[45px] md:!h-[50px] md:!w-[50px] !opacity-100",
  },
  breakpoints: {
    768: {
      perPage: 3,
    },
  },
  height: "100%",
  mediaQuery: "min",
};

const TeamCarousel = () => {
  return (
    <Splide options={teamCarouselOptions} aria-label="Our Team">
      {teamMembers.map((item) => (
        <SplideSlide key={item.id}>
          <TeamItem item={item} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default TeamCarousel;
