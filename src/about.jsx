import logo from "./logo.svg";
import "./Stylesq.css";
import { NavbarDefault } from "./Navbar";
import { Button } from "@material-tailwind/react";
import we from "./qw.png";
import sdd from "./cder.png";
import uio from "./Frame 21430 (1).svg";
import { Link } from 'react-router-dom';
import huo from './assets/About/Frame 21449.svg'
import hj from "./Union1.jpg";
import CountUp from 'react-countup';
import "./Styles_abt2.css";
import pic from "./List.png";
import tasto from "./testicards.json";
import yy5 from "./assets/About/Micro Map.png";
import Slider from "./slider";
import TestimonialCard from "./tasticard";
import yy1 from "./assets/About/Frame 21443.png";
import yy2 from "./assets/About/Frame 21448.png";import yy3 from "./assets/About/Frame 21449.png";import yy4 from "./assets/About/Frame 21450.png";
import qwe from "./qwe.svg"
import y1 from "./y1.svg";
import y2 from "./y2.svg";import y3 from "./y3.svg";import y4 from "./y4.svg";
import y5 from "../src/assets/About/Rectangle 2810.svg";
import MedicalDevicesCard from "../src/components/MedicalDevices/MedicalDevicesCard";
import ServicesJson from "./components/Services/Services.json";
import Footer from "./components/Common/Footer/Footer";
import React, { useState, useRef, useEffect } from "react";
import yu from "./WhatsApp Image 2023-11-16 at 18.26 1.svg";
import a from "./Rectangle 57.svg";
import b from "./layer.svg";
import cc from "./WhatsApp Image 2023-11-23 at 13.48.59.jpeg";
import "./App.css";

