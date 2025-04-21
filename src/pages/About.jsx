import { Helmet } from "react-helmet";
import Intro from "../components/About/Intro";
import OurStory from "../components/About/OurStory";
import OurValues from "../components/About/OurValues";
import OurTeam from "../components/About/OurTeam";
import GoToTop from "../components/shared/GoToTop";
import CoffeeMakingVideo from "../components/About/CoffeeMakingVideo";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Cafen ☕</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <>
        <Intro />
        <OurStory />
        <OurValues />
        <OurTeam />
        <CoffeeMakingVideo />
        <GoToTop />
      </>
    </>
  );
};

export default About;
