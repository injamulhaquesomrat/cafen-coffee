const EventsCounter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center pt-24 md:pt-16 lg:pt-20 text-cf-coffee gap-8 ">
      <div className="flex gap-4 items-center">
        <h6 className="text-[2.5rem] leading-tight font-nunito font-semibold">
          12k
        </h6>
        <p>Happy customers</p>
      </div>
      <div className="flex gap-4 items-center">
        <h6 className="text-[2.5rem] leading-tight font-nunito font-semibold">
          8+
        </h6>
        <p>Years in business</p>
      </div>
      <div className="flex gap-4 items-center">
        <h6 className="text-[2.5rem] leading-tight font-nunito font-semibold">
          100+
        </h6>
        <p>Daily visitors</p>
      </div>
    </div>
  );
};

export default EventsCounter;
