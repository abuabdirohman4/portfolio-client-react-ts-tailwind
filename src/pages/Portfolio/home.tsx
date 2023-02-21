import Container from "../../components/Container";
import CardPortfolio from "../../components/Card/Portfolio";
import Porto from "./porto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
      <h1 className="text-[22px] font-semibold">
        <Link to="portfolio">Portfolios</Link>
      </h1>
      <div className="relative">
        <button
          className={`${
            Porto.length === 1
              ? "hidden"
              : Porto.length < 4 && window.innerWidth >= 768
              ? "hidden"
              : ""
          } absolute bottom-1/2 left-0 h-10 w-10 rounded-full bg-white shadow-xl hover:bg-slate-100 md:h-14 md:w-14`}
          onClick={prev}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-secondary" />
        </button>
        <button
          className={`${
            Porto.length === 1
              ? "hidden"
              : Porto.length < 4 && window.innerWidth >= 768
              ? "hidden"
              : ""
          } absolute bottom-1/2 right-0 h-10 w-10 rounded-full bg-white shadow-xl hover:bg-slate-100 md:h-14 md:w-14`}
          onClick={next}
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-secondary" />
        </button>
        <div
          className="flex overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-hide"
          id="carousel-porto"
          ref={refCarouselPorto}
        >
          {Porto.map((data, key) => (
            <CardPortfolio
              key={key}
              desc={data.desc}
              image={data.image}
              title={data.title}
              slug={data.slug}
              className={"carousel-item"}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PortfolioHome;
