import img1 from "../../../assets/Articles/Heading.svg";
import arrow_right from "../../../assets/Home_article/ArrowRight.svg";
import { Link } from "react-router-dom";
import "../../../App.css";
import { useEffect, useState } from "react";
import { ref, get } from 'firebase/database';
import { db } from '../../../../firebase';

export default function blogs_bottom_side() {
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mediaSnapshot = await get(ref(db, 'media'));
        const mediaData = mediaSnapshot.val();

        if (mediaData) {
          const dataArray = Object.entries(mediaData).map(([uid, { img, heading, description, routerlink, date, timestamp }]) => ({
            id: uid,
            img,
            heading,
            description,
            routerlink,
            date,
            timestamp,
          }));

          // Sort mediaData based on timestamp in descending order
          dataArray.sort((a, b) => b.timestamp - a.timestamp);

          setMediaData(dataArray);

          console.log(mediaData);
        }
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

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
            {mediaData.slice(0, 4).map((blog, index) => (
              <div key={index} className="blog-card">
                <div className="w-full rounded-lg shadow-md p-4">
                  <img
                    src={blog.img}
                    alt="Article Thumbnail"
                    className="w-[full] h-[200px] object-center object-cover rounded-lg"
                  />
                  <div className="p-2 flex flex-col gap-4">
                    <div className="flex flex-row place-items-center">
                      <div className="w-[3px] mr-2 h-[18px] bg-[#8AA6AA]"></div>
                      <p className="text-left text-gray-500 text-[14px]">
                        {blog.description}
                      </p>
                    </div>
                    <p className="text-left text-black text-[16px] font-black">
                      {blog.heading}
                    </p>
                    <a href={blog.description} className="flex flex-row place-items-center gap-3">
                      <p className="text-[#8AA6AA] font-extrabold">Read more</p>
                      <img
                        src={arrow_right}
                        className="bg-[#8AA6AA] h-6 p-0.5 rounded-full"
                        alt="Read more"
                      />
                    </a>
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
            {mediaData.slice(0, 4).map((blog, index) => (
              <div key={index} className="blog-card">
                <div className="w-full flex flex-row rounded-lg shadow-md p-4">
                  <img
                    src={blog.img}
                    alt="Article Thumbnail"
                    className="w-[49%] object-cover rounded-lg"
                  />
                  <div className="p-2 flex flex-col gap-4">
                    <p className="text-left text-black text-[12px] font-black">
                      {blog.heading}
                    </p>
                    <div className="flex flex-row place-items-center">
                      <div className="w-[3px] mr-2 h-[18px] bg-[#8AA6AA]"></div>
                      <p className="text-left text-gray-500 text-[12px]">
                        {blog.description}
                      </p>
                    </div>
                    <a href={blog.dir} className="flex flex-row place-items-center gap-3">
                      <p className="text-[#8AA6AA] font-extrabold">Read more</p>
                      <img
                        src={arrow_right}
                        className="bg-[#8AA6AA] h-6 p-0.5 rounded-full"
                        alt="Read more"
                      />
                    </a>
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
