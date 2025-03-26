import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const LocationItem = ({ item }) => {
  const { title, image, location, mapLink, contact } = item;

  return (
    <div className="p-5 border border-cf-coffee bg-cf-foreground rounded-2xl space-y-4">
      <div>
        <img
          className="aspect-square object-cover rounded-xl"
          src={image}
          alt={title}
        />
      </div>
      <div>
        <h2 className="text-2xl text-cf-coffee text-nunito tracking-tighter leading-tight pb-2">
          {title}
        </h2>
        <p className="text-cf-coffee">
          {location}
        </p>
        <div className="pt-[50px] mb-0 flex flex-col text-cf-coffee font-medium gap-4 justify-between">
          <a className="hover:underline" href={`tel:${contact}`}>
            {contact}
          </a>
          <Link href={mapLink}>
          <button className="inline-flex px-6  bg-cf-yellow py-3 rounded-full items-center gap-2 group border border-cf-coffee w-fit">
            <span>View on map</span>{" "}
            <FaArrowRight
              className="group-hover:translate-x-1 duration-100 ease-in-out"
              size={12}
            />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationItem;
