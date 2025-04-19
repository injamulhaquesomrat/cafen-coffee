// event counter items
const eventCounters = [
  {
    id: 1,
    type: "Happy customers",
    count: "12k",
  },
  {
    id: 2,
    type: "Years in business",
    count: "8+",
  },
  {
    id: 3,
    type: "Daily visitors",
    count: "100+",
  },
];

const EventsCounter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center pt-24 md:pt-16 lg:pt-20 text-cf-coffee gap-8 ">
      {eventCounters.map((item) => (
        <div key={item?.id} className="flex gap-4 items-center">
          <h6 className="text-[2.5rem] leading-tight font-sober font-semibold">
            {item?.count}
          </h6>
          <p>{item?.type}</p>
        </div>
      ))}
    </div>
  );
};

export default EventsCounter;
