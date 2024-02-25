import logo from "./appli.png";
import pharma from "./pill.svg"
import logos from "./logos.svg";
import drop from "./aqws.png";
import drop1 from "./drop1.svg";
import hand from "./hand.png";
import "./Styles12.css";
import aq from "./tyfg.png";
import dropu from "./vbnm.svg";
import arrow_right from "../src/assets/Home_article/ArrowRight.svg"
import React from "react";
import { firsto } from "./first";
import { NavbarDefault } from "./Navbar";
import { Button } from "@material-tailwind/react";
import { NavbarWithMegaMenu } from "./packnav";
import { Card3Presentation } from "./cards";
import { HorizontalCard } from "./one-stop";
import Slider from "./slider";
// import { AppliCard } from "./testicard"
import testimonials from "./Testappli2.json";
import { useState } from "react";
import Footer from "./components/Common/Footer/Footer";
import im1 from "./image 54-PhotoRoom 1.svg";
import rt from "./image 8.svg";
import fooddata from './fooddata.json'
import ApplicationCard from "./components/Products/BFS/Application/ApplicationCard";

import logos56 from "./Rectangle 6224-PhotoRoom 1.svg";
import pic11 from "./pic11.svg";
import pic12 from "./pic12.svg";
import pic13 from "./pic13.svg";
import pic14 from "./pic14.svg";
import { Icon } from "@iconify/react";

