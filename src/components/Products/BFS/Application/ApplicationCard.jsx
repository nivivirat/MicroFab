import food from "../../../../assets/Products/BFS/application/food.svg";
import chemicals from "../../../../assets/Products/BFS/application/chemicals.svg";
import pharma from "../../../../assets/Products/BFS/application/pharma.svg";
import cosmetics from "../../../../assets/Products/BFS/application/cosmetics.svg";

export default function ApplicationCard({ heading, content, img }) {
  const images = {
    food,
    chemicals,
    pharma,
    cosmetics,
  };

  return (
    <div className="bg-white justify-center md:w-auto w-[200%] flex flex-col gap-5 drop-shadow-lg h-full p-5 rounded-lg">
      <div className="text-priamry flex flex-row gap-2">
        <img src={images[img]} alt="application img" className="" />
        <p className="text-primary text-[20px]">{heading}</p>
       
      </div>
      <p className=" text-xs">{content}</p>
      {/* <p>{content}</p> */}
    </div>
  );
}
