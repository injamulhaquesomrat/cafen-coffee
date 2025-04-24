import { blogItems } from "../../../utils/blogItems";
import BlogCard from "../BlogCard";

const RelatedBlogs = () => {
  return (
    <div className="flex flex-col cf-section bg-foreground">
      <h4 className="text-4xl md:text-[42px] lg:text-[48px] xl:text-[55px] text-primary text-center mb-2.5 font-sober">
        Related blogs
      </h4>
      <div className="pt-[30px] xs:pt-10 lg:pt-[60px] xl:pt-[70px] grid lg:grid-cols-3 gap-[30px]">
        {blogItems.slice(0, 3).map((item) => (
          <BlogCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
