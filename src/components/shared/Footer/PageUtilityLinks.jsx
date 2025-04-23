import { NavLink } from "react-router-dom";
import { navItems } from "../../../utils/navItems";

const PageUtilityLinks = () => {
  // extract submenues from nav links
  const footerNavItems = navItems.find(
    (item) => item.name === "Pages"
  )?.submenus;

  return (
    <>
      <div className="grid md:grid-cols-9 gap-8 p-4 md:p-8 lg:p-5 xl:p-10 border border-cf-coffee bg-cf-coffee text-white font-sober rounded-2xl xl:rounded-[50px] lg:col-span-4 xl:col-span-5">
        {/* start:: Page Links */}
        <div className="col-span-9">
          <h6 className="text-2xl font-semibold pb-4">Page links</h6>
          <div className="grid grid-cols-2">
            <ul className="space-y-2.5">
              {footerNavItems.slice(0, 8).map((item, id) => (
                <li key={id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${
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
            <ul className="space-y-2.5">
              {footerNavItems.slice(8, 16).map((item, id) => (
                <li key={id}>
                  <NavLink
                    className={({ isActive }) =>
                      `${
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
        {/* end:: Page Links */}
      </div>
    </>
  );
};

export default PageUtilityLinks;
