import getRelatedItems from "../../../utils/getRelatedItems";
import { productItems } from "../../../utils/productItems";
import ProductItem from "../../Home/Products/ProductItem";

const RelatedProducts = ({ productInfo }) => {
  const getRelatedProducts = getRelatedItems(productInfo, productItems);
  return (
    <div className="pt-20">
      <h2 className="text-[42px] xs:text-[50px] md:text-[54px] lg:text-[56px] xl:text-[60px] leading-[1.2] mb-2.5 font-sober">
        Related Products
      </h2>
      {/* start:: related products container */}
      <div className="pt-[30px] xs:pt-10 lg:pt-[60px] xl:pt-[70px] pb-20 md:pb-[100px] lg:pb-[120px] xl:pb-[150px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {getRelatedProducts.slice(0, 2).map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>
      </div>
      {/* end:: related products container */}
    </div>
  );
};

export default RelatedProducts;
