import React, { useState, useEffect } from 'react';
import sold from '../../../assets/SoldGraph/SoldGraph.svg';
import '../../../App.css';

const yearsData = [
  { year: 2018, value: 152 },
  { year: 2019, value: 120 },
  { year: 2020, value: 211 },
  { year: 2021, value: 202 },
  { year: 2022, value: 235 },
  { year: 2023, value: 242 },
  { year: 2024, value: 242 },
];

export default function SoldGraph() {
  const [isAnimationStarted, setAnimationStarted] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    // Calculate the maximum value
    const max = Math.max(...yearsData.map((data) => data.value));
    setMaxValue(max);

    // Start the animation after 2 seconds
    const animationTimeout = setTimeout(() => {
      setAnimationStarted(true);
    }, 1500);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(animationTimeout);
  }, []);

  const calculateHeight = (value) => {
    return isAnimationStarted ? `${(value / maxValue) * 80}%` : '0%';
  };

  const handleYearHover = (year) => {
    setIsHovered(year);
  };

  return (
    <div className="font-['ClashDisplay'] w-full h-full flex flex-col justify-between bg-black border border-black rounded-[20px] md:mr-4 ml-4 md:ml-0 mr-4">
      <div className="flex flex-row md:gap-2 gap-4 w-full h-full place-items-end pb-3">
        {yearsData.map(({ year, value }) => (
          <div key={year} className={`flex flex-col justify-end gap-2 place-items-center w-[13%] h-[90%]`}>
            <p className={`text-center text-white bg-[#414141] w-[90%] rounded-[10px] ${isHovered === year ? 'block' : 'hidden'} ${!isAnimationStarted ? 'hidden' : 'block'}`}>{value}</p>
            <div
              onMouseEnter={() => handleYearHover(year)}
              className={`${isHovered === year ? 'bg-primary text-white' : 'bg-white text-primary'} w-full rounded-[30px] text-[12px] flex justify-center place-items-end pb-2 transition-all duration-2000 ease-in h-[90%]`}
              style={{ height: calculateHeight(value), opacity: isAnimationStarted ? 1 : 0 }}
            >
              <p>{year}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-[15px] m-1 flex flex-row justify-between p-2 pl-5">
        <p className="font-extrabold text-[18px]">
          Machinery sold over <br></br>years
        </p>
        <div className="flex justify-center place-items-center">
          <img src={sold} alt="Sold Icon" className="h-10"></img>
        </div>
      </div>
    </div>
  );
}
