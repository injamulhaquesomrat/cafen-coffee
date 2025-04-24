import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TeamItem = ({ item }) => {
  const { name, position, socials, image } = item;

  return (
    <>
      <div className="relative group">
        <div className="rounded-full overflow-hidden lg:relative w-[180px] h-[180px] md:w-52 md:h-52 lg:w-72 lg:h-72 mx-auto mb-5 md:mb-6 transition-all duration-700">
          <div className="">
            <img
              className="lg:group-hover:blur-[2px] transition-all duration-700"
              src={image}
              alt="team member image"
            />
          </div>
          <div className="flex justify-between gap-2 lg:gap-3 absolute top-1/2 lg:top-full lg:group-hover:top-1/2 transition-all duration-700 left-1/2 transform -translate-x-1/2 w-fit lg:group-hover:w-fit">
            <div className="hover:-translate-y-1.5 transition-all duration-700">
              <Link to={`${socials.facebook}`}>
                <FaFacebookSquare className="size-5 lg:size-7 text-secondary" />
              </Link>
            </div>
            <div className="hover:-translate-y-1.5 transition-all duration-700">
              <Link to={`${socials.instagram}`}>
                <FaInstagramSquare className="size-5 lg:size-7 text-secondary" />
              </Link>
            </div>
            <div className="hover:-translate-y-1.5 transition-all duration-700">
              <Link to={`${socials.twitter}`}>
                <FaSquareXTwitter className="size-5 lg:size-7 text-secondary" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Link
            href="/"
            className="text-center w-fit mx-auto flex flex-col items-center justify-center"
          >
            <h6 className="text-xl md:text-[22px] lg:text-2xl font-sober text-primary">
              {name}
            </h6>
            <p className="md:text-xl font-sober text-primary">{position}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TeamItem;
