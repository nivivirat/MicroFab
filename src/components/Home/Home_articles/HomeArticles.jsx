import arrow_right from "../../../assets/Home_article/ArrowRight.svg";
import img1 from "../../../assets/Home_article/article1.svg";
import img2 from "../../../assets/Home_article/article2.svg";
import img3 from "../../../assets/Home_article/article3.svg";
// import arrow_right from "../../../assets/Home_article/ArrowRight.svg";
import homeArticles from "../../../assets/Articles/Heading.svg";
import ArticleCard from "../../Home/Home_articles/ArticleCard";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import {get, ref} from 'firebase/database';
import {db} from '../../../../firebase'

export default function HomeArticles() {

  const scrollContainerRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  // const scrollAmount = container.clientWidth;

  const handleScroll = (direction) => {
    console.log("clickedd");
    const container = scrollContainerRef.current;

    // Check if the container ref is available
    if (container) {
      let scrollAmount = container.clientWidth;
      scrollAmount += 15
      console.log('scrollAmount:', scrollAmount);

      const newIndex = direction === 'next' ? scrollIndex + 1 : scrollIndex - 1;
      console.log('newIndex:', newIndex);

      // Ensure newIndex is within bounds
      if (newIndex >= 0 && newIndex < reversedMediaData.length) {
        console.log('scrolling to:', newIndex);

        container.scrollTo({
          left: newIndex * scrollAmount,
          behavior: 'smooth',
        });

        setScrollIndex(newIndex);
      }
    }
  };

  const [mediaData, setMediaData] = useState([]);

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
    <div className="font-['ClashDisplay']">
      {/* set of headings */}
      <div>
        <p className="text-black md:text-[25px] text-[30px] md:block hidden font-bold pl-10">
          Our latest Articles
        </p>
        {/* desktop view */}
        {/* desktop view */}
        <div className="w-screen p-10 hidden md:block overflow-x-auto">
          {/* Cards */}
          <div className="flex flex-row gap-3">
            {reversedMediaData.slice(0, 4).map((blog, index) => (
              <a
                key={index}
                onClick={() => handleCardClick(blog)}
                className="w-[50%] cursor-pointer md:w-full md:max-w-[30%] rounded-lg shadow-md overflow-hidden"
              >
                <ArticleCard
                  content={blog.heading}
                  sub={blog.description}
                  img={blog.img}
                  date={blog.date}
                />
              </a>
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
          className="w-full flex overflow-x-scroll gap-4"
          style={{ scrollSnapType: "x mandatory" }}
          ref={scrollContainerRef}
        >
          {reversedMediaData.slice(0, 4).map((article, index) => (

            <div key={index} className="relative w-full flex-shrink-0 scroll-snap-align-start rounded-lg shadow-md">
              <a
                key={index}
                onClick={() => handleCardClick(article)}
                className=""
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
                        {article.description}
                      </p>
                    </div>
                    <p className="text-left text-black text-[18px] font-bold line-clamp-3">
                      {article.heading}
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
              </a>
              <div className="flex justify-between w-full mt-4 absolute top-[35%]">
                <button
                  onClick={() => handleScroll('prev')}
                  disabled={scrollIndex < 0}
                  className="text-primary px-4 py-2 rounded-full"
                >
                  <Icon icon="icon-park-twotone:left-c" />
                </button>
                <button
                  onClick={() => handleScroll('next')}
                  disabled={scrollIndex > reversedMediaData.length}
                  className="text-primary px-4 py-2 rounded-full"
                >
                  <Icon icon="icon-park-twotone:right-c" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
