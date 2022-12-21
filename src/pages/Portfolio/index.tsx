import Container from "../../components/Container";
import CardPortfolio from "../../components/Card/Portfolio";
import Porto1 from "../../assets/images/porto-1.png";
import Porto2 from "../../assets/images/porto-2.png";
import Porto3 from "../../assets/images/porto-3.png";
import { useEffect, useRef, useState } from "react";

const Portfolio = () => {
  const refCarouselPorto = useRef<null | HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const [cardWidth, setCardWidth] = useState<number>(0);
  // let carouselPorto: HTMLElement | null;
  let scrollPosition = 0;

  const next = () => {
    // carouselPorto = document.querySelector("#carousel-porto");
    // carouselPorto = refCarouselPorto.current;
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      console.log("true");
      scrollPosition += cardWidth;
      if (refCarouselPorto.current !== null) {
        refCarouselPorto.current.scrollLeft = 250;
        refCarouselPorto.current.scrollLeft = scrollPosition;
      }
    } else {
      console.log("false");
      scrollPosition = 0;
      if (refCarouselPorto.current !== null) {
        refCarouselPorto.current.scrollLeft = scrollPosition;
      }
    }
  };

  useEffect(() => {
    const carouselWidth = refCarouselPorto.current;
    const cardWidth = document.querySelector(
      "#carousel-porto .carousel-item"
    ) as HTMLElement | null;

    if (carouselWidth !== null) {
      setCarouselWidth(carouselWidth.scrollWidth);
    }
    if (cardWidth !== null) {
      setCardWidth(cardWidth.offsetWidth);
    }
  }, []);

  return (
    <Container>
      <h1 className="text-[22px] font-semibold">Portfolios</h1>
      <div className="flex">
        <button className="bg-gray-200 px-3 py-2 hover:bg-gray-300">
          Prev
        </button>
        <button
          className="ml-2 bg-gray-200 px-3 py-2 hover:bg-gray-300"
          onClick={next}
        >
          Next
        </button>
      </div>
      <div
        className="flex overflow-x-auto"
        id="carousel-porto"
        ref={refCarouselPorto}
      >
        <CardPortfolio
          image={Porto1}
          title={"Porto 1"}
          description={"Description"}
          className={"carousel-item"}
        />
        <CardPortfolio
          image={Porto2}
          title={"Porto 2"}
          description={"Description"}
          className={"carousel-item"}
        />
        <CardPortfolio
          image={Porto3}
          title={"Porto 3"}
          description={"Description"}
          className={"carousel-item"}
        />
        <CardPortfolio
          image={Porto2}
          title={"Porto 4"}
          description={"Description"}
          className={"carousel-item"}
        />
        <CardPortfolio
          image={Porto3}
          title={"Porto 5"}
          description={"Description"}
          className={"carousel-item"}
        />
        {/* <div
          className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4"
          ref={refCarouselInner}
        >
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <a href="">
              <div className="m-4 overflow-hidden rounded-xl">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src={Porto1}
                />
              </div>
            </a>

            <header className="mb-4 px-4 leading-tight">
              <h1 className="text-lg">
                <a
                  href=""
                  className="font-semibold text-black no-underline hover:underline"
                >
                  Title
                </a>
              </h1>
              <span className="block text-sm font-light text-gray-500 no-underline">
                Description
              </span>
            </header>
          </div>
        </div> */}
      </div>
    </Container>
  );
};

export default Portfolio;
