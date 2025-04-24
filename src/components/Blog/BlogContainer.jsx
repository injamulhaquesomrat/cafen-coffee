import Container from "../shared/Container";
import PageHero from "../shared/PageHero";
import BlogCard from "./BlogCard";
import Pagination from "../shared/Pagination";
import { useState } from "react";
import { blogItems } from "../../utils/blogItems";

const BlogContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(blogItems.length / itemsPerPage);
  return (
    <Container>
      {/* start::page hero */}
      <PageHero pageTitle={"Our blog"} />
      {/* end::page hero */}

      {/* start:: products container */}
      <div className="py-[60px] md:py-20 lg:py-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {currentItems.map((item) => (
            <BlogCard key={item?.id} item={item} />
          ))}
        </div>

        {/* start:: pagination */}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
        {/* end:: pagination */}
      </div>

      {/* end:: products container */}
    </Container>
  );
};

export default BlogContainer;
