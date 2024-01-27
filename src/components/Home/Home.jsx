import Machine_Frame from "./machine_frame/Machine_frame";
import Why_Microfab from "./right/Why_MicroFab";
import BFS from "./right/BFS_FFS";
import Moulds from "./right/Moulds";
import Analytics from "./Analytics/Analytics";
import OptionsButtons from "./Options/OptionButtons";
import WaterTS from "./water_treatment_system/water_TS";
import Footer from "../Common/Footer/Footer";
import Who_are_we from "./Who_are_we/Who_are_we";
import HomeArticle from "./Home_articles/HomeArticles";
import HomeBlog from "./Home_blogs/HomeBlog";
import HappyCustomers from "./Happy_customers/HappyCutomers";
import SoldGraph from "./right/SoldGraph";
import ProductSolutions from "./productSolutions/ProductSolutions";

export default function Home() {
  return (
    <div className="font-['ClashDisplay'] md:h-screen w-screen h-screen overflow-x-hidden md:overflow-x-hidden">
      <div className="md:w-full md:h-full w-full h-[1350px] flex md:flex-row flex-col">
        {/* left */}
        <div className="md:w-9/12 md:h-full w-full">
          <Machine_Frame />
        </div>

        {/* right */}
        <div className="md:w-3/12 w-full md:mt-[80px] md:h-full">
          <div className="flex justify-center md:h-[20%]">
            <Why_Microfab />
          </div>

          <div className="w-full md:h-[40%] h-[200px] md:m-0 m-4 mt-0 flex flex-row gap-3">
            <div className="w-[50%]">
              <BFS content="Product solutions" />
              <BFS content="Turnkey Solutions" />
            </div>
            <div className="w-[50%] h-[100%] md:mr-0 mr-3">
              <Moulds />
            </div>
          </div>

          <div
            draggable="false"
            className="flex justify-center place-items-center w-full md:h-[40%] h-[65%] mt-2 relative"
          >
            {/* <img src={sold_img} className="md:object-cover h-full" alt="Sold"/> */}
            <SoldGraph />
          </div>
        </div>
      </div>

      <Analytics />

      <ProductSolutions />

      {/* <OptionsButtons /> */}

      <div className="flex justify-center w-screen">
        <WaterTS />
      </div>

      <Who_are_we />

      <HomeArticle />

      {/* <HomeBlog /> */}

      <HappyCustomers />

      <Footer />
    </div>
  );
}
