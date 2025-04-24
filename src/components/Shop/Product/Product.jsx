import { useParams } from "react-router-dom";
import { productItems } from "../../../utils/productItems";
import Container from "../../shared/Container";
import ProductDetailsCard from "./ProductDetailsCard";
import ProductReview from "./ProductReview";
import ProductPurchaseShortcut from "./ProductPurchaseShortcut";
import { Helmet } from "react-helmet";
import { useState } from "react";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
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
      <div className="bg-foreground">
        <Container>
          <ProductDetailsCard
            productInfo={productInfo}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <ProductReview productInfo={productInfo} />
          <ProductPurchaseShortcut
            productInfo={productInfo}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </Container>
      </div>
    </>
  );
};

export default Product;
