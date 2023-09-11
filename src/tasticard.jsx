import Image from "./drops.png"
// import Link from "next/link"
import arrow_right from "../src/assets/Home_article/ArrowRight.svg";
import img3 from "../src/assets/Home_article/article3.svg";
import homeArticles from "../src/assets/Articles/Heading.svg";
export default function TestimonialCard({ content, sub, img, date, num }) {
  const contentClass = num ? "font-black md:text-[18px]" : "";
  // return (
  //   <div className="py-4 px-8 bg-white shadow-lg rounded-lg my-15">
  //     <div className="flex justify-center md:justify-end -mt-11">
  //       {/* <Image */}
          
  //        {/* <img className="w-150 h-50 object-cover  border-2 border-indigo-500" src={props.imgSrc} alt={Image}></img> */}
  //       {/* //   height={80}
  //       //   width={80}
  //       //   src={props.imgSrc} */}
  //       {/* /> */}
  //     </div>
  //     <div>
  //       <h2 className="text-[#8AA6AA] text-2xl font-semibold">{props.title}</h2>
  //       <h5 className="mt-3  text-gray-600"><strong>{props.content}</strong></h5>
  //       <h5 className="mt-3 text-gray-600">{props.author}</h5>
  //     </div>
  //     <div className="flex justify-end mt-4">
  //       {/* <Link href="#" className="text-xl font-medium text-indigo-500">
  //         {props.author}
  //       </Link> */}
  //     </div>
  //   </div>
  // )
  return (
    <div className="font-mono flex flex-col">
      <div>
        <img src={homeArticles} alt="Article Thumbnail" className="md:w-full" />
        <div className="p-2">
          <p className={`text-left text-black ${contentClass}`}>{content}</p>
          {date && <p className="text-left text-black">{date}</p>}
          <div className="flex flex-row place-items-center md:mt-0.5">
            <div className="md:w-[3px] md:mr-2 md:h-[18px] h-[10px] bg-[#8AA6AA] md:mt-0 md:mb-0 mt-[22px] mb-[15px]"></div>
            <p className="text-left text-gray-500">{sub}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row place-items-center gap-3 pl-2">
        <p className="text-[#8AA6AA] font-extrabold">Read more</p>
        <img
          src={arrow_right}
          className="bg-[#8AA6AA] h-6 p-0.5 rounded-full"
          alt="Read more"
        />
      </div>
    </div>
  );
}
// export default TestimonialCard
