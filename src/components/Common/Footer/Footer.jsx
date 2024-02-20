import { Icon } from "@iconify/react";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../../../firebase";
import logo from "../../../assets/footerlogo.svg";
import ContactForm from "../../contact/Contact_form/Contact_form";
import GetinTouchWithUs from "../../contact/GetinTouchWithUs/GetinTouchWithUs";

export default function Footer() {

  const location = useLocation();

  const [socialMediaLinks, setSocialMediaLinks] = useState({});

  useEffect(() => {
    const socialMediaRef = ref(db, 'SocialMediaLinks');
    onValue(socialMediaRef, (snapshot) => {
      if (snapshot.exists()) {
        setSocialMediaLinks(snapshot.val());
      }
    });
  }, []);

  const handleLinkClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="w-full font-['ClashDisplay']">
      {/* the contact page above every footer */}
      <div className="w-full flex flex-">
        {location.pathname !== "/contact" && (
          <div className="flex flex-grow md:w-full md:flex md:justify-center gap-4 md:flex-row w-full flex-col">
            <GetinTouchWithUs />
            <ContactForm />
          </div>
        )}

        <div></div>
      </div>

      <div className="bg-primary md:mt-[0px] md:flex md:flex-col md:justify-center md:place-items-center md:w-full w-full text-white">
        <div className="p-6 md:p-0 md:flex md:flex-col w-[100%] md:justify-center md:w-[90%]">
          <div className="mt-4 md:mt-0">
            <hr className="hidden md:block h-px my-8 bg-white border-0"></hr>
            {/* vertical line */}
            <div className="md:hidden md:w-[1px] md:h-[w-[30%]] w-[h-[90%]] h-[2px] bg-white md:mt-0 md:mb-0 mt-[22px] mb-[15px]"></div>
          </div>

          <div className="md:flex md:flex-row gap-6">
            <div className="md:w-[30%]">
              <img src={logo}></img>
              <div className="flex flex-row gap-4 md:mt-6 mt-6">
                With 125+ cutting edge machinery, MicroFab has flourished across
                the years exemplifying excellence. While the organisation has
                always been on its verge with innovation, it has accomplished
                many milestones and has earned trust of numerous clients.
              </div>
            </div>
            {/* vertical line */}
            {/* for mobile */}
            <div className="hidden md:block md:w-[1px] md:h-[w-[30%]] h-[w-[30%]] w-[h-[90%]] bg-white md:mt-0 md:mb-0 mt-[22px] mb-[15px]"></div>

            <div className="md:hidden md:w-[1px] md:h-[w-[30%]] w-[h-[90%]] h-[2px] bg-white md:mt-0 md:mb-0 mt-[22px] mb-[15px]"></div>
            <div className="w-[100%] md:w-[50%] flex flex-col justify-between">
              {/* <div className="flex flex-row mb-2">
                <img src={dot} className=""></img>
                <p className="ml-4">Lorem ipsum</p>
              </div>

              <div className="flex flex-col md:gap-1 gap-4">
                <Points last={false} />
                <Points last={false} />
                <Points last={false} />
                <Points last={false} />
                <Points last={true} />
              </div> */}
              <div className="flex flex-row justify-center md:gap-[150px] gap-10 place-items-start md:px-10 md:py-10">
                <div className="flex flex-col gap-5">
                  <a href="/product" className="">
                    Product Solutions
                  </a>
                  <a href="/turnKeySolutions">Turnkey Solutions</a>
                  <a href="/service">Service Solutions</a>

                  <a href="/applications/pharmaceutical">Application</a>
                  <a href="/about">About Us</a>
                </div>
                <div className="flex flex-col gap-5">
                  <a href="/articlesList">Article and Blogs</a>
                  <a href="/contactUs">Contact Us</a>
                  <a href="/TP">Terms & Policy</a>
                </div>
              </div>
            </div>

            <div className=" md:hidden md:h-[w-[30%]] md:w-[10%] w-[h-[90%]] h-[2px] bg-white md:mt-0 md:mb-0 mt-[22px] mb-[15px]"></div>
            {/* vertical line */}
            <div className="w-[1px] flex md:flex-row flex-row h-[w-[30%]] bg-white"></div>
            <div className="md:flex md:flex-row flex flex-row md:place-items-start place-items-center gap-2">
              {Object.entries(socialMediaLinks).map(([platform, link]) => (
                <a key={platform} href={link} className="" target="_blank" rel="noopener noreferrer">
                  <Icon
                    icon={`mdi:${platform}`}
                    className="border-2 border-white text-white rounded-full h-10 p-2 w-10 cursor-pointer"
                    onClick={() => handleLinkClick(link)}
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="">
              <hr className="h-px my-8 bg-white border-0"></hr>
            </div>
            <div></div>
          </div>

          {/* Justify-between section */}
          <a href="https://digilligence.in/" target="_blank" rel="noopener noreferrer" className="md:flex md:flex-row flex flex-col md:justify-between">
            {/* <p>Copyright 2023 @MicroFab Engineering Private Limited</p>
            <p>Designed & Developed with ❤️ by Digilligence</p> */}

            Designed & Developed by Digilligence for MicroFab Engineering ©All rights Reserved. 2024
            {/* <p>Lorem ipsum</p> */}
          </a>
        </div>
      </div>
    </div>
  );
}
