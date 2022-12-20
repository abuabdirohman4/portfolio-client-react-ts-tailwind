import Container from "../../components/Container";
import Hero from "../../assets/images/hero.svg";
import IconDiamond from "../../assets/icons/diamond.svg";

const Home = () => {
  return (
    <Container>
      {/* Home */}
      <div className="grid w-full grid-cols-2">
        <div className="my-auto pl-10">
          <p className="font-bold text-primary">Halo 👋, I’am</p>
          <p className="-my-2 text-[42px] font-bold text-secondary">
            Abu Abdirohman
          </p>
          <p className="text-xl font-bold text-secondary">Web Developer</p>
          <p className="my-8 text-xl font-light text-tertiary">
            Accelerate your work with our millions <br /> of ready-to-use design
            projects.
          </p>
          <button className="mt-2 mr-2 rounded-full border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-secondary hover:shadow md:py-2 md:px-10 md:text-sm">
            Contact Me
          </button>
        </div>
        <img src={Hero} alt="Abu Abdirohman" />
      </div>
      {/* About Me */}
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h1 className="text-[22px] font-semibold">About Me</h1>
          <p className="my-8 mt-4 pr-2 text-lg font-light text-tertiary">
            Sportly App UI Kit will help your Sport, Fitness, and Workout App
            products or services. <br /> Came with modern and sporty style, you
            can easily edit and customize all elements with <br /> components
            that can speed up your design process.
          </p>
        </div>
        <div>
          <h1 className="text-[22px] font-semibold">Connect Me</h1>
          <p className="my-8 mt-4 mb-3 text-lg font-light text-tertiary">
            Sportly App UI Kit will help your Sport, Fitness, and Workout App
            products or services.
          </p>
          <div className="flex">
            <img
              src={IconDiamond}
              alt="Icon Diamond"
              className="rounded-full bg-secondary py-[3px] px-[2px]"
            />
            <img
              src={IconDiamond}
              alt="Icon Diamond"
              className="rounded-full bg-secondary py-[3px] px-[2px]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Home;
