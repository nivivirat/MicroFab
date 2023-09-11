import React from "react";
import arrow_right from "../../../assets/Home_article/ArrowRight.svg";

export default function Article4({ content, sub, img, date, num }) {
  const contentClass = num ? "font-black md:text-[18px]" : "";

  return (
    <div className=" h-[300px] flex flex-col md:flex-row-reverse mt-10">
      {/* Right side with image */}
      <div className="md:w-1/2 ">
        <img
          src={img}
          alt="Article Thumbnail"
          className="w-[100%] rounded-lg h-[100%] object-cover"
        />
      </div>

      {/* Left side with text */}
      <div className="md:w-1/2 p-2 flex flex-col justify-center gap-4">
        <div className="flex flex-row place-items-center md:mt-0.5">
          <div className="md:w-[3px] md:mr-2 md:h-[18px] h-[10px] bg-[#8AA6AA] md:mt-0 md:mb-0 mt-[22px] mb-[15px]"></div>
          <p className="text-left text-gray-500">{sub}</p>
        </div>
        <p className={` text-[20px] leading-8 font-extrabold text-left text-black ${contentClass}`}>{content}</p>
        {date && <p className="text-left text-black">{date}</p>}
        <div className="flex flex-row place-items-center gap-3 pl-2">
          <p className="text-[#8AA6AA] font-extrabold">Read more</p>
          <img
            src={arrow_right}
            className="bg-[#8AA6AA] h-6 p-0.5 rounded-full"
            alt="Read more"
          />
        </div>
      </div>
    </div>
  );
}
