import Container from "../../components/Container";
import CardPortfolio from "../../components/Card/Portfolio";
import Porto from "./porto";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <Container>
      <h1 className="text-[22px] font-semibold">Portfolios</h1>
      <Link className="md:hidden" to="/">
        Back to home
      </Link>
      <div className="relative mt-4 md:mt-0">
        <div className="flex flex-wrap" id="carousel-porto">
          {Porto.map((data, key) => (
            <CardPortfolio
              key={key}
              desc={data.desc}
              image={data.image}
              title={data.title}
              slug={data.slug}
              className={"carousel-item"}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
