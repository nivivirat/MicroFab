import React, { useState } from "react";
import "../../../App.css";
import blow from "../../../assets/Options/blow.svg";
import arrow from "../../../assets/Icons/arrow.svg";
import img1 from "../../../assets/Icons/air.svg";
import seal from "../../../assets/Options/seal.svg";
import fill from "../../../assets/Options/fill.svg";
import injection from "../../../assets/Options/injection.svg";
import molding from "../../../assets/Options/molding.svg";
import stretch from "../../../assets/Options/stretch.svg";
import form from "../../../assets/Options/form.svg";
import blow_small from "../../../assets/Options/blow_small.svg";
import Animation from "./Animation";
import { Icon } from "@iconify/react";

// the data are fetched from a json file
import contents from "./content.json"; // Adjust the path accordingly

export default function OptionsButtons() {

  const options = ["B-F-S", "F-F-S", "I-S-B-M / P-F-F-S"];
  const [currentOption, setCurrentOption] = useState("B-F-S");
  const [currentStep, setCurrentStep] = useState(0);

  const handleOptionClick = (option) => {
    setCurrentOption(option);
    setCurrentStep(0); // Reset step to 0 when the option changes
  };

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  const selectedContent = contents[options.indexOf(currentOption)];
  const currentSequenceItem = selectedContent?.sequence[currentStep];

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

      <div className="px-10 text-center flex flex-col md:flex-col md:mt-[50px] md:m-[50px] m-[15px] mt-[20px]">
        <div className="flex md:flex-col flex-col justify-center place-items-center">
          <div className="md:text-[40px] text-[30px] font-bold">
            {selectedContent?.topic}
          </div>
          <div className="text-center custom-font md:text-[14px]">
            {selectedContent?.content}
          </div>
        </div>

        {/* mobile machine images */}
        <div className="md:hidden flex justify-center h-[150px] w-full mb-[290px] place-items-center">
          <Animation />
        </div>

        <div className="flex flex-col md:flex-row md:justify-center md:gap-[20%] md:place-items-center text-left">
          <div className=" flex flex-col md:flex-col md:w-[600px] md:h-[300px]">
            {/* Flow chart for mobile */}
            <div className="md:hidden justify-center flex md:flex-row md:mt-6 place-items-center md:gap-1 gap-1 mt-6 mb-6">
            {selectedContent?.sequence.map((stepItem, index) => (
                <React.Fragment key={index}>
                  <div
                    onClick={() => handleStepClick(index)}
                    className={`md:p-2 rounded-full cursor-pointer ${
                      index <= currentStep
                        ? "bg-[#8AA6AA] border border-[#8AA6AA] text-white"
                        : "bg-white border border-[#8AA6AA] text-primary"
                    } 
              ${currentOption === "I-S-B-M" ? "h-5 w-5" : "h-10 w-10"}
              justify-center flex place-items-center`}
                  >
                    {stepItem.img === "blow" ? (
                      <Icon icon="mdi:air-filter" />
                    ) : stepItem.img === "fill" ? (
                      <Icon icon="mdi:format-color-fill" />
                    ) : stepItem.img === "seal" ? (
                      <Icon icon="mdi:bottle-soda-outline" />
                    ) : (
                      <Icon icon="mdi:air-filter" />
                    )}
                  </div>
                  <p
                    className={`font-bold text-[#8AA6AA] ${
                      index <= currentStep
                        ? "font-['ClashDisplayBold'] text-[#8AA6AA]"
                        : "text-[#8AA6AA]"
                    }`}
                  >
                    {typeof stepItem === "string"
                      ? stepItem.charAt(0).toUpperCase() + stepItem.slice(1)
                      : stepItem.step.charAt(0).toUpperCase() +
                        stepItem.step.slice(1)}
                  </p>
                  {index < selectedContent.sequence.length - 1 && (
                    <p className="text-[#8AA6AA] font-bold">━</p>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div>
              <div className="font-bold">{currentSequenceItem?.step}</div>
              <div>{currentSequenceItem?.content}</div>
              {/* Replace sub and sub_content with currentSequenceItem */}
              <div className="font-bold">{currentSequenceItem?.sub}</div>
              <div>{currentSequenceItem?.sub_content}</div>
              <a href={`/#/${currentOption.replace(/-/g, '').toUpperCase()}`} className="hover:bg-[#8AA6AA] mt-[20px] rounded-lg md:mt-[7%] md:mb-[5%] gap-4 text-white justify-center place-items-center md:rounded-md bg-[#8AA6AA] border-[#8AA6AA] flex md:flex-row md:h-[25%] md:w-[35%] h-[50px] w-[100%]">
                <button className="hover:bg-[#8AA6AA]">Know More</button>
                <img src={arrow} alt="arrow" className="md:h-[20px]"></img>
              </a>
            </div>

            {/* Flow chart for desktop */}
            <div className="hidden md:flex md:flex-row md:mt-6 place-items-center md:gap-1">
              {selectedContent?.sequence.map((stepItem, index) => (
                <React.Fragment key={index}>
                  <div
                    onClick={() => handleStepClick(index)}
                    className={`md:p-2 rounded-full cursor-pointer ${
                      index <= currentStep
                        ? "bg-[#8AA6AA] border border-[#8AA6AA] text-white"
                        : "bg-white border border-[#8AA6AA] text-primary"
                    } 
              ${currentOption === "I-S-B-M" ? "h-5 w-5" : "h-10 w-10"}
              justify-center flex place-items-center`}
                  >
                    {stepItem.img === "blow" ? (
                      <Icon icon="mdi:air-filter" />
                    ) : stepItem.img === "fill" ? (
                      <Icon icon="mdi:format-color-fill" />
                    ) : stepItem.img === "seal" ? (
                      <Icon icon="mdi:bottle-soda-outline" />
                    ) : (
                      <Icon icon="mdi:air-filter" />
                    )}
                  </div>
                  <p
                    className={`font-bold text-[#8AA6AA] ${
                      index <= currentStep
                        ? "font-['ClashDisplayBold'] text-[#8AA6AA]"
                        : "text-[#8AA6AA]"
                    }`}
                  >
                    {typeof stepItem === "string"
                      ? stepItem.charAt(0).toUpperCase() + stepItem.slice(1)
                      : stepItem.step.charAt(0).toUpperCase() +
                        stepItem.step.slice(1)}
                  </p>
                  {index < selectedContent.sequence.length - 1 && (
                    <p className="text-[#8AA6AA] font-bold">━</p>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* desktop machine images */}

          <div className="hidden md:block h-[435px] w-[200px] mt-3">
            <Animation />
          </div>
        </div>
      </div>
    </div>
  );
}
