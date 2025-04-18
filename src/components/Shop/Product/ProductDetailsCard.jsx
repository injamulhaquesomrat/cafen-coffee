import PhotoThumbnailGallery from "../../shared/PhotoThumbnailGallery";

const ProductDetailsCard = () => {
  return (
    <div className="mt-5 rounded-2xl md:rounded-[50px] border border-cf-coffee overflow-hidden bg-white flex flex-col lg:flex-row">
      {/* start:: product images container with lightshot  */}
      <div className="w-full xl:w-5/12 grid">
        <PhotoThumbnailGallery slides={slides} />
      </div>
      {/* end:: product images container with lightshot  */}

      {/* start:: product text container */}
      <div className="p-5 sm:p-[30px] md:p-10 grid justify-between text-cf-coffee bg-cf-light-yellow xl:w-7/12">
        <div className="px-5 py-[5px] mb-2.5 bg-cf-coffee rounded-full text-cf-yellow w-fit">
          Coffee
        </div>
        <h2 className="text-[38px] sm:text-[50px] md:text-[60px] text-cf-coffee font-sober font-medium   mb-2.5">
          Premium ground coffee
        </h2>

        <h5 className="text-[28px] font-medium">$ 15.99 USD</h5>

        <div className="mt-5">
          <h6 className="text-[26px] text-cf-coffee font-sober font-medium   mb-[5px]">
            Description:
          </h6>
          <p>
            With our Premium Ground Coffee, you&apos;re not just brewing a cup
            you&apos;re enjoying a crafted experience that reflects the
            dedication and expertise behind every bean.
          </p>
        </div>
        <div className="mt-5 mb-2.5">
          <h6 className="text-[26px] text-cf-coffee font-sober font-medium   mb-[5px]">
            Ingredients:
          </h6>
          <p>100% arabica coffee beans, No additives or preservatives</p>
        </div>

        <div className="flex flex-col gap-[5px]">
          <label htmlFor="weight">Weight</label>
          <select
            className="px-5 py-2.5 rounded-xl outline-none border border-cf-coffee bg-cf-light-yellow cursor-pointer"
            name="weight"
            id="weight"
          >
            <option value="" selected disabled>
              {" "}
              Select Weight
            </option>
            <option value="100g">100g</option>
            <option value="200g">200g</option>
            <option value="500g">500g</option>
          </select>
        </div>

        <div className="mt-5 flex flex-col md:flex-row md:items-end gap-5">
          <div className="flex flex-col gap-[5px] min-w-[100px]">
            <label htmlFor="quantity">Quantity</label>
            <input
              className="px-3 py-2.5 pr-1.5 rounded-full outline-none border border-cf-coffee bg-cf-light-yellow max-w-[100px]"
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="10"
              defaultValue="1"
            />
          </div>
          <div className="w-full">
            <button className="text-cf-coffee hover:text-cf-light-white transition-all duration-200 border border-cf-coffee rounded-full bg-cf-yellow hover:bg-cf-coffee px-[30px] py-2.5 md:px-10 md:py-5 font-medium w-full h-[45px] flex items-center justify-center">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* end:: product text container */}
    </div>
  );
};

export default ProductDetailsCard;

const slides = [
  {
    src: "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c6ea51336d4457d43f725d_product-01.avif",
    thumbnail:
      "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c6ea51336d4457d43f725d_product-01.avif", // Thumbnail image
    title: "Premium Ground Coffee",
    description: "Experience the finest ground coffee crafted with dedication.",
  },
  {
    src: "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c70438233ef77965948968_product-hover-01.avif",
    thumbnail:
      "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c70438233ef77965948968_product-hover-01.avif", // Thumbnail image
    title: "Rich Coffee Blend",
    description: "A rich blend of coffee beans for a perfect brew.",
  },
  {
    src: "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c850e76511f76c038f8e75_product-gallery-01.avif",
    thumbnail:
      "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c850e76511f76c038f8e75_product-gallery-01.avif", // Thumbnail image
    title: "Arabica Coffee Beans",
    description: "100% Arabica coffee beans with no additives.",
  },
  {
    src: "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c850e70dd95466d5d1009f_product-gallery-02.avif",
    thumbnail:
      "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c850e70dd95466d5d1009f_product-gallery-02.avif", // Thumbnail image
    title: "Ground Coffee Pack",
    description: "Perfectly packed ground coffee for your daily needs.",
  },
];
