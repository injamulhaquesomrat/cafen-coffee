import LocationItem from "../Home2/Locations/LocationItem";
import Container from "../shared/Container";
import PageHero from "../shared/PageHero";

const locationItems = [
  {
    id: 1,
    title: "Beachside branch",
    location: "123 Beach Ave, Miami, FL 33139",
    contact: "(305) 555-1234",
    mapLink: "https://goo.gl/maps/abc123",
    image:
      "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c97d18f917998b06a643d8_location-image-01.avif",
  },
  {
    id: 2,
    title: "Downtown branch",
    location: "456 Downtown St, Miami, FL 33101",
    contact: "(305) 555-5678",
    mapLink: "https://goo.gl/maps/def456",
    image:
      "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c97ea6d320003d1a2148fa_location-image-02.avif",
  },
  {
    id: 3,
    title: "Uptown branch",
    location: "789 Uptown Rd, Miami, FL 33101",
    contact: "(305) 555-9012",
    mapLink: "https://goo.gl/maps/ghi789",
    image:
      "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c97ea5cf8812f1656dc66e_location-image-03.avif",
  },
];

const LocationContainer = () => {
  return (
    <Container>
      {/* start:: shop hero section */}
      <PageHero pageTitle={"Our locations"} />
      {/* end:: shop hero section */}

      {/* start:: location items container */}
      <div className="py-[60px] sm:py-20 lg:py-[100px]">
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
