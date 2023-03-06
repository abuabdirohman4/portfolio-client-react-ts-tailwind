import Container from "../../components/Container";
import CardArticle from "../../components/Card/Article";
import Article1 from "../../assets/images/article/article-1.webp";
import Article2 from "../../assets/images/article/article-2.webp";
import Article3 from "../../assets/images/article/article-3.webp";
import Article4 from "../../assets/images/article/article-4.webp";
import Article5 from "../../assets/images/article/article-5.webp";
import Article6 from "../../assets/images/article/article-6.webp";
import Article7 from "../../assets/images/article/article-7.webp";
import Article8 from "../../assets/images/article/article-8.webp";

const ArticlePage = () => {
  return (
    <Container>
      <h1 className="text-[22px] font-semibold">Articles</h1>
      <div className="flex flex-col md:flex-row flex-wrap">
        <CardArticle
          image={Article1}
          title={"How To Install Laravel 9 on RHEL 7 or CentOS 7 [2022]"}
          link={
            "https://medium.com/@abuabdirohman/how-to-install-laravel-9-on-rhel-7-a7d8136ced65"
          }
          desc={""}
        />
        <CardArticle
          image={Article2}
          title={"Connect With MySQL On Other Server [RHEL/CentOS 7]"}
          link={
            "https://medium.com/@abuabdirohman/connect-with-mysql-on-other-server-feeb87421254"
          }
          desc={""}
        />
        <CardArticle
          image={Article3}
          title={"How to uninstall node Js that Installed via Pkg on macOS"}
          link={
            "https://medium.com/@abuabdirohman/how-to-uninstall-node-js-that-installed-via-pkg-on-macos-ffab7cd852bb"
          }
          desc={""}
        />
        <CardArticle
          image={Article4}
          title={"How to use Visual Studio Code as SQL Client Tools"}
          link={
            "https://medium.com/@abuabdirohman/how-to-use-visual-studio-code-as-sql-client-tools-220a389239aa"
          }
          desc={""}
        />
        <CardArticle
          image={Article5}
          title={"How to use Visual Studio Code as SQL Client Tools"}
          link={
            "https://medium.com/@abuabdirohman/how-to-use-visual-studio-code-as-sql-client-tools-220a389239aa"
          }
          desc={""}
        />
        <CardArticle
          image={Article6}
          title={"How to use Visual Studio Code as SQL Client Tools"}
          link={
            "https://medium.com/@abuabdirohman/how-to-use-visual-studio-code-as-sql-client-tools-220a389239aa"
          }
          desc={""}
        />
        <CardArticle
          image={Article7}
          title={"How to use Visual Studio Code as SQL Client Tools"}
          link={
            "https://medium.com/@abuabdirohman/how-to-use-visual-studio-code-as-sql-client-tools-220a389239aa"
          }
          desc={""}
        />
        <CardArticle
          image={Article8}
          title={"How to use Visual Studio Code as SQL Client Tools"}
          link={
            "https://medium.com/@abuabdirohman/how-to-use-visual-studio-code-as-sql-client-tools-220a389239aa"
          }
          desc={""}
        />
      </div>
    </Container>
  );
};

export default ArticlePage;
