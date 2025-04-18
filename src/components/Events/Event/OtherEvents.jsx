
import { eventItems } from "../../../utils/eventCarouselItems";
import EventCardItem from "../../Home/Events/EventCardItem";

const OtherEvents = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-8 pt-20">
      <h4 className="text-4xl md:text-[42px] lg:text-[48px] xl:text-[55px] text-cf-coffee text-center mb-2.5 font-sober">Other events</h4>
      <div className="py-8 grid lg:grid-cols-2 gap-[30px]">
        {eventItems.slice(0,2).map((item) => (
          <EventCardItem key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OtherEvents;
