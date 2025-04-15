import { Helmet } from "react-helmet";
import GoToTop from "../components/shared/GoToTop";
import LocationContainer from "../components/Location/LocationContainer";

const Location = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Location | Cafen</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <LocationContainer/>
        <GoToTop />
      </div>
    </>
  );
};

export default Location;
