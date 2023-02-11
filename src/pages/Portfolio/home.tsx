import Container from "../../components/Container";
import CardPortfolio from "../../components/Card/Portfolio";
import Porto1 from "../../assets/images/porto-1.png";
import Porto2 from "../../assets/images/porto-2.png";
import Porto3 from "../../assets/images/porto-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PortfolioHome = () => {
  const refCarouselPorto = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const [cardWidth, setCardWidth] = useState<number>(0);
  let scrollPosition = 0;
  let windowSize = null;

  const next = () => {
    window.innerWidth > 768 ? (windowSize = 3) : (windowSize = 1);
    if (scrollPosition < carouselWidth - cardWidth * windowSize) {
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
    window.innerWidth > 768 ? (windowSize = 2) : (windowSize = 1);
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      if (refCarouselPorto.current !== null) {
        refCarouselPorto.current.scrollLeft = scrollPosition;
      }
    } else {
      scrollPosition =
        cardWidth * (Math.floor(carouselWidth / cardWidth) - windowSize);
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
      setCarouselWidth(carouselWidth.scrollWidth - 2);
    }
    if (cardWidth !== null) {
      setCardWidth(cardWidth.offsetWidth);
    }
  }, []);

  return (
    <Container>
      <h1 className="text-[22px] font-semibold">Portfolios</h1>
      <div className="relative">
        <button
          className="absolute bottom-1/2 left-0 h-10 w-10 rounded-full bg-white shadow-xl hover:bg-slate-100 md:h-14 md:w-14"
          onClick={prev}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-secondary" />
        </button>
        <button
          className="absolute bottom-1/2 right-0 h-10 w-10 rounded-full bg-white shadow-xl hover:bg-slate-100 md:h-14 md:w-14"
          onClick={next}
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-secondary" />
        </button>
        <div
          className="flex overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-hide"
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
      </div>
    </Container>
  );
};

export default PortfolioHome;
