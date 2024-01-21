import React from "react";
import './prod.css';

// import pro from "./images/Frame 21516.svg";
import pro2 from "./images/image 47.svg";
import pro3 from "./images/image 48.svg";
import pro4 from "./images/image 49.svg";
import s3 from "./images/Rectangle 49 (5).svg";
import s1 from "./images/Rectangle 48.svg";
import s2 from "./images/Rectangle 48 (2).svg";
import a1 from "./images/Group 64 1.svg";
import a2 from "./images/Frame 21516 (1).svg";
import b1 from "./images/Rectangle 49 (1).svg";
import b2 from "./images/4.svg";
import b3 from "./images/1.svg";
import b4 from "./images/3.svg";
import MedicalDevicesCard from "./ProductCard";
import Footer from "../Common/Footer/Footer";
import TurnKeySolutionsData from "./prodt.json";

import { Icon } from "@iconify/react";
export default function Product() {
  return (
    <>
      {/* <NavbarDefault /> */}
      <br></br><br></br><br></br><br></br>
      <div className="serv1 ">
        <br></br><br></br>
        <h3 className="mb-4 pb-4 text-3xl leading-tight text-[#8AA6AA] serv3  animated-box animate__animated animate__fadeInLeft">
          Product solutions
        </h3>
        <br></br><br></br><br></br>

        <h3 className="mb-4  pb-4 text-4xl sm:text-2xl hgf leading-tight text-black  animated-box animate__animated animate__fadeInLeft">
       <strong> Our solutions ensure ease of maintaining machines</strong></h3>

        <h6 className="text-2xs leading-tight text-black serv2 animated-box animate__animated animate__fadeInRight" color="clack">
        MicroFab’s dedicated team is always present round-the-clock to assist you in every way. Our dedicated team also conducts specialized training sessions, empowering your personnel with the skills for optimal utilization of machines.
        </h6>
        <br></br><br>
        </br>
      </div>
     <div className="oo">
      <h3 className="mb-4 pb-4 hhk text-4xl ml-4 leading-tight text-black vbb  animated-box animate__animated animate__fadeInLeft animate__delay-1s">
        Machines</h3>
      <h6 className="text-xl  leading-tight text-black ml-4 vbb  animated-box animate__animated animate__fadeInRight animate__delay-1s" color="clack">
        While we dabble in providing exceptional customer service, you can connect with us for project management and contract manufacturing.
      </h6>
      </div>
      <br></br>

      <div className="md:pl-16 flex flex-wrap gap-7 md:gap-4 md:gap-y-8 md:p-0 p-8 md:place-items-start place-items-center md:justify-start justify-center  animated-box animate__animated animate__fadeIn animate__delay-1s">
        {TurnKeySolutionsData.map((device, index) => (
          
          <MedicalDevicesCard
            key={index} // Ensure each card has a unique key
            heading={device.heading}
            content={device.content}
            img={device.img}
            link={device.link}
          />
        ))}
      </div>
      <br></br>


      <br></br>
      <div className="serv1 animated-box animate__animated animate__fadeInRight animate__delay-1s">
        <div className="serv4"></div>
        <br></br>
        <br></br><br></br>

        <div className="flex flex-col rounded-lg  text-black md:max-w-5xl md:flex-row nnnn">
          <img
            className="w-64 rounded-t-lg object-cover zz kkkl mt-12 md:w-48 md:rounded-none md:rounded-l-lg md:order-1"
            src={s3}
            alt=""
          />

          <img
            className="w-96 df max-[1180px]:mt-12 max-[1180px]:mr-12 max-[1180px]:ml-2 max-[1180px]:w-64 rounded-t-lg dffp cgh object-cover ml-8  md:h-auto md:w-96 md:rounded-none md:rounded-l-lg md:order-1"
            src={s2}
            alt=""
          />
          <img
            className="w-96  rounded-t-lg object-cover md:w-96 md:rounded-none md:rounded-l-lg md:order-1 as"
            src={s1}
            alt=""
          />
          <div className="flex flex-col justify-start order-1 md:order-1 11 pok">
            <h3 className="mb-2 pb-4 text-5xl leading-tight text-black xd bh zs -mr-3 pok">
              
              After sale
              service </h3>
            <h6 className="text-xl leading-tight text-black serv7 -mr-64 bh fui" color="clack">
            At MicroFab, our dedication to excellence extends beyond the point of purchase. We take pride in providing comprehensive after-sales services to ensure that your experience with our products and services remain seamless, reliable, and maximally productive.
            </h6></div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="serv4 serv1"></div>
      <br></br>


      <div className="flex flex-col rounded-lg text-black md:max-w-4xl lg:max-w-6xl  sm:max-w-3xl sm:flex-row md:flex-row  animated-box animate__animated animate__fadeIn animate__delay-2s">
        <img
          className="h-48 w-auto rounded-t-lg object-cover qwer md:h-auto md:w-full md:rounded-none md:rounded-l-lg md:order-1"
          src={a1}
          alt=""
        />
        <img
          className="w-auto rounded-t-lg object-cover max-[1180px]:w-80 max-[1180px]:ml-8 max-[1180px]:mb-4 md:h-auto md:w-full md:rounded-none md:rounded-l-lg md:order-3"
          src={a2}
          alt=""
        />

        <div className="flex flex-col justify-start order-2 md:order-2 xd gh  animated-box animate__animated animate__fadeInLeft animate__delay-3s">
          <h3 className="mb-2 pb-4 text-5xl md:text-5xl sm:text-3xl leading-tight text-black xd fgi">
            Machine
            upgradisation</h3>
          <h6 className="text-xl leading-tight text-black xd fgi" color="clack">
            When you think about machine upgrades and modernization, we walk miles ahead to optimize the older models with significant modifications. This, eventually, enhances the overall efficiency and the quality of the products. It may sound easy to replace the existing components. But, if there are no suitable components, then our experienced engineers develop special solutions.  </h6></div>
      </div>
      <div className="serv1">
        <div>
          <br></br><br></br><br></br><br></br><br></br>
          <div className="serv4"></div>
          <br></br><br></br><br></br>


          <div className="flex flex-col rounded-lg text-black md:max-w-5xl md:flex-row">
            <img
              className="h-120 w-full gghh cvf animated-box animate__animated animate__fadeInRight animate__delay-4s rounded-t-lg object-cover  md:h-auto lg:w-120 md:w-96 md:rounded-none md:rounded-l-lg order-2 mmn md:order-"
              src={pro2}
              alt=""
            />

            <div className="flex flex-col justify-start order-1 md:order-1 gghh  animated-box animate__animated animate__fadeInRight animate__delay-4s">
              <h3 className="mb-2 pb-4 md:text-5xl text-5xl hhjj  leading-tight text-black">
              Refurbished Machines</h3>
              <h6 className="text-xl " color="clack">
              Our refurbished machines offer the perfect blend of performance and value. By breathing new life into pre-owned equipment, we make cutting-edge technology accessible at a fraction of the cost, all while promoting eco-friendly practices. 
  </h6><br></br><h6 className="text-xl ">
Note: The images used for this section is for reference purpose only</h6>

            </div>
          </div>
          <br></br>


          <div className="flex flex-col  rounded-lg gghh text-black md:max-w-5xl md:flex-row  animated-box animate__animated animate__fadeInLeft animate__delay-5s">
            <img
              className="h-96 w-full  rounded-t-lg gghh cvf  object-cover  md:h-auto md:w-96 md:rounded-none md:rounded-l-lg order-2  animated-box animate__animated animate__fadeInLeft animate__delay-5s md:order-"
              src={pro4}
              alt=""
            />
            <img
              className="h-64 w-full  rounded-t-lg  object-cover ml-12 md:h-auto md:w-120 md:rounded-none md:rounded-l-lg order-2 bv animated-box animate__animated animate__fadeInLeft animate__delay-5s md:order-1"
              src={pro3}
              alt=""
            />
          </div>
          <br></br><br></br>
        </div>
        <br></br><br></br><br></br>
        <div className="serv1">
          <div className="serv4"></div>
          <br></br>


          <div className="flex flex-col rounded-lg text-black md:max-w-9xl md:flex-row  animated-box animate__animated animate__fadeInRight animate__delay-6s">
            {/* <img
    className="vf w-full rounded-t-lg object-cover ee  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg md:order-3"
    src={b1}
    alt=""
  /> */}
            <img
              className="w-full ml-96 gghh  fdr -mt-10 mb-8  rounded-t-lg object-cover  md:h-196 md:w-64 md:rounded-none md:rounded-l-lg md:order-3"
              src={b2}
              alt=""
            />
            <img
              className="w-56 m-8 h-64 ml-24 fdr -mt-8 rounded-t-lg object-cover  md:w-56 md:rounded-none md:rounded-l-lg md:order-3"
              src={b3}
              alt=""
            />
             <img
              className="w-96 m-8 h-48 ser fdr max-[1180px]:ml-0 mt-64 -mb-4  -ml-64  rounded-t-lg object-cover  md:w-96 md:rounded-none md:rounded-l-lg md:order-3"
              src={b4}
              alt=""
            />
            <div className="flex flex-col justify-start order-1 md:order-1 xd xdd ">
              <h3 className="mb-2 pb-4 text-5xl leading-tight text-black hdfc fgi xd">
                Medical devices</h3>
              <h6 className="text-xl leading-tight text-black hdfc fgi -mr-64" color="clack">

              In the healthcare sector, MicroFab understands the criticality of
choosing quality medical equipment. While serving patients, we
ensure that the device is safe to use. We also develop designs for
devices which are apt for using, with comfort. </h6>
              <a
              href="/medicalDevices"
                type="submit"
                className="bg-[#8AA6AA] mt-4 md:mt-4 text-white px-4 py-2 hdfc w-[200px] rounded-md"
              >
              KNOW MORE
              </a>
            </div>
          </div>

        </div>
      </div>

      <Footer />


    </>
  )
};
