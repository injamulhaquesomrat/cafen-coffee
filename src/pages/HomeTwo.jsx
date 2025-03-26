import { Helmet } from "react-helmet";
import Hero from "../components/Home2/Hero";
import Brands from "../components/Home2/Brands";
import GoToTop from "../components/shared/GoToTop";
import FeaturedMenuItems from "../components/Home2/FeaturedMenuItems/FeaturedMenuItems";
import Specs from "../components/Home2/Specs/Specs";
import Locations from "../components/Home2/Locations/Locations";

const HomeTwo = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home2 | Cafen - Ecommerce Website</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <Brands />
      <FeaturedMenuItems />
      <Specs/>
      <Locations/>
      <GoToTop />
    </>
  );
};

export default HomeTwo;
