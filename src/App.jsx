import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div>Hey This is Homepage</div>
    </>
  );
}

export default App;
