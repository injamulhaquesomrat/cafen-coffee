import { Splide, SplideSlide } from "@splidejs/react-splide";
import FeaturedMenuItem from "./FeaturedMenuItem";
import { featuredMenuItems } from "../../../utils/featuredMenuItems";

const featuredMenuOptions = {
  gap: "1.5rem",
  rewind: true,
  type: "slide",
  perMove: 1,
  perPage: 1,
  pagination: false,
  classes: {
    arrows:
      "splide__arrows absolute top-[102%] right-1/2 md:-top-12 md:right-0 translate-x-1/2 md:translate-x-0 w-[8rem] md:w-[10rem] z-[999]",
    arrow:
      "splide__arrow !bg-cf-foreground !fill-cf-coffee !h-10 !w-10 md:!h-14 md:!w-14 !opacity-100",
  },
  breakpoints: {
    768: {
      perPage: 2,
    },
    1024: {
      perPage: 3,
    },
  },
  height: "100%",
  mediaQuery: "min",
};

const FeaturedMenuCarousel = () => {
  return (
    <Splide options={featuredMenuOptions} aria-label="Upcoming Events Images">
      {featuredMenuItems.map((item) => (
        <SplideSlide key={item.id}>
          <FeaturedMenuItem
            category={item?.category}
            img={item?.img}
            subCategories={item?.subCategories}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default FeaturedMenuCarousel;
