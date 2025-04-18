import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FcSynchronize } from "react-icons/fc";

const ProductDetailsCard = () => {
  const [open, setOpen] = useState(false);
  const thumbnailsRef = useState(null);
  const [thumbnailsVisible, setThumbnailsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleThumbnails = () => {
    setThumbnailsVisible(!thumbnailsVisible);
    const thumbnailContainer = document.querySelector(
      ".yarl__thumbnails_track"
    );
    if (thumbnailContainer) {
      thumbnailContainer.classList.toggle("hidden");
    }
  };

  return (
    <div className="mt-5 rounded-2xl md:rounded-[50px] border border-cf-coffee overflow-hidden bg-white flex flex-col lg:flex-row">
      {/* start:: product image container with lightshot  */}
      <div className="w-full xl:w-5/12 grid">
        <>
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-2">
            {slides.map((slide, index) => (
              <img
                className="h-full w-full object-cover cursor-pointer"
                key={index}
                src={slide.src}
                alt={`Thumbnail ${index}`}
                onClick={() => {
                  setCurrentIndex(index);
                  setOpen(true);
                }}
              />
            ))}
          </div>

          {/* Lightbox Slider */}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            index={currentIndex}
            plugins={[Thumbnails, Zoom, Fullscreen]}
            zoom={{ maxZoomPixelRatio: 3 }}
            thumbnails={{ width: 70, height: 70, ref: thumbnailsRef }}
            carousel={{
              finite: "true",
              spacing: "10px",
              imageFit: "contain",
              preload: slides.length,
            }}
            styles={{
              container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
              thumbnailsContainer: {
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                border: "0",
              },
            }}
            toolbar={{
              buttons: [
                <button
                  className="text-cf-light-yellow p-2 hover:rotate-180 transition-all duration-500"
                  key="toggle-thumbnails"
                  onClick={toggleThumbnails}
                  // onClick={() =>
                  //   thumbnailsRef.current?.visible
                  //     ? thumbnailsRef.current?.hide()
                  //     : thumbnailsRef.current?.show()
                  // }
                >
                  <FcSynchronize size={24} />
                </button>,
                "close",
              ],
            }}
            captions={{
              title: (slide) => slide.title,
              description: (slide) => slide.description,
            }}
          />
        </>
      </div>
      {/* end:: product image container with lightshot  */}

      {/* start:: product text container */}
      <div className="p-5 sm:p-[30px] md:p-10 grid justify-between text-cf-coffee bg-cf-light-yellow xl:w-7/12">
        <div className="px-5 py-[5px] mb-2.5 bg-cf-coffee rounded-full text-cf-yellow w-fit">
          Coffee
        </div>
        <h2 className="text-[38px] sm:text-[50px] md:text-[60px] text-cf-coffee font-nunito font-medium tracking-tighter leading-tight mb-2.5">
          Premium ground coffee
        </h2>

        <h5 className="text-[28px] font-medium">$ 15.99 USD</h5>

        <div className="mt-5">
          <h6 className="text-[26px] text-cf-coffee font-nunito font-medium tracking-tighter leading-tight mb-[5px]">
            Description:
          </h6>
          <p>
            With our Premium Ground Coffee, you&apos;re not just brewing a cup
            you&apos;re enjoying a crafted experience that reflects the
            dedication and expertise behind every bean.
          </p>
        </div>
        <div className="mt-5 mb-2.5">
          <h6 className="text-[26px] text-cf-coffee font-nunito font-medium tracking-tighter leading-tight mb-[5px]">
            Ingredients:
          </h6>
          <p>100% arabica coffee beans, No additives or preservatives</p>
        </div>

        <div className="flex flex-col gap-[5px]">
          <label htmlFor="weight">Weight</label>
          <select
            className="px-5 py-2.5 rounded-xl outline-none border border-cf-coffee bg-cf-light-yellow"
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
