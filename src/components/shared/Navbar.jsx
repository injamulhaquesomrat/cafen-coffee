import { FaBars, FaChevronDown } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "./Container";
import { useState } from "react";
import DropdownMenu from "./Navbar/DropdownMenu";
import { navItems } from "../../utils/navItems";
import CartModal from "./Navbar/Cart/CartModal";
import { useParams } from "react-router-dom";
import { useCart } from "../../provider/CartProvider";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { eventId, blogId } = useParams();

  const { cartItems } = useCart();

  const currentPath = useLocation().pathname;
  const colouredNavPages = [
    "/",
    "/home-2",
    eventId ? `/event/${eventId}` : null,
    blogId ? `/blog/${blogId}` : null,
  ];

  // handle dropdown menu
  const handleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const closeDropDown = () => {
    setIsDropdownOpen(false);
  };

  const handleCartModal = () => setIsCartOpen(!isCartOpen);

  return (
    <div
      className={`${
        colouredNavPages.includes(currentPath)
          ? "bg-secondary-foreground"
          : "bg-foreground"
      }`}
    >
      {/* start:: container */}
      <Container>
        <div className="py-4 lg:py-[30px] flex justify-between items-center">
          {/* start:logo container  */}
          <Link to="/">
            <img src="/logo.svg" alt="logo" />
          </Link>
          {/* end:logo container */}

          {/* start::menus */}
          <ul className="hidden lg:flex gap-5 text-primary md:text-lg relative">
            {/* start::Homepage link */}
            <li onClick={() => closeDropDown()}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-1 leading-6 px-2.5 py-1 font-medium rounded-lg duration-300 border ${
                    isActive
                      ? "bg-secondary text-primary border-primary"
                      : "hover:bg-secondary hover:border-primary border-transparent"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            {/* end::Homepage link */}

            {/* start::About page link */}
            <li onClick={() => closeDropDown()}>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `flex items-center gap-1 leading-6 px-2.5 py-1 font-medium rounded-lg duration-300 border ${
                    isActive
                      ? "bg-secondary text-primary border-primary"
                      : "hover:bg-secondary hover:border-primary border-transparent"
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
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-2 leading-6 px-2.5 py-1 font-medium rounded-lg duration-300 border border-transparent hover:border-primary hover:bg-secondary`}
              >
                Pages
                <FaChevronDown className={`text-sm mt-[3px] transition-all duration-300 ease-in-out ${isDropdownOpen && "rotate-180"}`}/>
                {/* Dropdown submenus */}
                {isDropdownOpen && (
                  <DropdownMenu
                    menus={navItems[2].submenus}
                    isDropdownOpen={isDropdownOpen}
                    setIsDropdownOpen={setIsDropdownOpen}
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
                  `flex items-center gap-1 leading-6 px-2.5 py-1 font-medium rounded-lg duration-300 border ${
                    isActive
                      ? "bg-secondary text-primary border-primary"
                      : "hover:bg-secondary hover:border-primary border-transparent"
                  }`
                }
              >
                Shop
              </NavLink>
            </li>
            {/* end::Shop page link */}
          </ul>
          {/* end::menus */}

          <div className="flex gap-4 items-center">
            {/* start::cart modal trigger button */}
            <button
              onClick={handleCartModal}
              className="text-primary md:text-lg"
            >
              Cart ({cartItems.length})
            </button>
            {/* end::cart modal trigger button */}

            <div>
              {/* start::sidebar trigger button */}
              <button
                onClick={handleDropdown}
                className={`relative p-2.5 lg:hidden ${
                  isDropdownOpen
                    ? "border-secondary border bg-primary"
                    : "bg-secondary border border-primary"
                }  rounded-md`}
              >
                <FaBars
                  className={`text-xl ${
                    isDropdownOpen ? "text-secondary" : "text-primary"
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
      <CartModal isCartOpen={isCartOpen} handleCartModal={handleCartModal} />
      {/* end::cart modal */}
    </div>
  );
};

export default Navbar;
