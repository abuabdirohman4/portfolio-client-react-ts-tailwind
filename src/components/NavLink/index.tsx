import React from "react";
import { Link } from "react-router-dom";

type Props = {
  href: string;
  children?: React.ReactNode;
};

const NavLink = ({ href, children }: Props) => {
  return (
    <li className="!ml-14">
      <Link
        className="align-center flex border-b border-gray-100 py-2 pl-3 pr-4 text-base text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-indigo-600 md:dark:hover:bg-transparent md:dark:hover:text-white"
        to={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
