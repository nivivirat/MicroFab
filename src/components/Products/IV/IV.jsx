import top from "../../../assets/Products/IV/top.svg";
import { Icon } from "@iconify/react";
import intro1 from "../../../assets/Products/BFS/intro.svg";
import intro2 from "../../../assets/Products/BFS/intro2.svg";
import process from "../../../assets/Products/BFS/process.svg";
import prcoessData from "./processData.json";
import advantageimg from "../../../assets/Products/BFS/advantage.svg";
import advantageContent from "./advantageContent.json";
import AdvantageCard from "./AdvantageCard";
import Footer from "../../Common/Footer/Footer";
import applicationContent from "./Application/applicationContent.json";
import ApplicationCard from "./Application/ApplicationCard";

export default function IV() {
  return (
    <div className="flex flex-col xl:gap-[40px] md:gap-[20px] gap-[15px] font-['ClashDisplay'] md:mt-[80px] mt-[40px] md:pt-0 pt-[30px]">
      {/* banner */}
      <div className="md:mt-[2%] justify-center w-full md:h-[90%] h-[500px] flex rounded-[42px] relative md:px-4">
        <img
          src={top}
          className="xl:h-[80%] h-[60%] lg:mt-[10%] md:mt-[15%] sm:mt-[25%] mt-[30%] w-full xl:object-cover md:object-cover object-cover object-left-top rounded-[42px]"
          alt="top img"
        ></img>
        <div className="absolute text-primary top-[2%] left-[2%] flex flex-col w-full">
          <div className="md:h-auto h-[150px] flex md:flex-row flex-row justify-between">
            <p className="xl:tracking-wider xl:pr-[10%] 2xl:text-[50px] xl:text-[45px] lg:text-[40px] md:text-[36px] w-[50%] sm:text-[28px] text-[20px] font-[600] lg:leading-[70px] md:leading-[50px]">
              Empowering care with innovation and precise infusions
            </p>
            <p className="xl:w-[40%] md:p-0 sm:px-10 px-5 font-medium md:pr-[15%] md:pl-[3%] 2xl:text-[24px] xl:text-[20px] lg:text-[18px] text-[14px] w-[60%] lg:w-[50%] md:w-[60%]">
              The IV bag Manufacturing technology ensures aseptic manufacturing
              processes for safety of intravenous solutions.
            </p>
          </div>
        </div>
      </div>

      {/* intro */}
      <div className="w-full justify-center flex h-[500px] md:my-16">
        {/* bg */}
        <div className="px-[10%] text-white relative flex flex-col gap-10 justify-center place-items-center bg-primary w-[80%] h-[80%] rounded-[15px] my-[2%]">
          {/* content */}
          <p className="font-normal md:text-3xl xl:text-5xl text-2xl">
            Introducing the IV Bag Manufacturing Technology
          </p>
          <p className="font-normal md:text-[18px] xl:text-[18px] text-[16px] text-center">
            The IV bag manufacturing technology assures enhanced efficiency and
            the safety of fluid infusions. While stringent quality control
            measures are implemented along with testing for durability, the
            machinery produces hygienic IV bags.
          </p>

          {/* bottom left */}
          <div className="absolute md:-bottom-32 md:-left-16 -bottom-8 -left-8">
            <img
              alt="img"
              className="md:h-full md:w-full h-[50%] w-[50%]"
              src={intro1}
            ></img>
          </div>

          {/* top right */}
          <div className="absolute md:-top-16 md:-right-16 -top-8 -right-28">
            <img
              alt="img"
              className="md:h-full md:w-full h-[50%] w-[50%]"
              src={intro2}
            ></img>
          </div>
        </div>
      </div>

      {/* process of packaging */}
      
      {/* advantages */}
      <div className="w-full bg-primary md:p-12 p-5 flex flex-col md:gap-8 gap-10">
        {/* heading */}
        <div>
          <p className="md:text-4xl text-2xl font-semibold text-white tracking-wider">
            Advantages of the BFS Technology
          </p>
        </div>

        {/* down */}
        <div className="w-full flex md:flex-row flex-col-reverse md:gap-0 gap-10 justify-between place-items-center">
          <div className="lg:w-[55%] md:w-[60%] w-full h-full flex flex-wrap gap-3">
            {advantageContent.map((item, index) => (
              <div
                key={index}
                className="xl:w-[48%] w-full lg:w-[40%] md:w-[40%]"
              >
                <AdvantageCard heading={item.heading} content={item.content} />
              </div>
            ))}
          </div>

          <div className="w-[40%]">
            <img src={advantageimg} alt="adv img" />
          </div>
        </div>
      </div>

      {/* applications */}
      <div className="md:px-14 mt-[5%] px-4 gap-10 flex flex-col">
        <div>
          <p className="font-semibold text-3xl">
            Applications of the Blow-Fill-Seal Technology
          </p>
        </div>
        <div className="w-full flex flex-row md:gap-10 gap-[200px] md:overflow-auto overflow-scroll pb-10">
          {applicationContent.map((item, index) => (
            <div key={index} className="md:w-[25%] w-[100%]">
              <ApplicationCard
                heading={item.heading}
                content={item.content}
                img={item.img}
              />
            </div>
          ))}
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
