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
                {/* Rest of your component code */}
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
                {/* Rest of your component code */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
