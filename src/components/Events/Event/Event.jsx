import Container from "../../shared/Container";
import EventContent from "./EventContent";
import EventHero from "./EventHero";
import OtherEvents from "./OtherEvents";

const Event = () => {
  return (
    <>
      <EventHero />
      <Container>
        <EventContent />
        <OtherEvents />
      </Container>
    </>
  );
};

export default Event;
