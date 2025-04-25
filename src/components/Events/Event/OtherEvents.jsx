import { eventItems } from "../../../utils/eventCarouselItems";
import getRelatedItems from "../../../utils/getRelatedItems";
import EventCardItem from "../../Home/Events/EventCardItem";

const OtherEvents = ({ eventInfo }) => {
  const otherEvents = getRelatedItems(eventInfo, eventItems);
  return (
    <div className="flex flex-col cf-section bg-foreground">
      <h4 className="text-4xl md:text-[42px] lg:text-[48px] xl:text-[55px] text-primary text-center mb-2.5 font-sober">
        Other events
      </h4>
      <div className="pt-[30px] xs:pt-10 lg:pt-[60px] xl:pt-[70px] grid lg:grid-cols-2 gap-[30px]">
        {otherEvents.slice(0, 2).map((item) => (
          <EventCardItem key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OtherEvents;
