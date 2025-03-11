import { Splide, SplideSlide } from "@splidejs/react-splide";
import { reviewsItems } from "../../../utils/reviewsItems";
import Container from "../../shared/Container";
import RenderStars from "../../shared/RenderStars";

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
}

const Reviews = () => {
  return (
    <Container>
      <div className="my-14">
        <Splide
          options={reviewOptions}
          aria-label="Upcoming Events Images"
        >
          {reviewsItems.map((item) => (
            <SplideSlide key={item.id}>
              <div className="flex flex-col md:flex-row items-center justify-center text-center text-cf-coffee overflow-hidden md:w-2/3 mx-auto">
                {/* start::content */}
                <div className="flex flex-col p-4 md:p-6">
                  <div className="flex-1 pb-4 md:pb-6">
                    <div className="flex gap-1 text-[#ffc700] items-center justify-center pb-6">
                      <RenderStars count={5} />
                    </div>
                    <h4 className="text-xl md:text-3xl font-nunito font-bold pb-2 md:pb-4 tracking-tight">
                      {item.review}
                    </h4>
                    <p className="line-clamp-2 text-2xl font-medium">
                      {item.name}
                    </p>
                    <p>{item.role}</p>
                  </div>
                </div>
                {/* end::content */}

                {/* start::image  */}
                <div>
                  <img
                  className="object-cover w-full h-full aspect-[16/12] md:aspect-[16/10]"
                  src={item.image}
                  alt={item.title}
                />
                </div>
                {/* end::image  */}
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </Container>
  );
};

export default Reviews;
