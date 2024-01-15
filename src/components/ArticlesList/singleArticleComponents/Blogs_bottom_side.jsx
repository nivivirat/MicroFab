import img1 from "../../../assets/Articles/Heading.svg";
import arrow_right from "../../../assets/Home_article/ArrowRight.svg";
// import d from '../../../ass'
import { Link } from "react-router-dom";
import "../../../App.css";

export default function blogs_bottom_side() {
  const blogs = [
    {
      sub: "Covid - 19 Vaccine",
      content:
        "Where do COVID-19 vaccine players stand on pricing? So far, it's no profit, slight profit or undecided", // Added content
      img: img1,
    },
    {
      sub: "Covid - 19 Vaccine",
      content:
        "Where do COVID-19 vaccine players stand on pricing? So far, it's no profit, slight profit or undecided", // Added content
      img: img1,
    },
  ];
  const posts = [
    {
      sub: "Blow-Fill-Seal, Technology ",
      content: "Investing in Form-Fill-Seal", // Added content
      img: img1,
    },
    {
      sub: "Blow-Fill-Seal, Technology ",
      content: "Investing in Form-Fill-Seal", // Added content
      img: img1,
    },
    {
      sub: "Blow-Fill-Seal, Technology ",
      content: "Investing in Form-Fill-Seal", // Added content
      img: img1,
    },
  ];

  return (
    <div className="font-['ClashDisplay']">
      {/* You may also like section */}
      <div>
        <div>
          <p className="m-3 text-[18px] py-2 font-bold md:pl-0 pl-3">
            You may also like
          </p>
        </div>
        <div className="">
          <div className="m-3 flex flex-col gap-5 justify-center md:place-items-start place-items-center">
            {blogs.map((blog, index) => (
              <div key={index} className="blog-card">
                <div className="w-full rounded-lg shadow-md p-4">
                  <img
                    src={blog.img}
                    alt="Article Thumbnail"
                    className="w-[100%] h-[40%] object-cover rounded-lg"
                  />
                  <div className="p-2 flex flex-col gap-4">
                    <div className="flex flex-row place-items-center">
                      <div className="w-[3px] mr-2 h-[18px] bg-[#8AA6AA]"></div>
                      <p className="text-left text-gray-500 text-[14px]">
                        {blog.sub}
                      </p>
                    </div>
                    <p className="text-left text-black text-[16px] font-black">
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended posts section */}
      <div>
        <div>
          <p className="m-3 text-[18px] py-2 font-bold md:pl-0 pl-3">
            Recommended posts
          </p>
        </div>
        <div className="">
          <div className="m-3 flex flex-col gap-5 justify-center md:place-items-start place-items-center">
            {posts.map((blog, index) => (
              <div key={index} className="blog-card">
                <div className="w-full flex flex-row rounded-lg shadow-md p-4">
                  <img
                    src={blog.img}
                    alt="Article Thumbnail"
                    className="w-[49%] object-cover rounded-lg"
                  />
                  <div className="p-2 flex flex-col gap-4">
                    <p className="text-left text-black text-[12px] font-black">
                      {blog.content}
                    </p>
                    <div className="flex flex-row place-items-center">
                      <div className="w-[3px] mr-2 h-[18px] bg-[#8AA6AA]"></div>
                      <p className="text-left text-gray-500 text-[12px]">
                        {blog.sub}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
