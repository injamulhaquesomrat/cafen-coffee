import Container from "../../shared/Container";

const EventHero = () => {
  return (
    <div className="bg-cf-light-yellow pb-[60px] xs:pb-20 md:pb-[100px] pt-7 sm:pt-10">
      <Container>
        <h2 className="text-cf-coffee text-[46px] sm:text-[62px] md:text-[68px] lg:text-[70px] xl:text-[80px] leading-[1.2] font-sober mb-5 sm:mb-[30px] text-center font-medium">
          Coffee art workshop
        </h2>
        <div>
          <img
            className="rounded-lg"
            src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66d0652b606a0cfcc17daecc_event-big-04.avif"
            alt="event hero image"
          />
        </div>
      </Container>
    </div>
  );
};

export default EventHero;
