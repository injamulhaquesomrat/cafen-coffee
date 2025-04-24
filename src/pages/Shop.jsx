import { Helmet } from "react-helmet";
import GoToTop from "../components/shared/GoToTop";
import ShopContainer from "../components/Shop/ShopContainer";

const Shop = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shop | Cafen ☕</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="bg-foreground">
        <ShopContainer />
        <GoToTop />
      </div>
    </>
  );
};

export default Shop;
