import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Article from "../pages/Article";
import CardPortfolioDetail from "../components/Card/Portfolio/detail";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="portfolio">
        <Route path="" element={<Portfolio />} />
        <Route path="detail/:slugPorto" element={<CardPortfolioDetail />} />
      </Route>
      <Route path="article" element={<Article />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
