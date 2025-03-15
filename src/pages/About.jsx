import { Helmet } from "react-helmet";
import Container from "../components/shared/Container";
import Intro from "../components/About/Intro";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Cafen</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <Container>
          <Intro />
        </Container>
      </div>
    </>
  );
};

export default About;
