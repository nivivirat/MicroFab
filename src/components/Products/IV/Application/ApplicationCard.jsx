import fluidAdministration from "../../../../assets/Products/IV/application/fluidAdministration.svg";
import bloodTransfusion from "../../../../assets/Products/IV/application/bloodTransfusion.svg";
import electrolyteReplacement from "../../../../assets/Products/IV/application/electrolyteReplacement.svg";
import parenteralNutrition from "../../../../assets/Products/IV/application/parenteralNutrition.svg";

export default function ApplicationCard({ heading, content, img }) {
  const images = {
    fluidAdministration,
    bloodTransfusion,
    electrolyteReplacement,
    parenteralNutrition,
  };

  return (
    <div className="bg-white justify-center md:w-auto w-[200%] py-10 flex flex-col gap-5 drop-shadow-lg h-full p-5 rounded-lg">
      <div className="text-priamry flex flex-row gap-2">
        {img && <img src={img} alt="application img" className="h-10 w-10 object-contain" />}
        <p className="text-primary text-[20px]">{heading}</p>
      </div>

      <p>{content}</p>
    </div>
  );
}
