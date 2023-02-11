import Container from "../../components/Container";
import Hero from "../../assets/images/hero.svg";
import Article from "../Article";
import Portfolio from "../Portfolio/home";
import Skills from "../Skills";
import About from "../About";
import Contact from "../Contact";

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
            <p className="text-xl font-bold text-secondary">Web Developer</p>
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
              Web Developer Who Cureently Focus On ReactJs & Typescript
            </p>
            <p className="my-4 text-sm font-light text-tertiary">
              Developer at Indosat Ooredoo Hutchison <br /> ReactJs & Frontend
              Web Technology Enthusiast
            </p>
            <button className="mt-2 mr-2 rounded-full border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:shadow hover:brightness-125 md:py-2 md:px-10 md:text-sm">
              <a href="#contact">Contact Me</a>
            </button>
          </div>
          <img
            src={Hero}
            alt="Abu Abdirohman"
            className="order-first mb-4 border md:border-none md:shadow-none shadow-sm md:order-2"
          />
        </div>
      </Container>
      <div className="mb-16 hidden md:block">
        <About />
      </div>
      <div className="my-10 md:my-0">
        <Skills />
      </div>
      <div className="my-16">
        <Portfolio />
      </div>
      <div>
        <Article />
      </div>
      <div className="my-16">
        <Contact />
      </div>
    </>
  );
};
export default Home;
