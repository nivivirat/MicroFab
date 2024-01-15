import React from "react";
import ContentData from "./content.json";
import img1 from "../../../assets/Articles/article1/img1.svg";
import img2 from "../../../assets/Articles/article1/img2.svg";
import img3 from "../../../assets/Articles/article1/img3.svg";
import img4 from "../../../assets/Articles/article1/img4.svg";

import img7 from "../../../assets/Articles/article1/img7.svg";
import img8 from "../../../assets/Articles/article1/img8.svg";
import img9 from "../../../assets/Articles/article1/img9.svg";
import img10 from "../../../assets/Articles/article1/img10.svg";
import img11 from "../../../assets/Articles/article1/img11.svg";
import img12 from "../../../assets/Articles/article1/img12.svg";
import img13 from "../../../assets/Articles/article1/img13.svg";

export default function Blog_Content({ index }) {
  const blogContent = ContentData[index];

  if (!blogContent) {
    return <div>Error: Content not found!</div>;
  }

  const { heading, img, content1, qa } = blogContent;

  const renderQA = () => {
    return qa.map((item, inde) => {
      if (item.q) {
        if (inde === 2) {
          return (
            <div>
              <div key={inde} className="py-4">
                <p className="font-bold">{item.q}</p>
                <p>{item.a}</p>
              </div>
              {index === 0 ? (
                <div className="flex flex-row my-10 place-items-center justify-between">
                  <img src={img2} className="w-[49%]"></img>
                  <img src={img3} className="w-[49%]"></img>
                </div>
              ) : index === 1 ? (
                <div className="flex flex-row my-10 place-items-center justify-between">
                  <img src={img8} className="w-[49%]"></img>
                  <img src={img9} className="w-[49%]"></img>
                </div>
              ) : index === 2 ? (
                <div className="flex flex-row my-10 place-items-center justify-between">
                  <img src={img10} className="w-[49%]"></img>
                  <img src={img11} className="w-[49%]"></img>
                </div>
              ) : (
                <div className="flex flex-row my-10 place-items-center justify-between">
                  <img src={img12} className="w-[49%]"></img>
                  <img src={img13} className="w-[49%]"></img>
                </div>
              )}
            </div>
          );
        }
        return (
          <div key={index} className="py-4">
            <p className="font-bold">{item.q}</p>
            <p>{item.a}</p>
          </div>
        );
      } else {
        return (
          <div key={index} className="py-4">
            <p>{item.a}</p>
          </div>
        );
      }
    });
  };

  const renderImages = () => {
    switch (img) {
      case "article1_img":
        return <img src={img1} className="py-4" alt="Image 1" />;
      case "article2_img":
        return <img src={img7} className="py-4" alt="Image 2" />;
      case "article3_img":
        return <img src={img3} className="py-4" alt="Image 3" />;
      case "article4_img":
        return <img src={img4} className="py-4" alt="Image 4" />;
      default:
        return null;
    }
  };

  return (
    <div className="font-['ClashDisplay flex flex-col gap-3 m-6">
      <div className="flex flex-row space-x-2">
        <p className="text-[#8AA6AA] text-[20px]">Home </p>
        <p className="text-black text-[20px] font-bold">/</p>
        <p className="text-[#8AA6AA] text-[20px]">Article </p>
      </div>
      <div>
        <p className="text-[#8AA6AA] text-[30px]">{heading}</p>
      </div>
      {renderImages()}
      <div>
        <p className="whitespace-pre-line text-[18px]">{content1}</p>
      </div>
      <div className="flex flex-col py-10 gap-4">
        {renderQA()}
        {/* Conditionally render img2 and img3 if the index value is 2 */}
        {/* {index === 2 && (
          <div className="flex flex-row gap-4">
            <img src={img2} className="w-[50%]" alt="Image 2" />
            <img src={img3} className="w-[50%]" alt="Image 3" />
          </div>
        )} */}
      </div>
    </div>
  );
}
