export default function AdvantageCard({ heading, content }) {
    return (
      <div className="xl:h-[230px] h-[100%] w-auto rounded-lg p-4 flex flex-col bg-white">
        <div className="mb-2 font-semibold">{heading}</div>
        <div className="pr-7">{content}</div>
      </div>
    );
  }
  