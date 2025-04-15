import { Helmet } from "react-helmet";
import Container from "../components/shared/Container";
import GoToTop from "../components/shared/GoToTop";
import ContactContainer from "../components/Contact/ContactContainer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | Cafen ☕</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <Container>
          <ContactContainer />
        </Container>
        <GoToTop />
      </div>
    </>
  );
};

export default Contact;
