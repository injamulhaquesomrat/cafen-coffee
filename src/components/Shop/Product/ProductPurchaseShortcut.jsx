import { useEffect, useState } from "react";
import { useCart } from "../../../provider/CartProvider";

const ProductPurchaseShortcut = ({ productInfo, quantity, setQuantity }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { addToCart } = useCart();

  // Show button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 w-full py-2.5 px-[30px] border-t border-primary hidden lg:block bg-secondary z-[99] text-primary shadow-md transition-opacity duration-300 ${
        isVisible ? "opacity-90" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between mx-auto">
        <div className="flex items-center justify-between gap-4">
          <img
            className="h-[60px] w-[60px] rounded-lg"
            src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c6ea51336d4457d43f725d_product-01.avif"
            alt="shortcut image"
          />
          <h6 className="text-2xl font-sober leading-[1.2]">
            {productInfo?.title}
          </h6>
          <p className="text-lg leading-[1.2]">$ {productInfo?.price} USD</p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-[5px] h-[55px]">
            <select
              className="px-5 py-2.5 rounded-xl outline-none border border-primary bg-secondary cursor-pointer h-full"
              name="weight"
              id="weight"
            >
              <option defaultValue="Select Weight" disabled>
                {" "}
                Select Weight
              </option>
              <option className="bg-white" value="100g">
                100g
              </option>
              <option className="bg-white" value="200g">
                200g
              </option>
              <option className="bg-white" value="500g">
                500g
              </option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <div className="flex flex-col min-w-[100px] h-[55px] ">
              <input
                className="px-3 py-2.5 pr-1.5 rounded-full outline-none border border-primary bg-secondary max-w-[100px] h-full"
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="10"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
              />
            </div>
            <div className="">
              <button
                onClick={() => addToCart(productInfo, +quantity)}
                className="hover:text-primary text-secondary transition-all duration-200 border border-primary rounded-full hover:bg-secondary bg-primary px-[30px] py-2.5 md:px-10 md:py-5 font-medium w-full h-[55px] flex items-center justify-center"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPurchaseShortcut;
