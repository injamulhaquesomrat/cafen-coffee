import { Splide, SplideSlide } from "@splidejs/react-splide";
import { reviewsItems } from "../../../utils/reviewsItems";
import Container from "../../shared/Container";
import ReviewItem from "./ReviewItem";

// review carousel options
const reviewOptions = {
  gap: "1.5rem",
  rewind: true,
  type: "slide",
  perMove: 1,
  perPage: 1,
  focus: "center",
  pagination: false,
  classes: {
    arrows:
      "splide__arrows absolute top-[109%] right-1/2 md:top-1/2 md:right-0 translate-x-1/2 md:translate-x-0 md:translate-y-1/2 w-[8rem] md:w-full z-30",
    arrow:
      "splide__arrow !bg-transparent !fill-cf-coffee !h-10 !w-10 md:!h-14 md:!w-14 !opacity-100",
  },
  height: "100%",
  mediaQuery: "min",
};

const Reviews = () => {
  return (
    <Container>
      <div className="my-14">
        <Splide options={reviewOptions} aria-label="Upcoming Events Images">
          {reviewsItems.map((item) => (
            <SplideSlide key={item.id}>
              {/* start::review carousel item content */}
              <ReviewItem item={item} />
              {/* end:: review carousel item content */}
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </Container>
  );
};

export default Reviews;
