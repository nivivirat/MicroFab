import logo from "./logo.svg";
import drop from "./drops.png";
import drop1 from "./drop1.svg";
import hand from "./hand.png";
import "./Style2.css";
import React from "react";
import { firsto } from "./first";
import { NavbarDefault } from "./Navbar";
import { Button } from "@material-tailwind/react";
import { NavbarWithMegaMenu } from "./packnav";
import { Card3Presentation } from "./cards";
import { HorizontalCard } from "./one-stop";
import Slider from "./slider";
import TestimonialCard from "./tasticard";
import testimonials from "./testimonials.json";
import Footer from "../Common/Footer/Footer";
function App() {
  return (
    <>
      <NavbarDefault />
      <br></br>
      <div className="jkl">
        <div>
          <h3 className="mb-4 border-b pb-4 text-5xl leading-tight text-[#8AA6AA]">
            Blow-Fill-Seal & Form-Fill-Seal Solutions for Pharmaceuticals
          </h3>

          <h6 className="text-1xl leading-tight text-[#8AA6AA]" color="blue">
            "Unleashing the Power of BFS Technology: Aseptic Filling, Sterile
            Containers, and Unbreakable Packaging in a Single Step!"
          </h6>
          <br></br>
          <div>
            <Button color="cyan">Explore</Button>
          </div>
        </div>
        <br></br>
        <div>
          {" "}
          <img
            className="h-96 w-full object-cover object-center"
            src={logo}
            alt="nature image"
          />
        </div>

        <NavbarWithMegaMenu />
        <br></br>
        <div>
          {" "}
          <h6 className="text-1xl leading-tight text-black" color="blue">
            "Unleashing the Power of BFS Technology: Aseptic Filling, Sterile
            Containers, and Unbreakable Packaging in a Single Step!"
          </h6>
          <br></br>
        </div>
        <div>
          {" "}
          <img
            className="h-70 w-full object-cover object-center scale-[.87]"
            src={drop}
            alt="nature image"
          />
        </div>
        <div>
          {" "}
          <img
            className="h-70 w-full object-cover object-center "
            src={hand}
            alt="nature image"
          />
        </div>
        <div>
          <h3 className="mb-4 border-b pb-4 text-2xl leading-tight text-[#8AA6AA]">
            From the industry leader: Exemplary BFS solutions for the
            pharmaceutical industry
          </h3>
          <h6 className="text-1xl leading-tight text-[#8AA6AA]" color="blue">
            "Our concepts are as individual as your requirements. See for
            yourself!"
          </h6>
          <br></br>
          {/* <Card3Presentation/> */}
        </div>
        {/* className={`flex min-h-screen flex-col items-center justify-between py-24`} */}

        {/* 2. make sure our carousel container takes up the full screen width using w-screen */}
        <div className="w-screen">
          <Slider options={{ align: "center" }}>
            {testimonials.map((testimonial, i) => (
              // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
              // for mobile devices we use 90% width
              <div key={i} className="flex-[0_0_90%] md:flex-[0_0_50%]">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>

        {/* <HorizontalCard/> */}

        <div className="h-250 bg-[url('https://s3-alpha-sig.figma.com/img/adef/1933/3c4aec3165561e0e66507d1a5f04c828?Expires=1694390400&Signature=kUA16-811h509lNqndeJGtd88RFyAdXz0N8v8D~vaQLsOn6-mCgp4wgOKRKiWQ2C3taSrmoJJqYhovyrQ-SihL9U3KeUiTaVEDh-VmPN5yCw3XmsHP-C8ohD85dUTVdQBtEj-rU4~IycgnN-W6W2a-wA8CVQd~NkzXp~HEzbhCXdzCP8zL2hAvDd7-x~DEM22czyTYjSb5ndeF-kxuoT7Uci~3NgRx1x4ty7IGj4jFhWTs-ifNhdUmhKwRVtqW9zwb5hu~N7vL8arx1syFJM9dRYF1-m22rr0rJ7u3DVc~pRCgJSV1t~k1DMk9AU80fcUthKdqtXZonVQT8HAMtCEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
          <br></br>
          <br></br>
          <div className="p-2 m-2 bg-[#8AA6AA] kp">
            <h1 className="text-3xl font-bold text-white kl">
              One-stop partners have more to offer
            </h1>
            <br></br>
            <h5 className="text-xl font-bold text-white kl">
              No matter what point you are at: With our experience and range of
              services, we are sure to get you ahead. Maybe so with these
              offers:
            </h5>
          </div>
          <br></br>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
