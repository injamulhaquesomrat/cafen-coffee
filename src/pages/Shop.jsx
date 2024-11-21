import { Helmet } from "react-helmet";
import Container from "../components/shared/Container";

const Shop = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shop</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <Container>Hey This is About page</Container>
      </div>
    </>
  );
};

export default Shop;
