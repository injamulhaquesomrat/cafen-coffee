import Container from "../../shared/Container";

const BlogItemHero = ({ blogInfo }) => {
  return (
    <div className="bg-secondary-foreground pt-8 xl:pt-16">
      <Container>
        <div className="text-primary">
          <div>
            <div className="flex justify-center items-center gap-5 mb-2.5">
              <span className="bg-primary text-secondary px-2.5 py-[5px] text-sm rounded-full leading-[1.7]">
                {blogInfo?.type}
              </span>
              <span className="text-sm">August 23, 2024</span>
            </div>
            <h3 className="text-[50px] xs:text-[56px] md:text-[68px] lg:text-[70px] xl:text-[80px] leading-[1.2] font-sober text-center">
              {blogInfo?.title}
            </h3>
            <p className="text-center md:w-[79%] lg:w-[56%] xl:w-[520px] mx-auto">
              From decadent dessert-inspired drinks to refreshing cold brews,
              there are countless ways to explore and savor your favorite brew.
            </p>
          </div>
          <div className="mt-5 md:mt-10 border border-primary rounded-t-xl overflow-hidden">
            <img src={blogInfo?.images.big} alt={blogInfo?.title} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogItemHero;
