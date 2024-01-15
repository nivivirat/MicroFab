import logo from "./appli.png";
// import back1 from"../../back1.png";
// import bac1 from "./bac1.svg"
import "./Style_tech.css";
import sss from "./MicroFab Website – Figma - Google Chrome 23-11-2023 02_42_44 PM.png";
import sts from "./blow.png"
import intr from "./Introducing.png";
import logos from "./logos2.svg";
import pharma from "./pill.svg";
import j from "./jabu.png"
import { Button } from "@material-tailwind/react";
import { NavbarWithMegaMenu } from "./packnav";
import { Card3Presentation } from "./cards";
import { HorizontalCard } from "./one-stop";
import Slider from "./slider";
// import { AppliCard } from "./testicard"
import testimonials from "./testimonials.json";
import { useState } from "react";
import Footer from "./components/Common/Footer/Footer";
export default function Technology() {
  return (
    <div>
      <span className="qaz">
        <div className="qa">
          <h3 className="mb-6 w-full pb-8 lg:text-7xl md: text-5xl sm:text-3xl leading-tight text-[#8AA6AA]  df">
            <strong>
            We revolutionize the way of filling liquids or semi-solids
            </strong>
          </h3>
          <span>
            <h6
              className="lg:text-3xl md:text-2xl sm:text-xl leading-tight text-[#8AA6AA]  sd"
              color="blue"
            >
              The technology is efficient and
assures high level of sterility
during the manufacturing
process.
            </h6>{" "}
            <br></br>
          

        <button className="bg-[#8AA6AA] dd hover:bg-blue-700 text-white font-bold py-2 px-20 rounded m-2">
          Explore
        </button>
        </span>
        </div>
        <div>
          <img
            className="h-106 w-full object-cover object-center poi"
            src={logos}
            alt="nature image"
          />
        </div>

        {/* <br></br>
          <br></br> */}
      </span>
      <br></br>
      {/* <div className="flex justify-center sm:px-12 p-8 "> */}
      <center>
        {" "}
        <img
          className="object-scale-up  rounded-md m-auto h-full w-full  dc"
          src={sss}
          alt="yu"
        ></img>
        {/* </div> */}
      </center>
      <div>
        <center>
          <div className="flex flex-col rounded-lg bg-white md:max-w-7xl md:flex-row mm">
            <div className="flex flex-col p-10">
              <img
                className="object-scale-down  rounded-md m-auto max-h-full  w-screen"
                src={sts} alt="yu"
              ></img>
              <br></br>
              <br></br>
              <h6 className="mb-8  pb-2 w-120 text-xl leading-tight text-black kl">
                <strong>Blow: </strong> The BFS process begins with the extrusion of plastic granules into a parison, a hollow tube-like structure. This parison is then enclosed within a mold
              </h6>
              <br></br>
              <h6 className="mb-6  pb-2 text-xl leading-tight text-black kl">
                <strong>Fill: </strong>Once the mold is closed, the parison is filled with the product, typically a sterile liquid or pharmaceutical solution. The precise volume is carefully controlled to ensure accuracy and consistency.
              </h6>
              <br></br>
              <h6 className="mb-4  pb-2 text-xl leading-tight text-black kl">
                <strong>Seal: </strong> After filling, the parison is sealed at both ends, forming a hermetically sealed container. This step ensures the product's sterility and protection from external contaminants.
              </h6>
            </div>
          </div>
        </center>
      </div>
      <div className="tgb bg-[#8AA6AA]">
        <div className="container">
          <div className="text-box ">
            <h2 className="mb-4 pb-4 text-5xl leading-tight text-white">
              <strong>ADVANTAGES</strong>
            </h2>
            <p className="mb-4 pb-1 text-6xl leading-tight text-white">
            Advantages of the BFS Technology
            </p>
          </div>
          {/* <div className="image-box"> */}
          <img
            className="image-box"
            src={j}
            alt="Large Image"
          />
          {/* </div> */}
        </div>
        <div className="container ">
          <div className="card-container">
            <div className="card">
              <h6 className="mb-4 text-xs leading-tight text-black kl">
                <br></br>
                <strong>
                  Reduced Environmental Impact<br></br> <br></br>{" "}
                </strong>{" "}
                BFS mitigates the need of components for
packaging. This reduces considerable waste
and promotes a more sustainable approach
to pharmaceutical packaging.
              </h6>
              {/* <p>Text for Card 1 goes here.</p> */}
            </div>
            <div className="card">
              <h6 className="mb-4 text-xs leading-tight text-black kl">
                <br></br>
                <strong>
                Enhances Product Integrity<br></br>
                  <br></br>{" "}
                </strong>
                As the BFS technology seals the
container hermetically, it safeguards
pharmaceutical products from
oxygen, and contamination,
thereby preserving the efficacy.
              </h6>
              {/* <p>Text for Card 1 goes here.</p> */}
            </div>
            <div className="card">
              <h6 className="mb-4 text-xs leading-tight text-black kl">
                <br></br>
                <strong>
                Enhances cost-efficiency<br></br>
                  <br></br>{" "}
                </strong>
                As the step of forming the container is
seamlessly integrated with filling and
sealing through a single system, the
technology reduces labor, energy and 
material costs. This increases cost-
efficiency even during batch 
production.
              </h6>
              {/* <p>Text for Card 1 goes here.</p> */}
            </div>
            <div className="card">
              <h6 className="mb-4  text-xs leading-tight text-black kl">
                <br></br>
                <strong>
                Swift & Streamlined production<br></br> <br></br>{" "}
                </strong>
                BFS technology allows for rapid production and streamlined scale-up, making it an ideal choice for meeting market demands quickly and efficiently.
              </h6>
              {/* <p>Text for Card 1 goes here.</p> */}
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
      <div className="w-screen">
        <Slider options={{ align: "center" }}>
          {testimonials.map((testimonial, i) => (
            // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
            // for mobile devices we use 90% width
            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_23%]">
              <div className="py-4 px-4 h-96 bg-white shadow-lg rounded-lg my-20">
               

                {/* <h2 className="text-[#8AA6AA] text-3xl font-semibold">{props.title}</h2> */}
                <div>
                  <div className="asdf">
                    <h3 className="mb-4 border-b pb-4 text-3xl leading-tight text-[#8AA6AA] kkk ">
                     
                      {{ ...testimonial }.title}
                      &nbsp;
                    </h3>
                    {/* <spacer></spacer> */}
                  </div>

                  {/* <h5 className="mt-2 text-gray-600 text-md kkk">
                    <strong>{{ ...testimonial }.content}</strong>
                  </h5> */}
                  <h5 className="mt-2 text-gray-600 kkk">
                    {{ ...testimonial }.author}
                  </h5>
                 
                  {/* <button className="btn btn-blue">
  Button
</button> */}
                </div>
                {/* <div className ="mt-2 text-gray-600flex justify-end mt-4 pyu text-[#8AA6AA]">Blow-Fill-Seal, Technology </div>
      <div className="flex justify-end mt-4 mt-2">
      <div className="flex flex-row place-items-center gap-3">
                    <a className="text-[#8AA6AA] font-extrabold">Read more</a>
                    <img
                      src={arrow_right}
                      className="bg-[#8AA6AA] h-6 p-0.5 rounded-full"
                      alt="Read more"
                    />
        
        </div>
        
      </div> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Footer></Footer>
    </div>
  );
}
