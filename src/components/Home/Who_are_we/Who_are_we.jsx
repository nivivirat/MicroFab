import world from "../../../assets/Who_are_we/world.svg";
import world_mobile from "../../../assets/Who_are_we/world_mobile.svg";
// import "../../../App.css";
import "./hstyle.css";
import Slider from "../Testimonials/Slider";
import { useEffect, useState } from "react";
import { db } from '../../../../firebase'
import { ref, get } from "firebase/database";

const Section = ({ title, description }) => (
  <div className="flex-shrink-0 w-[50%] flex flex-row gap-5">
    <div className="block md:w-[5px] w-[10px] h-[100px] md:h-[120px] bg-[#8AA6AA] gap-1"></div>
    <div className="md:w-[75%] md:text-[16px] flex flex-col">
      <p className="md:text-[20px] font-semibold text-[18px] overflow-visible">{title}</p>
      <p className="md:w-full w-[60%]">{description}</p>
    </div>
  </div>
);

const Sections = ({ data }) => (
  <div className="md:hidden flex flex-row overflow-x-scroll mt-[30px]">
    <div className="flex flex-nowrap -mx-36">
      <Slider options={{ align: "center" }}>
        {data.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            description={section.description}
          />
        ))}
      </Slider>
    </div>
  </div>
);

export default function Who_are_we() {

  const [sectionsData, setSectionsData] = useState([]);
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(ref(db, "Home/Who_Are_We"));
        const snapshot2 = await get(ref(db, "Home/Who_Are_We_Text"));

        if (snapshot.exists()) {
          // Extract the data from the snapshot
          const data = snapshot.val();
          setSectionsData(data);
        } else {
          console.log("No data available");
        }

        if (snapshot2.exists()) {
          // Extract the data from the snapshot
          const data = snapshot2.val();
          setContent(data);
          console.log(data);
        } else {
          console.log("No data available !");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();

  }, []);

  console.log(sectionsData);
  return (
    <div className="custom-font flex md:flex-row flex-col md:justify-between">
      <div className="md:hidden text-center p-4">
        <p className="md:text-[35px] text-[35px] font-bold">Who Are We?</p>
        <p className="md:text-[20px] md:w-[80%]">
          {content ? content.content : "Loading..."}
        </p>
      </div>

      <div className="relative md:h-[90%] md:text-[16px] text-[16px]">

        <img src={world} className="relative hidden md:block" alt="world"></img>
        <div className="absolute -top-[150px] md:opacity-50 opacity-30">
          <div className="atom ">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className="electron"></div>
          <div className="electron"></div>
          <div className="electron"></div>
        </div>
        <img
          src={world_mobile}
          className="md:hidden block"
          alt="world_mobile"
        ></img>

        <div className="">
          <p className="absolute text-[12px] md:text-[16px] md:top-[37%] top-[38%] font-bold md:right-[55%] right-[30%] bg-white rounded-[20px] px-4 border-black border-2 md:p-2">
            india
          </p>
          <p className="absolute text-[12px] md:text-[16px] md:top-[20%] top-[28%] font-bold md:right-[70%] right-[45%] bg-white rounded-[20px] px-4 border-black border-2 md:p-2">
            Ghana
          </p>
          <p className="absolute text-[12px] md:text-[16px] md:top-[20%] top-[28%] font-bold md:right-[40%] right-[10%] bg-white rounded-[20px] px-4 border-black border-2 md:p-2">
            Algeria
          </p>
          <p className="absolute text-[12px] md:text-[16px] md:top-[50%] top-[50%] font-bold md:right-[70%] right-[45%] bg-white rounded-[20px] px-4 border-black border-2 md:p-2">
            Africa
          </p>
          <p className="absolute text-[12px] md:text-[16px] md:top-[55%] top-[55%] font-bold md:right-[26%] right-[10%] bg-white rounded-[20px] px-4 border-black border-2 md:p-2">
            Indonesia
          </p>
          <p className="absolute text-[12px] md:text-[16px] md:top-[70%] top-[70%] font-bold md:right-[46%] right-[30%] bg-white rounded-[20px] px-4 border-black border-2 md:p-2">
            Philippines
          </p>
        </div>
      </div>
      <div className="w-full flex md:flex-col md:p-10 p-4 flex-col">
        {/* for desktop view */}
        <div className="hidden md:block">
          <p className="md:text-[35px] font-bold">Who Are We?</p>
          <p className="md:text-[16px] font-semibold md:w-[80%]">
            {content ? content.content : "Loading..."}
          </p>
        </div>

        {/* mobile x scroll */}
        <div>
          <Sections data={sectionsData} />
        </div>

        {/* desktop view */}
        <div className="md:flex hidden md:flex-col overflow-x-auto md:justify-start md:gap-20">
          {/* 21 countries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-10">
            {sectionsData.map((section, index) => (
              <div className="flex flex-row gap-4" key={index}>
                {/* line */}
                <div className="block md:w-[5px] w-[10px] h-[170px] md:h-[80px] bg-[#8AA6AA] gap-4"></div>
                <div className="md:w-[75%] md:text-[16px] w-full">
                  {section && section.title && (
                    <p className="md:text-[20px] font-semibold text-[20px]">
                      {section.title}
                    </p>
                  )}
                  {section && section.description && (
                    <p>{section.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
