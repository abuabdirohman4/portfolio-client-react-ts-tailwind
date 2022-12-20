import Container from "../../components/Container";
import Hero from "../../assets/images/hero.svg";

const Home = () => {
  return (
    <Container>
      <div className="w-full grid grid-cols-2">
        <div className="my-auto pl-10">
          <h5 className="font-bold text-primary">Halo 👋, I’am</h5>
          <p className="-my-2 text-[42px] font-bold text-secondary">
            {" "}
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
    </Container>
  );
};
export default Home;
