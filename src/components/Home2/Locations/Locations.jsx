import { locationItems } from "../../../utils/locationItems";
import Container from "../../shared/Container";
import LocationItem from "./LocationItem";

const Locations = () => {
  return (
    <div className="py-[80px]">
      <Container>
        <div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold pb-6 lg:pb-8 font-nunito tracking-tight text-cf-coffee text-center">
              Visit our locations
            </h3>
            <p className="text-cf-coffee">
              Find the nearest café to you and join us for a delightful time.
            </p>
          </div>

          <div className="pt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationItems.map((item) => (
              <LocationItem item={item} key={item?.id} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Locations;
