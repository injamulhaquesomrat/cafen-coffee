import RenderStars from "../../shared/RenderStars";

const ProductReviewCard = ({ reviewer, headline, rating, description }) => {
  return (
    <div className="flex flex-col items-start p-5 border border-cf-coffee rounded-lg bg-cf-foreground">
      <h6 className=" font-sober text-[26px] sm:text-[22px] leading-[1.2] mb-2.5">
        {reviewer}
      </h6>
      <div className="flex flex-col md:flex-row gap-2.5 justify-between md:w-full">
        <h5 className="text-[30px] leading-[1.2] font-sober">{headline}</h5>
        <RenderStars count={rating} />
      </div>
      <p className="mt-4 text-left">{description}</p>
    </div>
  );
};

export default ProductReviewCard;
