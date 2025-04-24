import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import FeaturedMenuCarousel from "./FeaturedMenuCarousel";

const FeaturedMenuItems = () => {
  return (
    <section className="bg-foreground py-20 md:py-[100px] lg:py-[120px] xl:py-[150px]">
      <Container>
        {/* start::faetured menu items carousel */}
        <div className="pb-5 md:pb-8">
          <SectionTitle title={"Featured menu items"} />
        </div>
        {/* end::faetured menu items carousel */}

        <FeaturedMenuCarousel />
      </Container>
    </section>
  );
};

export default FeaturedMenuItems;
