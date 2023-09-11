import Footer from "../Common/Footer/Footer";
import BlogsCardScroll from './BlogsComponents/BlogsCardScroll'
import Blogs_Heading from './BlogsComponents/Blogs_Heading'
import SingleBlog from "./BlogsComponents/SingleBlog";

export default function Blogs()
{
    return(
        <div className="font-['ClashDisplay'] flex flex-col md:mt-[80px] mt-[40px]">
      <div className="flex flex-col">
        <div>
          <BlogsCardScroll/>
        </div>
        <div className="">
          <Blogs_Heading/>
          <SingleBlog/>
          <Blogs_Heading/>
        </div>
      </div>
      <Footer/>
    </div>

    )
}