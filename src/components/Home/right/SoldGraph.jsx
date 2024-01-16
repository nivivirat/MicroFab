import React, { useState, useEffect } from 'react';
import sold from '../../../assets/SoldGraph/SoldGraph.svg';
import '../../../App.css';

export default function SoldGraph() {
  const [isAnimationStarted, setAnimationStarted] = useState(false);
  const [isHovered, setIsHovered] = useState(2020);

  useEffect(() => {
    // Start the animation after 2 seconds
    const animationTimeout = setTimeout(() => {
      setAnimationStarted(true);
    }, 1000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(animationTimeout);
  }, []);

  const containerStyles = {
    height: isAnimationStarted ? '100%' : '0%',
    transition: 'height 3s ease', // Use the transition property for a smooth animation
  };

  return (
    <div className="font-['ClashDisplay'] w-full h-full flex flex-col justify-between bg-black rounded-[20px] md:mr-4 ml-4 md:ml-0 mr-4">
      <div className="flex flex-row md:gap-2 gap-4 w-full h-full place-items-end pb-3">
        {/* <div className={`w-[6%] rounded-r-[30px] bg-white 3s ease ${isAnimationStarted ? 'h-[30%]' : 'h-[0%]'}`}></div> */}
        <div className={`w-[6%] rounded-r-[30px] bg-white transition-all duration-600 ease-in ${isAnimationStarted ? 'h-[30%] opacity-100' : 'h-[0%] opacity-0'}`}></div>
        <div onMouseEnter={() => setIsHovered(2018)} className={`${isHovered === 2018 ? 'bg-primary text-white' : 'bg-white text-primary'} w-[13%] rounded-[30px] text-[12px] flex justify-center place-items-end pb-2 transition-all duration-600 ease-in ${isAnimationStarted ? 'h-[50%] opacity-100' : 'h-[0%] opacity-0'}`} >
          <p>2018</p>
        </div>
        <div onMouseEnter={() => setIsHovered(2019)} className={`w-[13%] rounded-[30px] ${isHovered === 2019 ? 'bg-primary text-white' : 'bg-white text-primary'} text-[12px] flex justify-center place-items-end pb-2 transition-all duration-600 ease-in ${isAnimationStarted ? 'h-[40%] opacity-100' : 'h-[0%] opacity-0'}`}>
          <p>2019</p>
        </div>
        <div className="flex flex-col justify-center gap-2 place-items-center w-[13%] h-[90%]">
          <p className={`text-center text-white bg-[#414141] w-[90%] px-2 rounded-[10px] ${!isAnimationStarted ? 'hidden' : 'block'} `}>211</p>
          <div onMouseEnter={() => setIsHovered(2020)} className={`${isHovered === 2020 ? 'bg-primary text-white' : 'bg-white text-primary'} w-full rounded-[30px] text-[12px] flex justify-center place-items-end pb-2 transition-all duration-600 ease-in ${isAnimationStarted ? 'h-[80%] opacity-100' : 'h-[0%] opacity-0'}`}>
            <p>2020</p>
          </div>
        </div>
        <div onMouseEnter={() => setIsHovered(2021)} className={`w-[13%] rounded-[30px] ${isHovered === 2021 ? 'bg-primary text-white' : 'bg-white text-primary'} text-[12px] flex justify-center place-items-end pb-2 transition-all duration-600 ease-in ${isAnimationStarted ? 'h-[76%] opacity-100' : 'h-[0%] opacity-0'}`}>
          <p>2021</p>
        </div>
        <div onMouseEnter={() => setIsHovered(2022)} className={`w-[13%] rounded-[30px] ${isHovered === 2022 ? 'bg-primary text-white' : 'bg-white text-primary'} text-[12px] flex justify-center place-items-end pb-2 transition-all duration-600 ease-in ${isAnimationStarted ? 'h-[80%] opacity-100' : 'h-[0%] opacity-0'}`}>
          <p>2022</p>
        </div>
        <div onMouseEnter={() => setIsHovered(2023)} className={`w-[13%] rounded-[30px] ${isHovered === 2023 ? 'bg-primary text-white' : 'bg-white text-primary'} text-[12px] flex justify-center place-items-end pb-2 transition-all duration-600 ease-in ${isAnimationStarted ? 'h-[88%] opacity-100' : 'h-[0%] opacity-0'}`}>
          <p>2023</p>
        </div>
      </div>
      <div className="bg-white rounded-[15px] m-1 flex flex-row justify-between p-2 pl-5">
        <p className="font-extrabold text-[18px]">
          Machinery sold over <br></br>years
        </p>
        <div className="flex justify-center place-items-center">
          <img src={sold} className="h-10"></img>
        </div>
      </div>
    </div>
  );
}
