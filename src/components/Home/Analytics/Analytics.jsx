import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { onValue, ref } from 'firebase/database';
import { db } from '../../../../firebase';

export default function Analytics() {
  const [analyticsData, setAnalyticsData] = useState({
    down: { content: '', number: '', label: '' },
    left: { content: '', number: '' },
    right: { content: '', number: '' },
    duration: 7, // Initial duration value
  });

  const [labelText, setLabelText] = useState(analyticsData.down?.label || "Countries");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = ref(db, 'Home/Analytics');
        onValue(dataRef, (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();

            // Check if the expected keys exist
            if (data && 'down' in data && 'left' in data && 'right' in data) {
              setAnalyticsData({
                down: data.down,
                left: data.left,
                right: data.right,
                duration: data.duration || 7, // Set duration from the fetched data or use default 7
              });
              setLabelText(data.down?.label || "Countries");
            } else {
              console.error('Invalid data structure in Firebase:', data);
            }
          }
        });
      } catch (error) {
        console.error('Error fetching data from Firebase:', error.message);
      }
    };

    fetchData();
  }, []);

  const getNumericValue = (stringValue) => {
    if (stringValue) {
      return parseInt(stringValue.replace(/[\D]+/g, ''), 10) || 0;
    }
    return 0;
  };

  return (
    <div className="font-['ClashDisplay'] md:ml-[10%] md:mt-16 m-6 w-full flex flex-col md:justify-center md:place-items-start ">
      <p className="text-[#8AA6AA] font-bold md:text-[35px] text-[30px] md:mt-[3%]">
        Analytics
      </p>
      <div className="w-full flex flex-col md:justify-start ">
        {/* top */}
        <div className=" md:w-[80%] w-[80%] flex md:flex-row flex-col md:justify-between gap-10">
          <div>
            <h1 className="md:text-[80px] text-[50px] flex flex-row font-[1000]">
              <CountUp
                end={getNumericValue(analyticsData.left.number)}
                duration={analyticsData.duration}
                separator=","
                useEasing={false}
              />
              <p className="text-[#8AA6AA]">+</p>
            </h1>
            <p className="text-[15px] font-semibold">
              {analyticsData.left.content}
            </p>
          </div>
          <div className="">
            <h1 className="md:text-[80px] text-[50px] flex flex-row font-[1000]">
              <CountUp
                end={getNumericValue(analyticsData.right.number)}
                duration={analyticsData.duration}
                separator=","
                useEasing={false}
              />
              <p className="text-[#8AA6AA]">+</p>
            </h1>
            <p className="font-semibold">
              {analyticsData.right.content}
            </p>
          </div>
        </div>

        {/* bottom */}
        <div className="md:w-[80%] w-[80%] mt-[30px]">
          <h1 className="md:text-[80px] text-[50px] flex flex-row font-[1000]">
            <CountUp
              end={getNumericValue(analyticsData.down.number)}
              duration={analyticsData.duration}
              separator=","
              useEasing={false}
            />
            <p className="text-[#8AA6AA]">+</p>{labelText}
          </h1>
          <p className="font-semibold">
            {analyticsData.down.content}
          </p>
        </div>
      </div>
    </div>
  );
}
