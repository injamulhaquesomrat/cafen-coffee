import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const DropdownMenu = ({ isDropdownOpen, setIsDropdownOpen, menus }) => {
  const menuList = menus || [];
  const [isOpenSubmenus, setIsOpenSubmenus] = useState(false);

  // handle submenu
  const handleSubmenu = () => setIsOpenSubmenus(!isOpenSubmenus);

  return (
    <div
      className={`absolute ${
        isDropdownOpen ? "top-[90px] md:top-[34px]" : "md:-top-24"
      } right-4 left-4 md:left-auto md:-right-4 bg-cf-light-white text-cf-coffee rounded-lg p-3 min-w-[90vw] md:min-w-[200px] z-50 border border-cf-coffee`}
    >
      {/* start:: menu list */}
      <ul className="rounded-lg space-y-1">
        {menuList.map(({ name, path, submenus }, index) => (
          <li key={index}>
            {name === "Pages" ? (
              <button
                className={`flex flex-col items-left justify-between gap-1 w-full leading-6 px-2.5 py-1 font-bold rounded-lg duration-150   hover:bg-cf-yellow border border-transparent hover:border-cf-coffee "
                  `}
              >
                <div
                  onClick={name === "Pages" && handleSubmenu}
                  className="flex items-center gap-1 justify-between w-full"
                >
                  {name}
                  <FaChevronDown className="text-sm" />
                </div>
              </button>
            ) : (
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
                <div
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-1 justify-between"
                >
                  {name}
                </div>
              </NavLink>
            )}

            {/* start::submenus */}
            {name === "Pages" && submenus && submenus.length > 0 && (
              <div
                className={`${
                  isOpenSubmenus ? "flex" : "hidden"
                } p-2  flex-col border border-cf-coffee rounded-lg`}
              >
                {submenus.map(({ name, path }, index) => (
                  <NavLink
                    onClick={() => setIsDropdownOpen(false)}
                    className={({ isActive }) =>
                      `rounded-md border leading-6 font-bold px-2.5 py-1  ${
                        isActive
                          ? "bg-cf-yellow text-cf-coffee border-cf-coffee"
                          : "hover:bg-cf-yellow hover:border-cf-coffee border-transparent"
                      }`
                    }
                    to={path || "#"}
                    key={index}
                  >
                    {name}
                  </NavLink>
                ))}
              </div>
            )}
            {/* end::submenus */}
          </li>
        ))}
      </ul>
      {/* end:: menu list */}
    </div>
  );
};

export default DropdownMenu;
