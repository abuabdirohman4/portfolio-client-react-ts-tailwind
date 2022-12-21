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
  let scrollPosition = 0;

  const next = () => {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      scrollPosition += cardWidth;
      if (refCarouselPorto.current !== null) {
        refCarouselPorto.current.scrollLeft = scrollPosition;
      }
    } else {
      scrollPosition = 0;
      if (refCarouselPorto.current !== null) {
        refCarouselPorto.current.scrollLeft = scrollPosition;
      }
    }
  };

  const prev = () => {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      if (refCarouselPorto.current !== null) {
        refCarouselPorto.current.scrollLeft = scrollPosition;
      }
    } else {
      scrollPosition = cardWidth * (Math.floor(carouselWidth / cardWidth) - 2);
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
        <button
          className="bg-gray-200 px-3 py-2 hover:bg-gray-300"
          onClick={prev}
        >
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
      </div>
    </Container>
  );
};

export default Portfolio;
