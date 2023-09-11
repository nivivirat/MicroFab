import img1 from "../../../assets/Blogs/SingleBlog/img1.svg";
import img2 from "../../../assets/Blogs/SingleBlog/img2.svg";
import img3 from "../../../assets/Blogs/SingleBlog/img3.svg";
import img4 from "../../../assets/Blogs/SingleBlog/img4.svg";
import ContentData from "./Content.json";

export default function Blog_Content() {
  return (
    <div className="font-['ClashDisplay'] flex flex-col gap-3 m-6">
      <div className="flex flex-row space-x-2">
        <p className="text-[#8AA6AA] text-[20px]">COVID-19 </p>
        <p className="text-black text-[20px] font-bold">/</p>
        <p className="text-[#8AA6AA] text-[20px]">vaccine </p>
        <p className="text-black text-[20px] font-bold">/</p>
        <p className="text-[#8AA6AA] text-[20px]">pricing</p>
      </div>
      <div>
        <p className="text-[#8AA6AA] text-[30px]">{ContentData[0].heading}</p>
      </div>
      <img src={img1} className="py-4"></img>
      <div>
        <p className="whitespace-pre-line text-[18px]">{ContentData[0].content1}</p>
      </div>
      <div className="flex flex-row py-10 gap-4">
        <img src={img2} className="w-[50%]"></img>
        <img src={img3} className="w-[50%]"></img>
      </div>
      <div>
        <p className="whitespace-pre-line text-[18px] ">{ContentData[0].content2}</p>
      </div>
      <img src={img4} className="py-10" draggable="false"></img>
      <div>
        <p className="whitespace-pre-line text-[18px] ">{ContentData[0].end}</p>
      </div>

    </div>
  );
}
