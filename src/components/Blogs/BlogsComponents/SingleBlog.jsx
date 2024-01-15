import img1 from "../../../assets/Home_blog/blog1.svg";
import Article4 from "../../Home/Home_articles/Article4";
import arrow_right from "../../../assets/Home_article/ArrowRight.svg";

import Blogs_content from '../Blog_content.json';

export default function SingleBlog() {

  return (
    <div className="font-['ClashDisplay']">
      <div
        className="w-full md:h-[53vh] h-[45hv] flex overflow-x-scroll gap-4 "
        style={{ scrollSnapType: "x mandatory" }}
      >
        {/* one blog individual desktop */}
        <div className="w-full pl-10 pb-10 pr-10 hidden md:block">
          <div className="w-full md:h-full md:w-full rounded-lg shadow-md">
            <Article4
              content={Blogs_content[0].content}
              sub={Blogs_content[0].sub}
              img={Blogs_content[0].img}
              date={Blogs_content[0].date}
            />
          </div>
        </div>

        {/* mobile version */}
        <div className="md:hidden pl-10 pr-10">
          {Blogs_content.slice(0,1).map((article, index) => (
            <div
              key={index}
              className="w-full md:hidden flex-shrink-0 scroll-snap-align-start rounded-lg shadow-md"
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