export default function Appli3() {
  const [selectedImage, setSelectedImage] = useState('image1');
  const [displayText, setDisplayText] = useState("");
  const showImage = (imageId) => {

    setDisplayText("Our packaging technologies are instrumental in transforming the packaging of food products. While these technologies ensure seamless creation of packaging, they safeguard the freshness and quality of perishable food items.");

    setSelectedImage(imageId);
  };
  const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
      <div className="text-black p-4 w-48 ml-8 rounded-[16px]">
        <div className="flex flex-col items-start ">
          <button className="text-xl font-bold mb-2" onClick={toggleMenu}>
            <Icon icon="uil:align-justify" />
          </button>

          {/* Navigation Menu */}
          <div className={`mt-2 bg-[#E8E8E9] w-48 mb-4 ${menuOpen ? 'block' : 'hidden'}`}>
            <button
              onClick={() => showImage("image1")}
              className="block text-black hover:bg-gray-300 ml-4 "
            >
              Flavoured Milk
            </button>
            <button
              onClick={() => showImage("image2")}

              className="block text-black hover:bg-gray-300 ml-4 "
            >
              Sauces & Condiments
            </button>
            <button
              onClick={() => showImage("image3")}
              className="block text-black hover:bg-gray-300 ml-4 "
            >
              Fruit Juices
            </button>
            <button
              onClick={() => showImage("image4")}
              className="block text-black hover:bg-gray-300 ml-4 "
            >
              Flavoured Syrups
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {/* <div> */}
      <div>
        <span className="qaz">
          <div className="qa -mt-64">
            <h3 className="mb-6 w-full pb-8 lg:text-6xl md: text-4xl sm:text-4xl leading-tight text-[#8AA6AA]  animate__animated animate__fadeInLeft animate__delay-0s df">
              <strong>
                Packaging Solutions for the Food Industry</strong>
            </h3>
            <span>
              <h6
                className="lg:text-2xl md:text-2xl mt-2 sm:text-xl leading-tight text-[#8AA6AA] mr-6   sd animate__animated animate__fadeInRight animate__delay-0s"
                color="blue"
              >
                MicroFab transforms the realm of food packaging with its solutions designed to preserve freshness, ensure safety, and enhance convenience. Our technologies cater to the unique needs, offering precision and innovation.
              </h6>{" "}
              {/* <br></br> */}
            </span>
          </div>

          <button className="bg-[#8AA6AA] md:w-48 ee sm:mt-12 md:mt-12 sm:ml-2 lg:ml-12 md:ml-10  text-white font-bold py-3 px-20 rounded m-2 ">
            Explore
          </button>

          <div>
            <img
              className="h-106 w-full object-cover object-center poi  animate__animated animate__fadeIn animate__delay-1s"
              src={logos56}

              alt="nature image"
            />
          </div>

          {/* <br></br>
          <br></br> */}

        </span>
      </div>
      <br></br>

      <br></br>
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      {/* </div> */}

      {/* <div> <img
      className="h-96 w-full object-cover object-center"
      src={logo}
      alt="nature image"
    />
    </div> */}
      <h3 className="mb-4 pb-4 text-5xl ml-8 leading-tight text-black  animate__animated animate__fadeInLeft animate__delay-1s"><strong>
        Types of Packaging</strong>
      </h3>
      <NavBar />
      <br></br>

      <div
        className="image-container ml-10 mb-3"
        id="image1"
        style={{ display: selectedImage === "image1" ? "block" : "none" }}
      >
        {displayText && <p>{displayText}</p>}
        <br></br>
        <div className="relative flex klp">
          {/* Left Image */}
          <div className="qwea relative flex">
            <img
              src={aq}
              alt="Image 1"
              className="absolute top-0 left-0 h-37 w-40 z-0 fd"
            />
            <img src={pic11} alt="Image 2" className="relative" />
          </div>

          {/* Right Image */}
          <div className="qwea relative flex ml-6">
            <img
              src={aq}
              alt="Image 3"
              className="absolute top-0 h-37 w-40 z-0 fd"
            />
            <img src={dropu} alt="Image 4" className="relative fd" />

            {/* Text inside the dropu image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fd">
              <h1 className="h"
                style={{
                  color: 'var(--p-v20, #8AA6AA)',
                  fontFamily: 'Clash Display',
                  fontSize: '34px',
                  fontWeight: 500,

                }}
              >
                Flavoured Milk
              </h1>
              <hr></hr><br></br>
              <p className="j"
                style={{
                  color: 'var(--p-v20, #8AA6AA)',
                  fontFamily: 'Clash Display',
                  fontSize: '22px',
                  fontStyle: 'normal',
                  fontWeight: 500,

                }}
              >MicroFab’s technologies ensure aseptic and sterile packaging, minimizing the risk of contamination. This is crucial for preserving the freshness and quality of flavored milk, preventing spoilage, and extending shelf life.</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="image-container ml-10 mb-3"
        id="image2"
        style={{ display: selectedImage === "image2" ? "block" : "none" }}
      >
        {displayText && <p>{displayText}</p>}
        <br></br>       <div className="relative flex klp">
          {/* Left Image */}
          <div className="qwea relative flex">
            <img
              src={aq}
              alt="Image 1"
              className="absolute top-0 left-0 h-37 w-40 z-0 fd"
            />
            <img src={pic12} alt="Image 2" className="relative" />
          </div>

          {/* Right Image */}
          <div className="qwea relative flex ml-6">
            <img
              src={aq}
              alt="Image 3"
              className="absolute top-0 h-37 w-40 z-0 fd"
            />
            <img src={dropu} alt="Image 4" className="relative fd" />

            {/* Text inside the dropu image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fd">
              <h1 className="h"
                style={{
                  color: 'var(--p-v20, #8AA6AA)',
                  fontFamily: 'Clash Display',
                  fontSize: '34px',
                  fontWeight: 500,

                }}
              >
                Sauces & Condiments
              </h1>
              <hr></hr><br></br>
              <p className="j"
                style={{
                  color: 'var(--p-v20, #8AA6AA)',
                  fontFamily: 'Clash Display',
                  fontSize: '22px',
                  fontStyle: 'normal',
                  fontWeight: 500,

                }}
              >The packaging technologies of MicroFab enhance the safety, efficiency, and visual appeal of packaging for sauces, contributing to the overall quality and marketability of these products. These can be packed for one time use as well.</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="image-container ml-10 mb-3"
        id="image3"
        style={{ display: selectedImage === "image3" ? "block" : "none" }}
      >
        {/* {displayText && <p>{displayText}</p>}
        <img src={drop} alt="Image 3" /> */}
      </div>
      <div
        className="image-container ml-10 mb-3"
        id="image3"
        style={{ display: selectedImage === "image3" ? "block" : "none" }}
      >
        {displayText && <p>{displayText}</p>}
        <br></br>       <div className="relative flex klp">
          {/* Left Image */}
          <div className="qwea relative flex">
            <img
              src={aq}
              alt="Image 1"
              className="absolute top-0 left-0 h-37 w-40 z-0 fd"
            />
            <img src={pic13} alt="Image 2" className="relative" />
          </div>

          {/* Right Image */}
          <div className="qwea relative flex ml-6">
            <img
              src={aq}
              alt="Image 3"
              className="absolute top-0 h-37 w-40 z-0 fd"
            />
            <img src={dropu} alt="Image 4" className="relative fd" />

            {/* Text inside the dropu image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fd">
              <h1 className="h"
                style={{
                  color: 'var(--p-v20, #8AA6AA)',
                  fontFamily: 'Clash Display',
                  fontSize: '34px',
                  fontWeight: 500,

                }}
              >
                Fruit Juices
              </h1>
              <hr></hr><br></br>
              <p className="j"
                style={{
                  color: 'var(--p-v20, #8AA6AA)',
                  fontFamily: 'Clash Display',
                  fontSize: '22px',
                  fontStyle: 'normal',
                  fontWeight: 500,

                }}
              >During the entire packaging process, the technologies ensure to preserve the freshness and quality of fruit juices. The seamless and automated nature of machines also reduces the risk of contamination. </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="image-container ml-10 mb-3"
        id="image4"
        style={{ display: selectedImage === "image4" ? "block" : "none" }}
      >
        {displayText && <p>{displayText}</p>}
        <br></br>       <div className="relative flex klp">
          {/* Left Image */}
          <div className="qwea relative flex">
            <img
              src={aq}
              alt="Image 1"
              className="absolute top-0 left-0 h-37 w-40 z-0 fd"
            />
            <img src={pic14} alt="Image 2" className="relative" />
          </div>

          {/* Right Image */}
          <div className="qwea relative flex ml-6">
            <img
              src={aq}
              alt="Image 3"
              className="absolute top-0 h-37 w-40 z-0 fd"
            />
            <img src={dropu} alt="Image 4" className="relative fd" />

            {/* Text inside the dropu image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fd">
              <h1 className="h"
                style={{
                  color: 'var(--p-v20, #8AA6AA)',
                  fontFamily: 'Clash Display',
                  fontSize: '34px',
                  fontWeight: 500,

                }}
              >
                Flavoured Syrups
              </h1>
              <hr></hr><br></br>
              <p className="j"
                style={{
                  color: 'var(--p-v20, #8AA6AA)',
                  fontFamily: 'Clash Display',
                  fontSize: '22px',
                  fontStyle: 'normal',
                  fontWeight: 500,

                }}
              >Our machines based on packaging technologies offer benefits in terms of aseptic packaging, production efficiency, versatility, and sustainability. These  advantages contribute to the overall quality and market success of flavored syrups.</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      {/* <div> <h6 className="text-1xl leading-tight text-black" color="blue">"Unleashing the Power of BFS Technology: Aseptic Filling, Sterile Containers, and Unbreakable Packaging in a Single Step!"</h6><br></br>
        </div> */}
      {/* <div> <img
      className="h-70 w-full object-cover object-center scale-[.87]"
      src={drop}
      alt="nature image"
    />
    </div> */}
      {/* <div>
        {" "}
        <img
          className="h-70 w-full object-cover object-center "
          src={hand}
          alt="nature image"
        />
      </div> */}
      <br></br><br></br>

      <p className="mb-6 w-full pb-8 text-5xl leading-tight text-[#8AA6AA] kkk  animate__animated animate__fadeInLeft animate__delay-2s">

        <strong>Use of our packaging machines for different Applications</strong></p>
      <div className="flex flex-col rounded-lg bg-white md:max-w-10xl md:flex-row mm">

        <div className="flex flex-col p-6 vbnn">
          <br></br>
          <li className=" w-full lg:text-2xl  font-['ClashDisplay'] sm:text-2xs leading-tight text-[#8AA6AA]">Cheese Sauces </li>
          <li className=" w-full lg:text-2xl  font-['ClashDisplay'] sm:text-2xs leading-tight text-[#8AA6AA]">Non-Carbonated Beverages</li>
          <li className=" w-full lg:text-2xl  font-['ClashDisplay'] sm:text-2xs leading-tight text-[#8AA6AA]">Electrolytes</li>
          <li className=" w-full lg:text-2xl  font-['ClashDisplay'] sm:text-2xs leading-tight text-[#8AA6AA]">Drinking Bottles</li>
          <li className=" w-full lg:text-2xl  font-['ClashDisplay'] sm:text-2xs leading-tight text-[#8AA6AA]">Nutraceuticals </li>
          {/* <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Hair Serums </li>
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Conditioners</li> */}
          {/* <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">diagnostics</li>
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">biotechnological products</li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">vaccines</li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Stability Test Kits</li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">biotechnological products</li>  */}
        </div> <br></br><br></br><br></br>
        {/* <br></br><br></br><br></br><br></br><br></br> */}
        <img className="h-80 w-48 rounded-lg rounded-md uuu  animate__animated animate__fadeInRight animate__delay-2s" src={im1} alt="NO image">


        </img>
      </div>
      <br></br>
      <div className="qwe">
        <h3 className="mb-4 pb-4 text-4xl ml-8 leading-tight text-[#8AA6AA]  animate__animated animate__fadeInLeft animate__delay-3s">
          Advantages of Microfab machines in the Pharmaceutical Industry
        </h3>
        <h6 className="mb-4 pb-4 text-2xl ml-8 leading-tight text-[#8AA6AA] animate__animated animate__fadeInLeft animate__delay-3s" color="blue">
          The BFS technology offers many benefits for pharmaceutical companies.
        </h6>
        <br></br>
        {/* <Card3Presentation/> */}
      </div>
      {/* className={`flex min-h-screen flex-col items-center justify-between py-24`} */}

      {/* 2. make sure our carousel container takes up the full screen width using w-screen */}
      <div className="md:px-14 mt-[5%] px-4 gap-10 flex flex-col">

        <div className="w-full flex flex-row md:gap-10 gap-[200px] md:overflow-auto overflow-scroll pb-10  animate__animated animate__fadeInLeft animate__delay-4s" >
          {fooddata.map((item, index) => (
            <div
              key={index}
              className="md:w-[25%] w-[100%]"
            >
              <ApplicationCard content={item.content} />
            </div>
          ))}
        </div>
      </div>

      {/* <HorizontalCard/> */}

      <div className="h-150 bvc">
        <br></br>
        <br></br>
        <center>
          <div className=" leading-tight bg-[#8AA6AA] kll"><center>
            <h1 className="text-3xl leading-tight font-bold text-white kll">
              As a one-stop partner, we offer more for your company
            </h1>
            <br></br>
            <h5 className="text-xs  leading-tight mb-4 text-white kll">
              Regardless of how the operational activities are <br></br> running; our experience and expertise ensure to move <br></br>ahead. We also offer:-
            </h5>
          </center><br></br>
            <a className="text-xs  leading-tight mb-4   text-white  tt" href="/#/product">Product solutions</a><br></br>
            <a className="text-xs  leading-tight mb-4 text-white  tt" href="/#/TurnKeySolutions">Turnkey solutions </a><br></br>
            <a className="text-xs  leading-tight mb-4  text-white  tt" href="/#/service">Service solutions </a><br></br>
            <br></br>

          </div>
        </center>




        <br></br><br></br>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}


