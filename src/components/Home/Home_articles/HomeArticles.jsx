import React from "react";
import ArticleCard from "./ArticleCard";
import img1 from "../../../assets/Home_article/article1.svg";
import img2 from "../../../assets/Home_article/article2.svg";
import img3 from "../../../assets/Home_article/article3.svg";
import arrow_right from "../../../assets/Home_article/ArrowRight.svg";
import { Link } from "react-router-dom";

export default function HomeArticle() {
  const articles = [
    {
      content: "Blow-Fill-Seal Expands in Aseptic Filling, Vaccines",
      sub: "Blow-Fill-Seal, Technology ",
      img: img1,
    },
    {
      content: "Investing in Form-Fill-Seal Technology",
      sub: "Blow-Fill-Seal, Technology ",
      img: img2,
      date: "April 12, 2023 PAP-Q1-2023",
    },
    {
      content: "Investing in Form-Fill-Seal Technology ",
      sub: "Blow-Fill-Seal, Technology ",
      img: img3,
      date: "April 12, 2023 PAP-Q1-2023",
    },
  ];

  return (
    <div>
      {/* desktop view */}
      <div className="font-['ClashDisplay'] w-full p-10 hidden md:block">
        <div className="flex flex-row justify-between pb-10 ">
          <p className="md:text-[25px] font-extrabold">Articles</p>
          <Link to="/articles">
            <p className="md:block hidden text-[#8AA6AA] cursor-pointer">
              View all
            </p>
          </Link>
        </div>

        <div className="w-full md:h-[330px] flex flex-row overflow-x-auto md:flex-row md:gap-3">
          <div className="md:w-1/2 md:h-full w-full rounded-lg shadow-md">
            <ArticleCard
              content={articles[0].content}
              sub={articles[0].sub}
              img={articles[0].img}
              num={true}
            />
          </div>
          <div className="w-1 h-1 md:w-1/2 md:h-full flex flex-row md:flex-row md:gap-3 overflow-x-auto">
            <div className="md:w-full w-full h-full  md:h-full rounded-lg shadow-md">
              <ArticleCard
                content={articles[1].content}
                sub={articles[1].sub}
                img={articles[1].img}
                date={articles[1].date}
              />
            </div>
            <div className="w-full md:h-full md:w-full rounded-lg shadow-md">
              <ArticleCard
                content={articles[2].content}
                sub={articles[2].sub}
                img={articles[2].img}
                date={articles[2].date}
              />
            </div>
          </div>
        </div>
        <button className="mt-4 text-white bg-[#8AA6AA] w-full md:hidden p-4 rounded-lg flex flex-row justify-center place-items-center">
          <p className="">View all</p>
          <img src={arrow_right} className="bg-[#8AA6AA] h-6 rounded-lg"></img>
        </button>
      </div>

      {/* mobile view */}
      <div className="font-['ClashDisplay'] p-10 md:hidden">
        {/* Header */}
        <div className="flex flex-row justify-between pb-10">
          <p className="md:text-[25px] font-extrabold">Articles</p>
        </div>

        {/* Carousel */}
        <div
          className="w-full h-[45vh] flex overflow-x-scroll gap-4 "
          style={{ scrollSnapType: "x mandatory" }}
        >
          {articles.map((article, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 scroll-snap-align-start rounded-lg shadow-md"
            >
              <div className="border-2 w-full h-[40vh] flex flex-col place-items-center rounded-lg shadow-md">
                <img
                  src={article.img}
                  alt="Blog Thumbnail"
                  className="w-full h-[50%] object-cover"
                />
                <div className="p-2 flex flex-col gap-4">
                  <div className="flex flex-row place-items-center">
                    <div className="w-[3px] mr-2 h-[18px] bg-[#8AA6AA]"></div>
                    <p className="text-left text-gray-500 text-[14px]">
                      {article.sub}
                    </p>
                  </div>
                  <p className="text-left text-black text-[18px] font-black">
                    {article.content}
                  </p>
                  <div className="flex flex-row place-items-center gap-3">
                    <p className="text-[#8AA6AA] font-extrabold">Read more</p>
                    <img
                      src={arrow_right}
                      className="bg-[#8AA6AA] h-6 p-0.5 rounded-full"
                      alt="Read more"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="mt-4 text-white bg-[#8AA6AA] w-full p-4 rounded-lg flex flex-row justify-center place-items-center">
          <Link to={"/articles"}>
            <p className="">View all</p>
          </Link>
          <img
            src={arrow_right}
            className="bg-[#8AA6AA] h-6 rounded-lg"
            alt="View all"
          />
        </button>
      </div>
    </div>
  );
}
