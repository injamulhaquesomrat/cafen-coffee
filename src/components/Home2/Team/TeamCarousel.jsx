import TeamItem from "./TeamItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { TeamCarouselItems } from "../../../utils/teamCarouselItems";

// team carousel options
const teamCarouselOptions = {
  gap: "1.5rem",
  rewind: true,
  type: "slide",
  perMove: 1,
  perPage: 1,
  pagination: false,
  classes: {
    arrows: "splide__arrows absolute top-1/2 w-full z-50 flex justify-between",
    arrow:
      "splide__arrow !bg-white !fill-cf-coffee !h-10 !w-10 md:!h-14 md:!w-14 !opacity-100",
  },
  breakpoints: {
    768: {
      perPage: 2,
    },
    992: {
      perPage: 3,
    },
    1200: {
      perPage: 4,
    },
  },
  height: "100%",
  mediaQuery: "min",
};

const TeamCarousel = () => {
  return (
    <Splide options={teamCarouselOptions} aria-label="Our Team">
      {TeamCarouselItems.map((item) => (
        <SplideSlide key={item.id}>
          <TeamItem item={item} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default TeamCarousel;
