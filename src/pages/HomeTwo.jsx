import { Helmet } from "react-helmet";
import Hero from "../components/Home2/Hero";

const HomeTwo = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home2 | Cafen - Ecommerce Website</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
    </>
  );
};

export default HomeTwo;
