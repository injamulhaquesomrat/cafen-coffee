import { Helmet } from "react-helmet";
import "./App.css";
import Hero from "./components/Home/Hero/Hero";
import AboutSection from "./components/Home/About/AboutSection";
import AboutMarquee from "./components/Home/About/AboutMarquee";
import Featured from "./components/Home/Featured/Featured";
import Events from "./components/Home/Events/Events";
import EventsGallery from "./components/Home/Gallery/EventsGallery";
import Reviews from "./components/Home/Reviews/Reviews";
import Specs from "./components/Home/Specs/Specs";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="font-roboto">
        <Hero />
        <AboutSection />
        <AboutMarquee />
        <Featured />
        <Events />
        <EventsGallery />
        <Reviews />
        <Specs />
      </div>
    </>
  );
}

export default App;
