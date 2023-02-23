import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/icons/logo-abu.svg";

const Navbar = () => {
  const className =
    "align-center flex border-b border-gray-100 py-2 pl-3 pr-4 text-base font-normal text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-indigo-600 md:dark:hover:bg-transparent md:dark:hover:text-white";
  return (
    <nav className="hidden rounded border-gray-200 bg-white px-2 py-2.5 sm:px-4 md:block">
      <div className="container mx-auto my-2 flex flex-wrap items-center justify-between">
        <Link className="flex items-center" to="/">
          <img
            src={Logo}
            alt="Abu Abdirohman Logo"
            className="ml-3 h-8 sm:ml-0 sm:h-8"
          />
        </Link>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="mobile-menu-2"
        >
          <ul className="md:font-regular mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm">
            <li className="!ml-14">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `!font-semibold text-primary ${className}`
                    : className
                }
              >
                Home
              </NavLink>
            </li>
            <li className="!ml-14">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `!font-semibold text-primary ${className}`
                    : className
                }
              >
                About
              </NavLink>
            </li>
            <li className="!ml-14">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? `!font-semibold text-primary ${className}`
                    : className
                }
              >
                Skills
              </NavLink>
            </li>
            <li className="!ml-14">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? `!font-semibold text-primary ${className}`
                    : className
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className="!ml-14">
              <NavLink
                to="/article"
                className={({ isActive }) =>
                  isActive
                    ? `!font-semibold text-primary ${className}`
                    : className
                }
              >
                Article
              </NavLink>
            </li>
            <li className="!ml-14">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? `!font-semibold text-primary ${className}`
                    : className
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
