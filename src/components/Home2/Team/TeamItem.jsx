import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TeamItem = ({ item }) => {
  const { title, position, social, img } = item;

  return (
    <>
      <div className="relative group" href="/">
        <div className="rounded-full overflow-hidden lg:relative w-[180px] h-[180px] md:w-52 md:h-52 lg:w-72 lg:h-72 mx-auto mb-5 md:mb-6 transition-all duration-700">
          <img
            className="lg:group-hover:blur-sm transition-all duration-300"
            src={img}
            alt="team member image"
          />
          <div className="flex justify-between absolute top-1/2 lg:top-[100%] lg:group-hover:top-1/2 transition-all duration-500 left-1/2 transform -translate-x-1/2 w-1/4 lg:group-hover:w-2/6">
            <div className="hover:-translate-y-1.5 transition-all duration-700">
              <Link to={`${social.facebook}`}>
                <FaFacebook className="size-5 lg:size-7 text-cf-yellow" />
              </Link>
            </div>
            <div className="hover:-translate-y-1.5 transition-all duration-700">
              <Link to={`${social.instagram}`}>
                <FaInstagramSquare className="size-5 lg:size-7 text-cf-yellow" />
              </Link>
            </div>
            <div className="hover:-translate-y-1.5 transition-all duration-700">
              <Link to={`${social.twitter}`}>
                <FaSquareXTwitter className="size-5 lg:size-7 text-cf-yellow" />
              </Link>
            </div>
          </div>
        </div>
        <Link href="/" className="text-center w-full">
          <h6 className="text-xl md:text-2xl font-nunito text-cf-coffee font-semibold leading-tight tracking-tighter">
            {title}
          </h6>
          <p className="md:text-xl font-nunito text-cf-coffee font-medium leading-tight tracking-tighter">
            {position}
          </p>
        </Link>
      </div>
    </>
  );
};

export default TeamItem;
