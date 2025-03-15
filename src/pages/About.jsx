import { Helmet } from "react-helmet";
import Container from "../components/shared/Container";
import Intro from "../components/About/Intro";
import OurStory from "../components/About/OurStory";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Cafen</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <>
        <Container>
          <Intro />
        </Container>
        <OurStory />
      </>
    </>
  );
};

export default About;
