import img1 from "../../../assets/Icons/air.svg";
import img2 from "../../../assets/Icons/bottle.svg";
import arrow from "../../../assets/Icons/arrow.svg";
import "../../../App.css";

export default function BFS({ content }) {
  const imageToShow = content === "Product solutions" ? img1 : content === "Turnkey Solutions" ? img2 : null;
  const linkPath = content === "Product solutions" ? "/product" : content === "Turnkey Solutions" ? "/turnKeySolutions" : "/";

  return (
    <a href={linkPath} className="transition-all duration-300 ease-in-out hover:shadow-md hover:bg-[#a0b4b7] font-['ClashDisplay'] w-[100%] h-[45%] md:w-[100%] md:h-[46%] md:mr-2 mr-10 bg-[#cdd7d8] rounded-[16px] mt-[8px] flex flex-col overflow-hidden">
      <div className="h-[100%] flex flex-row items-center place-items-center justify-center gap-0">
        <div className="h-[35px] w-[35px] bg-[#8aa6aa] rounded-full flex justify-center">
          <img src={imageToShow} alt="" className="w-[20px]" />
        </div>
        <p className="text-[15px] text-center">{content}</p>
        <div className="h-[35px] w-[35px] bg-[#8aa6aa] rounded-full flex justify-center place-items-center">
          <img src={arrow} alt="" className="h-[20px] w-[20px]" />
        </div>
      </div>
    </a>
  );
}
