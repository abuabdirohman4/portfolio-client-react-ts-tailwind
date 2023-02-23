import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  className?: string;
  color: string;
  link: string;
};

const AboutButton = ({ className, children, color, link }: Props) => {
  return (
    <Link to={link}>
      <button
        className={`${className} ${color} hover:brightness-125 mt-2 mr-10 rounded-xl border border-transparent px-8 py-3 text-base font-medium text-white hover:scale-105 hover:shadow hover:brightness-125 md:py-3 md:px-5 md:text-sm`}
      >
        {children}
      </button>
    </Link>
  );
};

export default AboutButton;
