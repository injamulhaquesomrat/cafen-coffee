const BlogCard = ({ item }) => {
  return (
    <div className="border border-cf-coffee rounded-[15px] overflow-hidden flex flex-col gap-5 p-4 md:p-5 transition-all duration-300 cursor-pointer hover:bg-cf-yellow">
      <div>
        <img
          className="w-full aspect-[16/12] object-cover rounded-[10px]"
          src={item?.img}
          alt="blog card image"
        />
      </div>
      <div className="space-y-2.5">
        <span className="px-2.5 py-[5px] bg-cf-coffee rounded-full text-cf-yellow">
          {item?.type}
        </span>
        <h4 className="text-2xl sm:text-xl xl:text-2xl leading-[1.2] text-cf-coffee font-sober line-clamp-2">
          {item?.title}
        </h4>
      </div>
    </div>
  );
};

export default BlogCard;
