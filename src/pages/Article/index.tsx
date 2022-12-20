import Container from "../../components/Container";
import CardArticle from "../../components/Card/Article";
import Article1 from "../../assets/images/article-1.png";
import Article2 from "../../assets/images/article-2.png";
import Article3 from "../../assets/images/article-3.png";
import Article4 from "../../assets/images/article-4.png";

const Article = () => {
  return (
    <Container>
    <h1 className="text-[22px] font-semibold">Articles</h1>
      <div className="flex">
        <CardArticle image={Article1} title={"Article 1"} count={1} />
        <CardArticle image={Article2} title={"Article 2"} count={1} />
        <CardArticle image={Article3} title={"Article 3"} count={1} />
        <CardArticle image={Article4} title={"Article 4"} count={1} />
      </div>
    </Container>
  );
};

export default Article;
