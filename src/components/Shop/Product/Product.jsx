import { useParams } from "react-router-dom";
import { productItems } from "../../../utils/productItems";
import Container from "../../shared/Container";
import ProductDetailsCard from "./ProductDetailsCard";
import ProductReview from "./ProductReview";
import ProductPurchaseShortcut from "./ProductPurchaseShortcut";
import { Helmet } from "react-helmet";

const Product = () => {
  const { productId } = useParams();
  const productInfo = productItems.find((item) => item.id === +productId);

  if (!productInfo) {
    return <h1>Product not found</h1>;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{productInfo?.title}</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="bg-cf-light-white">
        <Container>
          <ProductDetailsCard productInfo={productInfo}/>
          <ProductReview productInfo={productInfo}/>
          <ProductPurchaseShortcut productInfo={productInfo}/>
        </Container>
      </div>
    </>
  );
};

export default Product;
