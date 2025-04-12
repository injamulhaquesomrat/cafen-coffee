import { productItems } from "../../../utils/productItems";
import Container from "../../shared/Container";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <Container>
      <div className="py-14 md:py-20">
        {/* start:: section heading */}
        <h1 className="text-cf-coffee text-3xl md:text-[55px] tracking-tight font-bold font-nunito pb-5 md:pb-8">
          Our signatures items
        </h1>
        {/* end:: section heading */}

        {/* start:: products container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productItems.slice(0, 4).map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>
        {/* end:: products container */}
      </div>
    </Container>
  );
};

export default Products;
