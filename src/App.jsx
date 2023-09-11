import { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Common/Header/Header.jsx";
import Technology from "./Technology.jsx";
import Contact from './components/contact/Contact.jsx'
import AboutUs from "./about.jsx";
import Applications from './Application.jsx'
import TP from './components/TP/TP.jsx'
import Home from "./components/Home/Home.jsx";
import "./Style.css";
import "./Style_tech.css"
import "./Styles12.css";
import Articles from "./components/Articles/Articles.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import SingleBlogPage from "./components/Blogs/SingleBlogPage/SingleBlogPage.jsx";

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
    <div className="w-screen border-2 overflow-x-hidden">
      <Header />

      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/tp" element={<TP />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Blogs/Blog1" element={<SingleBlogPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>

    </div>
  );
}
