import Container from "../../components/Container";
import Hero from "../../assets/images/hero.svg";
import Article from "../Article";
import Portfolio from "../Portfolio/home";
import Skills from "../Skills";
import About from "../About";
import Contact from "../Contact";
import IconGithub from "../../assets/icons/github.svg";
import IconLinkedln from "../../assets/icons/linkedln.svg";

const Home = () => {
  return (
    <>
      <Container>
        {/* Home */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2">
          <div className="my-auto hidden pl-10 md:block">
            <p className="font-bold text-primary">Halo 👋, I’am</p>
            <p className="-my-2 text-[42px] font-bold text-secondary">
              Abu Abdirohman
            </p>
            <p className="text-xl font-bold text-secondary">
              Web Developer Who Currently Focus On ReactJs & Typescript
            </p>
            <p className="my-8 text-xl font-light text-tertiary">
              Developer at Indosat Ooredoo Hutchison <br /> ReactJs & Frontend
              Web Technology Enthusiast
            </p>
            <button className="mt-2 mr-2 rounded-full border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:shadow hover:brightness-125 md:py-2 md:px-10 md:text-sm">
              <a href="#contact">Contact Me</a>
            </button>
          </div>
          {/* Mobile */}
          <div className="my-auto md:hidden">
            <p className="text-xl font-bold text-primary">
              Halo 👋, I’am Abu Abdirohman
            </p>
            <p className="text-lg font-bold text-secondary">
              Web Developer Who Currently Focus On ReactJs & Typescript
            </p>
            <p className="my-4 text-sm font-light text-tertiary">
              Developer at Indosat Ooredoo Hutchison <br /> ReactJs & Frontend
              Web Technology Enthusiast
            </p>
            <button className="mt-2 mr-2 w-full rounded-full border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:shadow hover:brightness-125 md:py-2 md:px-10 md:text-sm">
              <a href="#contact">Contact Me</a>
            </button>
          </div>
          <div className="relative order-first md:order-2 w-11/12">
            <div className="w-46 absolute top-16 left-5 -z-10 flex items-center justify-center rounded-2xl border px-3 py-3 text-xs shadow-2xl md:left-14 md:h-20 md:py-0 md:text-sm">
              <div>
                <img
                  src={IconLinkedln}
                  alt="Icon Linkedln"
                  className="mr-3 h-9 w-9 rounded-full bg-[#2A66BC]"
                />
              </div>
              <div>
                <p className="text-[#151A26]">Linkedln</p>
                <p className="text-[#A3A5AA]">4 Work Experience</p>
              </div>
            </div>
            <img
              src={Hero}
              alt="Abu Abdirohman"
              className="-pb-4 mb-4 border shadow-sm md:border-none md:shadow-none"
            />
            <div className="absolute right-2.5 bottom-12 -z-10 flex w-44 items-center justify-center rounded-2xl border py-3 text-xs shadow-2xl md:right-9 md:h-20 md:text-sm">
              <div>
                <img
                  src={IconGithub}
                  alt="Icon Github"
                  className="mr-3 h-9 w-9 rounded-full"
                />
              </div>
              <div>
                <p className="text-[#151A26]">Github</p>
                <p className="text-[#A3A5AA]">90 Repositories</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <div className="mb-16 hidden md:block">
        <About />
      </div> */}
      <div className="my-16">
        <Portfolio />
      </div>
      <div>
      <div className="mb-20">
        <Skills />
      </div>
        <Article />
      </div>
      <div className="my-16">
        <Contact />
      </div>
    </>
  );
};
export default Home;
