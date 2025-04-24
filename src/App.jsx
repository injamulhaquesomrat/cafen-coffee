import { Helmet } from "react-helmet";
import Hero from "./components/Home/Hero/Hero";
import Featured from "./components/Home/Featured/Featured";
import Events from "./components/Home/Events/Events";
import EventsGallery from "./components/Home/Gallery/EventsGallery";
import Reviews from "./components/Home/Reviews/Reviews";
import Specs from "./components/Home/Specs/Specs";
import Reservation from "./components/Home/Reservation/Reservation";
import Products from "./components/Home/Products/Products";
import GoToTop from "./components/shared/GoToTop";
import About from "./components/Home/About/About";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cafen - Ecommerce Website</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="font-bdogrotesk">
        <Hero />
        <About />
        <Featured />
        <Events />
        <EventsGallery />
        <Reviews />
        <Specs />
        <Reservation />
        <Products />
        <GoToTop />
      </div>
    </>
  );
}

export default App;
