import React, { useEffect } from "react";
import { HashRouter as Router, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Technology from "./Technology";
import Footer from "./components/Common/Footer/Footer";
import GetinTouchWithUs from "./components/contact/GetinTouchWithUs/GetinTouchWithUs";
import ContactForm from "./components/contact/Contact";
import Contact from './components/contact/Contact'
import AboutUs from "./about";
import Applications from './Application'
import TP from './components/TP/TP'
import Home from "./components/Home/Home";
import "./Style.css";
import "./Style_tech.css"
import "./Styles12.css";
import Appl from "./Application"
import Articles from "./components/Articles/Articles";
import Blogs from "./components/Blogs/Blogs";
import SingleBlogPage from "./components/Blogs/SingleBlogPage/SingleBlogPage";
import TurnKeySolutions from "./components/TurnKeySolutions/TurnKeySolutions";
import MedicalDevices from "./components/MedicalDevices/MedicalDevices";
import Service from "./components/Services/Services";
import Product from "./components/Product/Product";
import Appli1 from "./appli1";
import Appli2 from "./appli2";
import Appli3 from "./appli3";
import Appli4 from "./appli4";
import Appli5 from "./appli5";
import BFS from "./components/Products/BFS/BFS";
import FFS from "./components/Products/FFS/FFS";
import ISBM from "./components/Products/ISBM/ISBM";
import IV from "./components/Products/IV/IV";
import ArticlesList from './components/ArticlesList/ArticlesList'
import Article1 from "./components/ArticlesList/article1/Article1"
import Article2 from "./components/ArticlesList/article2/Article2"
import Article3 from "./components/ArticlesList/article3/Article3"
import Article4 from "./components/ArticlesList/article4/Article4"
import Article5 from "./components/ArticlesList/article5/article5"
import Article6 from "./components/ArticlesList/article6/article6"
import ManufacturingPage from "./components/Products/ManufacturingPage/ManufacturingPage";
import MainBlog from './components/Articles/Blog/MainBlog'
import Media from './components/Articles/Media/Media'
import NewProduct from "./components/NewProduct/NewProduct";

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-screen border-2 overflow-x-hidden font-['ClashDisplay']">
      <Header />

      <Routes>
        <Route path="/media" element={<Media />} />
        <Route path="/media/:id/:heading" element={<MainBlog />} />
        <Route path="/product/:id/:heading" element={<NewProduct />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/ManufacturingPage" element={<ManufacturingPage manufacturingPage={"BFS"} />} />
        {/* <Route path="/applications" element={<Applications />} /> */}
        <Route path="/tp" element={<TP />} />
        <Route path="/medicalDevices" element={<MedicalDevices />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/Blogs" element={<Media />} />
        <Route path="/Blogs/Blog1" element={<SingleBlogPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<Home />} /> */}
        <Route path="/technology" element={<Technology />} />
        <Route path="/turnKeySolutions" element={<TurnKeySolutions />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/service" element={<Service />} />
        {/* <Route path="/services" element={<Service />} /> */}
        <Route path="/product" element={<Product />} />
        <Route path="/pharmaceutical" element={<Appli1 />} />
        <Route path="/cosmic" element={<Appli2 />} />
        <Route path="/food" element={<Appli3 />} />
        <Route path="/chemical" element={<Appli4 />} />
        <Route path="/dairy" element={<Appli5 />} />
        <Route path="/BFS" element={<BFS />} />
        <Route path="/FFS" element={<FFS />} />
        <Route path="/ISBM" element={<ISBM />} />
        <Route path="/IV" element={<IV />} />
        {/* <Route path="/articlesList" element={<ArticlesList />} /> */}
        <Route path="/article1" element={<Article1 />} />
        <Route path="/article3" element={<Article3 />} />
        <Route path="/article4" element={<Article4 />} />
        <Route path="/article2" element={<Article2 />} />
        <Route path="/article5" element={<Article5 />} />
        <Route path="/article6" element={<Article6 />} />

      </Routes>

    </div>
  );
}
