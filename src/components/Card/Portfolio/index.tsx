import { Link } from "react-router-dom";

type Props = {
  image: string;
  title: string;
  description: string;
  className: string;
};

const CardPortfolio = ({ image, title, description, className }: Props) => {
  return (
    <div
      className={`my-1 mr-0 block w-full flex-[0_0_calc(100%/3)] px-1 md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4 ${className}`}
    >
      <div className="overflow-hidden rounded-xl border border-gray-200">
        <Link to="/portfolio/detail">
          <div className="m-4 overflow-hidden rounded-xl">
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src={image}
            />
          </div>
        </Link>

        <header className="mb-4 px-4 leading-tight">
          <h1 className="text-lg">
            <a
              href=""
              className="font-semibold text-black no-underline hover:underline"
            >
              {title}
            </a>
          </h1>
          <span className="block text-sm font-light text-gray-500 no-underline">
            {description}
          </span>
        </header>
      </div>
    </div>
  );
};

export default CardPortfolio;
