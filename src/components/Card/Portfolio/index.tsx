import { Link } from "react-router-dom";

type Props = {
  image: string;
  title: string;
  slug: string;
  desc: string;
  className: string;
};

const CardPortfolio = ({ desc, image, title, slug, className }: Props) => {
  return (
    <div
      className={`my-1 mr-0 block w-full flex-shrink-0 px-1 md:w-1/2 md:flex-[0_0_calc(100%/3)] lg:my-4 lg:w-1/3 lg:px-4 ${className}`}
    >
      <div className="overflow-hidden rounded-xl border border-gray-200">
        <Link to={`/portfolio/detail/${slug}`}>
          <div className="m-4 overflow-hidden rounded-xl">
            <img alt="Placeholder" className="block h-48 w-full" src={image} />
          </div>
        </Link>

        <header className="mb-4 px-4 leading-tight">
          <h1 className="text-lg line-clamp-1">
            <Link
              to={`/portfolio/detail/${slug}`}
              className="font-semibold text-black no-underline hover:underline"
            >
              {title}
            </Link>
          </h1>
          <span className="block h-auto text-sm font-light text-gray-500 no-underline line-clamp-1 xl:h-10 2xl:h-auto">
            {desc}
          </span>
        </header>
      </div>
    </div>
  );
};

export default CardPortfolio;
