import { Link, NavLink } from "react-router-dom";
import { navItems, utilityItems } from "../../../utils/navItems";

const PageInfo = () => {
  const footerNavItems = navItems.find(
    (item) => item.name === "Pages"
  )?.submenus;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="border border-cf-coffee p-4 md:p-8 rounded-3xl flex flex-col md:flex-row justify-between lg:col-span-7">
        <div className="flex flex-col justify-between">
          <div>
            <img src="/public/logo.svg" alt="footer logo" />
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
          <div className="flex-1 space-y-2 flex flex-col justify-center">
            <h6 className="font-semibold font-nunito text-cf-coffee text-xl tracking-tighter">
              Opening hours
            </h6>
            <p className="text-cf-coffee">Monday - Friday: 7:00 AM - 8:00 PM</p>
            <p className="text-cf-coffee">
              Saturday - Sunday: 8:00 AM - 6:00 PM
            </p>
          </div>
          <p className="mt-auto text-cf-coffee">
            Designed by{" "}
            <Link
              to="#"
              className="font-bold underline hover:no-underline font-nunito"
            >
              Webestica
            </Link>
            , Developed by{" "}
            <Link
              to="#"
              className="font-bold underline hover:no-underline font-nunito"
            >
              Injamul H. Somrat
            </Link>
          </p>
        </div>
        <div>
          <img src="/public/footer-image.svg" alt="footer map" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 p-4 md:p-8 border border-cf-coffee bg-cf-coffee text-white font-nunito rounded-3xl lg:col-span-5">
        <div>
          <h6 className="text-2xl font-semibold pb-4">Page links</h6>
          <div className="grid grid-cols-2">
            <ul>
              {footerNavItems.slice(0, 8).map((item, id) => (
                <li key={id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `font-semibold text-lg ${
                        isActive
                          ? "text-cf-yellow"
                          : "text-white hover:text-cf-yellow"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul>
              {footerNavItems.slice(8, 16).map((item, id) => (
                <li key={id}>
                  <NavLink
                    className={({ isActive }) =>
                      `font-semibold text-lg ${
                        isActive
                          ? "text-cf-yellow"
                          : "text-white hover:text-cf-yellow"
                      }`
                    }
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h6 className="text-2xl font-semibold pb-4">Utility links</h6>
          <div className="grid ">
            <ul>
              {utilityItems.map((item, id) => (
                <li key={id}>
                  <NavLink
                    className={({ isActive }) =>
                      `font-semibold text-lg ${
                        isActive
                          ? "text-cf-yellow"
                          : "text-white hover:text-cf-yellow"
                      }`
                    }
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageInfo;
