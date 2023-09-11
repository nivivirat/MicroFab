import { Link } from "react-router-dom";
import img1 from "../../../assets/Home_article/article1.svg";
import img2 from "../../../assets/Home_article/article2.svg";
import img3 from "../../../assets/Home_article/article3.svg";
import arrow_right from "../../../assets/Home_article/ArrowRight.svg";
import homeArticles from "../../../assets/Articles/Heading.svg";
import ArticleCard from "../../Home/Home_articles/ArticleCard";

export default function Article_Heading() {
  const articles1 = [
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
    {
      content:
        "Where do COVID-19 vaccine players stand on pricing? So far, it's no profit, slight profit or undecided",
      sub: "Covid - 19 Vaccine",
      img: homeArticles,
      date: false,
    },
  ];

  const articles2 = [
    {
      content: "Investing in Form-Fill-Seal Technology ",
      sub: "Blow-Fill-Seal, Technology ",
      img: homeArticles,
      date: "April 12, 2023 PAP-Q1-2023",
    },
    {
      content: "Blow-Fill-Seal Expands in Aseptic Filling, Vaccines",
      sub: "Blow-Fill-Seal, Technology ",
      img: homeArticles,
      date: "April 12, 2023 PAP-Q1-2023",
    },
    {
      content:
        "Where do COVID-19 vaccine players stand on pricing? So far, it's no profit, slight profit or undecided",
      sub: "Covid - 19 Vaccine",
      img: homeArticles,
      date: "April 12, 2023 PAP-Q1-2023",
    },
    {
      content: "Investing in Form-Fill-Seal Technology",
      sub: "Blow-Fill-Seal, Technology ",
      img: homeArticles,
      date: "April 12, 2023 PAP-Q1-2023",
    },
    {
      content: "Investing in Form-Fill-Seal Technology",
      sub: "Blow-Fill-Seal, Technology ",
      img: homeArticles,
      date: "April 12, 2023 PAP-Q1-2023",
    },
  ];

  return (
    <div className="font-['ClashDisplay']">
      {/* set of headings */}
      <div>
        <p className="md:text-[25px] text-[30px] md:block hidden font-bold pl-10">
          Heading
        </p>
        {/* desktop view */}
        <div className="w-full p-10 hidden md:block">
          {/* 3 cards */}
          <div className="w-full md:h-[380px] flex flex-row overflow-x-auto md:flex-row md:gap-3">
            {/* <div className="w-1 h-1 md:w-1/2 md:h-full flex flex-row md:flex-row md:gap-3 overflow-x-auto"> */}
            <div className="md:w-full w-full h-full  md:h-full rounded-lg shadow-md">
              <ArticleCard
                content={articles1[3].content}
                sub={articles1[3].sub}
                img={articles1[3].img}
                date={articles1[3].date}
              />
            </div>
            <div className="w-full md:h-full md:w-full rounded-lg shadow-md">
              <ArticleCard
                content={articles1[3].content}
                sub={articles1[3].sub}
                img={articles1[3].img}
                date={articles1[3].date}
              />
            </div>
            <div className="w-full md:h-full md:w-full rounded-lg shadow-md">
              <ArticleCard
                content={articles1[3].content}
                sub={articles1[3].sub}
                img={articles1[3].img}
                date={articles1[3].date}
              />
            </div>
            <div className="w-full md:h-full md:w-full rounded-lg shadow-md">
              <ArticleCard
                content={articles1[3].content}
                sub={articles1[3].sub}
                img={articles1[3].img}
              />
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="font-['ClashDisplay'] p-10 md:hidden ">
        <p className="md:text-[25px] text-[30px] font-bold mb-4">Heading</p>

        <div
          className="w-full h-[41vh] flex overflow-x-scroll gap-4 "
          style={{ scrollSnapType: "x mandatory" }}
        >
          {articles2.map((article, index) => (
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
