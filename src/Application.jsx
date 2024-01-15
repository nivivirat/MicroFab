import logo from "./appli.png";
import pharma from "./pill.svg"
import logos from "./logos.svg";
import drop from "./image 1.png";
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
import testimonials from "./testimonials.json";
import { useState } from "react";
import Footer from "./components/Common/Footer/Footer";
import applicationContent from './components/Products/BFS/Application/applicationContent.json'
import ApplicationCard from "./components/Products/BFS/Application/ApplicationCard";
function Application() {
  const [selectedImage, setSelectedImage] = useState('image1');
  const showImage = (imageId) => {
    setSelectedImage(imageId);
  };


  return (
    <div>
      {/* <div> */}
      <div>
        <span className="qaz">
          <div className="qa">
            <h3 className="mb-6 w-full pb-8 lg:text-7xl md: text-5xl sm:text-5xl leading-tight text-[#8AA6AA]  df  animate__animated animate__fadeInLeft animate__delay-0s"><strong>
              Lorem ipsum dolor sit  consectetur adipiscing elit sed do eiusmod</strong>
            </h3>
            <span>
              <h6
                className="lg:text-3xl md:text-2xl sm:text-xl leading-tight text-[#8AA6AA]  sd  animate__animated animate__fadeInRight animate__delay-0s"
                color="blue"
              >
                "Unleashing the Power of BFS Technology: Aseptic Filling, Sterile
                Containers, and Unbreakable Packaging in a Single Step!"
              </h6>{" "}
              <br></br>
            </span>
          </div>

          <button className="bg-[#8AA6AA] text-white font-bold py-2 px-20 rounded m-2">
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
          onClick={() => showImage("image3")}
          style={{ marginRight: "4%" }}
        >
          Infusion
        </button>
      </div>
      <br></br>

      <div
        className="image-container"
        id="image1"
        style={{ display: selectedImage === "image1" ? "block" : "none" }}

      >

        <br></br>
        <img src={drop} alt="Image 1" />
      </div>
      <div
        className="image-container"
        id="image2"
        style={{ display: selectedImage === "image2" ? "block" : "none" }}
      >
        <img src={drop} alt="Image 2" />
      </div>
      <div
        className="image-container"
        id="image3"
        style={{ display: selectedImage === "image3" ? "block" : "none" }}
      >
        {/* <img src={drop} alt="Image 3" /> */}
      </div>
      <div
        className="image-container"
        id="image3"
        style={{ display: selectedImage === "image3" ? "block" : "none" }}
      >
        <img src={drop} alt="Image 4" />
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

      <p className="mb-6 w-full pb-8 text-5xl leading-tight text-[#8AA6AA] kkk  animate__animated animate__fadeInRight animate__delay-2s">

        <strong>Unlocking Optimal Results: Blow-Fill-Seal for Various Applications</strong></p>
      <div className="flex flex-col rounded-lg bg-white md:max-w-10xl md:flex-row mm">

        <div className="flex flex-col p-6 vbn kkk">
          <br></br>
          <li className=" w-96 ml--5 text-xl  leading-tight text-[#8AA6AA]">ear drops</li>
          <li className=" w-96 ml--5 text-xl  leading-tight text-[#8AA6AA]">nose drops</li>
          <li className=" w-96 ml--5 text-xl  leading-tight text-[#8AA6AA]">contact lens cleaners and rinses</li>
          <li className=" w-96 ml--5 text-xl  leading-tight text-[#8AA6AA]">Gels for vaginal or rectal use</li>
          <li className=" w-96 ml--5 text-xl  leading-tight text-[#8AA6AA]">drinking solutions</li>
          <li className=" w-96 ml--5 text-xl  leading-tight text-[#8AA6AA]">Wound care preparations,</li>

          <p className=" w-96 ml--5 text-xl  ml-7 leading-tight text-[#8AA6AA]">wound gels and rinses</p>
          <li className=" w-96 ml--5 text-xl  leading-tight text-[#8AA6AA]">disinfectant</li>
          <li className=" w-96 ml--5 text-xl  leading-tight text-[#8AA6AA]">diagnostics</li>
          <li className=" w-96 ml--5 text-xl  leading-tight text-[#8AA6AA]">biotechnological products</li>
          <li className=" w-96 ml--5 text-xl  leading-tight text-[#8AA6AA]">vaccines</li>
          <li className=" w-96 ml--5 text-xl  leading-tight text-[#8AA6AA]">Stability Test Kits</li>
          <li className=" w-96 ml--5 text-xl  leading-tight text-[#8AA6AA]">biotechnological products</li>
        </div> <br></br><br></br><br></br>
        {/* <br></br><br></br><br></br><br></br><br></br> */}
        <img className="h-96 w-48 rounded-lg rounded-md uuu  animate__animated animate__fadeInRight animate__delay-2s" src="https://s3-alpha-sig.figma.com/img/4f3d/619c/61df89bd22062ce2d6a4d886511827c3?Expires=1703462400&Signature=PdTfbQQ-2xK7ioRoAKAqJfCwVBZIO1MDV6Do7sr~PPO58AUEEe8af~zybw19JmFSyeaYcdVvTfp0zRQKwIgWeLgp8VMuPDZU086kHK44BVzAfaUCF19oiyu2KUElUMcaxnTbrUySTdcAuQW6DGl1L0GVQO0cvVXpbA~G2F7greCMyyc2uZVTv0fq3hIyAQlOhG7oXEXFoCWB6ceTT-07jn7zKkJgRk3042Gpp1EbGKryNaizIOk5TT4BkjvqrjDnoDJZ00mMto0xUjL1sTzVscPKdcp~ZampRYdX24DGGijVI-1gifeQrSgt~wI0F88l18RjTVLmxhiuRLv7euYmnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="NO image">


        </img>
      </div>
      <br></br>
      <div className="qwe">
        <h3 className="mb-4 pb-4 text-4xl ml-8 mr-8 leading-tight text-[#8AA6AA]  animate__animated animate__fadeIn animate__delay-3s">
          From the industry leader: Exemplary BFS solutions for the
          pharmaceutical industry
        </h3>
        <h6 className="mb-4 pb-4 text-2xl ml-8 mr-8 leading-tight text-[#8AA6AA]  animate__animated animate__fadeIn animate__delay-3s" color="blue">
          "Our concepts are as individual as your requirements. See for
          yourself!"
        </h6>
        <br></br>
        <br></br><br></br>
        {/* <Card3Presentation/> */}
      </div>
      {/* className={`flex min-h-screen flex-col items-center justify-between py-24`} */}

      {/* 2. make sure our carousel container takes up the full screen width using w-screen */}
      <div className="md:px-14 mt-[5%] px-4 gap-10 flex flex-col  animate__animated animate__fadeInLeft animate__delay-4s">

        <div className="w-full flex flex-row md:gap-10 gap-[200px] md:overflow-auto overflow-scroll pb-10">
          {applicationContent.map((item, index) => (
            <div
              key={index}
              className="md:w-[25%] w-[100%]"
            >
              <ApplicationCard heading={item.heading} content={item.content} img={item.img} />
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
              One-stop partners have more to offer
            </h1>
            <br></br>
            <h5 className="text-xl  leading-tight mb-4 font-bold text-white kll">
              No matter what point you are at: With our experience and range of
              services, we are sure to get you ahead. Maybe so with these offers:
            </h5>
          </center><br></br>
            <a className="text-xs  leading-tight mb-4   text-white  tt" href="https://google.com">CONTRACT FILLING </a><br></br>
            <a className="text-xs  leading-tight mb-4 text-white  tt" href="https://google.com">PHARMA-SUITE-SERVICE </a><br></br>
            <a className="text-xs  leading-tight mb-4  text-white  tt" href="https://google.com">FACTORY PLANNING </a><br></br>
            <br></br>

          </div>
        </center>




        <br></br><br></br>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Application;
