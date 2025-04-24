import Container from "../../shared/Container";

const BlogItemHero = ({ blogInfo }) => {
  return (
    <div className="bg-cf-light-yellow pt-8 xl:pt-16">
      <Container>
        <div className="text-cf-coffee">
          <div>
            <div className="flex justify-center items-center gap-5 mb-2.5">
              <span className="bg-cf-coffee text-cf-yellow px-2.5 py-[5px] text-sm rounded-full leading-[1.7]">
                {blogInfo?.type}
              </span>
              <span className="text-sm">August 23, 2024</span>
            </div>
            <h3 className="text-[50px] xs:text-[56px] md:text-[68px] lg:text-[70px] xl:text-[80px] leading-[1.2] font-sober text-center">
              Creative ways to enjoy coffee
            </h3>
            <p className="text-center">{blogInfo?.title}</p>
          </div>
          <div className="mt-5 md:mt-10 border border-cf-coffee rounded-t-xl overflow-hidden">
            <img src={blogInfo?.images.big} alt={blogInfo?.title} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogItemHero;
