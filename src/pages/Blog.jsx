import GoToTop from "../components/shared/GoToTop";
import { Helmet } from "react-helmet";
import BlogContainer from "../components/Blog/BlogContainer";

const Blog = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | Cafen ☕</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="bg-foreground">
        <BlogContainer />
        <GoToTop />
      </div>
    </>
  );
};

export default Blog;
