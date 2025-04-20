import { productItems } from "../../../utils/productItems";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="bg-cf-foreground py-20 md:py-[100px] lg:py-[120px] xl:py-[150px]">
      <Container>
        {/* start:: section heading */}
        <div className="pb-[30px] xs:pb-10 lg:pb-[60px] xl:pbb-[70px]">
          <SectionTitle title={"Our signnature items"} />
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
    </div>
  );
};

export default Products;
