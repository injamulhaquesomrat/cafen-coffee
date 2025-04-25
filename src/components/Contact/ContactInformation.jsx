import { Link } from "react-router-dom";

const contactInfoItems = [
  {
    id: 1,
    img: "/assets/icons/props/contact-location.svg",
    title: "Address",
    text: "Cafen Café 123 Coffee Lane Brewtown, 45678",
  },
  {
    id: 2,
    img: "/assets/icons/props/contact-phone.svg",
    title: "Phone",
    text: "+1 (234) 567-8900",
    link: "tel:+1 (234) 567-8900",
  },
  {
    id: 3,
    img: "/assets/icons/props/contact-mail.svg",
    title: "Email",
    text: "contact@cafencafe.com",
    link: "mail:contact@cafencafe.com",
  },
];

const ContactInformation = () => {
  return (
    <div className="mt-20 xs:mt-[100px] xl:mt-[150px] pb-20 md:pb-[100px] lg:pb-[120px] xl:pb-[150px] text-primary flex flex-col md:flex-row justify-between gap-5 md:gap-10 lg:gap-10">
      {/* start::contact information with socials */}
      <div className="xl:w-3/12">
        <h5 className="text-[32px] leading-[1.2] font-sober font-medium pb-5">
          Contact information
        </h5>
        <p>Social Media</p>
        {/* start::social links  */}
        <div className="flex items-center gap-4 pt-2.5 pb-5">
          <Link to="#">
            <img
              className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
              src="/assets/icons/props/facebook-icon.svg"
              alt="facebook icon"
            />
          </Link>
          <Link to="#">
            <img
              className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
              src="/assets/icons/props/instagram-icon.svg"
              alt="instagram icon"
            />
          </Link>
          <Link to="#">
            <img
              className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
              src="/assets/icons/props/dribble-icon.svg"
              alt="dribble icon"
            />
          </Link>
          <Link to="#">
            <img
              className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
              src="/assets/icons/props/twitter-icon.svg"
              alt="twitter icon"
            />
          </Link>
        </div>
        {/* end::social links */}
      </div>
      {/* end::contact information with socials */}

      {/* start::phone, email, address */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-[30px] lg:gap-5 xl:w-9/12">
        {contactInfoItems.map((item) => (
          <div
            key={item?.id}
            className="col-span-1 flex flex-col sm:flex-row gap-5"
          >
            <div className="h-10 w-10 md:h-[50px] md:w-[50px] min-w-2/5 bg-secondary flex items-center justify-center rounded-full border border-primary">
              <img src={item?.img} alt={item?.title} />
            </div>
            <div className="w-4/5">
              <h6 className="font-sober leading-[1.2] text-2xl font-medium pb-2.5">
                {item?.title}
              </h6>
              {item?.link ? (
                <a className="underline hover:no-underline" href={item?.link}>
                  {item?.text}
                </a>
              ) : (
                <p>{item?.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* end::phone, email, address */}
    </div>
  );
};

export default ContactInformation;
