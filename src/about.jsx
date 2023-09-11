import "./Stylesq.css";
import { Button } from "@material-tailwind/react";
import we from "./qw.png";
import tasto from "./testicards.json";
import Slider from "./slider";
import TestimonialCard from "./tasticard";
import Footer from './components/Common/Footer/Footer'
import { useState, useRef, useEffect } from 'react';

function FaqItem({ question, answers, initiallyOpen }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [barHeight, setBarHeight] = useState(0);
  const answerRef = useRef(null);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
    Document.bgColor = '#282c34';
  };
  useEffect(() => {
    if (isOpen && answerRef.current) {
      setBarHeight(answerRef.current.clientHeight + 'px'); // Set the height when answer is open
    } else {
      setBarHeight('auto'); // Set back to 'auto' when answer is closed
    }
 
  }, [isOpen]);
  return (
    // <center>
    // <div className="faq-item mb-4 text-xs leading-tight text-black container lm" onClick={toggleAnswer}>
    //   <div className={`question ${isOpen ? 'active' : ''}mb-4 text-xs leading-tight text-black question mb-4 text-sm leading-tight text-black `}>
    //   <span className="vertical-bar"></span> {/* Add a vertical bar element */}
    //     {question}
    //   </div>
    //   {isOpen && (
    //     <div className="answer">
    //       {answers.map((paragraph, index) => (
    //         <p key={index}>{paragraph}</p>
    //       ))}
    //     </div>
    //   )}
    // </div>
    // </center>
    <div className="faq-item">
      <div className={`question ${isOpen ? 'active' : ''}`} onClick={toggleAnswer}>
      <div className="vertical-bar" style={{ height: barHeight }}></div>
        {question}
      </div><br></br>
      {isOpen && (
        <div ref={answerRef} className={`answer ${isOpen ? 'show' : ''}`}>
        {answers.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      )}
    </div>
  
  );
}
function AboutUs() {
  return (
    <div>
      <div className="App">
        {/* <div><NavbarDefault /></div><br></br><br></br> */}
        <div>
          <div className="ui">
          <div className="bg-[url('./opp.png')] nn">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center>
              <div className="flex flex-col rounded-lg bg-white md:max-w-6xl md:flex-row mm">
                <div className="flex flex-col p-6">
                  <p className="mb-4 text-xs leading-tight text-[#8AA6AA]">
                    WHO WE ARE
                  </p>
                  <h5 className="mb-2 text-5xl leading-tight text-[#8AA6AA]">
                    About Us
                  </h5>
                  <p className="mb-4 text-xs leading-tight text-[#8AA6AA]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in <br></br><br></br>culpa qui officia
                    deserunt mollit anim id est laborum.If you are a Hookah
                    business, please join us and help us defend and protect your
                    business, our culture and community.
                  </p>
                </div>
                {/* <br></br><br></br><br></br> */}
                <img
                  className="h-96 w-full rounded-t-lg ju  md:h-64 md:w-74 md:rounded-none md:rounded-l-lg"
                  src="https://s3-alpha-sig.figma.com/img/68a5/6491/853a183cbecce8a6f3fa180abc48018c?Expires=1694390400&Signature=lloc~NpTD9AavHEAWICjzs8fgJPrZbm6W3eCZGbzu3vdHsiQYIyZRE59n5ihschS3Wj~8SIDc3S6~aEPiNBbCxW3fsPsS7hnnHh5AgvI-49KAScrQk~8Uv9zvzVJtg5K8Ozq2ksuoVU1RVoELIS3gCphUaRdYqViPBPDI3Q6E9kYPpU34-tSMQA2JaVoiE5Ahh8Ncj3HuUrY5VooU48LVWknuOw7rbpWxMba1I7616aE~c4ZlNPvLQgieTUAhUBXB0IDmiu3q~whjLAyqKuXUWYjWR0-vwA9ZXygmueqQjGtySl6bz0vr~72tcr9qQM5AnHzT14DWHFFN57wurjdOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
            </center>
            {/* <br></br><br></br> */}
          
          {/* </center> */}

          <div className="flex flex-col p-6 text-white bg-[#8AA6AA] kmk">
            <p className="mb-4 text-xs  text-white bg-[#8AA6AA]">
              Lorem ipsum
            </p>
            <h5 className="mb-4 text-3xl leading-tight text-white bg-[#8AA6AA]">
              Lorem ipsum
            </h5>
            <p className="mb-4 text-xs  text-white bg-[#8AA6AA]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod</p>
            <br></br>
            <br></br>
            {/* <div class="lg:grid-grid-cols-3 md:grid-cols-3 gap-8 gh bg-[#8AA6AA]"> */}
            <div class="grid grid-col-3 grid-flow-row gap-10 container">
              {/* <div><span className="text-7xl h-full">1</span><spacer></spacer>
        <span>
        <span className="text-3xl n"> Lorem ipsum tgrtg rgtg referfrgf</span>
        </span>
        </div> */}
              <div className="row-span-3 gap-10 md:flex-row column">
                {/* <div className="qa">  */}
                <span className="text-7xl wer">1</span>

                <span className="text-3xl m"> Lorem epsum tgrtg rgtg</span>
                {/* </div> */}
                <br></br>
                <br></br>
                <p className="mb-4 text-xs leading-tight text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in .
                </p>
              </div>
              <div className="row-span-3 gap-10 column">
                <span className="text-7xl wer">2</span>

                <span className="text-3xl m"> Lorem ipsum tgrtg rgtg</span>
                <br></br>
                <br></br>
                <p className="mb-4 text-xs leading-tight text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in .
                </p>
              </div>
              <div className="row-span-3 gap-10 column">
                <span className="text-7xl wer">3</span>
                <span className="text-3xl o"> Lorem ipsum tgrtg rgtg</span>
                <br></br>
                <br></br>
                <p className="mb-4 text-xs leading-tight text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in .
                </p>
              </div>
            </div>
          </div>
          </div>
          </div>
          
          <br></br>
          <br></br>
          <h5 className="mb-2 text-2xl leading-tight okl">
                  Our latest blog posts
                </h5><br></br>
          <div className="w-screen as h-160px okl">
            <Slider options={{ align: "center" }}>
              {tasto.map((tasto, i) => (
                // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
                // for mobile devices we use 90% width
                <div key={i} className="flex-[0_0_90%] md:flex-[0_0_23%]">
                  <TestimonialCard {...tasto} />
                </div>
              ))}
            </Slider>
          </div>
          <br></br>
          <center>
            <br></br><br></br>
            <div className="flex flex-col rounded-lg bg-white md:max-w-8xl md:flex-row mm">
              <div className="flex flex-col p-6">
                <p className="mb-4 text-xl leading-tight ">
                  Lorem ipsum
                </p>
                <h5 className="mb-2 text-4xl leading-tight ll">
                  Lorem ipsum
                </h5>
                <p className="mb-4 text-xs mr-20 leading-tight  ll">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.If you are a Hookah business,
                  please join us and help us defend and protect your business,
                  our culture and community.
                </p>
              </div><br></br><br></br><br></br>
              {/* <br></br><br></br><br></br><br></br><br></br> */}
              <video className="h-full w-full rounded-lg rounded-md uuu" controls>
                <source src="/demo.mp4" type="video/mp4" />
                {/* Your browser does not support the video tag. */}
              </video>
            </div>
          </center>
          <br></br>
          <br></br>
          <div className="bg-[url('./popo.jpeg')] jk">
            <br></br>
            <center>
              <div className="flex flex-col rounded-lg md:max-w-3xl md:flex-row mm">
                <center>
                  <div className="flex flex-col p-6">
                    <p>
                      <h5 className="mb-2 text-3xl leading-tight text-white">
                        <strong>Why Choose Us</strong>
                      </h5>
                    </p>
                    <p className="mb-4 text-xl leading-tight text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.If you are a
                      Hookah business, please join us and help us defend and
                      protect your business, our culture and community.
                    </p>
                  </div>
                </center>
              </div>
              <Button
                variant="filled"
                size="lg"
                color="white"
                className="ab rounded-full bg-white text-black"
              >
                <strong> --Read More-- </strong>
              </Button>
            </center>
            <br></br>
          </div>
          <br></br>
          <div className="bg-white ">
            <br></br>
            <center>
              <div className="flex flex-col rounded-lg md:max-w-5xl md:flex-row mm">
                <center>
                  <div className="flex flex-col p-6">
                    <p>
                      <h5 className="mb-2 text-3xl leading-tight text-black">
                        <strong>MEET OUR TEAM</strong>
                      </h5>
                    </p>
                    <p className="mb-4 text-xl leading-tight text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.If you are a
                      Hookah business, please join us and help us defend and
                      protect your business, our culture and community.
                    </p>
                  </div>
                </center>
              </div>
            </center>
          </div>
          <br></br>
          </div>
        
          <div className="io" >
           {/* <img src="https://s3-alpha-sig.figma.com/img/688c/1dfa/e642076d55e4e4759eb7174f0f65f42b?Expires=1694995200&Signature=BReTl6LL1sOswmno5ryCVGBYZCGZS0LWSY4~xTYD7ZmyY4G9Gy4oAf4rIFVhpOAnoGihJ63ywqQ~v83fR5Cf9f70ie0L~qlLFPJEgELtXApAGUm4I7KLbNNTqZORhlkU3McxPKhBIZOWzkqHBVy~A3yXAGRpcsgC1gHH-JXbekHgvYtAO9od1cFQ~xqxFaoz8vp81N0UvLNuMlmABLwg~oSQvXUcn0j3-oHwMr4G6p4RiEF8IzuYhTdh-rNY9Ccjq~SmicZeLfoWZmETMe8qHUc6pJcOdJZaTuf5y-CwvHa6kE3ELQ02Ned20Dv~DNLWZfsN2IzN-RXdHTHkq2ZNrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  alt="loading failed" width="100%" ></img> */}
           <img src={we}  alt="loading failed" width="100%" ></img>
          </div><br></br>
         <br></br>
          <h5 className="mb-2 text-3xl leading-tight text-black"><center>FAQ</center></h5><br></br>
    {/* </div> */}
          <div className="flex flex-col p-6 container">
          
         
            {/* <p>
              <h5 className="mb-2 text-3xl leading-tight text-black vb">FAQ</h5>
            </p>
            <br></br>
            <FaqItem
          question="What is Lorem Ipsum?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
            <p className="mb-4 text-sm leading-tight text-black lm faq-container">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
            <p className="mb-4 text-sm leading-tight text-black lm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.If
              you are a Hookah business, please join us and help us defend and
              protect your business, our culture and community.
            </p>
            <br></br>
            <p className="mb-4 text-sm leading-tight text-black lm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
            <br></br>
            <p className="mb-4 text-sm leading-tight text-black lm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p> */}
            <div className="cv">
            <FaqItem
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit ? "
          answers={["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",]}
          initiallyOpen={true}
        />
        <FaqItem
          question="Why do we use it?"
          answers={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ",
          ]}
        />
        <FaqItem
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit ? "
          answers={[" "]}
        />
        <FaqItem
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit ? "
          answers={[" "]}
        />
        <FaqItem
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit ? "
          answers={[" "]}
        />
        <FaqItem
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit ? "
          answers={[" "]}
        />
        </div>
         </div>
          </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
