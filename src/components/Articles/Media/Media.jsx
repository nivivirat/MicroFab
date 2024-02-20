import React, { useState, useEffect } from 'react';
import { db } from '../../../../firebase';
import { ref, get } from 'firebase/database';
import { Link, useNavigate } from 'react-router-dom';
import CardComponent from "./CardComponent";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { Icon } from '@iconify/react';
import ArticleCard from '../../Home/Home_articles/ArticleCard';
import Footer from '../../Common/Footer/Footer';
import arrow_right from '../../../assets/Home_article/ArrowRight.svg';  

export default function Media() {
  const [mediaData, setMediaData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mediaSnapshot = await get(ref(db, 'media'));
        const mediaData = mediaSnapshot.val();

        if (mediaData) {
          const dataArray = Object.entries(mediaData).map(([uid, { img, heading, description, routerlink, date }]) => ({
            id: uid,
            img,
            heading,
            description,
            routerlink,
            date,
          }));

          setMediaData(dataArray);
        }
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  const generateRoute = (media) => {
    if (media.routerlink) {
      return media.routerlink;
    } else {
      return `/#/media/${media.id}/${media.heading.replace(/\s+/g, '-')}`;
    }
  };

  const handleCardClick = (item) => {
    const route = generateRoute(item);
    window.open(route, '_blank');
  };

  const reversedMediaData = [...mediaData].reverse();

  return (
    <div className="font-['ClashDisplay'] md:mt-[100px] mt-[40px]">
      <div>
        <p className="text-primary md:text-[25px] text-[30px] md:block hidden font-bold pl-10">
          Article and Blogs
        </p>
        <div className="w-screen p-10 hidden md:block overflow-x-auto">
          <div className="flex w-[100%] flex-row gap-3 flex-wrap">
            {reversedMediaData.map((item) => (
              <div
                key={item.id}
                className="w-[50%] md:w-full md:max-w-[24%] rounded-lg shadow-md overflow-hidden"
              > 
                <Card
                  className="w-[100%] flex flex-col md:flex-row mr-12 animated-box animate__animated animate__fadeInLeft animate__delay-0.2s"
                  onClick={() => handleCardClick(item)}
                >
                  <ArticleCard
                    content={item.heading}
                    sub={item.description}
                    img={item.img}
                    date={item.date}
                  />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="font-['ClashDisplay'] p-10 md:hidden">
        <p className="text-primary md:text-[25px] text-[30px] font-bold mb-4">
          Article and Blogs
        </p>
        <div
          className="w-full h-[43vh] flex overflow-x-scroll gap-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {reversedMediaData.map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 scroll-snap-align-start rounded-lg shadow-md"
              onClick={() => handleCardClick(item)}
            >
              <div className="border-2 w-full flex flex-col place-items-center rounded-lg shadow-md">
                <img
                  src={item.img}
                  alt="Blog Thumbnail"
                  className="w-auto h-[300px] object-cover object-center"
                />
                <div className="p-2 flex flex-col gap-4">
                  <div className="flex flex-row place-items-center">
                    <div className="w-[3px] mr-2 h-[18px] bg-[#8AA6AA]"></div>
                    <p className="text-left text-gray-500 text-[14px]">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-left text-black text-[18px] font-bold line-clamp-3">
                    {item.heading}
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
      <Footer />
    </div>
  );
}
