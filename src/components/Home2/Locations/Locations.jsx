import { locationItems } from "../../../utils/locationItems";
import Container from "../../shared/Container";
import LocationItem from "./LocationItem";

const Locations = () => {
  return (
    <section className="bg-foreground py-20 md:py-[100px] lg:py-[120px] xl:py-[150px]">
      <Container>
        <div>
          {/* start:: section heading */}
          <div className="text-center">
            <h3 className="text-[42px] xs:text-[50px] md:text-[54px] lg:text-[56px] xl:text-[60px] leading-[1.2] pb-6 lg:pb-8 font-sober tracking-tight text-primary text-center">
              Visit our locations
            </h3>
            <p className="text-primary">
              Find the nearest café to you and join us for a delightful time.
            </p>
          </div>
          {/* end:: section heading */}

          {/* start:: location container */}
          <div className="pt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationItems.map((item) => (
              <LocationItem item={item} key={item?.id} />
            ))}
          </div>
          {/* end:: location container */}
        </div>
      </Container>
    </section>
  );
};

export default Locations;
