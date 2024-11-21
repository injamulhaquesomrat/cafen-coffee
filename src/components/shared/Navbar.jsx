import { FaBars, FaChevronDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { useState } from "react";
import { navItems } from "../../utils/navItems";
import DropdownMenu from "./Navbar/DropdownMenu";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  console.log(isDropdownOpen);

  const handleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <div className="bg-cf-light-yellow">
      <Container>
        <div className="py-6 md:py-8 flex justify-between items-center">
          {/* logo container  */}
          <Link to="/">
            <img src="/logo.svg" alt="logo" />
          </Link>

          {/* menus */}
          <ul className="hidden md:flex gap-5 font-nunito text-cf-coffee font-medium md:text-lg relative">
            {/* {navItems.map(({ name, path }, index) => (
              <li key={index} onClick={handleDropdown}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 leading-6 px-2.5 py-1 font-bold rounded-lg duration-150 border ${
                      isActive
                        ? "bg-cf-yellow text-cf-coffee border-cf-coffee"
                        : "hover:bg-cf-yellow hover:border-cf-coffee border-transparent"
                    }`
                  }
                >
                  {name}
                  {name === "Pages" && <FaChevronDown className="text-sm" />}
                </NavLink>
              </li>
            ))} */}
            <li onClick={() => setIsDropdownOpen(false)}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-1 leading-6 px-2.5 py-1 font-bold rounded-lg duration-150 border ${
                    isActive
                      ? "bg-cf-yellow text-cf-coffee border-cf-coffee"
                      : "hover:bg-cf-yellow hover:border-cf-coffee border-transparent"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li onClick={() => setIsDropdownOpen(false)}>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `flex items-center gap-1 leading-6 px-2.5 py-1 font-bold rounded-lg duration-150 border ${
                    isActive
                      ? "bg-cf-yellow text-cf-coffee border-cf-coffee"
                      : "hover:bg-cf-yellow hover:border-cf-coffee border-transparent"
                  }`
                }
              >
                About
              </NavLink>
            </li>

            <li
              onClick={handleDropdown}
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
            >
              <NavLink
                to="/pages"
                className={({ isActive }) =>
                  `flex items-center gap-1 leading-6 px-2.5 py-1 font-bold rounded-lg duration-150 border ${
                    isActive
                      ? "bg-cf-yellow text-cf-coffee border-cf-coffee"
                      : "hover:bg-cf-yellow hover:border-cf-coffee border-transparent"
                  }`
                }
              >
                Pages
                <FaChevronDown className="text-sm" />
                {isDropdownOpen && (
                  <DropdownMenu isDropdownOpen={isDropdownOpen} />
                )}
              </NavLink>
            </li>
            <li onClick={() => setIsDropdownOpen(false)}>
              <NavLink
                to="shop"
                className={({ isActive }) =>
                  `flex items-center gap-1 leading-6 px-2.5 py-1 font-bold rounded-lg duration-150 border ${
                    isActive
                      ? "bg-cf-yellow text-cf-coffee border-cf-coffee"
                      : "hover:bg-cf-yellow hover:border-cf-coffee border-transparent"
                  }`
                }
              >
                Shop
              </NavLink>
            </li>
          </ul>

          {/* cart container  */}
          <div className="flex gap-4 items-center">
            <h6 className="font-nunito font-bold text-cf-coffee md:text-lg">
              Cart (0)
            </h6>
            <div
              onClick={handleDropdown}
              className={`relative p-2.5 md:hidden ${
                isDropdownOpen
                  ? "border-cf-yellow border bg-cf-coffee"
                  : "bg-cf-yellow border border-cf-coffee"
              }  rounded-md cursor-pointer`}
            >
              <FaBars
                className={`text-xl ${
                  isDropdownOpen ? "text-cf-yellow" : "text-cf-coffee"
                }`}
              />
              {isDropdownOpen && (
                <DropdownMenu
                  isDropdownOpen={isDropdownOpen}
                  handleDropdown={handleDropdown}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
