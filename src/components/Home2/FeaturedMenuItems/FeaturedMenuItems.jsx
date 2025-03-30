import Container from "../../shared/Container";
import FeaturedMenuCarousel from "./FeaturedMenuCarousel";

const FeaturedMenuItems = () => {
  return (
    <section className="bg-cf-light-white py-20">
      <Container>
        {/* start::faetured menu items carousel */}
        <div>
          <h1 className="text-cf-coffee text-3xl md:text-[55px] tracking-tight font-bold font-nunito pb-5 md:pb-8">
            Featured Menu Items
          </h1>
        </div>
        {/* end::faetured menu items carousel */}

        <FeaturedMenuCarousel />
      </Container>
    </section>
  );
};

export default FeaturedMenuItems;
