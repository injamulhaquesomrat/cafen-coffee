import { Helmet } from "react-helmet";
import "./App.css";
import Hero from "./components/Home/Hero";
import AboutSection from "./components/About/AboutSection";
import AboutMarquee from "./components/About/AboutMarquee";

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
      </div>
    </>
  );
}

export default App;
