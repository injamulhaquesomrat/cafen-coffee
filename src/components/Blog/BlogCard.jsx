import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
  return (
    <Link to={`/blog/${item?.id}`}>
      <div className="border border-primary rounded-[15px] overflow-hidden flex flex-col gap-5 p-4 md:p-5 transition-all duration-300 cursor-pointer hover:bg-secondary">
        {/* start::blog image content */}
        <div>
          <img
            className="w-full aspect-[16/12] object-cover rounded-[10px]"
            src={item?.images.small}
            alt="blog card image"
          />
        </div>
        {/* end::blog image content */}

        {/* start::blog text content */}
        <div className="space-y-2.5">
          <span className="px-2.5 py-[5px] bg-primary rounded-full text-secondary">
            {item?.type}
          </span>
          <h4 className="text-2xl sm:text-xl xl:text-2xl leading-[1.2] text-primary font-sober line-clamp-2">
            {item?.title}
          </h4>
        </div>
        {/* end::blog text content */}
      </div>
    </Link>
  );
};

export default BlogCard;
