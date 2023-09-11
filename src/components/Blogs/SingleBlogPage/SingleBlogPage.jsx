import Footer from "../../Common/Footer/Footer";
import Blog_Content from "./Blog_Content";
import Blogs_bottom_side from './Blogs_bottom_side'

export default function SingleBlogPage() {
  return (
    <div className="font-['ClashDisplay'] flex flex-col md:mt-[85px] mt-[65px]">
      <div className="w-full flex md:flex-row flex-col">
        <div className="md:w-9/12 w-full">
          <div>
            <Blog_Content/>
          </div>
        </div>
        <div className="md:w-3/12 w-full">
            <Blogs_bottom_side/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
