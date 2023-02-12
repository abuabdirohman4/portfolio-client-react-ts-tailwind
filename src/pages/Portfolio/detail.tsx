import React from "react";
import gallery1 from "../../assets/images/gallery-1.svg";
import gallery2 from "../../assets/images/gallery-2.svg";
import gallery3 from "../../assets/images/gallery-3.svg";
import gallery4 from "../../assets/images/gallery-4.svg";
import iconCheck from "../../assets/icons/icon-check.png";
import { useState } from "react";

const PortfolioDetail = () => {
  const [mainGallery, setMainGallery] = useState<any>(gallery1);
  const active = true;
  const galleries = [gallery2, gallery1, gallery3, gallery4];
  const features = [
    "Pinia Management",
    "Documentation",
    "Icon set design",
    "Pre-built UI screens",
  ];

  const changeMainGallery = (gallery: any) => {
    setMainGallery(gallery);
  };

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
            <div className="mt-4 grid grid-cols-4 gap-4">
              {galleries.map((gallery, key): any => (
                <div
                  key={key}
                  className={`cursor-pointer overflow-hidden rounded-2xl ${
                    mainGallery == gallery && "ring-2 ring-indigo-500"
                  }`}
                  onClick={() => changeMainGallery(gallery)}
                >
                  <img src={gallery} className="w-full" />
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
                      src="@/assets/img/icon-figma.png"
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
                      src="@/assets/img/icon-sketch.png"
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
                    <li className="mb-2">
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
