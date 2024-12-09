import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  const { title, price, thumbnail, image, save_offer } = item;
  return (
    <>
      <Link
        to={`/product/${title}`}
        className="inline-block border border-transparent hover:border-cf-coffee rounded-xl p-4 group hover:bg-cf-light-yellow transition-all duration-300 mt-8"
      >
        <div className="relative rounded-lg h-[300px] overflow-hidden">
          <img
            className="w-full h-full object-cover aspect-10/12 rounded-lg"
            src={image}
            alt={title}
          />
          <img
            className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-all duration-700 rounded-lg"
            src={thumbnail}
            alt={title}
          />
          <span className="px-4 py-1 leading-tight rounded-full bg-cf-coffee text-cf-yellow absolute top-2 left-2 text-sm font-medium">
            {save_offer}
          </span>
          <button className="px-6 py-2 rounded-full bg-cf-yellow text-cf-coffee border border-cf-coffee leading-snug absolute -bottom-12 group-hover:bottom-4 transition-all duration-700 left-1/2 transform -translate-x-1/2 w-11/12 font-medium">
            Buy now
          </button>
        </div>
        <div className="pt-4">
          <h6 className="text-lg md:text-xl font-nunito font-semibold text-cf-coffee tracking-tight">
            {title}
          </h6>
          <p className="font-nunito font-semibold text-cf-coffee tracking-tight">
            ${price} USD
          </p>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
