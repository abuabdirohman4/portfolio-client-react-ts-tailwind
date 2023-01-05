import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Article from "../pages/Article";
import PortfolioDetail from "../pages/Portfolio/detail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
        <Route path="portfolio">
          <Route path="" element={<Portfolio />} />
          <Route path="detail" element={<PortfolioDetail />} />
        </Route>
      {/* <Route path="portfolio" element={<Portfolio />} /> */}
      <Route path="article" element={<Article />} />
    </Routes>
  );
};

export default AppRoutes;
