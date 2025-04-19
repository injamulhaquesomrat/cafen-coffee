import Container from "../../shared/Container";
import EventContent from "./EventContent";
import EventHero from "./EventHero";

const Event = () => {
  return (
    <>
      <EventHero />
      <Container>
        <EventContent />
      </Container>
    </>
  );
};

export default Event;
