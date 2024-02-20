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
      <div className="text-primary flex flex-row gap-2 place-items-center">
        {img && <img src={img} alt="application img" className="h-10 w-10 object-contain" />}
        <p className="text-primary text-[20px]">{heading}</p>
      </div>
      <p className="text-xs leading-6">{content}</p>
    </div>
  );
}
