import { Helmet } from "react-helmet";
import Container from "../components/shared/Container";
import PageHero from "../components/shared/PageHero";
import GoToTop from "../components/shared/GoToTop";
import OrderNow from "../components/Home2/OrderNow/OrderNow";
import BookATableContainer from "../components/BookATable/BookATableContainer";

const BookATable = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book a Table | Cafen ☕</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="bg-cf-light-white">
        <Container>
          <PageHero pageTitle={"Book a table"} />
          <BookATableContainer />
        </Container>
        <OrderNow />
        <GoToTop />
      </div>
    </>
  );
};

export default BookATable;
