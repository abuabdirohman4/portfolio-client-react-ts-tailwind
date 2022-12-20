import Container from "../../components/Container";
import IconDiamond from "../../assets/icons/diamond.svg";

const About = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-10" id="about">
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

export default About;
