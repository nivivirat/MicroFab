import React, { useState } from "react";
import "../../../App.css";
import blow from "../../../assets/Options/blow.svg";
import arrow from "../../../assets/Icons/arrow.svg";
import img1 from "../../../assets/Icons/air.svg";
import seal from "../../../assets/Options/seal.svg";
import fill from "../../../assets/Options/fill.svg";

// the data are fetched from a json file
import contents from "./content.json"; // Adjust the path accordingly

export default function OptionsButtons() {
  const options = ["B-F-S", "F-F-S", "I-S-B-M"];
  const [currentOption, setCurrentOption] = useState("B-F-S");

  const handleOptionClick = (option) => {
    setCurrentOption(option);
  };

  const selectedContent = contents[options.indexOf(currentOption)];

  return (
    <div className="font-['ClashDisplay']">
      <div className="text-center md:mt-[60px] mt-6 gap-6 w-full flex justify-center place-items-center space-x-2 flex-col md:flex-row">
        {options.map((option) => (
          <button
            key={option}
            className={`border rounded-md py-2 px-4 text-[20px] font-[800] h-[50px] w-[90%] md:w-[15%] ${
              currentOption === option
                ? "bg-[#8AA6AA] text-white border-[#8AA6AA] hover:bg-[#8AA6AA]"
                : "bg-white text-[#8AA6AA] border-[#8AA6AA]"
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="text-center flex flex-col md:flex-col md:mt-[50px] md:m-[50px] m-[15px] mt-[20px]">
        <div className="flex md:flex-col flex-col justify-center place-items-center">
          <div className="md:text-[40px] text-[30px] font-bold">
            {selectedContent?.topic}
          </div>
          <div className="text-center custom-font md:text-[12px]">
            {selectedContent?.content}
          </div>
        </div>

        <div className="md:hidden flex justify-center">
          <img
            src={blow}
            alt="blow"
            className="md:mr-[150px] h-[350px] m-[20px]"
          ></img>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:place-items-center text-left">
          <div className=" flex flex-col md:flex-col md:w-[600px] md:h-[300px]">


            {/* flow chart for mobile*/}
            <div className="md:hidden justify-center flex md:flex-row md:mt-6 place-items-center md:gap-1 gap-1 mt-6 mb-6">
              <div className="md:p-2 rounded-full bg-[#8AA6AA] h-10 w-10 justify-center flex place-items-center">
                <img className="" src={img1}></img>
              </div>
              <p className="font-bold text-[#8AA6AA]">Blow</p>
              <p className="text-[#8AA6AA] font-bold">━━━</p>
              <div className="h-10 w-10 justify-center flex place-items-center md:p-2 rounded-full bg-white border border-[#8AA6AA]">
                <img className="" src={fill}></img>
              </div>
              <p className=" text-[#8AA6AA]">Fill</p>
              <p className="text-[#8AA6AA] ">━━━━━━</p>
              <div className="h-10 w-10 justify-center flex place-items-center md:p-2 rounded-full bg-white border border-[#8AA6AA]">
                <img className="" src={seal}></img>
              </div>
              <p className=" text-[#8AA6AA]">Seal</p>
            </div>


            <div className="font-bold">{selectedContent?.sub}</div>
            <div className="">{selectedContent?.sub_content}</div>
            <div className="hover:bg-[#8AA6AA] mt-[20px] rounded-lg md:mt-[7%] md:mb-[5%] gap-4 text-white justify-center place-items-center md:rounded-md bg-[#8AA6AA] border-[#8AA6AA] flex md:flex-row md:h-[15%] md:w-[35%] h-[50px] w-[50%]">
              <button className="hover:bg-[#8AA6AA]">Know More</button>
              <img src={arrow} alt="arrow" className="md:h-[20px]"></img>
            </div>

            {/* flow chart for desktop*/}
            <div className="hidden md:flex md:flex-row md:mt-6 place-items-center md:gap-1">
              <div className="md:p-2 rounded-full bg-[#8AA6AA]">
                <img className="" src={img1}></img>
              </div>
              <p className="font-bold text-[#8AA6AA]">Blow</p>
              <p className="text-[#8AA6AA] font-bold">━━━</p>
              <div className="md:p-2 rounded-full bg-white border border-[#8AA6AA]">
                <img className="" src={fill}></img>
              </div>
              <p className=" text-[#8AA6AA]">Fill</p>
              <p className="text-[#8AA6AA] ">━━━━━━</p>
              <div className="md:p-2 rounded-full md:border-[#8AA6AA] border bg-white">
                <img className="" src={seal}></img>
              </div>
              <p className=" text-[#8AA6AA]">Seal</p>
            </div>
          </div>
          <div className="hidden md:block ">
            <img src={blow} className="md:mr-[150px]"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
