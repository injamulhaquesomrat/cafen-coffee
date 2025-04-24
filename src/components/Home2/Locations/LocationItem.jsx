import { Link } from "react-router-dom";
import ButtonArrow from "../../shared/Buttons/ButtonArrow";

const LocationItem = ({ item }) => {
  const { title, image, location, mapLink, contact } = item;

  return (
    <div className="p-5 border border-primary bg-background rounded-2xl space-y-4 h-full">
      <div className="">
        <img
          className="aspect-square object-cover rounded-lg"
          src={image}
          alt={title}
        />
      </div>
      <div className="aspect-[16/12] lg:aspect-video flex flex-col justify-between">
        <div className="h-fit">
          <h2 className="text-[28px] xl:text-[30px] leading-[1.2] text-primary font-sober pb-2">
            {title}
          </h2>
          <p className="text-primary-foreground">{location}</p>
        </div>
        <div className="flex flex-col xl:flex-row xl:items-center text-primary font-medium gap-4 justify-between">
          <a className="hover:underline" href={`tel:${contact}`}>
            {contact}
          </a>
          <Link href={mapLink}>
            <ButtonArrow btnText={"View on map"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationItem;
