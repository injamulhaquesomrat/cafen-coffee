import { blogItems } from "../../../utils/blogItems";
import getRelatedItems from "../../../utils/getRelatedItems";
import BlogCard from "../BlogCard";

const RelatedBlogs = ({ blogInfo }) => {
  const relatedBlogs = getRelatedItems(blogInfo, blogItems);
  return (
    <div className="flex flex-col cf-section bg-foreground">
      {/* start::related blog section title */}
      <h4 className="text-4xl md:text-[42px] lg:text-[48px] xl:text-[55px] text-primary text-center mb-2.5 font-sober">
        Related blogs
      </h4>
      {/* end::related blog section title */}

      {/* start::related blogs content */}
      <div className="pt-[30px] xs:pt-10 lg:pt-[60px] xl:pt-[70px] grid lg:grid-cols-3 gap-[30px]">
        {relatedBlogs.slice(0, 3).map((item) => (
          <BlogCard key={item?.id} item={item} />
        ))}
      </div>
      {/* end::related blogs content */}
    </div>
  );
};

export default RelatedBlogs;
