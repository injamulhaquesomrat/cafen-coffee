import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TeamItem = () => {
  return (
    <>
      <div className="relative" href="/">
        <div className="rounded-full overflow-hidden group w-[180px] h-[180px] md:w-52 md:h-52 lg:w-72 lg:h-72 mx-auto mb-5 md:mb-0 transition-all duration-700">
          <img
            src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c5d475e62c89f92aba56dc_team-image-05.avif"
            alt="team member image"
          />
        </div>
        <Link href="/" className="text-center w-full">
          <h6 className="text-lg font-nunito text-cf-coffee font-semibold leading-tight tracking-tighter">
            Dennis Barrett
          </h6>
          <p className="font-nunito text-cf-coffee font-medium leading-tight tracking-tighter">
            Chef Assistant
          </p>
        </Link>
        <div className="flex justify-between absolute top-1/4 transition-all duration-700 left-1/2 transform -translate-x-1/2 w-1/4 lg:w-10/12 group-hover:w-2/6">
          <div className="hover:-translate-y-1.5 transition-all duration-700">
            <Link to={`${"/"}`}>
              <FaFacebook size={20} c className="text-cf-yellow" />
            </Link>
          </div>
          <div className="hover:-translate-y-1.5 transition-all duration-700">
            <Link to={`${"/"}`}>
              <FaInstagramSquare size={20} c className="text-cf-yellow" />
            </Link>
          </div>
          <div className="hover:-translate-y-1.5 transition-all duration-700">
            <Link to={`${"/"}`}>
              <FaSquareXTwitter size={20} c className="text-cf-yellow" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamItem;
