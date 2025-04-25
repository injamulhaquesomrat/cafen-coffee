import { Helmet } from "react-helmet";
import Container from "../../shared/Container";
import BlogItemContent from "./BlogItemContent";
import BlogItemHero from "./BlogItemHero";
import RelatedBlogs from "./RelatedBlogs";
import { blogItems } from "../../../utils/blogItems";
import { useParams } from "react-router-dom";

const BlogItem = () => {
  const { blogId } = useParams();
  const blogInfo = blogItems.find((item) => item.id === +blogId);

  // fallback
  if (!blogId) {
    return <h1>Blog not found</h1>;
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{blogInfo?.title}</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <BlogItemHero blogInfo={blogInfo} />
      <div className="bg-foreground">
        <Container>
          <BlogItemContent />
          <RelatedBlogs blogInfo={blogInfo} />
        </Container>
      </div>
    </>
  );
};

export default BlogItem;
