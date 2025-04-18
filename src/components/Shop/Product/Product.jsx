import { useParams } from "react-router-dom";
import { productItems } from "../../../utils/productItems";
import Container from "../../shared/Container";
import ProductDetailsCard from "./ProductDetailsCard";
import ProductReview from "./ProductReview";

const Product = () => {
  const { productId } = useParams();
  const productInfo = productItems.find((item) => item.id === +productId);

  if (!productInfo) {
    return <h1>Product not found</h1>;
  }

  return (
    <Container>
      <ProductDetailsCard />
      <ProductReview />
    </Container>
  );
};

export default Product;
