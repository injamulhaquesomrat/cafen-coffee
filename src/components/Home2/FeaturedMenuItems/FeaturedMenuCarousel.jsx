import { Splide, SplideSlide } from "@splidejs/react-splide";
import FeaturedMenuItem from "./FeaturedMenuItem";
import { featuredMenuItems } from "../../../utils/featuredMenuItems";

// featured menu options
const featuredMenuOptions = {
  gap: "1.5rem",
  rewind: true,
  type: "slide",
  perMove: 1,
  perPage: 1,
  pagination: false,
  classes: {
    arrows:
      "splide__arrows absolute top-[100%] right-1/2 xs:-top-[50px] md:-top-[64px] lg:-top-14 xl:-top-[60px] md:right-0 translate-x-1/2 md:translate-x-0 w-[8rem] md:w-[10rem] z-[999]",
    arrow:
      "splide__arrow !bg-background !fill-primary !h-[45px] !w-[45px] md:!h-[50px] md:!w-[50px] !opacity-100",
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
        <SplideSlide key={item?.id}>
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
