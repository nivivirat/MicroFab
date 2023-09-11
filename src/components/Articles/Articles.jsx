import Footer from "../Common/Footer/Footer";
import ArticleCardScroll from "./ArticleComponents/ArticleCardScroll";
import Article_Heading from "./ArticleComponents/Article_Heading";

export default function Articles() {
  return (
    <div className="flex flex-col md:mt-[80px] mt-[40px]">
      <div className="flex flex-col">
        <div>
          <ArticleCardScroll/>
        </div>
        <div className="">
            <Article_Heading/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
