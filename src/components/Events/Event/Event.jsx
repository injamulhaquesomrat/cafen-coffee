import { Helmet } from "react-helmet";
import Container from "../../shared/Container";
import EventContent from "./EventContent";
import EventHero from "./EventHero";
import OtherEvents from "./OtherEvents";
import { useParams } from "react-router-dom";
import { eventItems } from "../../../utils/eventCarouselItems";
import GoToTop from "../../shared/GoToTop";

const Event = () => {
  const { eventId } = useParams();

  const eventInfo = eventItems.find((item) => item.id === +eventId);

  if (!eventId) {
    return <h1>Event not found</h1>;
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{eventInfo?.title}</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <EventHero eventInfo={eventInfo} />
      <div className="bg-foreground">
        <Container>
          <EventContent eventInfo={eventInfo} />
          <OtherEvents eventInfo={eventInfo}/>
          <GoToTop />
        </Container>
      </div>
    </>
  );
};

export default Event;
