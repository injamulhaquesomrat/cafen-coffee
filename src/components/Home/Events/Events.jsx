import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import EventsCarousel from "./EventsCarousel";
import EventsCounter from "./EventsCounter";

const Events = () => {
  return (
    <section className="bg-cf-foreground cf-section">
      <Container>
        {/* start::events carousel */}
        <div className="pb-5 md:pb-8">
          <SectionTitle title="Upcoming events" />
        </div>
        {/* end::events carousel */}

        <EventsCarousel />

        {/* start::events counter */}
        <EventsCounter />
        {/* end::events counter */}
      </Container>
    </section>
  );
};

export default Events;
