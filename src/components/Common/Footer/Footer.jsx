import Points from "./Points";
import dot from "../../../assets/Footer/dot.svg";
import insta from "../../../assets/Footer/instagram.svg";
import tikTok from "../../../assets/Footer/tik-tok.svg";
import facebook from "../../../assets/Footer/facebook.svg";
import GetinTouchWithUs from "../../contact/GetinTouchWithUs/GetinTouchWithUs";
import ContactForm from "../../contact/Contact_form/Contact_form";

export default function Footer() {
  return (
    <div className="w-full font-['ClashDisplay']">

      {/* the contact page above every footer */}
      <div className="w-full flex flex-">
        <div className="md:w-full md:flex md:justify-center gap-4 md:flex-row w-full flex-grow">
          <GetinTouchWithUs />
          <ContactForm />
        </div>
        <div>

        </div>
      </div>


      <div className="md:mt-[0px] md:flex md:flex-col md:justify-center md:place-items-center md:w-full w-full h-[1200px] md:h-[500px] bg-[#8AA6AA] text-white">
        <div className="p-6 md:p-0 md:flex md:flex-col w-[100%] md:justify-center md:w-[90%]">
          <div className="mt-4 md:mt-0">
            <hr class="hidden md:block h-px my-8 bg-white border-0"></hr>
            {/* vertical line */}
            <div className="md:hidden md:w-[1px] md:h-[w-[30%]] w-[h-[90%]] h-[2px] bg-white md:mt-0 md:mb-0 mt-[22px] mb-[15px]"></div>
          </div>

          <div className="md:flex md:flex-row gap-6">
            <div className="md:w-[30%]">
              <p className="md:text-[20px] font-bold text-[26px]">
                Lorem ipsum
              </p>
              <p className="md:text-[14px] md:text-left text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className="flex flex-row gap-4 md:mt-6 mt-6">
                <div className="bg-white rounded-full h-14 w-14"></div>
                <div className="md:flex md:flex-col">
                  <p>Lorem ipsum? Lorem ipsum </p>
                  <p>Lorem ipsum? Lorem ipsum </p>
                </div>
              </div>
            </div>
            {/* vertical line */}
            {/* for mobile */}
            <div className="hidden md:block md:w-[1px] md:h-[w-[30%]] h-[w-[30%]] w-[h-[90%]] bg-white md:mt-0 md:mb-0 mt-[22px] mb-[15px]"></div>
            
            <div className="md:hidden md:w-[1px] md:h-[w-[30%]] w-[h-[90%]] h-[2px] bg-white md:mt-0 md:mb-0 mt-[22px] mb-[15px]"></div>
            <div className="w-[100%] md:w-[30%] flex flex-col justify-between">
              <div className="flex flex-row mb-2">
                <img src={dot} className=""></img>
                <p className="ml-4">Lorem ipsum</p>
              </div>

              <div className="flex flex-col md:gap-1 gap-4">
                <Points last={false} />
                <Points last={false} />
                <Points last={false} />
                <Points last={false} />
                <Points last={true} />
              </div>
            </div>

            <div className="md:hidden md:w-[1px] md:h-[w-[30%]] w-[h-[90%]] h-[2px] bg-white md:mt-0 md:mb-0 mt-[22px] mb-[15px]"></div>
            {/* vertical line */}
            <div className="w-[1px] h-[w-[30%]] bg-white"></div>
            <div className="w-[100%] md:w-[40%] md:text-[18px] md:flex flex-col justify-between">
              <div className="md:flex md:flex-row justify-between flex flex-row">
                <div className="">
                  <div className="flex flex-row">
                    <img src={dot} alt="dot" className=""></img>
                    <p className="md:ml-4">Lorem ipsum</p>
                  </div>
                  <div className="md:mt-5 mt-4">
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
                <div className="md:flex md:flex-row flex flex-row md:place-items-start place-items-center md:gap-2 gap-2">
                  <img
                    src={tikTok}
                    alt="tiktok logo"
                    className="border-2 border-white h-10 rounded-full p-2"
                  ></img>
                  <img
                    src={insta}
                    alt="insta logo"
                    className="border-2 border-white h-10 rounded-full p-2"
                  ></img>
                  <img
                    src={facebook}
                    alt="facebook logo"
                    className="border-2 border-white h-10 rounded-full p-2"
                  ></img>
                </div>
              </div>
              <div className="md:flex md:flex-col">
                <hr class="h-px my-8 bg-white border-0"></hr>

                <div className="md:text-[14px] md:flex md:flex-row justify-between">
                  <p>Lorem ipsum:</p>
                  <div className="md:flex md:flex-row flex flex-row">
                    <p className="font-bold">Lorem ipsum:</p>
                    <p> lorem ipsum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <hr class="h-px my-8 bg-white border-0"></hr>
            </div>
            <div></div>
          </div>

          {/* Justify-between section */}
          <div className="md:flex md:flex-row flex flex-row justify-between">
            <p>Copyright 2023</p>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
