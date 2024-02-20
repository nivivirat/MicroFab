import React, { useEffect, useState } from "react";
import Question from "../../../assets/Icons/Question.svg";
import Case from "../../../assets/Icons/Case.svg";
import { db } from '../../../../firebase'
import { get, ref } from 'firebase/database'

// ... (other imports and code)

const WhyMicrofab = () => {
  const [whyMicrofabData, setWhyMicrofabData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(ref(db, 'Home/WhyMicrofab'));
        const data = snapshot.val();
        setWhyMicrofabData(data);
        console.log('WhyMicrofab data:', data);
      } catch (error) {
        console.error('Error fetching WhyMicrofab data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  // Conditionally render content when whyMicrofabData is available
  return (
    <div className="transition-all duration-300 ease-in-out font-ClashDisplay w-[94%] md:w-[96%] md:h-full md:m-0 md:mr-4 m-4 hover:shadow-md hover:bg-[#a0b4b7] rounded-[16px] hover:shadow-gray-400 bg-gray-300 rounded-16 justify-center flex flex-col overflow-hidden">
      {/* top */}
      <div className="md:flex md:flex-col md:h-[50%] md:w-[60%] h-[40%] w-[45%] mt-[5px] ml-[5px] ">
        <div className="md:rounded-[30px] rounded-[20px] p-2 md:p-0 bg-white flex flex-row place-items-center gap-1">
          <div className="rounded-full bg-[#8aa6aa] md:m-2">
            <img className="" alt="question" src={Question}></img>
          </div>
          {whyMicrofabData ? (
            whyMicrofabData.heading
          ) : (
            // Render a placeholder or loading state when data is not available
            <p>...</p>
          )}
        </div>
      </div>

      {/* down */}
      <div className="flex flex-row relative justify-between md:h-[50%]">
        <p className="md:text-[17px] font-bold md:p-1 custom-font md:mt-0 mt-8 ml-3 place-content-center">
          {whyMicrofabData ? (
            whyMicrofabData.content
          ) : (
            // Render a placeholder or loading state when data is not available
            <p>...</p>
          )}
        </p>
        <img src={Case} alt="case" className="md:h-[100%]"></img>
      </div>
    </div>
  );
};

export default WhyMicrofab;
