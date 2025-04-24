import Container from "../../shared/Container";

const EventHero = ({ eventInfo }) => {
  return (
    <div className="bg-secondary-foreground pb-[60px] xs:pb-20 md:pb-[100px] pt-7 sm:pt-10">
      <Container>
        <h2 className="text-primary text-[46px] sm:text-[62px] md:text-[68px] lg:text-[70px] xl:text-[80px] leading-[1.2] font-sober mb-5 sm:mb-[30px] text-center font-medium">
          {eventInfo?.title}
        </h2>
        <div>
          <img
            className="rounded-lg w-full"
            src={eventInfo?.images?.big}
            alt={eventInfo?.title}
          />
        </div>
      </Container>
    </div>
  );
};

export default EventHero;
