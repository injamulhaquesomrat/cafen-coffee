import Container from "../../shared/Container";
import BlogItemContent from "./BlogItemContent";
import BlogItemHero from "./BlogItemHero";
import RelatedBlogs from "./RelatedBlogs";

const BlogItem = () => {
  return (
    <div>
      <BlogItemHero />
      <div className="bg-cf-light-white">
        <Container>
          <BlogItemContent />
          <RelatedBlogs />
        </Container>
      </div>
    </div>
  );
};

export default BlogItem;
