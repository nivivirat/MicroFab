import world from "../../../assets/Who_are_we/world.svg";
import "../../../App.css";

export default function Who_are_we() {
  return (
    <div className="custom-font flex md:flex-row flex-col md:justify-between">
      <div className="md:hidden text-center p-4">
        <p className="md:text-[35px] text-[35px] font-bold">Who Are We?</p>
        <p className="md:text-[12px] md:w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </p>
      </div>

      <div className="md:h-[90%]">
        <img src={world} className=""></img>
      </div>

      <div className="w-full flex md:flex-col p-10 flex-col">
        {/* for desktop view */}
        <div className="hidden md:block">
          <p className="md:text-[35px] font-bold">Who Are We?</p>
          <p className="md:text-[12px] md:w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus.
          </p>
        </div>

        {/* desktop view */}
        <div className="md:flex md:flex-col overflow-x-auto md:justify-start md:gap-20">
          {/* 21 countries */}
          <div className="flex md:flex-row gap-1 flex-row md:mt-10">
            <div className="flex flex-row w-full gap-4">
              {/* line */}
              <div className="hidden md:block md:w-[5px] w-[10px] h-[170px] md:h-[80px] bg-[#8AA6AA] gap-4"></div>
              <div className="md:w-[75%] md:text-[16px] w-full">
                <p className="md:text-[25px] text-[25px]">21+ Countries</p>
                <p>We have our presence in 21+ Countries</p>
              </div>
            </div>

           <div className="flex flex-row w-full gap-4">
              {/* line */}
              <div className="hidden md:block md:w-[5px] w-[10px] h-[170px] md:h-[80px] bg-[#8AA6AA] gap-4"></div>
              <div className="md:w-[75%] md:text-[16px] w-full">
                <p className="md:text-[25px] text-[25px]">21+ Countries</p>
                <p>We have our presence in 21+ Countries</p>
              </div>
            </div>
          </div>

          {/* this is hidden in mobile view */}
          <div className="md:flex md:flex-row gap-4 hidden">
            {/* line */}
            <div className="w-[5px] md:w-[8px] md:h-[80px] bg-[#8AA6AA] gap-4"></div>
            <div className="md:w-[75%] md:text-[16px]">
              <p className="md:text-[25px] ">21+ Countries</p>
              <p>We have our presence in 21+ Countries</p>
            </div>
            {/* line */}
            <div className="w-[5px] md:h-[80px] md:w-[8px] bg-[#8AA6AA] gap-4"></div>
            <div className="md:w-[75%] w-[90%] md:text-[16px]">
              <p className="md:text-[25px]">21+ Countries</p>
              <p>We have our presence in 21+ Countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
