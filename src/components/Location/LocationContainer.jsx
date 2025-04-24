import { locationItems } from "../../utils/locationItems";
import LocationItem from "../Home2/Locations/LocationItem";
import Container from "../shared/Container";
import PageHero from "../shared/PageHero";

const LocationContainer = () => {
  return (
    <Container>
      {/* start:: shop hero section */}
      <PageHero pageTitle={"Our locations"} />
      {/* end:: shop hero section */}

      {/* start:: location items container */}
      <div className="py-[60px] md:py-20 lg:py-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {locationItems.map((item, index) => (
            <LocationItem key={index} item={item} />
          ))}
        </div>
      </div>

      {/* end:: lcoation items container */}
    </Container>
  );
};

export default LocationContainer;


