import { Helmet } from "react-helmet";
import Container from "../components/shared/Container";
import PageHero from "../components/shared/PageHero";
import GoToTop from "../components/shared/GoToTop";
import OrderNow from "../components/Home2/OrderNow/OrderNow";
import EventsContainer from "../components/Events/EventsContainer";

const Events = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Events | Cafen ☕</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="bg-cf-light-white">
        <Container>
          <PageHero pageTitle={"Our events"} />
          <EventsContainer />
        </Container>
        <OrderNow />
        <GoToTop />
      </div>
    </>
  );
};

export default Events;
