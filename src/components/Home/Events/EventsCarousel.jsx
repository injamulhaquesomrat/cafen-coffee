import { Splide, SplideSlide } from "@splidejs/react-splide";
import { eventItems } from "../../../utils/eventCarouselItems";
import EventCardItem from "./EventCardItem";

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
      "splide__arrows absolute top-[109%] right-1/2 md:-top-12 md:right-0 translate-x-1/2 md:translate-x-0 w-[8rem] md:w-[10rem]",
    arrow:
      "splide__arrow !bg-transparent !fill-cf-coffee !h-10 !w-10 md:!h-14 md:!w-14 !opacity-100",
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
