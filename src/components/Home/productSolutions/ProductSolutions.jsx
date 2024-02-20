import one from "../../../assets/Home_productSoltuions/one.svg";
import two from "../../../assets/Home_productSoltuions/two.svg";
import three from "../../../assets/Home_productSoltuions/three.svg";
import { tint } from "@cloudinary/url-gen/actions/adjust";
import { Icon } from "@iconify/react";

export default function ProductSolutions() {
  return (
    <div>
      <div className=" md:p-10 p-4 md:px-[8%] flex md:flex-row-reverse flex-col justify-between place-items-center md:gap-10 gap-10">
        {/* left content */}
        <div className="md:w-[70%] flex flex-col md:gap-6 gap-4">
          <div className="bg-primary h-1 w-5"></div>
          <div>
            <a href="/#/product" className="font-bold text-5xl tracking-widest">
              Product <br></br>Solutions
            </a>
          </div>
          <div className="w-[90%]">
            <p className="font-thin text-[#67675F] text-[18px] md:leading-7 md:tracking-wide">
              Microtools is a leading provider of comprehensive solutions, offering advanced machinery for BFS and FFS manufacturing, and medical devices. Our commitment extends to exceptional after-sales service, seamless machine upgrades, and expertise in refurbishing equipment. Microtools focuses on continuous improvement, ensuring clients stay at the forefront of technological advancements.
            </p>
          </div>
          <a href="/#/product">
            <div className="text-white flex flex-row justify-center place-items-center gap-2 bg-primary xl:w-[35%] lg:w-[30%] md:w-[200px] w-[40%] rounded-[10px] h-[45px]">
              <p className="">Know More</p>
              <Icon icon="majesticons:arrow-right" className="" />
            </div>
          </a>
        </div>

        {/* img */}
        <div className="md:w-[30%] rounded-[20px] h-[500px] flex gap-5 flex-row">
          <div className="rounded-lg w-[50%]">
            <img
              src={one}
              className="object-cover rounded-lg h-full w-full"
              alt="top"
            ></img>
          </div>
          <div className="flex flex-col w-[50%] gap-5">
            <div className="h-[30%]">
              <img
                src={two}
                className="object-cover rounded-lg h-full w-full"
                alt="top"
              ></img>
            </div>
            <div className="h-[70%]">
              <img
                src={three}
                className="object-cover rounded-lg   h-full w-full"
                alt="top"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
