import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const EventCardItem = ({ item }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row border border-cf-coffee rounded-2xl text-cf-coffee overflow-hidden lg:col-span-1">
        {/* start::carousel item content */}
        <div className="flex flex-col p-4 md:p-6 md:w-1/2">
          <div className="flex-1 pb-4 md:pb-16">
            <p>{item.date}</p>
            <h4 className="text-xl md:text-2xl font-sober font-bold pb-2 md:pb-4 tracking-tight">
              {item.title}
            </h4>
            <p className="line-clamp-2">{item.description}</p>
          </div>
          <div>
            <Link to={`/event/${item.id}`}>
              <button className="px-6 py-1.5 bg-cf-yellow border border-cf-coffee rounded-full font-sober font-bold inline-flex items-center gap-2 group">
                View event{" "}
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
              </button>
            </Link>
          </div>
        </div>
        {/* end::carousel item content */}

        {/* start:: carousel item image  */}
        <div className=" md:w-1/2">
          <img
            className="object-cover w-full h-full aspect-[16/12] md:aspect-[16/10]"
            src={item.image}
            alt={item.title}
          />
        </div>
        {/* end::carousel item image  */}
      </div>
    </>
  );
};

export default EventCardItem;
