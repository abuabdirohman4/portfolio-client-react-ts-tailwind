import Container from "../../components/Container";
import Javascript from "../../assets/icons/javascript.svg";

const Skills = () => {
  let i = 0;
  let skills: string[] = [];
  while (i < 20) {
    skills.push("skill");
    i++;
  }
  return (
    <Container>
      <div>
        <h1 className="text-[22px] font-semibold">Skills</h1>
        <div className="mt-4 flex flex-wrap justify-between gap-4">
          {skills.map((data, id) => {
            return (
              <div
                className="w-32 rounded-2xl bg-[#EEF0F6] px-4 py-3 text-center"
                key={id}
              >
                <img src={Javascript} alt="" className="mx-auto" />
                <p className="text-dark mt-2 font-semibold">Javascript</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
