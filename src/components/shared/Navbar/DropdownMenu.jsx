import { NavLink } from "react-router-dom";
import { navItems } from "../../../utils/navItems";
import { FaChevronDown } from "react-icons/fa";

const DropdownMenu = ({ isDropdownOpen }) => {
  return (
    <div
      className={`absolute ${
        isDropdownOpen ? "top-14 md:top-[34px]" : "md:-top-24"
      } right-0 md:right-8 bg-cf-light-white text-cf-coffee rounded-lg p-3 min-w-[90vw] md:min-w-[200px] border border-cf-coffee`}
    >
      <ul className="rounded-lg space-y-1">
        {navItems.map(({ name, path, submenus }, index) => (
          <li key={index}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex flex-col items-left justify-between gap-1 leading-6 px-2.5 py-1 font-bold rounded-lg duration-150 border ${
                  isActive
                    ? "bg-cf-yellow text-cf-coffee border-cf-coffee"
                    : "hover:bg-cf-yellow hover:border-cf-coffee border-transparent"
                }`
              }
            >
              <div className="flex items-center gap-1 justify-between">
                {name}
                {name === "Pages" && <FaChevronDown className="text-sm" />}
              </div>
              {name === "Pages" && navItems[2].submenus.length > 0 && (
                <div className="hidden">
                  {navItems[2].submenus.map(({ name, path }, index) => (
                    <p key={index}>{name}</p>
                  ))}
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
