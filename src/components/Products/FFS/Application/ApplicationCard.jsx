import liquidAdhesives from "../../../../assets/Products/FFS/application/liquidAdhesives.svg";
import liquids from "../../../../assets/Products/FFS/application/liquids.svg";
import medicines from "../../../../assets/Products/FFS/application/medicines.svg";
import cosmetics from "../../../../assets/Products/FFS/application/cosmetics.svg";

export default function ApplicationCard({ heading, content, img }) {
  const images = {
    liquidAdhesives,
    liquids,
    medicines,
    cosmetics,
  };

  return (
    <div className="bg-white justify-center md:w-auto w-[200%] flex flex-col gap-5 drop-shadow-lg h-full p-5 rounded-lg">
      <div className="text-priamry flex flex-row gap-2">
        <img src={images[img]} alt="application img" className="" />
        <p className="text-primary text-[20px]">{heading}</p>
      </div>

      <p>{content}</p>
    </div>
  );
}
