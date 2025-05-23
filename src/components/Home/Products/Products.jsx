import { productItems } from "../../../utils/productItems";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <section className="bg-background cf-section">
      <Container>
        {/* start:: section heading */}
        <div className="pb-[30px] xs:pb-10 lg:pb-[60px] xl:pbb-[70px]">
          <SectionTitle title={"Our signature items"} />
        </div>
        {/* end:: section heading */}

        {/* start:: products container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {productItems.slice(0, 4).map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>
        {/* end:: products container */}
      </Container>
    </section>
  );
};

export default Products;
