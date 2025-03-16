import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TeamMember = ({ member }) => {
  const { name, position, image, socials } = member;
  console.log(socials);

  return (
    <>
      <Link
        to={`/product/${name}`}
        className="inline-block border border-cf-coffee rounded-xl p-5 group bg-cf-yellow md:bg-transparent md:hover:bg-cf-yellow transition-all duration-500 mt-8"
      >
        <div className="relative rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg aspect-square md:aspect-[9/11]"
            src={image}
            alt={name}
          />
          <div className="flex justify-between absolute bottom-4 md:-bottom-12 md:group-hover:bottom-6 transition-all duration-700 left-1/2 transform -translate-x-1/2 w-2/6 lg:w-10/12 group-hover:w-2/6">
            <div className="hover:-translate-y-3 transition-all duration-700">
              <Link
                to={`${socials.facebook}`}
              >
                <FaFacebook size={30}c className="text-cf-yellow"/>
              </Link>
            </div>
            <div className="hover:-translate-y-3 transition-all duration-700">
              <Link
                to={`${socials.instagram}`}
              >
                <FaInstagramSquare size={30}c className="text-cf-yellow"/>
              </Link>
            </div>
            <div className="hover:-translate-y-3 transition-all duration-700">
              <Link
                to={`${socials.twitter}`}
              >
                <FaSquareXTwitter size={30}c className="text-cf-yellow"/>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <h6 className="text-2xl xl:text-3xl font-nunito font-semibold text-cf-coffee tracking-tighter mb-2.5">
            {name}
          </h6>
          <p className="font-nunito xl:text-lg font-semibold text-cf-coffee tracking-tighter">
            {position}
          </p>
        </div>
      </Link>
    </>
  );
};

export default TeamMember;
