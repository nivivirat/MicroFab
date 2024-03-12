import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import Blogs_bottom_side from '../../Blogs/SingleBlogPage/Blogs_bottom_side';
import Footer from '../../Common/Footer/Footer';

const firebaseConfig = {
  apiKey: "AIzaSyAHfTtMp6QIkc8i-UlwcjjpYs6oWzH90NA",
  authDomain: "microfab-admin.firebaseapp.com",
  databaseURL: "https://microfab-admin-default-rtdb.firebaseio.com",
  projectId: "microfab-admin",
  storageBucket: "microfab-admin.appspot.com",
  messagingSenderId: "949509913271",
  appId: "1:949509913271:web:7fba49e66f7a592ce2ab32",
  measurementId: "G-B1KM0RLBQN",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDRNf_YlzJhIos4NRMnJ2AGMIkugJ0kV_M",
//   authDomain: "coin-94280.firebaseapp.com",
//   databaseURL: "https://coin-94280-default-rtdb.firebaseio.com",
//   projectId: "coin-94280",
//   storageBucket: "coin-94280.appspot.com",
//   messagingSenderId: "726875973513",
//   appId: "1:726875973513:web:0a4872c3220a4e7da2e358",
//   measurementId: "G-ZBTVKV0CVG"
// };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const MainBlog = () => {
  const { id } = useParams();
  const [innerContent, setInnerContent] = useState(null);

  const [heading, setHeading] = useState(null);
  const [desc, setDesc] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, `Media/${id}`);
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.innerContent) {
        setInnerContent(data.innerContent);
      }
    }, (error) => {
      console.error('Error fetching data:', error);
    });

    // Cleanup function to unsubscribe from the listener
    return () => {
      unsubscribe();
    };
  }, [id]);

  // for heading

  useEffect(() => {
    const dbRef = ref(database, `media/${id}`);
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.heading) {
        setHeading(data.heading);
      }
      if (data && data.description) {
        setDesc(data.description);
      }
      if (data && data.date) {
        setDate(data.date);
      }
    }, (error) => {
      console.error('Error fetching data:', error);
    });

    // Cleanup function to unsubscribe from the listener
    return () => {
      unsubscribe();
    };
  }, [id]);

  if (!innerContent) {
    return <div>
      no data
    </div>;
  }

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col md:flex-row'>
        <div className='px-10 flex flex-col mt-24 md:w-9/12 w-full'>
          <div className="flex flex-row space-x-2">
            <p className="text-[#8AA6AA] text-[20px]">Home </p>
            <p className="text-black text-[20px] font-bold">/</p>
            <p className="text-[#8AA6AA] text-[20px]">Article </p>
          </div>
          <div>
            <p className="text-[#8AA6AA] text-[30px]">{heading}</p>
          </div>
          <div>
            {/* <p className='text-[#183B56] font-semibold py-5 text-center w-screen'>{desc}</p> */}
          </div>
          <div>
            {/* <p className='text-[#0078A6] w-screen text-center'>{date}</p> */}
          </div>
          <div className='flex flex-col justify-center'>
            <img src={innerContent.Image} alt="Blog" className='py-5 w-full h-[500px] object-cover object-center' />
            <div dangerouslySetInnerHTML={{ __html: innerContent.HTMLContent }} />
          </div>
        </div>

        {/* recommended articles */}
        <div className='md:w-3/12 w-full mt-20'>
          <Blogs_bottom_side />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainBlog;
