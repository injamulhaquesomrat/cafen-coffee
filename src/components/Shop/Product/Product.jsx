import { useParams } from "react-router-dom";
import { productItems } from "../../../utils/productItems";
import Container from "../../shared/Container";

const Product = () => {
  const { productId } = useParams();
  const productInfo = productItems.find((item) => item.id === +productId);

  if (!productInfo) {
    return <h1>Product not found</h1>;
  }

  return (
    <Container>
      <h1>Product</h1>
    </Container>
  );
};

export default Product;
