import arrow from "../../../assets/Icons/arrow.svg";

export default function Points({ last }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between md:text-[20px]">
        <p>Lorem ipsum</p>
        <img src={arrow} alt="Arrow Icon" />
      </div>
      {last ? null : <hr className="h-px bg-white border-0" />}
    </div>
  );
}
