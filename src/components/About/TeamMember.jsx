import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const TeamMember = ({ member }) => {
  const { name, position, image, socials } = member;

  const socialIcons = [
    {
      id: 1,
      link: `${socials?.facebook}`,
      icon: <FaFacebookSquare className="text-lg lg:text-2xl text-cf-yellow" />,
    },
    {
      id: 2,
      link: `${socials?.instagram}`,
      icon: (
        <FaInstagramSquare className="text-lg lg:text-2xl text-cf-yellow" />
      ),
    },
    {
      id: 3,
      link: `${socials?.twitter}`,
      icon: <FaSquareXTwitter className="text-lg lg:text-2xl text-cf-yellow" />,
    },
  ];
  return (
    <>
      <div
        // to={`/product/${name}`}
        className="inline-block border border-cf-coffee rounded-xl p-5 group bg-cf-foreground lg:hover:bg-cf-yellow transition-all duration-700 cursor-pointer"
      >
        {/* start:: team member image container */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg aspect-square md:aspect-[9/11]"
            src={image}
            alt={name}
          />
          {/* start:: social links container */}
          <div className="flex justify-between items-center gap-2.5 absolute bottom-4 md:bottom-6 lg:-bottom-6 lg:group-hover:bottom-6 transition-all duration-700 left-1/2 transform -translate-x-1/2 ease-in-out">
            {socialIcons.map(
              (item) =>
                item?.link && (
                  <div
                    key={item?.id}
                    className="hover:-translate-y-1.5 transition-all duration-700"
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
          <h6 className="text-xl mmd:text-[22px] lg:text-2xl font-sober text-cf-coffee mb-2.5">
            {name}
          </h6>
          <p className="xl:text-lg text-cf-coffee ">{position}</p>
        </div>
        {/* end:: team member text container */}
      </div>
    </>
  );
};

export default TeamMember;
