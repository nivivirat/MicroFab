import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

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
import img8 from "../../../assets/Icons/Header_Icons/Img8.svg";
import logo1 from "../../../assets/logo.svg";
import logo2 from "../../../assets/footerlogo.svg";
import contact from "../../../assets/Icons/Header_Icons/contact.svg";

const Header = () => {
  const [isTechnologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);
  const [isApplicationDropdownOpen, setApplicationDropdownOpen] =
    useState(false);
  const [selectedTechnologyCard, setSelectedTechnologyCard] = useState("BFS");
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
    // toggleMenu();
  };

  const location = useLocation();

  return (
    <header
      className={`font-['ClashDisplay'] fixed top-0 left-0 p-0 m-0 right-0 lg:w-full py-4 z-10 ${
        isMenuOpen ? "bg-white" : "bg-white"
      } w-screen`}
      style={
        window.innerWidth >= 768 ||
        (!isMenuOpen && window.innerWidth < 768 && location.pathname !== "/")
          ? { background: "#FFFFFF" }
          : {}
      }
    >
      <nav className="relative mx-10 md:mx-8 lg:mx-14 xl:mx-22 flex flex-row items-center justify-between">
        <a
          href="/"
          className="font-bold md:text-[18px] lg:text-[20px] text-[18px]"
        >
          <img
            src={isMenuOpen ? logo1 : logo1}
            alt="logo"
            className="md:w-[60%] md:h-[60%] h-[40px]"
          ></img>
        </a>
        <div className="font-light relative">
          <ul
            className="hidden lg:flex lg:gap-10 xl:gap-14 lg:text-[16px] z-20
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
              className={`${
                location.pathname === "/product"
                  ? "font-extrabold border-b-2 border-black "
                  : ""
              }`}
            >
              <Link to="/product" onClick={toggleMenu}>
                Products
              </Link>
            </li>
            {/* <li
              className={`relative cursor-pointer ${
                location.pathname === "/product" ? "font-extrabold " : ""
              }`}
            >
              <div
                className={`flex items-center cursor-pointer ${
                  isTechnologyDropdownOpen ? "font-bold" : ""
                }`}
              >
                <Link to="/product" onClick={toggleMenu}>
                  Products
                </Link> */}
            {/* {isTechnologyDropdownOpen ? (
                  <img
                    src={ExpandLess}
                    alt="Expand Less"
                    className="ml-2 w-4 h-4"
                    onClick={toggleTechnologyDropdown}
                  />
                ) : (
                  <img
                    src={ExpandMore}
                    alt="Expand More"
                    className="ml-2 w-4 h-4"
                    onClick={toggleTechnologyDropdown}
                  />
                )} */}
            {/* </div> */}
            {/* {isTechnologyDropdownOpen && (
                <div className="dropdown-menu absolute mt-2 bg-white border border-gray-300 p-4 rounded-lg shadow-md w-[619px] left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-row gap-[16px]">
                    <Card
                      path="/BFS"
                      content="BFS"
                      img={img1}
                      isSelected={selectedTechnologyCard === "BFS"}
                      onClick={() => handleTechnologyCardClick("BFS")}
                    />
                    <Card
                      path="/FFS"
                      content="FFS"
                      img={img2}
                      isSelected={selectedTechnologyCard === "FFS"}
                      onClick={() => handleTechnologyCardClick("FFS")}
                    /> */}
            {/* <Card
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
                    /> */}
            {/* <Card
                      path="/IV"
                      content="IV Bag"
                      img={img2}
                      isSelected={selectedTechnologyCard === "IV Bag"}
                      onClick={() => handleTechnologyCardClick("IV Bag")}
                    />
                    <Card
                      path="/product"
                      content="Product Solution"
                      img={img1}
                      isSelected={selectedTechnologyCard === "Product Solution"}
                      onClick={() =>
                        handleTechnologyCardClick("Product Solution")
                      }
                    />
                  </div>
                </div>
              )} */}
            {/* </li> */}

            <Link
              to="/TurnKeySolutions"
              onClick={toggleMenu}
              className={`${
                location.pathname === "/TurnKeySolutions"
                  ? "font-extrabold border-b-2 border-black "
                  : ""
              }`}
            >
              Turnkey
            </Link>

            <Link
              to="/service"
              onClick={toggleMenu}
              className={`${
                location.pathname === "/service"
                  ? "font-extrabold border-b-2 border-black "
                  : ""
              }`}
            >
              Services
            </Link>

            <li
              className={`relative cursor-pointer ${
                location.pathname === "/Applications" ? "font-extrabold " : ""
              }`}
            >
              <div
                className={`flex items-center cursor-pointer ${
                  isApplicationDropdownOpen ? "font-bold" : ""
                }`}
              >
                <Link
                  to="/Applications"
                  onClick={toggleMenu}
                  onMouseEnter={toggleApplicationDropdown}
                >
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
                    onMouseEnter={toggleApplicationDropdown}
                  />
                )}
              </div>
              {isApplicationDropdownOpen && (
                <div onMouseLeave={toggleApplicationDropdown} className="dropdown-menu absolute mt-2 bg-white border border-gray-300 p-4 rounded-lg shadow-md w-[855px] xl:left-[10%] -left-[80%] transform -translate-x-1/2">
                  <div className="flex flex-row gap-0">
                    <Link to="/pharmaceuticals">
                      <Card
                        content="Pharmaceutical Industry"
                        img={img4}
                        isSelected={
                          selectedApplicationCard === "Pharmaceutical Industry"
                        }
                        onClick={() => {
                          handleApplicationCardClick("Pharmaceutical Industry");
                          toggleApplicationDropdown();
                        }}
                      />
                    </Link>
                    <Link to="/cosmic">
                      <Card
                        content="Cosmetic Industry"
                        img={img5}
                        isSelected={
                          selectedApplicationCard === "Cosmetic Industry"
                        }
                        onClick={() => {
                          handleApplicationCardClick("Cosmetic Industry");
                          toggleApplicationDropdown();
                        }}
                      />
                    </Link>
                    <Link to="/food">
                      <Card
                        content="Food Industry"
                        img={img6}
                        isSelected={selectedApplicationCard === "Food Industry"}
                        onClick={() => {
                          handleApplicationCardClick("Food Industry");
                          toggleApplicationDropdown();
                        }}
                      />
                    </Link>
                    <Link to="/chemical">
                      <Card
                        content="Chemical Industry"
                        img={img7}
                        isSelected={
                          selectedApplicationCard === "Chemical Industry"
                        }
                        onClick={() => {
                          handleApplicationCardClick("Chemical Industry");
                          toggleApplicationDropdown();
                        }}
                      />
                    </Link>
                    <Link to="/dairy">
                      <Card
                        content="Dairy Industry"
                        img={img8}
                        isSelected={
                          selectedApplicationCard === "Dairy Industry"
                        }
                        onClick={() => {
                          handleApplicationCardClick("Dairy Industry");
                          toggleApplicationDropdown();
                        }}
                      />
                    </Link>
                  </div>
                </div>
              )}
            </li>
            {/* <li>
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
              </Link> */}
            {/* </li> */}
            <li>
              <Link
                to="/articlesList"
                onClick={toggleMenu}
                className={`${
                  location.pathname === "/articlesList"
                    ? "font-extrabold border-b-2 border-black "
                    : ""
                }`}
              >
                Blogs
              </Link>
            </li>
            <li>
              {/* <Link
                to="/TP"
                onClick={toggleMenu}
                className={`${
                  location.pathname === "/TP"
                    ? "font-extrabold border-b-2 border-black "
                    : ""
                }`}
              >
                Terms & policies
              </Link> */}
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex lg:text-[18px] lg:font-light lg:text[16px]">
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

        <div className="text-[20px] font-light lg:hidden">
          {" "}
          {/* Hide on larger screens */}
          {/* Hamburger button */}
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            // Toggle the dropdown menu visibility here
          >
            {isMenuOpen ? (
              <div className="text-black">
                <Icon icon="ph:x-bold" />
              </div>
            ) : (
              <div className="text-black">
                <Icon icon="iconamoon:menu-burger-horizontal-light" />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="relative z-50 lg:hidden h-screen w-screen bg-[#8AA6AA] text-white text-[28px] p-4 mt-4 shadow-md transition-transform duration-400 ease-in-out">
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
            <li>
              <Link to="/product" onClick={toggleMenu}>
                Products
              </Link>
            </li>
            {/* <li className="relative cursor-pointer">
              <div
                className={`flex items-center cursor-pointer${
                  isTechnologyDropdownOpen ? "font-bold" : ""
                }`}
                onClick={toggleTechnologyDropdown}
              >
                Products
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
              </div> */}

            {/* tech in mobile */}
            {/* {isTechnologyDropdownOpen && (
                <Link to="/Technology" onClick={toggleMenu}>
                  <div className="lg:absolute mt-2 bg-white border border-gray-300 p-4 rounded-lg shadow-md h-[250px] w-[350px] lg:w-[739px] mx-auto lg:left-1/2 lg:transform lg:-translate-x-1/2">
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-[8px] lg:gap-[16px]">
                        <Link to="/BFS">
                          <Card
                            path="/BFS"
                            content="BFS"
                            img={img1}
                            isSelected={selectedTechnologyCard === "BFS"}
                            onClick={() => handleTechnologyCardClick("BFS")}
                          />
                        </Link>
                        <Link to="FFS">
                          <Card
                            content="FFS"
                            img={img2}
                            isSelected={selectedTechnologyCard === "FFS"}
                            onClick={() => handleTechnologyCardClick("FFS")}
                          />
                        </Link>
                      </div>
                      <Link to="IV">
                        <Card
                          content="IV"
                          img={img2}
                          isSelected={selectedTechnologyCard === "IV"}
                          onClick={() => handleTechnologyCardClick("IV")}
                        />
                      </Link>
                    </div>
                  </div>
                </Link>
              )}
            </li> */}
            <li className="relative cursor-pointer">
              <div
                className={`flex items-center cursor-pointer ${
                  isApplicationDropdownOpen ? "font-bold" : ""
                }`}
              >
                <Link to="/Applications" onClick={toggleMenu}>
                  Applications
                </Link>
                {isApplicationDropdownOpen ? (
                  <img
                    src={ExpandLess}
                    alt="Expand Less"
                    className="ml-2 w-4 h-4"
                    onClick={toggleApplicationDropdown}
                  />
                ) : (
                  <img
                    src={ExpandMore}
                    alt="Expand More"
                    className="ml-2 w-4 h-4"
                    onClick={toggleApplicationDropdown}
                  />
                )}
              </div>

              {/* application in mobile */}
              {isApplicationDropdownOpen && (
                <Link to="/applications" onClick={toggleMenu}>
                  <div className="lg:absolute mt-2 bg-white border border-gray-300 p-4 rounded-lg shadow-md h-[360px] w-[350px] lg:w-[739px] mx-auto lg:left-1/2 lg:transform lg:-translate-x-1/2">
                    <div className="flex flex-row gap-[16px]">
                      <Link to="/pharmaceutical">
                        <Card
                          content="Pharmaceutical Industry"
                          img={img4}
                          isSelected={
                            selectedApplicationCard ===
                            "Pharmaceutical Industry"
                          }
                          onClick={() => {
                            handleApplicationCardClick(
                              "Pharmaceutical Industry"
                            );
                            toggleApplicationDropdown();
                          }}
                        />
                      </Link>
                      <Link to="/cosmic">
                        <Card
                          content="Cosmetic Industry"
                          img={img5}
                          isSelected={
                            selectedApplicationCard === "Cosmetic Industry"
                          }
                          onClick={() => {
                            handleApplicationCardClick("Cosmetic Industry");
                            toggleApplicationDropdown();
                          }}
                        />
                      </Link>
                    </div>
                    <div className="flex flex-row gap-[16px]">
                      <Link to="/food">
                        <Card
                          content="Food Industry"
                          img={img6}
                          isSelected={
                            selectedApplicationCard === "Food Industry"
                          }
                          onClick={() => {
                            handleApplicationCardClick("Food Industry");
                            toggleApplicationDropdown();
                          }}
                        />
                      </Link>
                      <Link to="/chemical">
                        <Card
                          content="Chemical Industry"
                          img={img7}
                          isSelected={
                            selectedApplicationCard === "Chemical Industry"
                          }
                          onClick={() => {
                            handleApplicationCardClick("Chemical Industry");
                            toggleApplicationDropdown();
                          }}
                        />
                      </Link>
                    </div>
                    <div className="flex flex-row gap-[16px]">
                      <Link to="/dairy">
                        <Card
                          content="Dairy Industry"
                          img={img8}
                          isSelected={
                            selectedApplicationCard === "Dairy Industry"
                          }
                          onClick={() => {
                            handleApplicationCardClick("Dairy Industry");
                            toggleApplicationDropdown();
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                </Link>
              )}
            </li>
            <li>
              <Link to="/TurnKeySolutions" onClick={toggleMenu}>
                TurnKey
              </Link>
            </li>
            <li>
              <Link to="/articlesList" onClick={toggleMenu}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/service" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
