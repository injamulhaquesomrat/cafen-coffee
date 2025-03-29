import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TeamItem = () => {
  return (
    <Link href="/">
      <div>
        <img
          src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1460/66c5d475e62c89f92aba56dc_team-image-05.avif"
          alt="team member image"
        />
      </div>
      <div>
        <h6>Dennis Barrett</h6>
        <p>Chef Assistant</p>
      </div>
      <div className="flex justify-between absolute bottom-4 md:-bottom-12 md:group-hover:bottom-6 transition-all duration-700 left-1/2 transform -translate-x-1/2 w-2/6 lg:w-10/12 group-hover:w-2/6">
        <div className="hover:-translate-y-3 transition-all duration-700">
          <Link to={`${"/"}`}>
            <FaFacebook size={30} c className="text-cf-yellow" />
          </Link>
        </div>
        <div className="hover:-translate-y-3 transition-all duration-700">
          <Link to={`${"/"}`}>
            <FaInstagramSquare size={30} c className="text-cf-yellow" />
          </Link>
        </div>
        <div className="hover:-translate-y-3 transition-all duration-700">
          <Link to={`${"/"}`}>
            <FaSquareXTwitter size={30} c className="text-cf-yellow" />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default TeamItem;
