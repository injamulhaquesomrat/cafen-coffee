import { Helmet } from "react-helmet";
import Container from "../components/shared/Container";
import PageHero from "../components/shared/PageHero";
import GoToTop from "../components/shared/GoToTop";
import FaqsContainer from "../components/Faqs/FaqsContainer";

const Faqs = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FAQs | Cafen ☕</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="bg-foreground">
        <Container>
          <PageHero pageTitle={"Frequently asked questions"} />
          <FaqsContainer />
        </Container>
        <GoToTop />
      </div>
    </>
  );
};

export default Faqs;
