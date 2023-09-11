import React from "react";
import arrow_right from "../../../assets/Home_article/ArrowRight.svg";
import img1 from "../../../assets/Home_blog/blog1.svg";
import img2 from "../../../assets/Home_blog/blog2.svg";
import img3 from "../../../assets/Home_blog/blog3.svg";
import img4 from "../../../assets/Home_blog/blog4.svg";
import "../../../App.css";
import { Link } from "react-router-dom";

const blogs = [
  {
    sub: "Covid - 19 Vaccine",
    content:
      "Where do COVID-19 vaccine players stand on pricing? So far, it's no profit, slight profit or undecided", // Added content
    img: img1,
  },
  {
    content: "Vaccine Price",
    sub: "Where do COVID-19 vaccine players stand on pricing?",
    img: img2,
  },
  {
    content: "Blow-Fill-Seal, Technology",
    sub: "Investing in Form-Fill-Seal",
    img: img3,
  },
  {
    content: "Blow-Fill-Seal, Technology",
    sub: "Investing in Form-Fill-Seal",
    img: img4,
  },
];

export default function BlogsCardScroll() {
  return (
    <div>
      {/* desktop view */}

      <div className="font-['ClashDisplay'] p-10 md:block hidden">
        <div className="flex gap-5 ">
          <div className="flex-1">
            <Link to="/blogs/blog1">
              {/* Left div with the first blog covering the entire width and height */}
              <div className="md:h-[480px] w-full">
                <img
                  src={blogs[0].img}
                  alt="Article Thumbnail"
                  className="w-full"
                />
                <div className="p-2 rounded-lg shadow-md flex flex-col gap-8">
                  <div className="flex flex-row place-items-center md:mt-0.5">
                    <div className="md:w-[3px] md:mr-2 md:h-[18px] h-[10px] bg-[#8AA6AA] md:mt-0 md:mb-0 mt-[22px] mb-[15px]"></div>
                    <p className="text-left text-gray-500 text-[14px]">
                      {blogs[0].sub}
                    </p>
                  </div>
                  <p className="text-left text-black text-[20px] font-black">
                    {blogs[0].content}
                  </p>
                  <div className="flex flex-row place-items-center gap-3 md:mb-3">
                    <p className="text-[#8AA6AA] font-extrabold">Read more</p>
                    <img
                      src={arrow_right}
                      className="bg-[#8AA6AA] h-6 p-0.5 rounded-full"
                      alt="Read more"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex-1 md:h-[450px]">
            {/* Right div with three other blogs */}
            <div className="flex flex-col">
              {/* Top blog */}
              <div className="mb-4 flex flex-row rounded-lg shadow-md">
                <img
                  src={blogs[1].img}
                  alt="Article Thumbnail"
                  className="w-[50%]"
                />
                <div className="p-2 flex flex-col justify-between my-6">
                  <p className="text-left text-black font-bold">
                    {blogs[1].sub}
                  </p>
                  <div className="flex flex-row place-items-center md:mt-0.5">
                    <div className="md:w-[3px] md:mr-2 md:h-[18px] h-[10px] bg-[#8AA6AA] md:mt-0 md:mb-0 mt-[22px] mb-[15px]"></div>
                    <p className="text-left text-gray-500 text-[14px]">
                      {blogs[1].content}
                    </p>
                  </div>
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
              {/* Bottom two blogs side by side */}
              <div className="flex">
                <div className="flex-1 mr-2">
                  <img
                    src={blogs[2].img}
                    alt="Article Thumbnail"
                    className="w-[100%]"
                  />
                  <div className="p-2 rounded-lg shadow-md  flex flex-col gap-2">
                    <p className="text-left text-black">{blogs[2].sub}</p>
                    <div className="flex flex-row place-items-center md:mt-0.5">
                      <div className="md:w-[3px] md:mr-2 md:h-[18px] h-[10px] bg-[#8AA6AA] md:mt-0 md:mb-0 mt-[22px] mb-[15px]"></div>
                      <p className="text-left text-gray-500 text-[14px]">
                        {blogs[2].content}
                      </p>
                    </div>

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
                <div className="flex-1 ml-2 rounded-lg shadow-md">
                  <img
                    src={blogs[3].img}
                    alt="Article Thumbnail"
                    className="w-full"
                  />
                  <div className="p-2 flex flex-col gap-2">
                    <p className="text-left text-black">{blogs[3].sub}</p>
                    <div className="flex flex-row place-items-center md:mt-0.5">
                      <div className="md:w-[3px] md:mr-2 md:h-[18px] h-[10px] bg-[#8AA6AA] md:mt-0 md:mb-0 mt-[22px] mb-[15px]"></div>
                      <p className="text-left text-gray-500 text-[14px]">
                        {blogs[3].content}
                      </p>
                    </div>

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
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div className="custom-font p-10 md:hidden">
        <div className="flex flex-row justify-between pb-10">
          <p className="md:text-[25px] md:block hidden font-extrabold">
            Blogs
          </p>
          <Link to="/blogs">
            <p className="md:block hidden text-[#8AA6AA] cursor-pointer">
              View all
            </p>
          </Link>
        </div>

        <div className="flex gap-5 overflow-x-scroll">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <Link to="/blogs/blog1">
                <div className="w-[300px] h-[500px] md:h-[480px] rounded-lg shadow-md">
                  <img
                    src={blog.img}
                    alt="Article Thumbnail"
                    className="w-[100%] h-[40%] object-cover"
                  />
                  <div className="p-2 flex flex-col gap-8">
                    <div className="flex flex-row place-items-center">
                      <div className="w-[3px] mr-2 h-[18px] bg-[#8AA6AA]"></div>
                      <p className="text-left text-gray-500 text-[14px]">
                        {blog.sub}
                      </p>
                    </div>
                    <p className="text-left text-black text-[20px] font-black">
                      {blog.content}
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
