import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import ExpandMore from "../../../assets/Icons/Header_Icons/Down.svg";
import ExpandLess from "../../../assets/Icons/Header_Icons/Up.svg";
import Card from "./Card";
import img1 from "../../../assets/Icons/Header_Icons/Img1.svg";
import img2 from "../../../assets/Icons/Header_Icons/Img2.svg";
import img3 from "../../../assets/Icons/Header_Icons/Img3.svg";
import img4 from "../../../assets/Icons/Header_Icons/Img4.svg";
import img5 from "../../../assets/Icons/Header_Icons/Img5.svg";
import img6 from "../../../assets/Icons/Header_Icons/Img6.svg";
import img7 from "../../../assets/Icons/Header_Icons/Img7.svg";
import contact from "../../../assets/Icons/Header_Icons/contact.svg";

const Header = () => {
  const [isTechnologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);
  const [isApplicationDropdownOpen, setApplicationDropdownOpen] =
    useState(false);
  const [selectedTechnologyCard, setSelectedTechnologyCard] =
    useState("Blow-Fill-Seal");
  const [selectedApplicationCard, setSelectedApplicationCard] = useState(
    "Pharmaceutical Industry"
  );
  const [isMenuOpen, setMenuOpen] = useState(false);

  //  for toggle menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleTechnologyDropdown = () => {
    setTechnologyDropdownOpen(!isTechnologyDropdownOpen);
    setApplicationDropdownOpen(false);
    console.log("triggered");
  };

  const toggleApplicationDropdown = () => {
    setApplicationDropdownOpen(!isApplicationDropdownOpen);
    setTechnologyDropdownOpen(false);
    console.log("triggered");
  };

  const handleTechnologyCardClick = (content) => {
    setSelectedTechnologyCard(content);
    if (window.innerWidth < 768) {
      toggleMenu(); // Close the menu by calling the toggleMenu function
    }
  };

  const handleApplicationCardClick = (content) => {
    setSelectedApplicationCard(content);
  };

  const location = useLocation();

  return (
    <header
      className={`font-['ClashDisplay'] fixed top-0 left-0 p-0 m-0 right-0 md:w-full py-4 z-10 ${
        isMenuOpen ? "bg-white" : "bg-gradient-to-r from-[#e1e1e1] to-[#8ca7ab]"
      } w-screen`}
      style={
        window.innerWidth >= 768 ||
        (!isMenuOpen && window.innerWidth < 768 && location.pathname !== "/")
          ? { background: "#FFFFFF" }
          : {}
      }
    >
      <nav className="relative mx-4 md:mx-20 xl:mx-22 2xl:mx-40 flex flex-row items-center justify-between">
        <div className="font-bold md:text-[22px] text-[18px]">Logo</div>
        <div className="font-light relative">
          <ul
            className="hidden md:flex md:gap-14 md:text-[18px] md:text[16px] z-20
          "
          >
            <li
              className={`${
                location.pathname === "/"
                  ? "font-extrabold border-b-2 border-black "
                  : ""
              }`}
            >
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/about"
                  ? "font-extrabold border-b-2 border-black "
                  : ""
              }`}
            >
              <Link to="/about" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li
              className={`relative cursor-pointer ${
                location.pathname === "/Technology" ? "font-extrabold " : ""
              }`}
            >
              <div
                className={`flex items-center cursor-pointer ${
                  isTechnologyDropdownOpen ? "font-bold" : ""
                }`}
                onClick={toggleTechnologyDropdown}
              >
                <Link to="/Technology" onClick={toggleMenu}>
                  Technology
                </Link>
                {isTechnologyDropdownOpen ? (
                  <img
                    src={ExpandLess}
                    alt="Expand Less"
                    className="ml-2 w-4 h-4"
                  />
                ) : (
                  <img
                    src={ExpandMore}
                    alt="Expand More"
                    className="ml-2 w-4 h-4"
                  />
                )}
              </div>
              {isTechnologyDropdownOpen && (
                <div className="dropdown-menu absolute mt-2 bg-white border border-gray-300 p-4 rounded-lg shadow-md w-[619px] left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-row gap-[16px]">
                    <Card
                      content="Blow-Fill-Seal"
                      img={img1}
                      isSelected={selectedTechnologyCard === "Blow-Fill-Seal"}
                      onClick={() =>
                        handleTechnologyCardClick("Blow-Fill-Seal")
                      }
                    />
                    <Card
                      content="Form-Fill-Seal"
                      img={img2}
                      isSelected={selectedTechnologyCard === "Form-Fill-Seal"}
                      onClick={() =>
                        handleTechnologyCardClick("Form-Fill-Seal")
                      }
                    />
                    <Card
                      content="Injection-Stretch-Blow-Molding"
                      img={img3}
                      isSelected={
                        selectedTechnologyCard ===
                        "Injection-Stretch-Blow-Molding"
                      }
                      onClick={() =>
                        handleTechnologyCardClick(
                          "Injection-Stretch-Blow-Molding"
                        )
                      }
                    />
                  </div>
                </div>
              )}
            </li>
            <li
              className={`relative cursor-pointer ${
                location.pathname === "/Applications" ? "font-extrabold " : ""
              }`}
            >
              <div
                className={`flex items-center cursor-pointer ${
                  isApplicationDropdownOpen ? "font-bold" : ""
                }`}
                onClick={toggleApplicationDropdown}
              >
                <Link to="/Applications" onClick={toggleMenu}>
                  Applications
                </Link>
                {isApplicationDropdownOpen ? (
                  <img
                    src={ExpandLess}
                    alt="Expand Less"
                    className="ml-2 w-4 h-4"
                  />
                ) : (
                  <img
                    src={ExpandMore}
                    alt="Expand More"
                    className="ml-2 w-4 h-4"
                  />
                )}
              </div>
              {isApplicationDropdownOpen && (
                <div className="dropdown-menu absolute mt-2 bg-white border border-gray-300 p-4 rounded-lg shadow-md w-[739px] left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-row gap-[16px]">
                    <Card
                      content="Pharmaceutical Industry"
                      img={img4}
                      isSelected={
                        selectedApplicationCard === "Pharmaceutical Industry"
                      }
                      onClick={() =>
                        handleApplicationCardClick("Pharmaceutical Industry")
                      }
                    />
                    <Card
                      content="Cosmetic Industry"
                      img={img5}
                      isSelected={
                        selectedApplicationCard === "Cosmetic Industry"
                      }
                      onClick={() =>
                        handleApplicationCardClick("Cosmetic Industry")
                      }
                    />
                    <Card
                      content="Food Industry"
                      img={img6}
                      isSelected={selectedApplicationCard === "Food Industry"}
                      onClick={() =>
                        handleApplicationCardClick("Food Industry")
                      }
                    />
                    <Card
                      content="Chemical Industry"
                      img={img7}
                      isSelected={
                        selectedApplicationCard === "Chemical Industry"
                      }
                      onClick={() =>
                        handleApplicationCardClick("Chemical Industry")
                      }
                    />
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link
                to="/articles"
                onClick={toggleMenu}
                className={`${
                  location.pathname === "/articles"
                    ? "font-extrabold border-b-2 border-black "
                    : ""
                }`}
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                onClick={toggleMenu}
                className={`${
                  location.pathname === "/blogs"
                    ? "font-extrabold border-b-2 border-black "
                    : ""
                }`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/TP"
                onClick={toggleMenu}
                className={`${
                  location.pathname === "/TP"
                    ? "font-extrabold border-b-2 border-black "
                    : ""
                }`}
              >
                Terms & policies
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:text-[18px] md:font-light md:text[16px]">
          <ul className="flex flex-col justify-center items-center">
            <img src={contact} alt="Contact" className="w-4 h-4 mr-2" />
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className={`${
                  location.pathname === "/contact"
                    ? "font-extrabold border-b-2 border-black "
                    : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-[20px] font-light md:hidden">
          {" "}
          {/* Hide on larger screens */}
          {/* Hamburger button */}
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            // Toggle the dropdown menu visibility here
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="relative z-50 md:hidden h-screen w-screen bg-[#8AA6AA] text-white text-[28px] p-4 mt-4 shadow-md">
          <ul className="flex flex-col gap-4 gap-y-6">
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li className="relative cursor-pointer">
              <div
                className={`flex items-center cursor-pointer${
                  isTechnologyDropdownOpen ? "font-bold" : ""
                }`}
                onClick={toggleTechnologyDropdown}
              >
                Technology
                {isTechnologyDropdownOpen ? (
                  <img
                    src={ExpandLess}
                    alt="Expand Less"
                    className="ml-2 w-4 h-4 "
                  />
                ) : (
                  <img
                    src={ExpandMore}
                    alt="Expand More"
                    className="ml-2 w-4 h-4"
                  />
                )}
              </div>

              {/* tech in mobile */}
              {isTechnologyDropdownOpen && (
                <Link to="/Technology" onClick={toggleMenu}>
                  <div className="md:absolute mt-2 bg-white border border-gray-300 p-4 rounded-lg shadow-md h-[250px] w-[350px] md:w-[739px] mx-auto md:left-1/2 md:transform md:-translate-x-1/2">
                    <div className="flex flex-row gap-[8px] md:gap-[16px]">
                      <Card
                        content="Blow-Fill-Seal"
                        img={img1}
                        isSelected={selectedTechnologyCard === "Blow-Fill-Seal"}
                        onClick={() =>
                          handleTechnologyCardClick("Blow-Fill-Seal")
                        }
                      />
                      <Card
                        content="Form-Fill-Seal"
                        img={img2}
                        isSelected={selectedTechnologyCard === "Form-Fill-Seal"}
                        onClick={() =>
                          handleTechnologyCardClick("Form-Fill-Seal")
                        }
                      />
                    </div>

                    <Card
                      content="Injection-Stretch-Blow-Molding"
                      img={img3}
                      isSelected={
                        selectedTechnologyCard ===
                        "Injection-Stretch-Blow-Molding"
                      }
                      onClick={() =>
                        handleTechnologyCardClick(
                          "Injection-Stretch-Blow-Molding"
                        )
                      }
                    />
                  </div>
                </Link>
              )}
            </li>
            <li className="relative cursor-pointer">
              <div
                className={`flex items-center cursor-pointer ${
                  isApplicationDropdownOpen ? "font-bold" : ""
                }`}
                onClick={toggleApplicationDropdown}
              >
                Applications
                {isApplicationDropdownOpen ? (
                  <img
                    src={ExpandLess}
                    alt="Expand Less"
                    className="ml-2 w-4 h-4"
                  />
                ) : (
                  <img
                    src={ExpandMore}
                    alt="Expand More"
                    className="ml-2 w-4 h-4"
                  />
                )}
              </div>

              {/* application in mobile */}
              {isApplicationDropdownOpen && (
                <Link to="/applications" onClick={toggleMenu}>
                  <div className="md:absolute mt-2 bg-white border border-gray-300 p-4 rounded-lg shadow-md h-[250px] w-[350px] md:w-[739px] mx-auto md:left-1/2 md:transform md:-translate-x-1/2">
                    <div className="flex flex-row gap-[16px]">
                      <Card
                        content="Pharmaceutical Industry"
                        img={img4}
                        isSelected={
                          selectedApplicationCard === "Pharmaceutical Industry"
                        }
                        onClick={() =>
                          toggleMenu &&
                          handleApplicationCardClick("Pharmaceutical Industry")
                        }
                      />
                      <Card
                        content="Cosmetic Industry"
                        img={img5}
                        isSelected={
                          selectedApplicationCard === "Cosmetic Industry"
                        }
                        onClick={() =>
                          handleApplicationCardClick("Cosmetic Industry")
                        }
                      />
                    </div>
                    <div className="flex flex-row gap-[16px]">
                      <Card
                        content="Food Industry"
                        img={img6}
                        isSelected={selectedApplicationCard === "Food Industry"}
                        onClick={() =>
                          handleApplicationCardClick("Food Industry")
                        }
                      />
                      <Card
                        content="Chemical Industry"
                        img={img7}
                        isSelected={
                          selectedApplicationCard === "Chemical Industry"
                        }
                        onClick={() =>
                          handleApplicationCardClick("Chemical Industry")
                        }
                      />
                    </div>
                  </div>
                </Link>
              )}
            </li>
            <li>
              <Link to="/articles" onClick={toggleMenu}>
                Articles
              </Link>
            </li>
            <li>
              <Link to="/blogs" onClick={toggleMenu}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/TP" onClick={toggleMenu}>
                Terms & policies
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