function FaqItem({ question, answers, initiallyOpen }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [barHeight, setBarHeight] = useState(0);
  const answerRef = useRef(null);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
    Document.bgColor = "#282c34";
  };
  
  useEffect(() => {
    if (isOpen && answerRef.current) {
      setBarHeight(answerRef.current.clientHeight + 35 + "px"); // Set the height when answer is open
    } else {
      setBarHeight("auto"); // Set back to 'auto' when answer is closed
    }
  }, [isOpen]);
  
  return (
    // <center>
    // <div className="faq-item mb-4 text-xs leading-tight text-black container lm" onClick={toggleAnswer}>
    //   <div className={`question ${isOpen ? 'active' : ''}mb-4 text-xs leading-tight text-black question mb-4 text-sm leading-tight text-black `}>
    //   <span className="vertical-bar"></span> {/* Add a vertical bar element */}
    //     {question}
    //   </div>
    //   {isOpen && (
    //     <div className="answer">
    //       {answers.map((paragraph, index) => (
    //         <p key={index}>{paragraph}</p>
    //       ))}
    //     </div>
    //   )}
    // </div>
    // </center>
    <div className="faq-item">
      <div
        className={`question ${isOpen ? "active" : ""}`}
        onClick={toggleAnswer}
      >
        <div className="vertical-bar mt-2" style={{ height: barHeight }}></div>
        {question}
      </div>
      <br></br>
      {isOpen && (
        <div ref={answerRef} className={`answer ${isOpen ? "show" : ""}`}>
          {answers.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
}

function AboutUs() {
  
  return (
    <div>
      <div className="font-['ClashDisplay'] ">
        {/* <div><NavbarDefault /></div><br></br><br></br> */}
        <div>
          <div className="ui  animated-box animate__animated animate__fadeInLeft animate__delay-0s">
            <div className="bg-[url('./opp.png')] nn">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <center>
                <div className="flex flex-col rounded-lg bg-white md:max-w-6xl md:flex-row mm ggg sm:ml-24">
                  <div className="flex flex-col p-6 sm:ml-24">
                  <h6 className="mb-2 text-xs  sm:mr-8 ml-4 leading-tight text-[#8AA6AA] font-['ClashDisplay']">
                     WHO WE ARE
                    </h6>
                    <h3 className="mb-2 text-6xl  sm:mr-8 ml-4 leading-tight text-[#8AA6AA] font-['ClashDisplay']">
                      About Us
                    </h3>
                    <p className="mb-4  text-xs sm:mr-24 lg:w-96 md:w-64 uo  leading-tight text-[#8AA6AA] font-['ClashDisplay']">
                    MicroFab, a trailblazing company not only delivers exceptional packaging solutions but also facilitates the establishment of plants for the cosmetics industry. By choosing MicroFab, the team empowers the organization to set up state-of-the-art production facilities according to the unique needs. Our expertise extends ways beyond just design and manufacturing. With a focus on efficiency and innovation, MicroFab offers guidance every step of the way, ensuring that the cosmetic brand stands out with impeccable packaging. We streamline the production and adhere to high quality standards for your company.
                    </p>
                  </div>
                  {/* <br></br><br></br><br></br> */}
                  <img
                    className="h-96 lg:w-96 rounded-t-lg  ju aws jklk md:h-96  md:w-64  md:mr-24 sm:mr-24 md:rounded-none md:rounded-l-lg"
                    src={yu}
                    alt=""
                  />
                </div>
              </center>
              {/* <br></br><br></br> */}

              {/* </center> */}
<br></br><br></br>
              <div className=" flex flex-col p-6 text-white bg-[#8AA6AA] kmk lg:py-[30px] md:px-[100px] md:py-[70px] ">
                <h5 className="mb-4 text-5xl leading-tight text-white bg-[#8AA6AA] font-['ClashDisplay']">
                  Our Beliefs
                </h5>
                <p className="mb-4 text-[16px] text-white bg-[#8AA6AA] md:w-[65%] font-['ClashDisplay']">
                  {" "}
                  With our comprehensive approach that includes incorporation of
                  packaging technologies, installation, and maintenance, we help
                  enterprises to commence the BFS and FFS production journey.
                </p>
                <br></br>
                <br></br>
                {/* <div class="lg:grid-grid-cols-3 md:grid-cols-3 gap-8 gh bg-[#8AA6AA]"> */}
                <div className="md:grid grid-rows-1 lg:grid grid-cols-3 lg:grid grid-rows-1 gap-20 w-full hf">
                  <div className="col-span-1 md:col-span-1 lg:col-span-1 w-full mb-10">
                    <div className="w-full h-auto flex ">
                      <div className="text-8xl text-[#bac8ca] pr-4">1</div>
                      <div className="flex flex-col">
                        <div className="text-2xl font-['ClashDisplay']">INTEGRITY</div>
                        <p className="text-sm text-white w-[75%] font-['ClashDisplay']">
                          To earn trust of our customers with reliability and
                          honesty in all of our interactions, along with our
                          unwavering commitment.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-1 lg:col-span-1 w-full mb-10">
                    <div className="w-full flex ">
                      <div className="text-8xl text-[#bac8ca] pr-4">2</div>
                      <div className="flex flex-col">
                        <div className="text-2xl font-['ClashDisplay']">FORWARD-THINKING</div>
                        <p className="text-sm text-white w-[75%] font-['ClashDisplay']">
                          To make a difference by staying ahead in the market,
                          venturing unexplored domains, and ideating for a
                          change.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-1 lg:col-span-1 w-full mb-10">
                    <div className="w-full flex">
                      <div className="text-8xl text-[#bac8ca] pr-4">3</div>
                      <div className="flex flex-col">
                        <div className="text-2xl font-['ClashDisplay']">INNOVATION</div>
                        <p className="text-sm text-white w-[75%] font-['ClashDisplay']">
                          Striving for more effective solutions by actively
                          pursuing research and development, infusing fresh
                          perspectives, and exploring new technological avenues.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>
          {/* <h5 className="mb-2 text-2xl leading-tight">
                  Our latest blog posts
                </h5><br></br> */}
          {/* <div className="w-screen as h-160px okl">
            <Slider options={{ align: "center" }}>
              {tasto.map((tasto, i) => (
                // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
                // for mobile devices we use 90% width
                <div key={i} className="flex-[0_0_190%] md:flex-[0_0_23%] vvv">
                  <TestimonialCard {...tasto} />
                </div>
              ))}
            </Slider>
          </div> */}
          
          <center>
            <br></br>
            <br></br>
            <div className="flex flex-col rounded-lg bg-white md:max-w-6xl md:flex-row  animate__animated animate__fadeInRight animate__delay-1s">
              <div className="flex flex-col p-6">
                <p className="mb-4 text-5xl ddd leading-tight font-['ClashDisplay']  mr-4"><strong>
                  Industries that we serve</strong>
                </p>
                {/* <h5 className="mb-2 text-4xl leading-tight ll">
                  Lorem ipsum
                </h5> */}
                <center>
                <p className="mb-1 text-2xs ddd text-[#8AA6AA] leading-tight mr-4 pp font-['ClashDisplay']">
                At MicroFab, we have been serving the Pharmaceutical, Cosmetic, Food and the Chemical industry across the years. Our adept and motivated team of professionals, along with the state-of-the-art engineering facilities, undertake designing, manufacturing and delivering machinery to meet the requirements of our esteemed clients.
                </p>
                </center>
                
              </div>
             
              <br></br>
              <br></br>
              <br></br>
              {/* <br></br><br></br><br></br><br></br><br></br> */}

              {/* <img src={a} alt="no" /> */}
              {/* Your browser does not support the video tag. */}
            </div>
            
          </center>
         
          <br></br>
          <img className="cvfg opacity-[.09] " src ={qwe} alt="img"></img>

          
                   <div className="lg:flex z-2 flex-rows md:flex flex-cols sm:flex flex-cols sm:-mt-6 animate__animated animate__fadeInRight animate__delay-1s">
  {/* {[1, 2, 3, 4, 5, 6].map((index) => ( */}
  <div className="jkhj p-2 m-auto ">
  <div
      className={`md:m-2 lg:w-[22%] md:w-[250px] w-full flex flex-col shadow-lg rounded-[20px]`}
      
    >
    <div className="flex flex-col items-center md:h-[190px] w-full">
        <Link to="/pharmaceutical">
            <img
                className="w-48 h-40 p-2 object-cover"
                src={y1}
                alt=""
            />
            <p className="text-center text-[#8AA6AA]">Pharmaceuticals</p>
        </Link>
    </div>
</div><br></br>
<div
      className={`md:m-2 lg:w-[22%] sm:mt-24 md:w-[250px] w-full flex flex-col shadow-lg rounded-[20px]`}
      
    >
    <div className="flex flex-col items-center md:h-[190px] w-full">
        <Link to="/chemical">
            <img
                className="w-48 h-40 p-2 object-cover"
                src={y2}
                alt=""
            />
            <p className="text-center text-[#8AA6AA]">Chemicals</p>
        </Link>
    </div>
</div>
<br></br>
<div
      className={`md:m-2 lg:w-[22%] md:w-[250px] w-full flex flex-col shadow-lg rounded-[20px]`}
      
    >
    <div className="flex flex-col items-center md:h-[190px] w-full">
        <Link to="/cosmic">
            <img
                className="w-48 h-40 p-2  rounded-[16px] object-cover"
                src={y3}
                alt=""
            />
            <p className="text-center text-[#8AA6AA]">Cosmeticss</p>
        </Link>
    </div>
</div>
<br></br>
<div
      className={`md:m-2 lg:w-[22%] md:w-[250px] w-full flex flex-col shadow-lg rounded-[20px]`}
      
    >
    <div className="flex flex-col items-center md:h-[190px] w-full">
        <Link to="/food">
            <img
                className="w-48 h-40 p-2  rounded-[16px] object-cover"
                src={y4}
                alt=""
            />
            <p className="text-center text-[#8AA6AA]">Food</p>
        </Link>
    </div>
</div><br></br>
    <div
      className={`md:m-2 lg:w-[22%] md:w-[250px]  w-full flex flex-col shadow-lg rounded-[20px]`}
      
    >
      <div className="flex flex-col items-center md:h-[190px] w-full">
<Link to="/dairy">
            <img
                className="w-48 h-40 p-2  rounded-[16px] object-cover"
                src={y5}
                alt=""
            />
            <p className="text-center text-[#8AA6AA]">Dairy</p>
        </Link></div>

        </div>
</div>
    



  

  
  
  {/* ))} */}
</div>
          


{/* <div className="flex flex-row p-2 m-auto"> */}

   
  {/* </div> */}
          <br></br>



          {/* <div className="bg-[url('./piku.png')] jk">
            <br></br>
            <center>
              <div className="flex flex-col rounded-lg md:max-w-3xl md:flex-row mm">
                <center>
                  <div className="flex flex-col p-6 klkl">
                    <p>
                      <h5 className="mb-2 text-5xl leading-tight text-white  font-['ClashDisplay']">
                        <strong>Why choose MicroFab?</strong>
                      </h5>
                    </p>
                    <p className="mb-4 text-xl leading-tight text-white font-['ClashDisplay']">
                    With MicroFab, you can gain the most from cutting-edge innovations to evolve the company in the industry it’s destined for. While we are driven by passion to transform the packaging industry, we infuse every endeavour with a blend of technical brilliance and utmost dedication.
                    </p>
                  </div>
                </center>
              </div>
              <Button
                variant="filled"
                size="lg"
                color="white"
                className="ab h-12 w-32 rounded-full bg-white text-black font-['ClashDisplay']"
              >
                <strong> Read More </strong>
              </Button>
            </center>
            <br></br>
          </div> */}
           <div className="flex frty mt-12 animate__animated animate__fadeInLeft animate__delay-2s">
      {/* Block 1 - SVG Image */}
      <div className="bg-white dfdf frty mb-24">
        {/* Replace 'your-svg-file.svg' with the actual path to your SVG file */}
        <img src={uio} alt="SVG Image" className="w-full xdf" />
      </div>

      {/* Block 2 - Text and Boxes */}
      <div className="flex-1 h-96 mb-24 sm:ml-0 bg-white p-8  frty ">
      <h3 className="lg:ml-0 sm:ml-0 text-xl text-[#8AA6AA]   mr-32 m-auto leading-tight   kk pp font-['ClashDisplay']"><strong>Key Figures</strong>
      </h3>
      <h3 className="mb-4 text-2xs text-[#8AA6AA] mr-32 m-auto leading-tight  pp  font-['ClashDisplay']">Phenomenal business success has now made us proud about 
how we have flourished in the competitive era.
      </h3>

        <div className="flex flex-wrap -mx-4 ml-auto mt-22 frty">
          {/* Box 1 */}
          <div>
          <div className="w-36 h-36 md:w-30 p-6 md:m-1 mb-2 bg-[#8AA6AA] text-white awsw ll kk pp es">
          <h3 className="text-2xl text-white  leading-tight -mb-6 ll font-['ClashDisplay']"><center><strong>
              <CountUp end={400} duration={7} separator="," /> {/* Counting animation for 200 */}</strong>+</center>
             
            </h3>
         <br></br> 
      <h3 className=" text-xs text-white w-full m-0 leading-tight  ll font-['ClashDisplay']"><center>Cutting-Edge Machinery</center>
      </h3>
          </div>

          {/* Box 2 */}
          <div className="w-36 h-36 md:w-30 p-6 m-auto lg:m-1 mb-2 bg-[#8AA6AA] text-white awsw kk pp ll ">
          <h3 className="text-2xl text-white  leading-tight -mb-6 ll font-['ClashDisplay']"><center><strong>
              <CountUp end={90} duration={7} separator="," /> {/* Counting animation for 200 */}</strong>%</center>
              
            </h3><br></br>
      <h3 className=" text-xs text-white w-full m-0 leading-tight  ll font-['ClashDisplay']"><center>Customer Retention & repeat orders</center>
      </h3>
          </div>
          </div>
          <div>
          {/* Box 3 */}
          <div className="w-36 h-36 md:w-30 p-6 md:m-1 mb-2 bg-[#8AA6AA] fg text-white awsw kk pp ll es">
          <h3 className="text-2xl text-white  leading-tight -mb-6 ll font-['ClashDisplay']"><center><strong>
              <CountUp end={200} duration={7} separator="," /> {/* Counting animation for 200 */}</strong>+</center>
              
            </h3><br></br>
      <h3 className=" text-xs text-white w-full m-0 leading-tight  ll font-['ClashDisplay']"><center>Premium molds from
different origins</center>
      </h3>
          </div>

          {/* Box 4 */}
          <div className="w-36 h-36 md:w-30 p-6 lg:m-1 mb-2 bg-[#8AA6AA] fg text-white awsw kk pp ll ">
          <h3 className="text-2xl text-white  leading-tight -mb-6 ll font-['ClashDisplay']"><center><strong>
              <CountUp end={100000} duration={7} separator="," /> {/* Counting animation for 200 */}</strong>+ sq.ft</center>
          
            </h3><br></br>
      <h3 className=" text-xs text-white w-full m-0 leading-tight  ll font-['ClashDisplay']"><center>Workplaces across strategic locatio30</center>
      </h3>
          </div>
          </div>
        </div>
      </div>
    </div>
<br></br>
<div className="flex flex-col h-96 hhj rounded-lg bg-white md:max-w-6xl md:flex-row mx-auto gggg  animate__animated animate__fadeIn animate__delay-3s">
              <div className="flex flex-col p-6 -mt-48">
                <p className=" text-5xl sm:text-4xl leading-tight z-2 text-[#8AA6AA] font-['ClashDisplay'] kk mt-64 pp ">
                  Key People
                </p>
                {/* <h5 className="mb-2 text-4xl leading-tight ll">
                  Lorem ipsum
                </h5> */}
                <center>
                <p className="mb-1 text-3xl  text-black leading-tight z-2 pp ll font-['ClashDisplay']"><strong>
                Our entire team of mavericks are dedicated to offer packaging solutions and support your business.</strong> </p>
                </center>
                
              </div>
             
              <br></br>
              <br></br> <br></br>
              <br></br>
              {/* <br></br><br></br><br></br><br></br><br></br> */}

              {/* <img src={a} alt="no" /> */}
              {/* Your browser does not support the video tag. */}
            </div>
            <div className="mr-8 mt-3 gtu overflow-x-auto overflow-y-hidden flex flex-rows animate__animated animate__fadeIn animate__delay-3s">

<div className="flex flex-row mt-12 lp overflow-x-auto cfr">

  <div className="flex flex-col items-center">
    <img
      className="opp px-2 h-full object-cover"
      src={yy1}
      alt=""
    />
  </div>

  <div className="flex flex-col items-center">
    <img
      className="opp px-2 h-full object-cover"
      src={yy2}
      alt=""
    />
  </div>

  <div className="flex flex-col items-center">
    <img
      className="opp px-2 h-full object-cover"
      src={yy3}
      alt=""
    />
  </div>

  <div className="flex flex-col items-center">
    <img
      className="opp px-2 h-full object-cover"
      src={yy4}
      alt=""
    />
  </div>

</div>
</div>

          <br></br>
        


{/* <img src={huo} alt=""></img> */}
     
        <br></br>
        {/* <br></br>
        <h5 className="mb-2 text-3xl leading-tight text-black font-['ClashDisplay']">
          <center>FAQ</center>
        </h5>
        <br></br> */}
    
        {/* <div className="flex flex-col p-6 container">

          <div className="cv pl-[100px] pr-[10px]">
            <br></br>
            <FaqItem
              question="What is BFS and FFS Technology, and how does It work? "
              answers={[
                "Blow-Fill-Seal (BFS) and Form-Fill-Seal (FFS) technologies are advanced manufacturing processes for aseptic packaging. BFS involves forming a container, filling it with the product, and sealing it in one continuous operation. FFS, on the other hand, is a broader term encompassing various methods of forming and filling containers before sealing.",
              ]}
              initiallyOpen={true}
            />
            <br></br>
            <FaqItem
              question="How energy-efficient are your BFS and FFS machines? "
              answers={[
                "We prioritize energy efficiency in our machine designs. Our systems incorporate advanced technologies to minimize energy consumption, contributing to both cost savings and environmental sustainability.",
              ]}
              initiallyOpen={true}
            />
            <br></br>
            <FaqItem
              question="What sets your BFS and FFS machines apart from others in the market?"
              answers={[
                "Our machines stand out due to their state-of-the-art technology, customizable features, and a commitment to precision and reliability. We prioritize innovation to ensure our clients have a competitive edge in their respective industries.",
              ]}
              initiallyOpen={true}
            />
            <br></br>
            <FaqItem
              question="Can your machines be customized for specific production needs? "
              answers={[
                "Yes, we offer customization options to tailor our machines to the unique production requirements of our clients. Our engineering team works closely with clients to understand their needs and deliver bespoke solutions.",
              ]}
              initiallyOpen={true}
            />
            <br></br>
            <FaqItem
              question="Do you provide turnkey solutions for BFS and FFS projects? "
              answers={[
                "Absolutely. We provide comprehensive turnkey solutions, from initial design and manufacturing to installation and ongoing support. Our turnkey approach ensures a seamless and efficient process for our clients.",
              ]}
              initiallyOpen={true}
            />
            <br></br>
            <FaqItem
              question="What quality control measures are implemented in your manufacturing process?"
              answers={[
                "Our manufacturing process adheres to rigorous quality control standards. We implement thorough testing and inspection protocols at every stage to guarantee the highest quality and performance of our BFS and FFS machines..",
              ]}
              initiallyOpen={true}
            />
          </div>
        </div> */}
         <div className="flex flex-col rounded-lg lplpp mt-12 jlk bg-white md:max-w-6xl md:flex-row m-auto  animate__animated animate__fadeInLeft animate__delay-4s">
              <div className="flex flex-col -mt-12 p-6">
                <p className=" text-5xl leading-tight text-[#8AA6AA] kk pp font-['ClashDisplay']">
                Project  by Region
                </p>
                {/* <h5 className="mb-2 text-4xl leading-tight ll">
                  Lorem ipsum
                </h5> */}
                <center>
                <p className=" text-4xl text-black leading-tight pp ll font-['ClashDisplay']"><strong>
                Here’s a glimpse of our projects by various regions across countries</strong> </p>
                </center>
              
              </div>
              
              <br></br>
              <br></br>
              <br></br>
              {/* <br></br><br></br><br></br><br></br><br></br> */}

              {/* <img src={a} alt="no" /> */}
              {/* Your browser does not support the video tag. */}
            </div>
    
           <div className="flex justify-end mt-8 mr-8">
    <div className="w-full h-80 object-cover md:w-full md:p-4 sm:-mt-24">
        <img className="w-full h-full object-fit ml-3 mr-3 mt-12 lg:mt-12" src={yy5} alt="" />
    </div>
</div>
<div className="flex flex-col mt-24 -mb-12 p-6">
                <p className=" text-5xl leading-tight text-[#8AA6AA] ll pp font-['ClashDisplay']">
                Project  by Region
                </p>
                {/* <h5 className="mb-2 text-4xl leading-tight ll">
                  Lorem ipsum
                </h5> */}
              
                <p className=" text-4xl text-black leading-tight pp ll font-['ClashDisplay']"><strong>
                Here’s a glimpse of our projects by various regions across countries</strong> </p>
                
              
              </div>
<div className="md:pl-6 flex flex-wrap gap-7 mt-24 md:gap-5 md:gap-y-4 md:p-0 p-8 md:place-items-start place-items-center md:justify-start justify-center  animate__animated animate__fadeInRight animate__delay-2s">
        {ServicesJson.map((device, index) => (
          <MedicalDevicesCard
            key={index} // Ensure each card has a unique key
            heading={device.heading}
            content={device.content}
            img={device.img}
          />
        ))}
      </div>

      </div>
      
      <Footer />
    </div>
    </div>
  );
}

export default AboutUs;
