import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const EventCardItem = ({ item }) => {
  return (
    <>
      <div className="flex flex-col xs:flex-row border border-cf-coffee rounded-2xl text-cf-coffee overflow-hidden lg:col-span-1">
        {/* start::carousel item content */}
        <div className="flex flex-col p-4 md:p-6 xs:w-1/2">
          <div className="flex-1 pb-5 xs:pb-[50px] md:pb-16">
            <p className="text-sm xs:text-base mb-[5px] sm:mb-[15px]">
              {item?.date}
            </p>
            <h4 className="text-2xl xs:text-[28px] font-sober pb-[5px] sm:pb-2.5 md:pb-4 leading-[1.2]">
              {item?.title}
            </h4>
            <p className="line-clamp-4">{item?.description}</p>
          </div>
          <div>
            <Link to={`/event/${item?.id}`}>
              <button className="px-5 py-2.5 bg-cf-yellow border border-cf-coffee rounded-full inline-flex items-center gap-2 group">
                View event{" "}
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
              </button>
            </Link>
          </div>
        </div>
        {/* end::carousel item content */}

        {/* start:: carousel item image  */}
        <div className=" xs:w-1/2">
          <img
            className="object-cover w-full h-full aspect-[16/12] md:aspect-[16/10]"
            src={item?.images?.small}
            alt={item?.title}
          />
        </div>
        {/* end::carousel item image  */}
      </div>
    </>
  );
};

export default EventCardItem;
