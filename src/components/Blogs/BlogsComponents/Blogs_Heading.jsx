import img1 from "../../../assets/Home_article/article1.svg";
import img2 from "../../../assets/Home_article/article2.svg";
import img3 from "../../../assets/Home_article/article3.svg";
import arrow_right from "../../../assets/Home_article/ArrowRight.svg";
import homeArticles from "../../../assets/Articles/Heading.svg";
import ArticleCard from "../../Home/Home_articles/ArticleCard";

import Blogs_Heading from "../Blog_heading_content.json";

export default function Heading() {
  return (
    <div className="font-['ClashDisplay']">
      {/* set of headings */}
      <div>
        <p className="md:text-[25px] text-[30px] md:block hidden font-bold pl-10">
          Heading
        </p>
        {/* desktop view */}
        <div className="w-screen p-10 hidden md:block overflow-x-auto">
          {/* Cards */}
          <div className="flex flex-row gap-3">
            {Blogs_Heading.slice(0, 4).map((blog, index) => (
              <div
                key={index}
                className="w-[50%] md:w-full md:max-w-[30%] rounded-lg shadow-md overflow-hidden"
              >
                <ArticleCard
                  content={blog.content}
                  sub={blog.sub}
                  img={blog.img}
                  date={blog.date}
                />
              </div>
            ))}
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
          {Blogs_Heading.map((article, index) => (
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
