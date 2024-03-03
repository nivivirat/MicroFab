export default function ApplicationCard({ heading, content, img }) {

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
