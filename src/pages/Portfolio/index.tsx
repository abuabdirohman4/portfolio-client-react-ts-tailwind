import Container from "../../components/Container";
import CardPortfolio from "../../components/Card/Portfolio";
import Porto1 from "../../assets/images/porto-1.png";
import Porto2 from "../../assets/images/porto-2.png";
import Porto3 from "../../assets/images/porto-3.png";

const Portfolio = () => {
  return (
    <Container>
      <h1 className="text-[22px] font-semibold">Portfolios</h1>
      <div className="relative">
        <div
          className="flex flex-wrap"
          id="carousel-porto"
        >
          <CardPortfolio
            image={Porto1}
            title={"Porto 1"}
            description={"Description"}
            className={"carousel-item"}
          />
          <CardPortfolio
            image={Porto2}
            title={"Porto 2"}
            description={"Description"}
            className={"carousel-item"}
          />
          <CardPortfolio
            image={Porto3}
            title={"Porto 3"}
            description={"Description"}
            className={"carousel-item"}
          />
          <CardPortfolio
            image={Porto2}
            title={"Porto 4"}
            description={"Description"}
            className={"carousel-item"}
          />
          <CardPortfolio
            image={Porto3}
            title={"Porto 5"}
            description={"Description"}
            className={"carousel-item"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;