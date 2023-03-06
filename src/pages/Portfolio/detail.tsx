// import gallery1 from "../../assets/images/gallery-1.svg";
// import gallery2 from "../../assets/images/gallery-2.svg";
// import gallery3 from "../../assets/images/gallery-3.svg";
// import gallery4 from "../../assets/images/gallery-4.svg";
import gallery1 from "../../assets/images/porto/porto-1/1.svg";
import gallery2 from "../../assets/images/porto/porto-1/2.svg";
import gallery3 from "../../assets/images/porto/porto-1/3.svg";
import gallery4 from "../../assets/images/porto/porto-1/4.svg";
import gallery5 from "../../assets/images/porto/porto-1/5.svg";
import iconCheck from "../../assets/icons/icon-check.png";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PortfolioDetail = () => {
  const [mainGallery, setMainGallery] = useState<any>(gallery1);
  const galleries = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const features = [
    "Pinia Management",
    "Documentation",
    "Icon set design",
    "Pre-built UI screens",
  ];

  const changeMainGallery = (gallery: any) => {
    setMainGallery(gallery);
  };

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
      "#carousel-detail-porto .carousel-item"
    ) as HTMLElement | null;

    if (carouselWidth !== null) {
      setCarouselWidth(carouselWidth.scrollWidth);
    }
    if (cardWidth !== null) {
      setCardWidth(cardWidth.offsetWidth);
    }
  }, []);

  return (
    <div className="container mx-auto mb-10 max-w-7xl p-2">
      <div className="flex flex-row flex-wrap py-4">
        <main role="main" className="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
          <h1 className="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl">
            Zullkit Design Store
          </h1>
          <p className="text-gray-500">Build your next coin startup</p>
          <section>
            <img src={mainGallery} className="mt-6 w-full rounded-xl" />
            <div className="relative">
              <button
                className="absolute bottom-1/2 left-0 h-10 w-10 rounded-full bg-white shadow-xl hover:bg-slate-100 md:h-14 md:w-14"
                onClick={prev}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-secondary"
                />
              </button>
              <button
                className="absolute bottom-1/2 right-0 h-10 w-10 rounded-full bg-white shadow-xl hover:bg-slate-100 md:h-14 md:w-14"
                onClick={next}
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-secondary"
                />
              </button>
            </div>
            <div
              className=" mt-4 flex gap-4 scroll-smooth whitespace-nowrap scrollbar-hide"
              id="carousel-detail-porto"
              ref={refCarouselPorto}
            >
              {galleries.map((gallery, key): any => (
                <div
                  className="block flex-shrink-0 md:flex-[0_0_calc(100%/4)]"
                  key={key}
                >
                  <div
                    className={`carousel-item cursor-pointer overflow-hidden rounded-2xl ${
                      mainGallery == gallery && "ring-2 ring-indigo-500"
                    }`}
                    onClick={() => changeMainGallery(gallery)}
                  >
                    <img src={gallery} className="w-full" />
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="" id="orders">
            <h1 className="mt-8 mb-3 text-lg font-semibold">About</h1>
            <div className="w-3/4 text-gray-500" v-html="item.description">
              Sportly App UI Kit will help your Sport, Fitness, and Workout App
              products or services. Came with modern and sporty style, you can
              easily edit and customize all elements with components that can
              speed up your design process.
              <br />
              <br />
              <ul>
                Suitable for :<li>- Sport App</li>
                <li>- Fitness & GYM App</li>
                <li>- Workout App</li>
                <li>- Trainer & Tracker App</li>
                <li>- And many more</li>
              </ul>
            </div>
          </section>
        </main>
        <aside className="w-full px-4 sm:w-1/3 md:w-1/3">
          <div className="sticky top-0 w-full pt-4 md:mt-24">
            <div className="rounded-2xl border p-6">
              <div className="mb-4" v-if="item.is_figma == 1">
                <div className="mb-2 flex">
                  <div>
                    <img
                      // src="@/assets/img/icon-figma.png"
                      src=""
                      alt=""
                      className="w-16"
                    />
                  </div>
                  <div className="mt-1 ml-4 block">
                    <h3 className="text-md font-semibold">Figma</h3>
                    <p className="text-md text-gray-400">Project Included</p>
                  </div>
                </div>
              </div>

              <div className="mb-4" v-if="item.is_sketch == 1">
                <div className="mb-2 flex">
                  <div>
                    <img
                      // src="@/assets/img/icon-sketch.png"
                      src=""
                      alt=""
                      className="w-16"
                    />
                  </div>
                  <div className="mt-1 ml-4 block">
                    <h3 className="text-md font-semibold">Sketch</h3>
                    <p className="text-md text-gray-400">Project Included</p>
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-md mt-5 mb-3 font-semibold">
                  Great Features
                </h1>
                <ul className="mb-6 text-gray-500">
                  {features.map((feature, key): any => (
                    <li className="mb-2" key={key}>
                      {feature}
                      <img src={iconCheck} className="float-right w-5" alt="" />
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="item.file"
                className="md:text-md inline-flex w-full items-center justify-center rounded-full border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 hover:shadow md:py-2 md:px-10"
              >
                Visit Site
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PortfolioDetail;
