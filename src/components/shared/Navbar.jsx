import { FaBars, FaChevronDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { useState } from "react";
import DropdownMenu from "./Navbar/DropdownMenu";
import { navItems } from "../../utils/navItems";
import CartContainer from "./Navbar/CartContainer";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // handle dropdown menu
  const handleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleCartModal = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="bg-cf-light-yellow">
      {/* start:: container */}
      <Container>
        <div className="py-6 md:py-8 flex justify-between items-center">
          {/* start:logo container  */}
          <Link to="/">
            <img src="/logo.svg" alt="logo" />
          </Link>
          {/* end:logo container */}

          {/* start::menus */}
          <ul className="hidden md:flex gap-5 font-nunito text-cf-coffee font-medium md:text-lg relative">
            {/* start::Homepage link */}
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
            {/* end::Homepage link */}

            {/* start::About page link */}
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
            {/* end::About page link */}

            {/* start::All pages Dropdown triggger button */}
            <li
              onClick={handleDropdown}
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
            >
              <button
                className={`flex items-center gap-1 leading-6 px-2.5 py-1 font-bold rounded-lg duration-150 border border-transparent hover:border-cf-coffee hover:bg-cf-yellow`}
              >
                Pages
                <FaChevronDown className="text-sm" />
                {/* Dropdown submenus */}
                {isDropdownOpen && (
                  <DropdownMenu
                    menus={navItems[2].submenus}
                    isDropdownOpen={isDropdownOpen}
                  />
                )}
              </button>
            </li>
            {/* end::All pages Dropdown triggger button */}

            {/* start::Shop page link */}
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
            {/* end::Shop page link */}
          </ul>
          {/* end::menus */}

          {/* start::cart container  */}
          <div className="flex gap-4 items-center">
            {/* start::cart modal open button */}
            <button
              onClick={handleCartModal}
              className="font-nunito font-bold text-cf-coffee md:text-lg"
            >
              Cart (0)
            </button>
            {/* end::cart modal open button */}

            <div>
              {/* start::sidebar trigger button */}
              <button
                onClick={handleDropdown}
                className={`relative p-2.5 md:hidden ${
                  isDropdownOpen
                    ? "border-cf-yellow border bg-cf-coffee"
                    : "bg-cf-yellow border border-cf-coffee"
                }  rounded-md`}
              >
                <FaBars
                  className={`text-xl ${
                    isDropdownOpen ? "text-cf-yellow" : "text-cf-coffee"
                  }`}
                />
              </button>
              {/* end::sidebar trigger button */}

              {/* start::mobile dropdown container */}
              <div className="md:hidden">
                {isDropdownOpen && (
                  <DropdownMenu
                    isDropdownOpen={isDropdownOpen}
                    setIsDropdownOpen={setIsDropdownOpen}
                    menus={navItems}
                  />
                )}
              </div>
              {/* end::mobile dropdown container */}
            </div>
          </div>
        </div>
      </Container>

      {/* start::cart modal */}
      <CartContainer
        isCartOpen={isCartOpen}
        handleCartModal={handleCartModal}
      />
      {/* end::cart modal */}
    </div>
  );
};

export default Navbar;
