import PrimaryButton from "../../shared/PrimaryButton";

const ProductReview = () => {
  return (
    <div className="text-center text-cf-coffee py-20">
      <h4 className="text-4xl leading-tight tracking-tighter mb-2.5">Reviews</h4>
      <p className="mb-[30px]">
        Read Reviews from our satisfied customers. Share your experience with Us
        by clicking the below button!
      </p>
      <PrimaryButton buttonText="Submit a Review" />
    </div>
  );
};

export default ProductReview;
