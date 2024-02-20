import React, { useEffect, useState } from "react";
import "../../../App.css";
import mac1 from "../../../assets/water_TS/mac1.svg";
import mac2 from "../../../assets/water_TS/mac2.svg";
import mac3 from "../../../assets/water_TS/mac3.svg";
import mac4 from "../../../assets/water_TS/mac4.svg";
import mac5 from "../../../assets/water_TS/mac5.svg";
import mac6 from "../../../assets/water_TS/mac6.svg";
import mac7 from "../../../assets/water_TS/mac7.svg";
import mac8 from "../../../assets/water_TS/mac8.svg";
import machine from "../../../assets/water_TS/machine.svg";
import STO from "../../../assets/water_TS/storage_tank-outline.svg";
import sync from "../../../assets/water_TS/sync.svg";
import WCO from "../../../assets/water_TS/water_check_outline.svg";
import water_polo from "../../../assets/water_TS/water_polo.svg";
import data from "./water_TS_Data.json";
import { db } from '../../../../firebase'
import { ref, get } from 'firebase/database'

const WaterTS = () => {
  const images = {
    mac1,
    mac2,
    mac3,
    mac4,
    mac5,
    mac6,
    mac7,
    mac8,
  };

  const renderMobileView = (item) => {
    return (
      <div key={item.heading} className="flex items-center gap-10">
        <div className="w-full flex flex-row">
          <div className="h-[100px] w-[35%] p-4">
            <img
              src={images[item.imgl]}
              alt="WTS"
              className="rounded-[19px] object-cover"
            />
          </div>
          <div className="w-[55%]">
            <h3 className="text-lg font-bold">{item.heading}</h3>
            <p className="text-sm">{item.content}</p>
          </div>
        </div>
      </div>
    );
  };

  const [index, setIndex] = useState(0);
  const [borderPercentage, setBorderPercentage] = useState("5%"); // Initial border percentage

  console.log(index);

  console.log(index);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const waterTSRef = ref(db, 'Home/water_TS_Data');
        const snapshot = await get(waterTSRef);
        const dataFromDB = snapshot.val();

        if (dataFromDB) {
          setData(dataFromDB);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-[100%] flex flex-col">
      <div className="relative w-[100%] flex flex-col md:flex-row md:justify-center place-items-center">
        <div className="relative font-mono flex justify-center place-items-center md:w-[600px] w-[300px] h-[300px] md:h-[600px] rounded-full border border-solid border-[rgba(190, 190, 190, 0.20)] shadow-xl">
          <div className="flex justify-center place-items-center md:h-[450px] md:w-[450px] w-[250px] h-[250px]  rounded-full  border border-solid border-[rgba(190, 190, 190, 0.20)] shadow-xl">
            <a href="/#/turnKeySolutions" className="relative border-[rgba(190, 190, 190, 0.20)] shadow-xl rounded-full w-[200px] h-[200px] md:w-[250px] md:h-[250px] flex items-center justify-center">
              <div
                className="absolute w-full h-full rounded-full border border-solid border-[rgba(190, 190, 190, 0.20)] transition-all duration-500"
                style={{
                  background: `conic-gradient(#8AA6AA ${borderPercentage}, transparent ${borderPercentage})`,
                  transform: "rotate(0deg)", // Rotate to start the gradient from the top
                }}
              ></div>
              <div className="absolute w-[96%] h-[96%] mb-0.5 flex justify-center place-items-center flex-col bg-white rounded-full">
                <a
                  className="md:text-[25px] font-bold"
                  href="/#/turnKeySolutions"
                >
                  Turnkey-Lines
                </a>

                <p className="md:text-[15px] text-center font-bold px-2">
                  A vast range of machinery that we are proud about.
                </p>
              </div>
            </a>
          </div>
        </div>

        <img
          src={images[data[index].imgl]}
          alt="WTS"
          className="hidden md:block md:absolute md:rounded-none rounded-[19px] md:h-[200px] md:w-[200px] h-[150px] w-[150px] left-[20px] top-0"
        ></img>
        <div className="hidden md:block custom-font md:absolute md:left-[20px] md:top-[250px] md:h-[200px] md:w-[300px] md:text-[10px]">
          <p className="h-[150px] w-[250px] text-[14px]">
            {data[index].content}
          </p>
        </div>

        {/* img above water treatment system */}
        <img
          src={images[data[index].imgr]}
          alt="imgr"
          className="hidden md:block md:absolute md:rounded-none rounded-[19px] md:h-[200px] md:w-[200px] h-[150px] w-[150px] right-[8%] bottom-[30%]"
        ></img>

        {/* four images in circle */}
        <img
          src={WCO}
          alt="WCO"
          onClick={() => {
            setBorderPercentage("5%");
            setIndex(0);
          }}
          className="cursor-pointer md:absolute absolute right-[47%] top-[8%] md:right-[49%] md:top-[20%] rounded-full p-0.5 bg-[#8AA6AA] h-[20px] md:h-[40px]"
        ></img>

        <img
          src={sync}
          alt="sync"
          onClick={() => {
            setBorderPercentage("50%");
            setIndex(2);
          }}
          className="cursor-pointer md:absolute absolute right-[47%] top-[85%] md:right-[48%] md:top-[73%] rounded-full md:p-2 p-0.5 h-[20px] bg-[#8AA6AA] md:h-[40px]"
        ></img>

        <img
          src={water_polo}
          alt="Water polo"
          onClick={() => {
            setBorderPercentage("25%");
            setIndex(1);
          }}
          className="cursor-pointer md:absolute absolute right-[18%] top-[45%] md:right-[37%] md:top-[49%] rounded-full md:p-2 p-0.5 h-[20px] bg-[#8AA6AA] md:h-[40px]"
        ></img>

        <img
          src={STO}
          alt="STO"
          onClick={() => {
            setBorderPercentage("95%");
            setIndex(3);
          }}
          className="cursor-pointer md:absolute absolute right-[76%] top-[45%] md:right-[60%] md:top-[49%] rounded-full md:p-2 p-0.5 h-[20px] bg-[#8AA6AA] md:h-[40px]"
        ></img>

        <p className="md:block w-[300px] hidden md:text-[30px] font-bold text-[#3659FA] md:absolute bottom-[100px] right-[100px]">
          {data[index].heading}
        </p>
      </div>
      <div>
        <div className="md:hidden flex flex-row overflow-x-scroll mt-[30px]">
          {renderMobileView(data[index])}
        </div>
      </div>
    </div>
  );
};

export default WaterTS;
