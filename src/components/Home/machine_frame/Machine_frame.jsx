import React, { useState, useEffect } from "react";
import Machine from "../../../assets/Machine_Frame_Images/Machine.svg";
import "../../../App.css";
import WFS_Card from "./WFS_Card";

const Machine_Frame = () => {
  const textArray = ["Start", "Solutions from the", "Providing Industry"];
  // const textArray = ["Providing Industry","Solutions from the","Start"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 1000); // Adjust the delay as needed (3 seconds in this example)

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="font-['ClashDisplay'] w-full h-[700px] md:w-[97%] md:h-full md:mt-[80px] mt-[50px] md:rounded-[20px] bg-gradient-to-r from-[#e1e1e1] to-[#8ca7ab] md:m-4 mb-0 overflow-clip">
      <div className="relative w-full h-full z-0">
        <div className="absolute md:top-[50%] md:left-[38%] z-10 top-[44%] left-[4%]">
          <div className="font-['ClashDisplay'] rounded-b-[16px] rounded-tr-[16px] bg-[#8AA6AA] md:bg-[#8AA6AA] md:h-[40px] h-[40px] w-[200px] md:w-[180px] p-[10px] md:p-[10px]">
            <p className="custom-font text-white md:text-[12px] text-[11px] flex justify-center place-items-center">
              Product Solutions
            </p>
          </div>
        </div>
        <div className="absolute md:top-[83%] md:left-[70%] z-10 top-[63%] left-[44%]">
          <WFS_Card />
        </div>
        <div className="absolute md:top-[93%] md:left-[20%] z-10 top-[63%] left-[44%]">
          <WFS_Card />
        </div>

        <img
          src={Machine}
          alt="Machine"
          className="absolute md:w-[90%] md:h-[90%] w-[100%] h-[100%] md:right-0 md:bottom-0"
        />
        <div className="hidden md:block absolute md:top-[54px] md:left-[33px] w-[260px] h-[260px] rounded-full bg-gradient-to-tr from-[#dcdede] to-[#cbd2d3]"></div>

        <div className="md:hidden block relative overflow-hidden h-[200px]">
          <p className="flex flex-col-reverse pb-10 font-extrabold w-[400px] h-[200px] absolute left-[12px] top-[52px] text-white text-[35px] md:leading-[79px] tracking-tight text-left">
            {textArray.map((text, index) => (
              // <span
              //   key={index}
              //   className={`highlight-text ${
              //     currentWordIndex === index ? "animate-fall" : ""
              //   }`}
              //   style={{
              //     visibility: currentWordIndex >= index ? "visible" : "hidden",
              //     marginBottom: index === textArray.length - 1 ? 0 : "0px", // Adjust the margin as needed
              //   }}
              // >
              <span>{text}</span>
            ))}
          </p>
        </div>

        <p className="hidden md:block w-[554px] h-[316px] absolute left-[52px] top-[52px] text-white font-bold md:text-[64px] md:leading-[79px] tracking-tight text-left">
          <span className="highlight-text ">
            Providing Industry Solutions <br /> from the Start
          </span>
        </p>
      </div>
    </div>
  );
};

export default Machine_Frame;
