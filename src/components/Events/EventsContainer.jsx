import { eventItems } from "../../utils/eventCarouselItems";
import EventCardItem from "../Home/Events/EventCardItem";

const EventsContainer = () => {
  return (
    <div className="py-20 lg:py-[100px] grid lg:grid-cols-2 gap-[30px]">
      {eventItems.map((item) => (
        <EventCardItem key={item?.id} item={item} />
      ))}
    </div>
  );
};

export default EventsContainer;
