import { Helmet } from "react-helmet";
import "./App.css";
import Container from "./components/shared/Container";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="font-roboto">
        <Container>Hey This is Homepage</Container>
      </div>
    </>
  );
}

export default App;
