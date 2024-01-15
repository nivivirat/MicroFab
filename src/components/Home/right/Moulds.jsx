import bot from "../../../assets/Icons/bot.svg";

export default function Moulds() {
  return (
    <div className="font-['ClashDisplay'] w-[90%] h-[94%] flex flex-col justify-between rounded-[20px] bg-[#E9E9E9] md:mr-2 mr-14 mt-[8px]">
      {/* top */}
      <div className="flex h-[35%] w-full flex-row justify-between">
        <div className="bg-[#8AA6AA] h-full w-[47%] rounded-r-[20px] rounded-t-[20px]"></div>
        <div className="bg-[#b9c7c9] h-full w-[47%] rounded-l-[20px] rounded-t-[20px]"></div>
      </div>

      {/* middle */}
      <div className="flex flex-row h-[30%] w-full justify-between">
        <div className="bg-[#8AA6AA] w-[10%] h-full rounded-r-[20px]"></div>
        <div className="w-[80%]">
          <div className="leading-5 h-full w-full bg-white rounded-[20px] flex flex-col justify-center place-items-center font-bold">
            <img src={bot} alt="bot" className="h-[20px] w-[60px]"></img>
            <p className="text-[22px]">200+</p>
            <p className="text-[12px]">Moulds</p>
          </div>
        </div>
        <div className="bg-[#8AA6AA] w-[10%] h-full rounded-l-[20px]"></div>
      </div>

      {/* bottom */}
      <div className="flex h-[35%] w-full flex-row justify-between">
        <div className="bg-[#b9c7c9] h-full w-[47%] rounded-r-[20px] rounded-b-[20px]"></div>
        <div className="bg-[#8AA6AA] h-full w-[47%] rounded-l-[20px] rounded-b-[20px]"></div>
      </div>
    </div>
  );
}
