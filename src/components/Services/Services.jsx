import React, { useState } from "react";
import './services.css';
import pro from "./images/Frame 21516 (2).svg";
import pro2 from "./images/Frame 21518.svg";
import pro3 from "./images/image 85.svg";
import pro4 from "./images/Frame 21520.svg";
import pro6 from "./images/image 86.svg";
import MedicalDevicesCard from "../MedicalDevices/MedicalDevicesCard";
import Footer from "../Common/Footer/Footer";
import ServicesJson from "./Services.json";
import ServicesJson1 from "./services1.json"
export default function Service() {

  const [openCardIndex, setOpenCardIndex] = useState(null);

  const handleCardToggle = (index) => {
    if (openCardIndex === index) {
      setOpenCardIndex(null); // Close the card if it's already open
    } else {
      setOpenCardIndex(index); // Open the clicked card
    }
  };

  return (
    <>
      {/* <NavbarDefault /> */}
      <br></br><br></br><br></br><br></br>
      <div className="serv1">
        <div>
          <br></br><br></br>
          <h3 className="mb-4 pb-4 text-3xl leading-tight text-[#8AA6AA] serv3">
            Service Solutions
          </h3>
          <br></br>

          <h3 className="mb-4  pb-4 text-3xl leading-tight text-black zx  animate__animated animate__fadeInLeft animate__delay-0s">
            Experience the difference with us as firmly stand with our motto to offer incredible services every step of the way
          </h3>

          <h6 className="text-2xs leading-tight text-black serv2  animate__animated animate__fadeInRight animate__delay-0s" color="clack">
            While we dabble in providing exceptional customer service, you can connect with us for project management and contract manufacturing.
          </h6>
          <br></br><br></br><br></br><br></br>
          <div className="serv4"></div>
          <br></br>


          <div className="flex flex-col rounded-lg text-black md:max-w-5xl md:flex-row  animate__animated animate__fadeInLeft animate__delay-1s">
            <img
              className="h-64 w-full rounded-t-lg object-cover ds md:h-auto md:w-64 md:rounded-none md:rounded-l-lg order-2 mn md:order-"
              src={pro}
              alt=""
            />
            <div className="flex flex-col justify-start order-1 md:order-1">
              <h3 className="mb-2 pb-4 text-4xl kl leading-tight text-black">
                Project Construction & Management </h3>
              <h6 className="text-2xs leading-tight text-black kl" color="clack">
                As you get in touch with us to outline more about your project, our dynamic and forward-thinking team takes charge of overseeing and guiding the project execution from its earliest stages. Ultimately, our focus remains steadfast on ensuring customer delight and fulfilling business requirements by delivering a feasible project within the allocated budget, while prioritizing its functionality.
              </h6>

            </div>
          </div>
          <br></br><br></br>
        </div></div>
      <div className="md:pl-6 flex flex-wrap gap-7 md:gap-5 md:gap-y-4 md:p-0 p-8 md:place-items-start place-items-center md:justify-start justify-center  animate__animated animate__fadeInRight animate__delay-2s">
        {ServicesJson.map((device, index) => (
          <MedicalDevicesCard
            key={index} // Ensure each card has a unique key
            index={index}
            heading={device.heading}
            content={device.content}
            img={device.img}
            isOpen={openCardIndex === index}
            onToggle={handleCardToggle}
          />
        ))}
      </div>
      <br></br><br></br>
      <div className="serv1">
        <div>
          <div className="serv4"></div>
          <br></br>


          <div className="flex flex-col rounded-lg text-black md:max-w-5xl md:flex-row  animate__animated animate__fadeInLeft animate__delay-3s">
            <img
              className="h-64 w-96 rounded-t-lg object-cover  md:h-auto md:w-120 md:rounded-none md:rounded-l-lg order-2  mmn animate__animated animate__fadeInLeft animate__delay-3s  md:order-"
              src={pro2}
              alt=""
            />
            <div className="flex flex-col justify-start order-1 md:order-1">
              <h3 className="mb-2 pb-4 text-4xl kl leading-tight text-black">
                Contract manufacturing</h3>
              <h6 className="text-2xs leading-tight text-black xz hj" color="clack">
                When the entire gamut of production operational activities becomes cumbersome, you can approach us at that instance. With MicroFab, you can work closely with professionals that possess specialized skills and the expertise. With advanced technologies, you can further expect higher quality products and an improvement in the production process.
              </h6>
            </div>
          </div>
          <br></br>


          <div className="flex flex-col rounded-lg text-black md:max-w-5xl md:flex-row  animate__animated animate__fadeInRight animate__delay-4s">
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-96 md:rounded-none md:rounded-l-lg order-2 bbv md:order-"
              src={pro4}
              alt=""
            />
            <img
              className="h-64 w-full rounded-t-lg object-cover  md:h-auto md:w-120 md:rounded-none md:rounded-l-lg order-2 bv md:order-1"
              src={pro3}
              alt=""
            />
          </div>
          <br></br><br></br><br></br><br></br>
          <div className="serv4"></div>
          <br></br>


          <div className="flex flex-col rounded-lg text-black md:max-w-5xl md:flex-row">
            <img
              className="h-64 w-full animate__animated animate__fadeInRight animate__delay-4s max-[580px]:ml-4 sm:ml-12 md:ml-24 rounded-t-lg object-cover bv md:h-auto md:w-72 md:rounded-none md:rounded-l-lg md:order-1"
              src={pro6}
              alt=""
            />
            <div className="flex flex-col justify-start order-1 md:order-2 op mr-6  animate__animated animate__fadeInLeft animate__delay-4s">
              <h3 className="mb-2 pb-4 text-4xl leading-tight kl zx text-black">
                Advisory Services </h3>
              <h6 className="text-2xs leading-tight text-black kl zx" color="clack">
                When perplexity is still reigning while the project implementation is yet to commence, we offer advisory services with experience. While we help you with technology transfer and ensure that everything you need is incorporated on premise, we conduct market research and a diligent study about sites across different locations. For project success, we also help you sift through the technical complexities so that you can focus on what really matters.
              </h6>
            </div>
          </div>
        </div></div>
      <br></br><br></br><br></br>
      <div className="md:pl-6 flex flex-wrap gap-7 md:gap-5 md:gap-y-4 md:p-0 p-8 md:place-items-start place-items-center md:justify-start justify-center  animate__animated animate__fadeIn animate__delay-5s">
        {ServicesJson1.map((device, index) => (
          <MedicalDevicesCard
            key={index} // Ensure each card has a unique key
            index={index}
            heading={device.heading}
            content={device.content}
            img={device.img}
            isOpen={openCardIndex === index}
            onToggle={handleCardToggle}
          />
        ))}
      </div>



      <Footer />
    </>
  )
};
