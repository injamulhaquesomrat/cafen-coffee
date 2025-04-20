import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  const { id, title, price, thumbnail, image, save_offer } = item;
  return (
    <>
      <Link
        to={`/product/${id}`}
        className="inline-block border border-cf-coffee md:border-transparent md:hover:border-cf-coffee rounded-xl p-4 group bg-cf-light-yellow md:bg-transparent md:hover:bg-cf-light-yellow transition-all duration-300"
      >
        {/* start: product visual representation with offer */}
        <div className="relative rounded-lg aspect-[9/10] overflow-hidden">
          {/* start:: product image */}
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image}
            alt={title}
          />
          {/* end::  product image */}

          {/* start:: product thumbnail */}
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-0 md:opacity-100 md:group-hover:opacity-0 transition-all duration-700 rounded-lg"
            src={thumbnail}
            alt={title}
          />
          {/* end:: product thumbnail */}

          {/* start:: product offer */}
          <span className="px-4 py-1  rounded-full bg-cf-coffee text-cf-yellow absolute top-2 left-2 text-sm font-medium">
            {save_offer}
          </span>
          {/* end:: product offer */}

          {/* start:: product button */}
          <button className="px-6 py-2 rounded-full bg-cf-yellow text-cf-coffee border border-cf-coffee leading-snug absolute bottom-4 md:-bottom-12 md:group-hover:bottom-4 transition-all duration-700 left-1/2 transform -translate-x-1/2 w-11/12 font-medium">
            Buy now
          </button>
          {/* end:: product button */}
        </div>
        {/* end:: product visual representation with offer */}

        {/* start:: product title & price */}
        <div className="pt-4 text-cf-coffee">
          <h6 className="text-[22px] xs:text-xl md:text-[22px] xl:text-2xl font-sober mb-[5px] xs:mb-0">
            {title}
          </h6>
          <p className="text-sm">$ {price} USD</p>
        </div>
        {/* end:: product title & price */}
      </Link>
    </>
  );
};

export default ProductItem;
