import logo from "./appli.png";
import pharma from "./pill.svg"
import logos from "./logos.svg";
import drop from "./drop4.svg";
import drop1 from "./drop1.svg";
import hand from "./hand.png";
import aq from "./tyfg.png";
import phar from "./pharm.svg";
import dropu from"./vbnm.svg";
import "./Styles12.css";
import arrow_right from "../src/assets/Home_article/ArrowRight.svg"
import React from "react";
import art from "./ap1.png"; 
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
import im1 from "./Frame 21441.svg";
import rt from "./image 8.svg";

import drop8 from "./drop8.svg";
import drop9 from "./drop9.svg";
import drop10 from "./drop10.svg";
import applicationContent from './components/Products/BFS/Application/applicationContent.json'
import ApplicationCard from "./components/Products/BFS/Application/ApplicationCard";
import { Icon } from "@iconify/react";



export default function Appli1() {
  const [selectedImage, setSelectedImage] = useState('image1');
  const [displayText, setDisplayText] = useState("");
  const showImage = (imageId) => {
   
        setDisplayText("Leveraging our packaging technologies helps to aseptically fill a wide range of substances right from liquids and ointments to temperature sensitive products. The technology is far more capable of producing sterile single or multi-dose containers. ");
     
    setSelectedImage(imageId);
  };
  return (
    <>
      {/* <div> */}
      <div>
        <span className="qaz">
        <div className="qa">
          <h3 className="mb-6 w-full pb-8 lg:text-7xl md: text-5xl sm:text-5xl leading-tight text-[#8AA6AA]  df  animate__animated animate__fadeInLeft animate__delay-0s"><strong>
          Packaging Solutions for Pharmaceuticals</strong>
          </h3>
          <span>
            <h6
              className="lg:text-3xl md:text-2xl sm:text-xl leading-tight text-[#8AA6AA]  sd  animate__animated animate__fadeInRight animate__delay-0s"
              color="blue"
            >
            MicroFab revolutionizes pharmaceutical packaging with cutting-edge solutions that prioritize precision, efficiency, and aseptic integrity.</h6>{" "}
            {/* <br></br> */}
          
         
          <button className="bg-[#8AA6AA] ee  text-white font-bold py-3 px-20 rounded m-2">
  Explore
</button>
</span>
          </div>
<div>
            <img
              className="h-106 w-full object-cover object-center poi  animate__animated animate__fadeIn animate__delay-1s"
              src={phar}
              
              alt="nature images"
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
     <h3 className="mb-4 pb-4 text-5xl ml-8 leading-tight text-black  animate__animated animate__fadeInLeft animate__delay-2s"><strong>
            Types of Packaging</strong>
          </h3>
      <div className="navbar">
        <spacer></spacer><spacer></spacer>{ }
        <button
          onClick={() => showImage("image1")}
          style={{ marginRight: "4%" }}
        >
          Eye-Drops
        </button>
        <button
          onClick={() => showImage("image2")}
          
          style={{ marginRight: "4%" }}
        >
          Injection
        </button>
        <button
          onClick={() => showImage("image3")}
          style={{ marginRight: "4%" }}
        >
          Inhalents
        </button>
        <button
          onClick={() => showImage("image4")}
          style={{ marginRight: "4%" }}
        >
          Infusion
        </button>
        {/* {selectedImage && (
        <img src={`path/to/${selectedImage}.jpg`} alt={`Image ${selectedImage}`} />
      )}
      {/* Display the text */}
     
      </div>
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
    <img src={drop} alt="Image 2" className="relative" />
  </div>

  {/* Right Image */}
  <div className="qwea relative flex ml-6">
    <img
      src={aq}
      alt="Image 3"
      className="absolute top-0 h-37 w-40 z-0 xxc fd"
    />
    <img src={dropu} alt="Image 4" className="relative xxc fd" />

    {/* Text inside the dropu image */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fd">
      <h1 className="h xcc"
        style={{
          color: 'var(--p-v20, #8AA6AA)',
          fontFamily: 'Clash Display',
          fontSize: '34px',
          fontWeight: 500,
          
        }}
      >
       Eye-Drops
      </h1>
      <hr></hr><br></br>
      <p className="j xcc"
        style={{
          color: 'var(--p-v20, #8AA6AA)',
          fontFamily: 'Clash Display',
          fontSize: '22px',
          fontStyle: 'normal',
          fontWeight: 500,
         
        }}
      >
        Our packaging technologies play a crucial role in ensuring the efficacy and safety of eye-drop products. We offer specialized packaging to maintain their integrity and prevent contamination. </p>
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
    <img src={drop8} alt="Image 2" className="relative" />
  </div>

  {/* Right Image */}
  <div className="qwea relative flex ml-6">
    <img
      src={aq}
      alt="Image 3"
      className="absolute top-0 h-37 w-40 z-0 xxc fd"
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
     Prefilled Syringes
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
      >
       The packaging technologies of MicroFab ensure the safety, sterility, and effectiveness of injections. Various aseptic packaging techniques contribute to maintaining the sterility of the injectable product, reducing the risk of contamination during production.</p></div>
  </div>
</div>
      </div>
      <div
        className="image-container ml-10 mb-3"
        id="image3"
        style={{ display: selectedImage === "image3" ? "block" : "none" }}
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
    <img src={drop9} alt="Image 2" className="relative" />
  </div>

  {/* Right Image */}
  <div className="qwea relative flex ml-6">
    <img
      src={aq}
      alt="Image 3"
      className="absolute top-0 h-37 w-40 z-0 xxc fd"
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
      Inhalants
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
      >
      With our packaging technologies, the inhalants don’t lose their strength. The stability is also preserved because the innovations protect the contents from environmental factors such as moisture, and light. </p> </div>
  </div>
</div>
        {/* {displayText && <p>{displayText}</p>}
        <img src={drop} alt="Image 3" /> */}
      </div>
      <div
        className="image-container ml-10 mb-3"
        id="image4"
        style={{ display: selectedImage === "image4" ? "block" : "none" }}
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
    <img src={drop10} alt="Image 2" className="relative " />
  </div>

  {/* Right Image */}
  <div className="qwea relative flex ml-6">
    <img
      src={aq}
      alt="Image 3"
      className="absolute top-0 h-37 w-40 sm:h-24 sm:w-24 md:h-36 md:w-36 fd z-0"
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
       Infusion
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
      >
        With our packaging technologies, the inhalants don’t lose their strength. The stability is also preserved because the innovations protect the contents from environmental factors such as moisture, and light. </p> </div>
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

<p className="mb-6 w-full pb-8 text-5xl leading-tight text-[#8AA6AA] kkk">
                
<strong>Use of our packaging machines for different Applications</strong></p>
<div className="flex flex-col rounded-lg bg-white md:max-w-10xl md:flex-row mm">

              <div className="flex flex-col p-6 vbnn">
               <br></br>
                          <li className=" w-full lg:text-2xl sm:text-2xs leading-tight text-[#8AA6AA]">Vaccines </li>     
                          <li className=" w-full lg:text-2xl sm:text-2xs leading-tight text-[#8AA6AA]">Sterile Water </li> 
                          <li className=" w-full lg:text-2xl sm:text-2xs leading-tight text-[#8AA6AA]">Blood Products  </li> 
                          <li className=" w-full lg:text-2xl sm:text-2xs leading-tight text-[#8AA6AA]">Stability Test Kits  </li>
                          {/* <li className=" w-full text-2xl leading-tight text-[#8AA6AA]"></li> */}
                          <li className=" w-full lg:text-2xl sm:text-2xs leading-tight text-[#8AA6AA]"> Temperature sensitive substances</li>
                          {/* <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Diagnostics</li>
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Biotechnological products</li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Vaccines</li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Stability Test Kits</li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Temperature Sensitive Products Antibodies</li> 
                          <li className=" w-full text-2xl leading-tight text-[#8AA6AA]">Antibodies & Blood Products</li> */}
                          </div> <br></br><br></br><br></br>
              {/* <br></br><br></br><br></br><br></br><br></br> */}
              <img className="h-96 w-48 rounded-lg rounded-md uuu mr-24  animate__animated animate__fadeInRight animate__delay-2s" src={art} alt="NO image">
                
               
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
      <div className="md:px-14 mt-[5%] px-4 gap-10 flex flex-col  animate__animated animate__fadeInRight animate__delay-4s">
       
       <div className="w-full flex flex-row md:gap-10 gap-[200px] md:overflow-auto overflow-scroll pb-10">
         {applicationContent.map((item, index) => (
           <div
             key={index}
             className="md:w-[25%] w-[100%]"
           >
             <ApplicationCard heading={item.heading} content={item.content} img={item.img}/>
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
          Regardless of which instance you’re at; a wealth of experience and a plethora of services ensures you to move ahead. Maybe so what we offer:
          </h5>
          </center><br></br>
          <a className="text-xs  leading-tight mb-4   text-white  tt" href="https://google.com">Product solutions<Icon icon="ph:arrow-right-light" /></a><br></br>
          <a className="text-xs  leading-tight mb-4 text-white  tt" href="https://google.com">Turnkey solutions <Icon icon="ph:arrow-right-light" /></a><br></br>
          <a className="text-xs  leading-tight mb-4  text-white  tt" href="https://google.com">Service solutions <Icon icon="ph:arrow-right-light" /></a><br></br>
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


