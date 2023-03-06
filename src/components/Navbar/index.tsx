import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/icons/logo-abu.svg";

const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const className =
    "align-center flex border-b border-gray-100 py-2 pl-3 pr-4 text-base font-normal text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-indigo-600 md:dark:hover:bg-transparent md:dark:hover:text-white";
  const clickOnMobile = () => {
    window.innerWidth < 768 && setMenuActive((prev) => !prev);
  };

  return (
    <nav className="rounded border-gray-200 bg-white px-2 py-2.5 sm:px-4 md:block">
      <div className="container mx-auto my-2 flex flex-wrap items-center justify-between">
        <Link className="flex items-center" to="/">
          <img
            src={Logo}
            alt="Abu Abdirohman Logo"
            className="ml-3 h-8 sm:ml-0 sm:h-8"
          />
        </Link>
        <button
          onClick={() => setMenuActive((prev) => !prev)}
          className={[
            "z-30 mr-7 flex h-7 w-7 translate-y-2 flex-col items-center gap-y-1 transition-all hover:gap-y-2 lg:ml-0 xl:hidden",
            isMenuActive ? "fixed right-3" : "relative",
          ].join(" ")}
        >
          <span
            className={[
              "h-1 w-7 bg-black transition-all",
              isMenuActive ? "absolute top-3 rotate-45" : "rotate-0",
            ].join(" ")}
          ></span>
          <span
            className={[
              "h-1 w-7 bg-black transition-all",
              isMenuActive ? "absolute top-3 rotate-45" : "rotate-0",
            ].join(" ")}
          ></span>
          <span
            className={[
              "h-1 w-7 bg-black transition-all",
              isMenuActive ? "absolute top-3 -rotate-45" : "rotate-0",
            ].join(" ")}
          ></span>
        </button>
        <div
          className={[
            isMenuActive
              ? "fixed inset-0 z-[12] flex w-full flex-col items-center justify-center gap-y-8 bg-white opacity-100 lg:relative lg:flex-row lg:justify-between"
              : "invisible w-full items-center justify-between opacity-0 md:order-1 md:flex md:w-auto lg:visible lg:opacity-100",
          ].join(" ")}
          id="mobile-menu-2"
        >
          <ul
            className={[
              "md:font-regular mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm",
              isMenuActive
                ? "flex flex-col items-center gap-y-8 lg:flex-row"
                : "hidden xl:flex",
            ].join(" ")}
          >
            <li className="!ml-14">
              <NavLink
                to="/"
                onClick={clickOnMobile}
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
                onClick={clickOnMobile}
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
                onClick={clickOnMobile}
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
                onClick={clickOnMobile}
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
                onClick={clickOnMobile}
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
                onClick={clickOnMobile}
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
