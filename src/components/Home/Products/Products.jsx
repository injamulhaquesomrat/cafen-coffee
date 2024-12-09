import { productItems } from "../../../utils/productItems";
import Container from "../../shared/Container";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <Container>
      <div className="py-14 md:py-20">
        <h1 className="text-2xl md:text-4xl font-nunito font-bold text-cf-coffee">
          Our signatures items
        </h1>

        <div className="grid grid-cols-4 gap-6">
          {productItems.slice(0, 4).map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Products;
