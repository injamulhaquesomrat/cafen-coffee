import { useCart } from "../../../provider/CartProvider";
import PhotoThumbnailGallery from "../../shared/PhotoThumbnailGallery";

const ProductDetailsCard = ({ productInfo, quantity, setQuantity }) => {
  const { addToCart } = useCart();

  return (
    <div className="pt-5 md:pt-10">
      <div className="rounded-2xl md:rounded-[50px] border border-primary overflow-hidden bg-white flex flex-col lg:flex-row">
        {/* start:: product images container with lightshot  */}
        <div className="w-full lg:w-5/12 grid">
          <PhotoThumbnailGallery slides={productInfo?.images.slice(0, 4)} />
        </div>
        {/* end:: product images container with lightshot  */}

        {/* start:: product text container */}
        <div className="p-5 sm:p-[30px] md:p-10 grid justify-between text-primary bg-secondary-foreground lg:w-7/12">
          <div className="px-5 py-[5px] mb-2.5 bg-primary rounded-full text-secondary w-fit h-fit text-sm leading-[1.7]">
            {productInfo?.category}
          </div>
          <h2 className="text-[38px] xs:text-[50px] md:text-[60px] xl:text-[70px] leading-[1.2] text-primary font-sober mb-2.5">
            {productInfo?.title}
          </h2>

          <h5 className="text-[28px] leading-[1.2] font-medium">
            $ {productInfo?.price} USD
          </h5>

          <div className="mt-5">
            <h6 className="text-[26px] leading-[1.2] text-primary font-sober mb-[5px]">
              Description:
            </h6>
            <p className="text-primary-foreground">{productInfo?.description}</p>
          </div>
          <div className="mt-5 mb-2.5">
            <h6 className="text-[26px] leading-[1.2] text-primary font-sober mb-[5px]">
              Ingredients:
            </h6>
            <p className="text-primary-foreground">{productInfo?.ingredients.join(", ")}</p>
          </div>

          <div className="flex flex-col gap-[5px]">
            <label htmlFor="weight">Weight</label>
            <select
              className="px-5 py-2.5 rounded-xl outline-none border border-primary bg-secondary-foreground cursor-pointer"
              name="weight"
              id="weight"
            >
              <option defaultValue="Select Weight" disabled>
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
                className="px-3 py-2.5 pr-1.5 rounded-full outline-none border border-primary bg-secondary-foreground max-w-[100px]"
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="10"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
              />
            </div>
            <div className="w-full">
              <button
                onClick={() => addToCart(productInfo, +quantity)}
                className="text-primary hover:text-foreground transition-all duration-200 border border-primary rounded-full bg-secondary hover:bg-primary px-[30px] py-2.5 md:px-10 md:py-5 font-medium w-full h-[45px] flex items-center justify-center"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* end:: product text container */}
      </div>
    </div>
  );
};

export default ProductDetailsCard;
