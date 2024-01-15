import "../../../App.css";
import React from 'react';
import CountUp from 'react-countup';

// Import your CSS file if necessary
// import "../../../App.css";

export default function Analytics() {
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
              <CountUp end={200} duration={7} separator="," /> {/* Counting animation for 200 */}
              <p className="text-[#8AA6AA]">+</p>
            </h1>
            <p className="text-[15px]">
              Premium moulds made for machines <br></br>from Germany, Italy and
              US Origins
            </p>
          </div>
          <div className="">
            <h1 className="md:text-[80px] text-[50px] flex flex-row font-[1000]">
              <CountUp end={100000} duration={7} separator="," /> {/* Counting animation for 100,000 */}
              <p className="text-[#8AA6AA]">+</p>
            </h1>
            <p className="">Square feet across four strategic locations</p>
          </div>
        </div>

        {/* bottom */}
        <div className="md:w-[80%] w-[80%] mt-[30px]">
          <h1 className="md:text-[80px] text-[50px] flex flex-row font-[1000]">
            <CountUp end={15} duration={10} /> {/* Counting animation for 15 */}
            <p className="text-[#8AA6AA]">+</p>Countries
          </h1>
          <p className="">
            Our global footprint spans over Algeria, Ghana, Nigeria, South
            Africa, Malaysia and many more
          </p>
        </div>
      </div>
    </div>
  );
}
