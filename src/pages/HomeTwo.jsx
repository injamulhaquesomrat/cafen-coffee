import { Helmet } from "react-helmet";
import Hero from "../components/Home2/Hero";
import Brands from "../components/Home2/Brands";
import GoToTop from "../components/shared/GoToTop";

const HomeTwo = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home2 | Cafen - Ecommerce Website</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <Brands/>
      <GoToTop />
    </>
  );
};

export default HomeTwo;
