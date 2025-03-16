import { Helmet } from "react-helmet";
import Container from "../components/shared/Container";
import Intro from "../components/About/Intro";
import OurStory from "../components/About/OurStory";
import OurValues from "../components/About/OurValues";
import OurTeam from "../components/About/OurTeam";

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
        <Container>
          <OurValues/>
        </Container>
        <OurTeam/>
      </>
    </>
  );
};

export default About;
