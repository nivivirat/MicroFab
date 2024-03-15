import img1 from "../../../assets/Icons/air.svg";
import img2 from "../../../assets/Icons/bottle.svg"; // Assuming img2 is the path to your second image
import arrow from "../../../assets/Icons/arrow.svg";
import "../../../App.css";

export default function BFS({ content }) {
  const imageToShow = content === "BFS" ? img1 : content === "FFS" ? img2 : null;
  const c = content === "BFS" ? "Project" : "Advisory"
  const d = content === "BFS" ? "Management" : "Services"
  // const c = content === "BFS" ? "BFS" : "FFS"

  return (
    <a href={"/#/" + content} className="transition-all duration-300 ease-in-out hover:shadow-md hover:bg-[#a0b4b7] font-['ClashDisplay'] w-[100%] h-[45%] md:w-[100%] md:h-[46%] md:mr-2 mr-10 bg-[#cdd7d8] rounded-[16px] mt-[8px] flex flex-col overflow-hidden">
      <div className="h-[100%] flex flex-row items-center place-items-center justify-between pl-3">
        {/* <div className="h-[35px] w-[35px] bg-[#8aa6aa] rounded-full flex justify-center">
          <img src={imageToShow} alt="" className="w-[20px]" />
        </div> */}
        <div>
          <p className="text-[16px]">{c}</p>
          <p className="text-[16px] text-center">{d}</p>
        </div>
        <div className="h-[35px] w-[35px] bg-[#8aa6aa] rounded-full flex justify-center place-items-center">
          <img src={arrow} alt="" className="h-[20px] w-[20px]" />
        </div>
      </div>
    </a>
  );
}