import { Helmet } from "react-helmet";
import Container from "../components/shared/Container";
import PageHero from "../components/shared/PageHero";
import GoToTop from "../components/shared/GoToTop";
import MenuContainer from "../components/Menu/MenuContainer";
import OrderNow from "../components/Home2/OrderNow/OrderNow";

const Menu = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Menu | Cafen ☕</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="bg-cf-light-white">
        <Container>
          <PageHero
            pageTitle={"Our menu"}
            subContent={
              <p className="text-cf-coffee max-w-[620px] text-center mx-auto">
                Welcome to Cafen! Here, we take pride in serving a curated
                selection of drinks and delights that are sure to satisfy every
                palate.
              </p>
            }
          />
          <MenuContainer />
        </Container>
        <OrderNow />
        <GoToTop />
      </div>
    </>
  );
};

export default Menu;
