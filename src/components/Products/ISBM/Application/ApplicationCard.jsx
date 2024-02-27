import medicineBottles from "../../../../assets/Products/ISBM/application/medicineBottles.svg";
import liquidSoapsDetergents from "../../../../assets/Products/ISBM/application/liquidSoapsDetergents.svg";
import bottleswithConditioners from "../../../../assets/Products/ISBM/application/bottleswithConditioners.svg";
import liquor from "../../../../assets/Products/ISBM/application/liquor.svg";

export default function ApplicationCard({ heading, content, img }) {
  const images = {
    medicineBottles,
    liquidSoapsDetergents,
    bottleswithConditioners,
    liquor,
  };

  return (
    <div className="bg-white md:w-auto w-[200%] flex flex-col gap-5 drop-shadow-lg h-full p-5 rounded-lg">
      <div className="text-priamry flex flex-row gap-2">
        <img src={images[img]} alt="application img" className="" />
        <p className="text-primary text-[20px]">{heading}</p>
      </div>

      <p>{content}</p>
    </div>
  );
}
