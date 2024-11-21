import { Helmet } from "react-helmet";
import Container from "../components/shared/Container";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <Container>Hey This is About page</Container>
      </div>
    </>
  );
};

export default About;
