type Props = {
  image?: string;
  title: string;
  desc: string;
  link: string;
};

const CardArticle = ({
  image,
  title = "Title",
  desc = "",
  link = "",
}: Props) => {
  return (
    <div className="my-1 w-full px-1 transition-all hover:scale-105 md:w-1/2 lg:my-4 lg:w-1/4 lg:px-4">
      <div className="xl:h-64 overflow-hidden rounded-xl border border-gray-200">
        <a href={link} target="_blank">
          <div className="m-4 overflow-hidden rounded-xl">
            <img alt="title" className="block h-auto xl:h-32 w-full" src={image} />
          </div>
        </a>

        <header className="mb-4 px-4 leading-tight">
          <h1 className="text-lg">
            <a
              className="font-semibold text-black no-underline line-clamp-3 hover:underline"
              href={link}
              target="_blank"
            >
              {title}
            </a>
          </h1>
          <span className="block text-sm font-light text-gray-500 no-underline">
            {desc}
          </span>
        </header>
      </div>
    </div>
  );
};

export default CardArticle;
