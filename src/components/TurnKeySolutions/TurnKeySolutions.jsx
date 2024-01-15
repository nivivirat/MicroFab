import top from "../../assets/turnkeySolutions/top.svg";
import { Icon } from "@iconify/react";
import one from "../../assets/turnkeySolutions/one.svg";
import two from "../../assets/turnkeySolutions/two.svg";
import three from "../../assets/turnkeySolutions/three.svg";
import four from "../../assets/turnkeySolutions/four.svg";
import TurnKeySolutionsData from "./TurnKeySolutionsData.json";
import MedicalDevicesCard from "../MedicalDevices/MedicalDevicesCard";
import Footer from "../Common/Footer/Footer";

export default function TurnKeySolutions() {
  return (
    <div
      id="turnkey"
      className="md:h-screen md:mt-[80px] mt-[40px] md:pt-0 pt-[30px] "
    >
      {/* top */}
      <div className="w-full md:h-[90%] h-[400px] flex rounded-[42px] relative md:px-4">
        <img
          src={top}
          className="md:h-full h-[60%] md:mt-0 mt-[40%] w-full md:object-cover object-cover object-top object-left rounded-[42px]"
          alt="top img"
        ></img>
        <div className="absolute text-primary top-[2%] left-[2%] flex flex-col w-full">
          <div className="md:h-auto h-[150px] flex md:flex-col flex-row justify-between">
            <p className="md:text-[430%] text-[20px] font-bold">
              Turnkey Solutions
            </p>
            <p className="xl:w-[40%] 2xl:text-[24px] xl:text-[20px] lg:text-[18px] w-[60%] lg:w-[50%] md:w-[60%]">
              Unlock the potential of water treatment effectively and with
              precision.
            </p>
          </div>
          {/* <div className="text-white flex flex-row justify-center place-items-center md:mt-8 gap-2 bg-primary xl:w-[18%] lg:w-[20%] md:w-[20%] w-[40%] rounded-[10px] h-[55px]">
            <p className="">Know More</p>
            <Icon icon="majesticons:arrow-right" className="" />
          </div> */}
        </div>
      </div>

      <div className="md:px-10">
        {/* content 1 */}
        <div className=" md:p-10 p-4 flex md:flex-row flex-col justify-between place-items-center md:gap-0 gap-10">
          {/* left content */}
          <div className="md:w-[70%] flex flex-col md:gap-6 gap-4">
            <div className="bg-primary h-1 w-5"></div>
            <div>
              <p className="font-semibold text-4xl tracking-widest">
                Purified Water System
              </p>
            </div>
            <div className="w-[90%]">
              <p className="font-thin text-[#67675F] text-[18px] md:leading-7 md:tracking-wide">
                Our advanced water purification system is a turnkey solution
                under the FFS and the BFS machinery. With the system, you can
                ensure that you get high quality water. Whether you need water
                for a liquid solution or for cleaning equipment, you will surely
                be able to source clean water, thereby enhancing the production
                standards.
              </p>
            </div>
          </div>

          {/* img */}
          <div className="md:w-[30%] rounded-[20px] h-[400px]">
            <img
              src={one}
              className="object-cover h-full w-full md:px-10"
              alt="top"
            ></img>
          </div>
        </div>

        {/* content 2 */}
        <div className="md:p-10 p-4 flex md:flex-row-reverse flex-col justify-between place-items-center md:gap-0 gap-10">
          {/* left content */}
          <div className="md:w-[70%] flex flex-col md:gap-6 gap-4">
            <div className="bg-primary h-1 w-5"></div>
            <div>
              <p className="font-semibold text-4xl tracking-widest">
                Water for injection
              </p>
            </div>
            <div className="w-[90%]">
              <p className="font-thin text-[#67675F] text-[18px] md:leading-7 md:tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* img */}
          <div className="md:w-[30%] rounded-[20px] h-[400px]">
            <img
              src={two}
              className="object-cover h-full w-full md:pr-10"
              alt="top"
            ></img>
          </div>
        </div>

        {/* content 3 */}
        <div className="md:p-10 p-4 flex md:flex-row flex-col justify-between place-items-center md:gap-0 gap-10">
          {/* left content */}
          <div className="md:w-[70%] flex flex-col md:gap-6 gap-4">
            <div className="bg-primary h-1 w-5"></div>
            <div>
              <p className="font-semibold text-4xl tracking-widest">
                Sanitization
              </p>
            </div>
            <div className="w-[90%]">
              <p className="font-thin text-[#67675F] text-[18px] md:leading-7 md:tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* img */}
          <div className="md:w-[30%] rounded-[20px] h-[400px]">
            <img
              src={three}
              className="object-cover h-full w-full md:px-10"
              alt="top"
            ></img>
          </div>
        </div>

        {/* content 4 */}
        <div className="md:p-10 p-4 flex md:flex-row-reverse flex-col justify-between place-items-center md:gap-0 gap-10">
          {/* left content */}
          <div className="md:w-[70%] flex flex-col md:gap-6 gap-4">
            <div className="bg-primary h-1 w-5"></div>
            <div>
              <p className="font-semibold text-4xl tracking-widest">
                Ancillaries
              </p>
            </div>
            <div className="w-[90%]">
              <p className="font-thin text-[#67675F] text-[18px] md:leading-7 md:tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* img */}
          <div className="md:w-[30%] rounded-[20px] h-[400px]">
            <img
              src={four}
              className="object-cover h-full w-full md:pr-10"
              alt="top"
            ></img>
          </div>
        </div>
      </div>

      <div className="md:pl-16 flex flex-wrap md:gap-4 md:gap-y-8 md:p-0 p-8 md:place-items-start place-items-center md:justify-start justify-center">
        {TurnKeySolutionsData.map((device, index) => (
          <MedicalDevicesCard
            key={index} // Ensure each card has a unique key
            heading={device.heading}
            content={device.content}
            img={device.img}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
