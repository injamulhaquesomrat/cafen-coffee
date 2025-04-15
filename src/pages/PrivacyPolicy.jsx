import { Helmet } from "react-helmet";
import Container from "../components/shared/Container";
import PageHero from "../components/shared/PageHero";
import GoToTop from "../components/shared/GoToTop";
import OrderNow from "../components/Home2/OrderNow/OrderNow";
import PrivacyContainer from "../components/PrivacyPolicy/PrivacyContainer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy Policy | Cafen ☕</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <Container>
          <PageHero
            pageTitle={"Privacy policy"}
            subContent={"Last updated: August 15, 2024"}
          />
          <PrivacyContainer />
        </Container>
        <OrderNow />
        <GoToTop />
      </div>
    </>
  );
};

export default PrivacyPolicy;
