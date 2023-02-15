import Container from "../../components/Container";
import backend from "./backend";
import frontend from "./frontend";

const Skills = () => {
  return (
    <Container>
      <h1 className="text-[22px] font-semibold">Skills</h1>
      <div>
        <h2 className="text-left text-xl font-light text-tertiary">Frontend</h2>
        <div className="mt-4 grid grid-cols-3 gap-4 md:grid-cols-8">
          {frontend.map((data: any, id: number) => {
            return (
              <div
                className="flex flex-col justify-between rounded-2xl bg-[#EEF0F6] px-4 py-3 text-center md:w-32"
                key={id}
              >
                <img
                  src={data.icon}
                  alt={data.name}
                  className="m-auto"
                  width={80}
                  height={80}
                />
                <p className="text-dark mt-2 font-semibold">{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="text-left text-xl font-light text-tertiary mt-6">Backend</h2>
        <div className="mt-4 grid grid-cols-3 gap-4 md:grid-cols-8">
          {backend.map((data: any, id: number) => {
            return (
              <div
                className="flex flex-col justify-between rounded-2xl bg-[#EEF0F6] px-4 py-3 text-center md:w-32"
                key={id}
              >
                <img
                  src={data.icon}
                  alt={data.name}
                  className="m-auto"
                  width={80}
                  height={80}
                />
                <p className="text-dark mt-2 font-semibold">{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
