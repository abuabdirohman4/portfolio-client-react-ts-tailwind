import Container from "../../components/Container";
import Hero from "../../assets/images/hero.svg";
import IconTwitter from "../../assets/icons/twitter.svg";
import IconGithub from "../../assets/icons/github.svg";
import IconLinkedln from "../../assets/icons/linkedln.svg";
import AboutButton from "../../components/Button/AboutButton";

const About = () => {
  return (
    <Container className="md:-mx-10">
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="w-12/12 relative order-first">
          <img
            src={Hero}
            alt="Abu Abdirohman"
            className="-pb-4 mb-4 border shadow-sm md:border-none md:shadow-none"
          />
        </div>
        <div className="my-16 pl-10 md:block">
          <p className="-my-2 text-[42px] font-bold text-secondary">
            Abu Abdirohman
          </p>
          <p className="text-md mt-3 mb-5 font-light text-tertiary">
            Full Stack Developer, Web Technology Enthusiast and a passionate
            learner.
          </p>
          <p className="font-base text-tertiary">Email Me</p>
          <button className="mt-1 mr-2 rounded-full border border-transparent bg-secondary px-0 py-3 text-base font-medium text-white hover:bg-tertiary hover:shadow hover:brightness-125 md:py-1 md:px-2 md:text-sm">
            <a href="mailto:abuabdirohman4@gmail.com">
              abuabdirohman4@gmail.com
            </a>
          </button>
          <div className="mt-10 mb-14">
            <AboutButton
              className="ml-2"
              color="bg-[#1DA1F3]"
              link="/portfolio"
            >
              Portfolio
            </AboutButton>
            <AboutButton color="bg-primary" link="/skills">
              Skills
            </AboutButton>
            <AboutButton color="bg-[#2A66BC]" link="/article">
              Article
            </AboutButton>
            <AboutButton color="bg-tertiary" link="/contact">
              Profiles
            </AboutButton>
          </div>
          <p className="mt-10">Follow me on</p>
          <div className="mt-2 flex">
            <a target="_blank" href="https://github.com/abuabdirohman4">
              <img
                src={IconLinkedln}
                alt="Icon Linkedln"
                className="mr-3 h-9 w-9 cursor-pointer rounded-full bg-[#2A66BC] hover:brightness-150"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/abuabdirohman/"
            >
              <img
                src={IconGithub}
                alt="Icon Github"
                className="mr-3 h-9 w-9 cursor-pointer rounded-full hover:bg-gray-300"
              />
            </a>
            <a target="_blank" href="https://twitter.com/abuabdirohman4">
              <img
                src={IconTwitter}
                alt="Icon Twitter"
                className="mr-3 h-9 w-9 cursor-pointer rounded-full bg-[#1DA1F3] px-2 hover:brightness-125"
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-5 h-0.5 bg-tertiary" />
      <p className="font-base my-8 mt-4 w-[100%] pr-2 text-center text-lg leading-9 text-tertiary md:text-left">
        Hi there! Thanks for visiting my portfolio. <br />
        I'm{" "}
        <a
          className="text-primary hover:brightness-50"
          href="https://www.linkedin.com/in/abuabdirohman/"
        >
          Abu Abdirohman
        </a>
        , a Full Stack Developer, technology enthusiast and a passionate
        learner. I am currently working at{" "}
        <a
          className="text-primary hover:brightness-50"
          href="https://ioh.co.id/"
        >
          Indosat Ooredoo Hutchison
        </a>
        , Jakarta, Indonesia. I have worked on a wide range of technologies and
        have worked on projects ranging from small to large scale. I am a
        self-motivated and self-driven individual who is always looking for new
        challenges and opportunities. I love participating in project team and
        engaging in communities.
      </p>
    </Container>
  );
};

export default About;
