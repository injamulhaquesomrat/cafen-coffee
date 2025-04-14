import { Helmet } from "react-helmet";
import Container from "../components/shared/Container";
import PageHero from "../components/shared/PageHero";
import GoToTop from "../components/shared/GoToTop";
import ShopPagination from "../components/Shop/ShopPagination";
import { blogItems } from "../utils/blogItems";
import BlogCard from "../components/Blog/BlogCard";

const Blog = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | Cafen ☕</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <Container>
          <PageHero pageTitle={"Our blog"} />

          {/* start:: products container */}
          <div className="py-[60px] sm:py-20 lg:py-[100px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {blogItems.map((item) => (
                <BlogCard key={item?.id} item={item} />
              ))}
            </div>

            {/* start:: pagination */}
            {/* <ShopPagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            /> */}
            {/* end:: pagination */}
          </div>

          {/* end:: products container */}
        </Container>
        <GoToTop />
      </div>
    </>
  );
};

export default Blog;
