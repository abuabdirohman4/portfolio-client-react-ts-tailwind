import Container from "../../components/Container";
import IconDiamond from "../../assets/icons/diamond.svg";

const About = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-10" id="about">
        <div>
          <h1 className="text-[22px] font-semibold">About Me</h1>
          <p className="my-8 mt-4 pr-2 text-lg font-light text-tertiary">
            I can spend hours writing code and am still willing to code more.
            I can build adaptive and high-quality layouts on your design or adapt the website to your corporate identity, I can also create any custom development, complex logic, or other tasks related to the frontend. <br /> <br />
            I have a perfect understanding of how liquid, JavaScript, HTML, and CSS work, and have a lot of experience working with all of them.<br />
          </p>
        </div>
        <div>
          <h1 className="text-[22px] font-semibold">Connect Me</h1>
          <p className="my-8 mt-4 mb-3 text-lg font-light text-tertiary">
            If you want to build a really high-quality website and need help doing so, contact me! <br /> <br />
            Do have a talk with me and I will enjoy talking back to you. <br /><br />
            Let's connect or you can reach me.
          </p>
          <div className="flex">
            <img
              src={IconDiamond}
              alt="Icon Diamond"
              className="rounded-full bg-secondary py-[3px] px-[2px] mr-3"
            />
            <img
              src={IconDiamond}
              alt="Icon Diamond"
              className="rounded-full bg-secondary py-[3px] px-[2px] mr-3"
            />
            <img
              src={IconDiamond}
              alt="Icon Diamond"
              className="rounded-full bg-secondary py-[3px] px-[2px] mr-3"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
