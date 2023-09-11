import Machine_Frame from "./machine_frame/Machine_frame.jsx";
import Why_Microfab from "./right/Why_MicroFab.jsx";
import BFS from "./right/BFS_FFS.jsx";
import Moulds from "./right/Moulds.jsx";
import Analytics from "./Analytics/Analytics.jsx";
import OptionsButtons from "./Options/OptionButtons.jsx";
import WaterTS from "./water_treatment_system/water_TS.jsx";
import Footer from "../Common/Footer/Footer.jsx";
import Who_are_we from "./Who_are_we/Who_are_we.jsx";
import HomeArticle from "./Home_articles/HomeArticles.jsx";
import HomeBlog from "./Home_blogs/HomeBlog.jsx";
import HappyCustomers from "./Happy_customers/HappyCutomers.jsx";
import SoldGraph from "./right/SoldGraph.jsx";

export default function Home() {
  return (
    <div className="font-['ClashDisplay'] md:h-screen w-screen h-screen overflow-x-hidden md:overflow-x-hidden">
      <div className="md:w-full md:h-full w-full h-[1500px] flex md:flex-row flex-col">
        {/* left */}
        <div className="md:w-9/12 md:h-full w-full">
          <Machine_Frame />
        </div>

        {/* right */}
        <div className="md:w-3/12 w-full md:mt-[75px] md:h-full">
          <div className="flex justify-center md:h-[20%]">
            <Why_Microfab />
          </div>

          <div className="w-full md:h-[40%] h-[200px] md:m-0 m-4 mt-0 flex flex-row gap-3">
            <div className="w-[50%]">
              <BFS content="BFS" />
              <BFS content="FFS" />
            </div>
            <div className="w-[50%] h-[100%] md:mr-0 mr-3">
              <Moulds />
            </div>
          </div>

          <div draggable="false" className="flex justify-center place-items-center w-full md:h-[40%] h-[65%] mt-2 relative">
            {/* <img src={sold_img} className="md:object-cover h-full" alt="Sold"/> */}
            <SoldGraph/>
          </div>
        </div>
      </div>

      <Analytics />

      <OptionsButtons />

      <div className="flex justify-center w-screen">
        <WaterTS />
      </div>

      <Who_are_we />

      <HomeArticle />

      <HomeBlog />

      <HappyCustomers />

      <Footer />
    </div>
  );
}
