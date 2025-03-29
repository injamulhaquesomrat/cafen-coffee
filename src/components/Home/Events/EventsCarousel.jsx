import { Splide, SplideSlide } from "@splidejs/react-splide";
import { eventItems } from "../../../utils/eventCarouselItems";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          <div className="flex flex-col md:flex-row border border-cf-coffee rounded-2xl text-cf-coffee overflow-hidden">
            {/* start::carousel item content */}
            <div className="flex flex-col p-4 md:p-6">
              <div className="flex-1 pb-4 md:pb-6">
                <p>{item.date}</p>
                <h4 className="text-xl md:text-2xl font-nunito font-bold pb-2 md:pb-4 tracking-tight">
                  {item.title}
                </h4>
                <p className="line-clamp-2">{item.description}</p>
              </div>
              <div>
                <Link to="#">
                  <button className="px-6 py-1.5 bg-cf-yellow border border-cf-coffee rounded-full font-nunito font-bold inline-flex items-center gap-2 group">
                    View event{" "}
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
                  </button>
                </Link>
              </div>
            </div>
            {/* end::carousel item content */}

            {/* start:: carousel item image  */}
            <div>
              <img
                className="object-cover w-full h-full aspect-[16/12] md:aspect-[16/10]"
                src={item.image}
                alt={item.title}
              />
            </div>
            {/* end::carousel item image  */}
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default EventsCarousel;
