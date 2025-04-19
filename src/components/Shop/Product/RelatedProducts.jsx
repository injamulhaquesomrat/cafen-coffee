import { productItems } from "../../../utils/productItems";
import ProductItem from "../../Home/Products/ProductItem";

const RelatedProducts = () => {
  return (
    <div className="pt-20">
      <h4 className="text-4xl md:text-[42px] lg:text-[48px] xl:text-[55px]  mb-2.5 font-sober">
        Related Products
      </h4>
      {/* start:: related products container */}
      <div className="py-[60px] sm:py-20 lg:py-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {productItems.slice(0, 2).map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>
      </div>
      {/* end:: related products container */}
    </div>
  );
};

export default RelatedProducts;
