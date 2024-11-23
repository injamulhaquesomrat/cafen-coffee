import { Helmet } from "react-helmet";
import "./App.css";
import Hero from "./components/Home/Hero";

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
      </div>
    </>
  );
}

export default App;
