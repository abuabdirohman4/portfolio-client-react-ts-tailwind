const PortfolioDetail = () => {
  return (
    <div className="container mx-auto my-10 max-w-7xl p-2">
      <div className="flex flex-row flex-wrap py-4">
        <main role="main" className="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
          <h1 className="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl">
            item.name
          </h1>
          <p className="text-gray-500">item.subtitle</p>
          {/* <Gallery
            :defaultImage="item.thumbnails"
            :galleries="item.galleries"
          /> */}
          <section id="gallery">
            <img src="thumbnail" alt="" className="mt-6 w-full rounded-2xl" />
            <div className="mt-4 grid grid-cols-4 gap-4">
              <div
                //   @click="changeImage(gallery.url)"
                className="cursor-pointer overflow-hidden rounded-2xl"
                //   :className="{ 'ring-2 ring-indigo-500': thumbnail == gallery.url }"
              >
                halo
                <img src="gallery.url" className="w-full" alt="" />
              </div>
            </div>
          </section>
          <section className="" id="orders">
            <h1 className="mt-8 mb-3 text-lg font-semibold">About</h1>
            <div className="text-gray-500" v-html="item.description"></div>
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
                <ul className="mb-6 text-gray-500" v-if="item">
                  <li className="mb-2" v-for="feature in features">
                    feature
                    <img
                      src="@/assets/img/icon-check.png"
                      className="float-right w-5"
                      alt=""
                    />
                  </li>
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
