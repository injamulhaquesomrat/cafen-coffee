import PrimaryButton from "../../shared/PrimaryButton";
import ProductReviewCard from "./ProductReviewCard";
import RelatedProducts from "./RelatedProducts";

const ProductReview = () => {
  return (
    <section className="text-center text-cf-coffee py-20">
      <h4 className="text-4xl md:text-[42px] lg:text-[48px] xl:text-[55px] leading-tight tracking-tighter mb-2.5">
        Reviews
      </h4>
      <p className="mb-[30px]">
        Read Reviews from our satisfied customers. Share your experience with Us
        by clicking the below button!
      </p>
      <PrimaryButton buttonText="Submit a Review" />
      <div className="max-w-[940px] mx-auto space-y-10">
        {productReviewItems.map((item) => (
          <ProductReviewCard key={item.id} {...item} />
        ))}
      </div>

      <RelatedProducts />
    </section>
  );
};

export default ProductReview;

const productReviewItems = [
  {
    id: 1,
    reviewer: "John Doe",
    headline: "Fantastic Quality!",
    rating: 5,
    description:
      "I absolutely love this product. The quality is top-notch, and it exceeded my expectations. Highly recommended!",
  },
  {
    id: 2,
    reviewer: "Jane Smith",
    headline: "Good, but could be improved",
    rating: 4,
    description:
      "The product is great overall, but the packaging could be better. It arrived slightly damaged.",
  },
  {
    id: 3,
    reviewer: "Alex Johnson",
    headline: "Value for Money",
    rating: 5,
    description:
      "Amazing product for the price. I've been using it daily, and it works perfectly.",
  },
  {
    id: 4,
    reviewer: "Emily Clark",
    headline: "Not what I expected",
    rating: 2,
    description:
      "The product didn't match the description. I'm disappointed with its performance.",
  },
  {
    id: 5,
    reviewer: "Michael Lee",
    headline: "Works as advertised",
    rating: 4,
    description:
      "The product does exactly what it says. I'm happy with the purchase, but shipping was delayed.",
  },
];
