import { Link } from 'react-router-dom';
import uio from "./Frame 21430 (1).svg";
import "./Stylesq.css";
// import Slider from "./slider"
import { get, ref, update } from 'firebase/database';
import React, { useEffect, useRef, useState } from "react";
import CountUp from 'react-countup';
import { db } from "../firebase";
import y5 from "../src/assets/About/Rectangle 2810.svg";
import Slider from "../src/components/AboutUs/Sliderr";
import MedicalDevicesCard from "../src/components/MedicalDevices/MedicalDevicesCard";
import "./App.css";
import "./Styles_abt2.css";
import yu from "./WhatsApp Image 2023-11-16 at 18.26 1.svg";
import yy1 from "./assets/About/Frame 21443.png";
import yy2 from "./assets/About/Frame 21448.png";
import yy3 from "./assets/About/Frame 21449.png";
import yy4 from "./assets/About/Frame 21450.png";
import yy5 from "./assets/About/Micro Map.png";
import Footer from "./components/Common/Footer/Footer";
import ServicesJson from "./components/Services/Services.json";
import y1 from "./y1.svg";
import y2 from "./y2.svg";
import y3 from "./y3.svg";
import y4 from "./y4.svg";

function FaqItem({ question, answers, initiallyOpen }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [barHeight, setBarHeight] = useState(0);
  const answerRef = useRef(null);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
    Document.bgColor = "#282c34";
  };

  useEffect(() => {
    if (isOpen && answerRef.current) {
      setBarHeight(answerRef.current.clientHeight + 35 + "px"); // Set the height when answer is open
    } else {
      setBarHeight("auto"); // Set back to 'auto' when answer is closed
    }
  }, [isOpen]);

  return (
    <div className="faq-item">
      <div
        className={`question ${isOpen ? "active" : ""}`}
        onClick={toggleAnswer}
      >
        <div className="vertical-bar mt-2" style={{ height: barHeight }}></div>
        {question}
      </div>
      <br></br>
      {isOpen && (
        <div ref={answerRef} className={`answer ${isOpen ? "show" : ""}`}>
          {answers.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000, // Adjust this value for the interval in milliseconds
};
function AboutUs() {
  const containerRef = useRef();
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize(); // Initialize containerWidth
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [openCardIndex, setOpenCardIndex] = useState(null);

  const handleCardToggle = (index) => {
    if (openCardIndex === index) {
      setOpenCardIndex(null); // Close the card if it's already open
    } else {
      setOpenCardIndex(index); // Open the clicked card
    }
  };

  const categories = [
    {
      id: 1,
      title: "Pharmaceuticals",
      image: y1,
      link: "/pharmaceutical",
    },
    {
      id: 2,
      title: "Chemicals",
      image: y2,
      link: "/chemical",
    },
    {
      id: 3,
      title: "Cosmetics",
      image: y3,
      link: "/cosmic",
    },
    {
      id: 4,
      title: "Food",
      image: y4,
      link: "/food",
    },
    {
      id: 5,
      title: "Dairy",
      image: y5,
      link: "/dairy",
    },
  ];

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const keyFiguresRef = ref(db, 'AboutUs/keyFigures');

    get(keyFiguresRef)
      .then((snapshot) => {
        const keyFiguresData = snapshot.val();
        setData(keyFiguresData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSaveClick = async () => {
    // Update the data in the database
    const keyFiguresRef = ref(db, 'AboutUs/keyFigures');
    await update(keyFiguresRef, data);

    setEditMode(false);
  };

  const handleInputChange = (event, blockIndex, boxIndex, field) => {
    const newData = { ...data };
    const inputValue = event.target.value;

    // Check if the input value is a number
    // const isNumber = !isNaN(inputValue);

    newData.blocks[blockIndex].boxes[boxIndex][field] = inputValue;
    setData(newData);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleCancelClick = () => {
    setEditMode(false);
  };

  return (
    <div>
      <div className="font-['ClashDisplay'] ">
        {/* <div><NavbarDefault /></div><br></br><br></br> */}
        <div>
          <div className="ui  animated-box animate__animated animate__fadeInLeft animate__delay-0s">
            <div className="bg-[url('./opp.png')] nn">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <center>
                <div className="flex flex-col rounded-lg bg-white md:max-w-6xl md:flex-row mm ggg md:ml-24">
                  <div className="flex flex-col p-6 md:ml-12 md:mr-4">
                    <h6 className="mb-2 text-xs  sm:mr-8 ml-4 leading-tight text-[#8AA6AA] font-['ClashDisplay']">
                      WHO WE ARE
                    </h6>
                    <h3 className="mb-2 text-6xl  sm:mr-8 ml-4 leading-tight text-[#8AA6AA] font-['ClashDisplay']">
                      About Us
                    </h3>
                    <p className="mb-4 sm:mr-24 lg:w-96 md:w-64 uo leading-tight text-[#8AA6AA] font-['ClashDisplay']">
                      MicroFab, a trailblazing company not only delivers exceptional packaging solutions but also facilitates the establishment of plants for the cosmetics industry. By choosing MicroFab, the team empowers the organization to set up state-of-the-art production facilities according to the unique needs. Our expertise extends ways beyond just design and manufacturing. With a focus on efficiency and innovation, MicroFab offers guidance every step of the way, ensuring that the cosmetic brand stands out with impeccable packaging. We streamline the production and adhere to high quality standards for your company.
                    </p>
                  </div>
                  {/* <br></br><br></br><br></br> */}
                  <img
                    className="h-96 lg:w-80 md:-ml-24 rounded-t-lg ju aws jklk md:w-56 md:h-96  md:w-64  md:mr-24 sm:mr-24 md:rounded-none md:rounded-l-lg"
                    src={yu}
                    alt=""
                  />
                </div>
              </center>
              {/* <br></br><br></br> */}

              {/* </center> */}
              <br></br><br></br>
              <div className=" flex flex-col p-6 text-white bg-[#8AA6AA] kmk lg:py-[30px] md:px-[100px] md:py-[70px] ">
                <h5 className="mb-4 text-5xl leading-tight text-white bg-[#8AA6AA] font-['ClashDisplay']">
                  Our Beliefs
                </h5>
                <p className="mb-4 text-[16px] text-white bg-[#8AA6AA] md:w-[65%] font-['ClashDisplay']">
                  {" "}
                  With our comprehensive approach that includes incorporation of
                  packaging technologies, installation, and maintenance, we help
                  enterprises to commence the BFS and FFS production journey.
                </p>
                <br></br>
                <br></br>
                {/* <div class="lg:grid-grid-cols-3 md:grid-cols-3 gap-8 gh bg-[#8AA6AA]"> */}
                <div className="md:grid grid-rows-1 lg:grid grid-cols-3 lg:grid grid-rows-1 gap-20 w-full hf">
                  <div className="col-span-1 md:col-span-1 lg:col-span-1 w-full mb-10">
                    <div className="w-full h-auto flex ">
                      <div className="text-8xl text-[#bac8ca] pr-4">1</div>
                      <div className="flex flex-col">
                        <div className="text-2xl font-['ClashDisplay']">INTEGRITY</div>
                        <p className="text-sm text-white w-[75%] font-['ClashDisplay']">
                          To earn trust of our customers with reliability and
                          honesty in all of our interactions, along with our
                          unwavering commitment.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-1 lg:col-span-1 w-full mb-10">
                    <div className="w-full flex ">
                      <div className="text-8xl text-[#bac8ca] pr-4">2</div>
                      <div className="flex flex-col">
                        <div className="text-2xl font-['ClashDisplay']">FORWARD-THINKING</div>
                        <p className="text-sm text-white w-[75%] font-['ClashDisplay']">
                          To make a difference by staying ahead in the market,
                          venturing unexplored domains, and ideating for a
                          change.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-1 lg:col-span-1 w-full mb-10">
                    <div className="w-full flex">
                      <div className="text-8xl text-[#bac8ca] pr-4">3</div>
                      <div className="flex flex-col">
                        <div className="text-2xl font-['ClashDisplay']">INNOVATION</div>
                        <p className="text-sm text-white w-[75%] font-['ClashDisplay']">
                          Striving for more effective solutions by actively
                          pursuing research and development, infusing fresh
                          perspectives, and exploring new technological avenues.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <center>
            <br></br>
            <br></br>
            <div className="flex flex-col rounded-lg bg-white md:max-w-6xl md:flex-row  animate__animated animate__fadeInRight animate__delay-1s">
              <div className="flex flex-col p-6">
                <p className="mb-4 text-5xl ddd leading-tight font-['ClashDisplay']  mr-4"><strong>
                  Industries that we serve</strong>
                </p>
                {/* <h5 className="mb-2 text-4xl leading-tight ll">
                  Lorem ipsum
                </h5> */}
                <center>
                  <p className="mb-1 text-2xs ddd text-[#8AA6AA] leading-tight mr-4 pp font-['ClashDisplay']">
                    At MicroFab, we have been serving the Pharmaceutical, Cosmetic, Food and the Chemical industry across the years. Our adept and motivated team of professionals, along with the state-of-the-art engineering facilities, undertake designing, manufacturing and delivering machinery to meet the requirements of our esteemed clients.
                  </p>
                </center>

              </div>
            </div>

          </center>

          <br></br>



          <div className="lg:flex z-2 flex-rows md:flex flex-cols overflow-x-scroll sm:flex flex-cols sm:-mt-6 animate__animated animate__fadeInRight animate__delay-1s">
            {categories.map((category) => (
              <div key={category.id} className="jkhj p-2 m-auto">
                <div
                  className={`md:w-[230px] w-full flex flex-col shadow-lg rounded-[20px]`}
                >
                  <div className="flex flex-col items-center md:h-[190px] w-full">
                    <Link to={category.link}>
                      <img
                        className="w-48 h-40 p-2 object-cover"
                        src={category.image}
                        alt=""
                      />
                      <p className="text-center text-[#8AA6AA]">{category.title}</p>
                    </Link>
                  </div>
                </div>
                <br></br>
              </div>
            ))}
          </div>;


          <div className="flex mt-12 h-[600px] animate__animated animate__fadeInLeft animate__delay-2s">
            {/* Block 1 - SVG Image */}
            {/* <div className="bg-white md:mb-32 mb-44">
              <img src={uio} alt="SVG Image" className="w-[650px] md:block hidden h-full object-cover" />
            </div> */}

            {/* Block 2 - Text and Boxes */}

            {/* code here */}

            <div className="flex mt-12 h-[600px] animate__animated animate__fadeInLeft animate__delay-2s">
              <div className="bg-white md:mb-32 mb-44">
                <img src={uio} className="w-[650px] md:block hidden h-full object-cover" />
              </div>
              <div className="flex-1 mb-24 sm:ml-0 bg-white p-8 flex flex-col place-items-center justify-center">
                <h3 className="lg:ml-0 sm:ml-0 text-5xl sm:text-4xl text-[#8AA6AA] pb-5 leading-tight font-['ClashDisplay']">
                  <strong>
                    {editMode ? (
                      <input type="text" value={data.title} onChange={(e) => handleInputChange(e, 0, 0, 'title')} className="border border-white bg-primary text-white px-2 py-1 rounded-md" />
                    ) : (
                      data.title
                    )}
                  </strong>
                </h3>
                <h3 className="mb-4 text-2xs text-[#8AA6AA] mx-10 leading-tight font-['ClashDisplay']">
                  {editMode ? (
                    <textarea value={data.description} onChange={(e) => handleInputChange(e, 0, 0, 'description')} className="border border-white bg-primary w-[500px] text-white px-2 py-1 rounded-md" />
                  ) : (
                    data.description
                  )}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-22">
                  {data.blocks[1].boxes.map((box, boxIndex) => (
                    <div key={boxIndex}>
                      <div className={`w-36 h-36 md:w-30 p-6 md:m-1 mb-2 bg-[#8AA6AA] text-white `}>
                        <h3 className="text-2xl text-white leading-tight -mb-6 font-['ClashDisplay']">
                          <center>
                            <strong>
                              {editMode ? (
                                <>
                                  <span className='flex flex-row border border-black'>
                                    <input type="number" value={box.count} onChange={(e) => handleInputChange(e, 1, boxIndex, 'count')} className="border border-white bg-primary text-white px-2 py-1 w-[70px] text-sm rounded-md mr-1" />
                                    <input type="text" value={box.customValue} onChange={(e) => handleInputChange(e, 1, boxIndex, 'customValue')} className="border border-white bg-primary text-white px-2 w-[30px] py-1 rounded-md" />
                                  </span>
                                  <input type="text" value={box.percentage} onChange={(e) => handleInputChange(e, 1, boxIndex, 'percentage')} className="border border-white bg-primary text-white px-2 w-[100px] py-1 rounded-md mt-1" />
                                </>
                              ) : (
                                <>
                                  <CountUp end={box.count} duration={box.countDuration} separator="," />
                                  {box.customValue && box.customValue}
                                  {/* <br /> */}
                                  <br />
                                  <span className='text-2xs'>
                                    {box.percentage && box.percentage}
                                  </span>
                                </>
                              )}
                            </strong>
                          </center>
                        </h3>
                        <br />
                        <h3 className=" text-xs text-white w-full m-0 leading-tight ll font-['ClashDisplay']">
                          <center>
                            {editMode ? (
                              <input type="text" value={box.title} onChange={(e) => handleInputChange(e, 1, boxIndex, 'title')} className="border w-[120px] border-white bg-primary text-white px-2 py-1 rounded-md" />
                            ) : (
                              box.title
                            )}
                          </center>
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>



          </div>
          <div className="flex flex-col h-96 hhj rounded-lg bg-white md:max-w-6xl md:flex-row mx-auto gggg min-[280px]:mt-64 min-[680px]:mt-32 min-[880px]:mt-24 min-[1180px]:mt-2 animate__animated animate__fadeIn animate__delay-3s">
            <div className="flex flex-col p-6 -mt-96">
              <p className=" text-5xl sm:text-4xl leading-tight z-2 text-[#8AA6AA] font-['ClashDisplay'] kk mt-80 pp ">
                Key People
              </p>
              <center>
                <p className="mb-1 text-3xl  text-black leading-tight z-2 pp ll font-['ClashDisplay']"><strong>
                  Our entire team of mavericks are dedicated to offer packaging solutions and support your business.</strong> </p>
              </center>

            </div>
          </div>
          <div className="overflow-x-auto min-[880px]:-mt-64 min-[280px]:-mt-12 scrollbar-bottom" ref={containerRef}>
            {containerWidth <= 800 && containerWidth != 0 ? (
              <Slider images={[yy1, yy2, yy3, yy4]} autoScrollInterval={5000} />
            ) : (
              <div className="mr-8 -mt-64 h-[480px] min-[880px]:-mt-12 gtu overflow-y-hidden flex flex-rows animate__animated animate__fadeIn animate__delay-3s">
                <div className="flex flex-row mt-12 lp cfr h-[400px]">
                  <div className="flex flex-col items-center">
                    <img className="opp px-2 h-full object-cover" src={yy1} alt="" />
                  </div>
                  <div className="flex flex-col items-center">
                    <img className="opp px-2 h-full object-cover" src={yy2} alt="" />
                  </div>
                  <div className="flex flex-col items-center">
                    <img className="opp px-2 h-full object-cover" src={yy3} alt="" />
                  </div>
                  <div className="flex flex-col items-center">
                    <img className="opp px-2 h-full object-cover" src={yy4} alt="" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col rounded-lg lplpp mt-12 jlk bg-white md:max-w-6xl md:flex-row m-auto  animate__animated animate__fadeInLeft animate__delay-4s">
            <div className="flex flex-col -mt-12 p-6">
              <p className=" text-5xl leading-tight text-[#8AA6AA] kk pp font-['ClashDisplay']">
                Project  by Region
              </p>
              <center>
                <p className=" text-4xl text-black leading-tight pp ll font-['ClashDisplay']"><strong>
                  Here’s a glimpse of our projects by various regions across countries</strong> </p>
              </center>

            </div>

            <br></br>
            <br></br>
            <br></br>
            {/* <br></br><br></br><br></br><br></br><br></br> */}

            {/* <img src={a} alt="no" /> */}
            {/* Your browser does not support the video tag. */}
          </div>

          <div className="flex justify-end mt-8 mr-8">
            <div className="w-full h-80 object-cover md:w-full md:p-4 sm:-mt-24">
              <img className="w-full h-full object-fit ml-3 mr-3 mt-12 lg:mt-12" src={yy5} alt="" />
            </div>
          </div>
          <div className="flex flex-col mt-24 -mb-12 p-6">
            <p className=" text-5xl leading-tight text-[#8AA6AA] ll pp font-['ClashDisplay']">
              Project  by Solutions
            </p>
            {/* <h5 className="mb-2 text-4xl leading-tight ll">
                  Lorem ipsum
                </h5> */}

            <p className=" text-4xl text-black leading-tight pp ll font-['ClashDisplay']"><strong>
              Here are the various packaging solutions we provide</strong> </p>


          </div>
          <div className="md:pl-6 flex flex-wrap gap-7 mt-24 md:gap-5 md:gap-y-4 md:p-0 p-8 md:place-items-start place-items-center md:justify-start justify-center  animate__animated animate__fadeInRight animate__delay-2s">
            {ServicesJson.map((device, index) => (
              <MedicalDevicesCard
                key={index} // Ensure each card has a unique key
                index={index}
                heading={device.heading}
                content={device.content}
                img={device.img}
                isOpen={openCardIndex === index}
                onToggle={handleCardToggle}
              />
            ))}
          </div>

        </div>

        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
