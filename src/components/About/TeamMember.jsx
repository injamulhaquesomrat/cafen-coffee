import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const TeamMember = ({ member }) => {
  const { name, position, image, socials } = member;

  const socialIcons = [
    {
      id: 1,
      link: `${socials?.facebook}`,
      icon: <FaFacebook size={30} c className="text-cf-yellow" />,
    },
    {
      id: 2,
      link: `${socials?.instagram}`,
      icon: <FaInstagramSquare size={30} c className="text-cf-yellow" />,
    },
    {
      id: 3,
      link: `${socials?.twitter}`,
      icon: <FaSquareXTwitter size={30} c className="text-cf-yellow" />,
    },
  ];
  return (
    <>
      <div
        // to={`/product/${name}`}
        className="inline-block border border-cf-coffee rounded-xl p-5 group bg-cf-yellow md:bg-transparent md:hover:bg-cf-yellow transition-all duration-500 mt-8"
      >
        {/* start:: team member image container */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg aspect-square md:aspect-[9/11]"
            src={image}
            alt={name}
          />
          {/* start:: social links container */}
          <div className="flex justify-between absolute bottom-4 md:-bottom-12 md:group-hover:bottom-6 transition-all duration-700 left-1/2 transform -translate-x-1/2 w-2/6 lg:w-10/12 group-hover:w-2/6">
            {socialIcons.map(
              (item) =>
                item?.link && (
                  <div
                    key={item?.id}
                    className="hover:-translate-y-3 transition-all duration-700"
                  >
                    <a href={item.link}>{item.icon}</a>
                  </div>
                )
            )}
          </div>
          {/* end:: social links container */}
        </div>
        {/* end:: team member image container */}

        {/* start:: team member text container */}
        <div className="pt-4">
          <h6 className="text-2xl xl:text-3xl font-nunito font-semibold text-cf-coffee tracking-tighter mb-2.5">
            {name}
          </h6>
          <p className="font-nunito xl:text-lg font-semibold text-cf-coffee tracking-tighter">
            {position}
          </p>
        </div>
        {/* end:: team member text container */}
      </div>
    </>
  );
};

export default TeamMember;
