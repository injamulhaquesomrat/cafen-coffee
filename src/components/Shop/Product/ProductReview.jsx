import DecorationButtonPrimary from "../../shared/Buttons/DecorationButtonPrimary";
import SectionTitle from "../../shared/SectionTitle";
import ProductReviewCard from "./ProductReviewCard";
import RelatedProducts from "./RelatedProducts";

const ProductReview = ({ productInfo }) => {
  return (
    <section className="text-center text-primary py-20">
      <div className="mb-2.5">
        <SectionTitle title={"Reviews"} />
      </div>
      <p className="mb-[30px] md:w-[570px] lg:w-[564px] mx-auto">
        Read Reviews from our satisfied customers. Share your experience with Us
        by clicking the below button!
      </p>
      <div className="mb-[30px] xs:mb-10 lg:mb-[60px] xl:mb-[70px]">
        <DecorationButtonPrimary btnText="Submit a Review" />
      </div>
      <div className="max-w-[940px] mx-auto space-y-10">
        {productInfo?.reviews.map((item) => (
          <ProductReviewCard key={item.id} {...item} />
        ))}
      </div>

      <RelatedProducts productInfo={productInfo} />
    </section>
  );
};

export default ProductReview;
