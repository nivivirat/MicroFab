import { useState } from "react";
import top from "../../assets/medicalDevices/top.svg";
import Footer from "../Common/Footer/Footer";
import MedicalDevicesCard from "./MedicalDevicesCard";
import medicalDevicesData from "./MedicalDevicesData.json";

export default function MedicalDevices() {

  const [openCardIndex, setOpenCardIndex] = useState(null);

  const handleCardToggle = (index) => {
    if (openCardIndex === index) {
      setOpenCardIndex(null); // Close the card if it's already open
    } else {
      setOpenCardIndex(index); // Open the clicked card
    }
  };


  return (
    <div>
      <div className="md:mt-[80px] mt-[40px] md:pt-0 pt-[30px] md:px-[8%] px-[3%]">
        {/* medical devices */}
        <div className="md:p-10 p-4 flex md:flex-row flex-col justify-between md:gap-0 gap-10">
          {/* left content */}
          <div className="md:w-[60%] flex flex-col md:gap-6 gap-4">
            <div className="bg-primary h-1 w-5"></div>
            <div>
              <p className="font-semibold text-4xl tracking-widest">
                Medical Devices
              </p>
            </div>
            <div className="w-[90%]">
              <p className="font-thin text-[#67675F] text-[18px] md:leading-7 md:tracking-wide">
                In the healthcare sector, MicroFab understands the criticality
                of choosing quality medical equipment. While serving patients,
                we ensure that the device is safe to use. We also develop
                designs for devices which are apt for using, with comfort.
              </p>
            </div>
          </div>

          {/* img */}
          <div className="rounded-[20px] h-[300px]">
            <img
              src={top}
              className="object-cover h-full w-full"
              alt="top"
            ></img>
          </div>
        </div>

        {/* Medical devices we Provide */}
        <div>
          {/* content */}
          {/* <div className="flex flex-col md:gap-6 gap-4 md:p-10 p-4">
            <div className="bg-primary h-1 w-5"></div>
            <div>
              <p className="font-semibold text-4xl tracking-widest capitalize">
                Medical devices we Provide
              </p>
            </div>
            <div className="w-full">
              <p className="font-thin text-[#67675F] text-[18px] md:leading-7 md:tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>
          </div> */}

          {/* cards */}

          <div className="flex flex-wrap md:gap-4 md:gap-y-8 gap-6 md:pl-10 md:p-0 p-8 md:place-items-start place-items-center md:justify-start justify-center">
            {medicalDevicesData.map((device, index) => (
              <MedicalDevicesCard
                key={index}
                index={index}
                isOpen={openCardIndex === index}
                onToggle={handleCardToggle}
                heading={device.heading}
                content={device.content}
                img={device.img}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
