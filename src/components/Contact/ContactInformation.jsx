import { Link } from "react-router-dom";

const contactInfoItems = [
  {
    id: 1,
    img: "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c6e415f7af9a4b1482bff7_contact-icon-01.svg",
    title: "Address",
    text: "Cafen Café 123 Coffee Lane Brewtown, 45678",
  },
  {
    id: 2,
    img: "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c6e414340ea4cad37ec5cf_contact-icon-02.svg",
    title: "Phone",
    text: "+1 (234) 567-8900",
    link: "tel:+1 (234) 567-8900",
  },
  {
    id: 3,
    img: "https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c6e41583705ec21dc9790c_contact-icon-03.svg",
    title: "Email",
    text: "mailcontact@cafencafe.com",
    link: "mail:contact@cafencafe.com",
  },
];

const ContactInformation = () => {
  return (
    <div className="mt-20 md:mt-[100px] lg:mt-[150px] pb-20 md:pb-[100px] lg:pb-[150px] text-cf-coffee">
      {/* start::contact information with socials */}
      <div>
        <h5 className="text-[32px] font-nunito leading-tight tracking-tighter font-medium pb-5">Contact information</h5>
        <p>Social Media</p>
        {/* start::social links  */}
        <div className="flex items-center gap-4 pt-5">
          <Link to="#">
            <img
              className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
              src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66b9dff7361ea25322579388_facebook.svg"
              alt="facebook icon"
            />
          </Link>
          <Link to="#">
            <img
              className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
              src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66b9dff69faf75adbbe76dac_instagram.svg"
              alt="instagram icon"
            />
          </Link>
          <Link to="#">
            <img
              className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
              src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66b9dff5bbda84c872361580_dribble.svg"
              alt="dribble icon"
            />
          </Link>
          <Link to="#">
            <img
              className="h-6 w-6 hover:-translate-y-1 transition-all duration-300"
              src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66b9dff61c1404aa7ba991cc_twitter.svg"
              alt="twitter icon"
            />
          </Link>
        </div>
        {/* end::social links */}
      </div>
      {/* end::contact information with socials */}

      {/* start::phone, email, address */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
        {contactInfoItems.map((item) => (
          <div key={item?.id} className="col-span-1">
            <div>
              <img src={item?.img} alt={item?.title} />
            </div>
            <div>
              <h6>{item?.title}</h6>
              {item?.link ? (
                <a href={item?.link}>{item?.text}</a>
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
