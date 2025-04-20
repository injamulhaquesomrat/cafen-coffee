import Container from "../../shared/Container";
import EventsCarousel from "./EventsCarousel";
import EventsCounter from "./EventsCounter";

const Events = () => {
  return (
    <div className="bg-cf-light-white py-20">
      <Container>
        {/* start::events carousel */}
        <div>
          <h1 className="text-cf-coffee text-[36px] sm:text-[40px] md:text-[42px] lg:text-5xl xl:text-[55px] font-sober pb-5 md:pb-8">
            Upcoming events
          </h1>
        </div>
        {/* end::events carousel */}

        
        <EventsCarousel />

        {/* start::events counter */}
        <EventsCounter />
        {/* end::events counter */}
      </Container>
    </div>
  );
};

export default Events;
