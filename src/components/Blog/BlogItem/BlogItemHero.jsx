import Container from "../../shared/Container";

const BlogItemHero = () => {
  return (
    <div className="bg-cf-light-yellow pt-8">
      <Container>
        <div className="text-cf-coffee">
          <div>
            <div className="flex justify-center items-center gap-5 mb-2.5">
              <span className="bg-cf-coffee text-cf-yellow px-2.5 py-[5px] text-sm rounded-full leading-[1.7]">
                Business
              </span>
              <span className="text-sm">August 23, 2024</span>
            </div>
            <h3 className="text-[50px] leading-[1.2] font-sober text-center">Creative ways to enjoy coffee</h3>
            <p className="text-center">
              From decadent dessert-inspired drinks to refreshing cold brews,
              there are countless ways to explore and savor your favorite brew.
            </p>
          </div>
          <div className="mt-5 border border-cf-coffee rounded-t-xl overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c83be99a0b5c5d400d16c5_blog-big-02.avif"
              alt="blog item hero image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogItemHero;
