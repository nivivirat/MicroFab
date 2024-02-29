import logo from "./appli.png";
import pharma from "./pill.svg"
import logos from "./logos56.svg";
import drop from "./drops.png";
import drop1 from "./drop1.svg";
import hand from "./hand.png";
import "./Styles12.css";
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
import testimonials from "./Testappli1.json";
import { useState } from "react";
import Footer from "./components/Common/Footer/Footer";
import im1 from "./image 50.svg";
import rt from "./image 8.svg";
import chedata from './chedata.json'
import ApplicationCard from "./components/Products/BFS/Application/ApplicationCard";

import aq from "./tyfg.png";
import dropu from "./vbnm.svg";
import pic11 from "./pics21.svg";
import pic12 from "./pics22.svg";
import pic13 from "./pics23.svg";
import pic14 from "./pics24.svg";
import { Icon } from "@iconify/react";

export default function Appli4() {

  const [selectedImage, setSelectedImage] = useState('image1');
  const [displayText, setDisplayText] = useState("");
  const showImage = (imageId) => {

    setDisplayText("Our concepts with regards to packaging are unique as per your requirements. While the technology lets you move ahead with ideal primary packaging, it is safe to use and the container is shaped in a unique way. With the technology, you can always expect maximum flexibility with the container design.");

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
              Additives
            </button>
            <button
              onClick={() => showImage("image2")}

              className="block text-black hover:bg-gray-300 ml-4 "
            >
              Liquid Adhesives
            </button>
            <button
              onClick={() => showImage("image3")}
              className="block text-black hover:bg-gray-300 ml-4 "
            >
              Insecticides
            </button>
            <button
              onClick={() => showImage("image4")}
              className="block text-black hover:bg-gray-300 ml-4 "
            >
              Chemicals
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
            <h3 className="mb-6 w-full pb-8 lg:text-6xl md: text-4xl sm:text-4xl leading-tight text-[#8AA6AA]  animate__animated animate__fadeInLeft animate__delay-0s df"><strong>

              Packaging solutions for the Chemical Industry</strong>
            </h3>
            <span>
              <h6
                className="lg:text-2xl md:text-2xl mt-2 sm:text-xl leading-tight text-[#8AA6AA] mr-6   sd animate__animated animate__fadeInRight animate__delay-0s"
                color="blue"
              >
                MicroFab stands at the forefront of innovation, redefining packaging solutions for the cosmetics industry. Our cutting-edge technologies ensure quality maintenance of cosmetic formulations.</h6>{" "}
              {/* <br></br> */}
            </span>
          </div>

          <button className="bg-[#8AA6AA] md:w-48 ee sm:mt-12 md:mt-12 sm:ml-2 lg:ml-12 md:ml-10  text-white font-bold py-3 px-20 rounded m-2 ">
            Explore
          </button>
          <div>
            <img
              className="h-106 w-full object-cover object-center poi  animate__animated animate__fadeIn animate__delay-1s"
              src={logos}

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
                Additives
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
              >MicroFab’s technologies can be employed for packaging additives which are used in different industrial processes. The aseptic packaging ensures the purity of these chemicals, especially in applications where precise dosage and quality control are essential.</p>
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
        <br></br>        <div className="relative flex klp">
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
                Liquid Adhesives
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
              > By embracing our technologies, MicroFab delivers packaging solutions that go beyond containment, addressing the unique requirements of liquid adhesives. These technologies showcase our commitment to precision, ensuring that liquid adhesives are delivered to end-users with uncompromised quality.</p>
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
        <br></br>        <div className="relative flex klp">
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
                Insecticides
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
              >MicroFab's implementation of packaging technologies prevents contamination, safeguards the potency of insecticides, and enhances shelf life. These technologies contribute to a seamless user experience, showcasing our dedication in chemical packaging.</p>
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
                Chemicals
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
              >MicroFab's cutting-edge technologies redefine chemical packaging, ensuring optimal safety, efficiency, and product preservation. The lightweight design of containers also align with sustainability goals, mitigating the impact on the environment.</p>
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

        <strong>Unlocking Optimal Results: Blow-Fill-Seal for Various Applications</strong></p>
      <div className="flex flex-col rounded-lg bg-white md:max-w-10xl md:flex-row mm">

        <div className="flex flex-col p-6 vbnn">
          <br></br>
          <li className=" w-full  font-['ClashDisplay'] lg:text-2xl sm:text-2xs leading-tight text-[#8AA6AA]">Antiseptics</li>
          <li className=" w-full  font-['ClashDisplay'] lg:text-2xl sm:text-2xs leading-tight text-[#8AA6AA]">Disinfectants</li>

          <li className=" w-full  font-['ClashDisplay'] lg:text-2xl sm:text-2xs leading-tight text-[#8AA6AA]">Pest Control Chemicals</li>

        </div> <br></br><br></br><br></br>
        {/* <br></br><br></br><br></br><br></br><br></br> */}
        <img className="h-96 w-48 rounded-lg rounded-md uuu  animate__animated animate__fadeInRight animate__delay-2s" src={im1} alt="NO image">


        </img>
      </div>
      <br></br>
      <div className="qwe">
        <h3 className="text-4xl ml-8 leading-tight text-[#8AA6AA]  animate__animated animate__fadeInLeft animate__delay-3s">
          Advantages of MicroFab machines in the Chemical Industry
        </h3>

      </div>
      {/* className={`flex min-h-screen flex-col items-center justify-between py-24`} */}

      {/* 2. make sure our carousel container takes up the full screen width using w-screen */}
      <div className="md:px-14 mt-[3%] px-4 gap-10 flex flex-col">

        <div className="w-full flex flex-row md:gap-10 gap-[200px] md:overflow-auto overflow-scroll pb-10  animate__animated animate__fadeInLeft animate__delay-4s" >
          {chedata.map((item, index) => (
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


