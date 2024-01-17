import world from "../../../assets/Who_are_we/world.svg";
import world_mobile from "../../../assets/Who_are_we/world_mobile.svg";
// import "../../../App.css";
import "./hstyle.css";
import Slider from "../Testimonials/Slider";

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

const sectionsData = [
  {
    title: "500+ cutting-edge machinery",
    description: "We design machinery as per the requirements",
  },
  {
    title: "200+ employees",
    description: "We have maintained the aplomb through the years",
  },
  {
    title: "90% customer retention",
    description: "Our team is known for incredible service",
  },
  {
    title: "Across 15+ countries",
    description: "We have our footprint across the globe",
  },
];

export default function Who_are_we() {
  return (
    <div className="custom-font flex md:flex-row flex-col md:justify-between">
      <div className="md:hidden text-center p-4">
        <p className="md:text-[35px] text-[35px] font-bold">Who Are We?</p>
        <p className="md:text-[20px] md:w-[80%]">
          MicroFab, born from the merger of MicroTools and FabLab, excels in BFS
          and FFS machine manufacturing and EPC contracting. Committed to
          quality and innovation, we redefine industry standards in advanced
          packaging and industrial solutions. Our mission is to revolutionize
          packaging and project execution as a unified source for cutting-edge
          technologies and turnkey solutions across diverse industries.
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
            MicroFab, born from the merger of MicroTools and FabLab, excels in
            BFS and FFS machine manufacturing and EPC contracting. Committed to
            quality and innovation, we redefine industry standards in advanced
            packaging and industrial solutions. Our mission is to revolutionize
            packaging and project execution as a unified source for cutting-edge
            technologies and turnkey solutions across diverse industries.
          </p>
        </div>

        {/* mobile x scroll */}
        <div>
          <Sections data={sectionsData} />

          {/* <div className="md:hidden flex flex-row overflow-x-scroll mt-[30px]">
            <div className="flex flex-nowrap">
              <div className="w-[45%] flex-shrink-0">
                <div className="flex flex-row gap-10">
                  <div className="block md:w-[5px] w-[10px] h-[120px] md:h-[120px] bg-[#8AA6AA] gap-4"></div>
                  <div className="md:w-[75%] md:text-[16px] flex flex-col">
                    <p className="md:text-[20px] font-semibold text-[20px]">
                      500+ cutting-edge <br></br>machinery
                    </p>
                    <p className="">
                      We design machinery as<br></br> per the requirements
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[50%] flex-shrink-0">
                <div className="flex flex-row gap-10">
                  <div className="block md:w-[5px] w-[10px] h-[120px] md:h-[120px] bg-[#8AA6AA] gap-4"></div>
                  <div className="md:w-[75%] md:text-[16px] flex flex-col">
                    <p className="md:text-[20px] font-semibold text-[20px]">
                      200+ employees
                    </p>
                    <p className="">
                      We have maintained the<br></br> aplomb through the
                      <br></br> years
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[50%] flex-shrink-0">
                <div className="flex flex-row gap-10">
                  <div className="block md:w-[5px] w-[10px] h-[100px] bg-[#8AA6AA] gap-4"></div>
                  <div className="md:w-[75%] md:text-[16px] flex flex-col">
                    <p className="md:text-[20px] font-semibold text-[20px]">
                      90% customer retention
                    </p>
                    <p className="">
                      Our team is known for<br></br> incredible service
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[50%] flex-shrink-0">
                <div className="flex flex-row gap-10">
                  <div className="block md:w-[5px] w-[10px] h-[100px] bg-[#8AA6AA] gap-4"></div>
                  <div className="md:w-[75%] md:text-[16px] flex flex-col">
                    <p className="md:text-[20px] font-semibold text-[20px]">
                      Across 15+ countries
                    </p>
                    <p className="">
                      We have our footprint <br></br>across the globe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* desktop view */}
        <div className="md:flex hidden md:flex-col overflow-x-auto md:justify-start md:gap-20">
          {/* 21 countries */}
          <div className="flex md:flex-row gap-1 flex-row md:mt-10">
            <div className="flex flex-row w-full gap-4">
              {/* line */}
              <div className="block md:w-[5px] w-[10px] h-[170px] md:h-[120px] bg-[#8AA6AA] gap-4"></div>
              <div className="md:w-[75%] md:text-[16px] w-full">
                <p className="md:text-[20px] font-semibold text-[20px]">
                  500+ cutting-edge <br></br>machinery
                </p>
                <p className="">
                  We design machinery as<br></br> per the requirements
                </p>
              </div>
            </div>

            <div className="flex flex-row w-full gap-4">
              {/* line */}
              <div className="md:w-[5px] w-[10px] h-[170px] md:h-[120px] bg-[#8AA6AA] gap-4"></div>
              <div className="md:w-[75%] md:text-[16px] w-full">
                <p className="md:text-[20px] font-semibold text-[20px]">
                  200+ employees
                </p>
                <p>
                  We have maintained the<br></br> aplomb through the<br></br>{" "}
                  years
                </p>
              </div>
            </div>
          </div>

          {/* this is hidden in mobile view */}
          <div className="md:flex md:flex-row gap-4 hidden">
            {/* line */}
            <div className="w-[5px] md:w-[8px] md:h-[100px] bg-[#8AA6AA] gap-4"></div>
            <div className="md:w-[75%] md:text-[16px]">
              <p className="md:text-[20px] font-semibold text-[25px]">
                90% customer retention
              </p>
              <p>
                Our team is known for <br></br>incredible service
              </p>
            </div>
            {/* line */}
            <div className="w-[5px] md:h-[100px] md:w-[8px] bg-[#8AA6AA] gap-4"></div>
            <div className="md:w-[75%] w-[90%] md:text-[16px]">
              <p className="md:text-[20px] font-semibold text-[25px]">
                Across 15+ countries
              </p>
              <p>
                We have our footprint <br></br>across the globe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
