import { Splide, SplideSlide } from "@splidejs/react-splide";
import { eventItems } from "../../../utils/eventCarouselItems";
import EventCardItem from "./EventCardItem";

const EventsCarousel = () => {
  return (
    <Splide options={eventCarouselOptions} aria-label="Upcoming Events Images">
      {eventItems.map((item) => (
        <SplideSlide key={item.id}>
          <EventCardItem item={item} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default EventsCarousel;

// event carousel options
const eventCarouselOptions = {
  gap: "1.5rem",
  rewind: true,
  type: "slide",
  perMove: 1,
  perPage: 1,
  focus: "center",
  pagination: false,
  classes: {
    arrows:
      "splide__arrows absolute top-[109%] right-1/2 xs:-top-[50px] md:-top-[64px] lg:-top-14 xl:-top-[60px] xs:right-0 translate-x-1/2 xs:translate-x-0 w-[8.5rem] md:w-[10rem]",
    arrow:
      "splide__arrow !bg-transparent !fill-primary !h-[45px] !w-[45px] md:!h-[50px] md:!w-[50px] !opacity-100",
  },
  breakpoints: {
    768: {
      perPage: 1,
    },
    1024: {
      perPage: 1.5,
    },
  },
  height: "100%",
  mediaQuery: "min",
};
