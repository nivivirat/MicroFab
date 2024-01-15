import { Link } from "react-router-dom";
import img1 from "../../../assets/Home_article/article1.svg";
import img2 from "../../../assets/Home_article/article2.svg";
import img3 from "../../../assets/Home_article/article3.svg";
import img4 from "../../../assets/Articles/article4.svg";
import ArticleCard from "../../Home/Home_articles/ArticleCard";

import arrow_right from "../../../assets/Home_article/ArrowRight.svg";
import Article4 from "../../Home/Home_articles/Article4";
import Article_content from "../../Articles/Article_content.json";
import Article_heading from "../../Articles/Article_heading.json";

// const contentClass = num ? "font-black md:text-[18px]" : "";

export default function ArticleCardScrollMobile() {
  return (
    <div>
      {/* desktop view */}
      <div className="font-mono w-full p-10 hidden md:block">
        {/* 3 cards */}
        <div className="w-full md:h-[350px] flex flex-row overflow-x-auto md:flex-row md:gap-3">
          <div className="w-full md:h-[350px] flex flex-row overflow-x-auto md:flex-row md:gap-3">
            <div className="md:w-1/2 md:h-full w-full rounded-lg shadow-md">
              <ArticleCard
                content={Article_content[0].content}
                sub={Article_content[0].sub}
                // img={Article_content[0].img}
                img={img1}
                num={true}
              />
            </div>
            <div className="md:w-1/2 md:h-full flex flex-row md:flex-row md:gap-3 overflow-x-auto">
              <div className="md:w-full w-full h-full  md:h-full rounded-lg shadow-md">
                <ArticleCard
                  content={Article_content[1].content}
                  sub={Article_content[1].sub}
                  // img={Article_content[1].img}
                  img={img3}
                  date={Article_content[1].date}
                />
              </div>
              <div className="w-full md:h-full md:w-full rounded-lg shadow-md">
                <ArticleCard
                  content={Article_content[2].content}
                  sub={Article_content[2].sub}
                  img={Article_content[2].img}
                  date={Article_content[2].date}
                />
              </div>
            </div>
          </div>
        </div>

        {/* article 4 */}
        {Article_content[3] ? (
          <div className="w-full md:h-full md:w-full rounded-lg shadow-md">
            <Article4
              content={Article_content[3].content}
              sub={Article_content[3].sub}
              img={Article_content[3].img}
              date={Article_content[3].date}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* mobile */}
      <div className="custom-font p-10 md:hidden">
        {/* Carousel */}

        {/* mobile scroll 1 */}
        <div
          className="w-[300px] h-[400px] flex overflow-x-scroll gap-4 mb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {Article_content.map((article, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 scroll-snap-align-start border-2 rounded-xl shadow-md"
            >
              <div className="w-full h-full md:h-[480px] flex flex-col place-items-center">
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
                  <p className="text-left w-full text-black text-[18px] font-bold line-clamp-3">
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
          {/* mobile scroll 2 */}
        <div
          className="w-[300px] h-[400px] flex overflow-x-scroll gap-4 "
          style={{ scrollSnapType: "x mandatory" }}
        >
          {Article_heading.map((article, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 scroll-snap-align-start border-2 rounded-xl shadow-md"
            >
              <div className="w-[300px] h-full md:h-[480px] flex flex-col place-items-center">
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
                  <p className="text-left text-black text-[18px] font-bold line-clamp-3">
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
      </div>
    </div>
  );
}
