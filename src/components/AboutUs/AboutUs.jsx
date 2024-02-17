import logo from './logo.svg';
import './Style.css';
import { NavbarDefault } from "./Navbar";
import { Button } from "@material-tailwind/react";
import we from "./qw.png"
import tasto from "./testicards.json"
import Slider from "./slider";
import TestimonialCard from "./testicard";
import Footer from '../Common/Footer/Footer';

function AboutUs() {
  return (
    <div className="App font-['ClashDisplay']">
      <div><NavbarDefault /></div><br></br><br></br>
      <div>

        <br></br><br></br><br></br><br></br><br></br><center>

          <div className="flex flex-col rounded-lg bg-white md:max-w-3xl md:flex-row mm">

            <div className="flex flex-col p-6">
              <p className="mb-4 text-xs leading-tight text-[#8AA6AA]">
                WHO WE ARE
              </p>
              <h5
                className="mb-2 text-5xl leading-tight text-[#8AA6AA]">
                About Us
              </h5>
              <p className="mb-4 text-xs leading-tight text-[#8AA6AA]">
                MicroFab is the result of a collaboration between industry leaders MicroTools and FabLab, combining expertise in BFS and FFS machine manufacturing and EPC contracting. Specializing in advanced packaging and industrial solutions, MicroFab is committed to quality, innovation, and seamless project execution. The company aims to revolutionize packaging and project execution, serving as a unified source for cutting-edge technologies and turnkey solutions across various industries.
              </p>

            </div>
            <br></br><br></br><br></br>
            <img
              className="h-96 w-full rounded-t-lg ju  md:h-44 md:w-54 md:rounded-none md:rounded-l-lg"
              src="https://s3-alpha-sig.figma.com/img/68a5/6491/853a183cbecce8a6f3fa180abc48018c?Expires=1694390400&Signature=lloc~NpTD9AavHEAWICjzs8fgJPrZbm6W3eCZGbzu3vdHsiQYIyZRE59n5ihschS3Wj~8SIDc3S6~aEPiNBbCxW3fsPsS7hnnHh5AgvI-49KAScrQk~8Uv9zvzVJtg5K8Ozq2ksuoVU1RVoELIS3gCphUaRdYqViPBPDI3Q6E9kYPpU34-tSMQA2JaVoiE5Ahh8Ncj3HuUrY5VooU48LVWknuOw7rbpWxMba1I7616aE~c4ZlNPvLQgieTUAhUBXB0IDmiu3q~whjLAyqKuXUWYjWR0-vwA9ZXygmueqQjGtySl6bz0vr~72tcr9qQM5AnHzT14DWHFFN57wurjdOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="" />

          </div>
        </center>
        <br></br><br></br>
      </div>
      {/* </center> */}


      <div className="flex flex-col p-6 text-white bg-[#8AA6AA] kmk">
        <p className="mb-4 text-3xl  text-white bg-[#8AA6AA]">
          Lorem ipsum
        </p>
        <h5
          className="mb-4 text-4xl leading-tight text-white bg-[#8AA6AA]">
          Lorem ipsum
        </h5>
        <p className="mb-4 text-xs  text-white bg-[#8AA6AA]">
          Lorem ipsum
        </p>
        <br></br><br></br>
        {/* <div className="lg:grid-grid-cols-3 md:grid-cols-3 gap-8 gh bg-[#8AA6AA]"> */}
        <div className="grid grid-rows-3 grid-flow-col gap-10">
          {/* <div><span className="text-7xl h-full">1</span><spacer></spacer>
      <span>
      <span className="text-3xl n"> Lorem ipsum tgrtg rgtg referfrgf</span>
      </span>
      </div> */}
          <div className="row-span-3 gap-10"><span className="text-7xl">1</span>

            <span className="text-3xl m"> Lorem epsum tgrtg rgtg</span><br></br><br></br>
            <p className="mb-4 text-xs leading-tight text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in .</p>
          </div>
          <div className="row-span-3 gap-10"><span className="text-7xl">2</span>

            <span className="text-3xl m"> Lorem ipsum tgrtg rgtg</span><br></br><br></br>
            <p className="mb-4 text-xs leading-tight text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in .</p>
          </div>
          <div className="row-span-3 gap-10"><span className="text-7xl">3</span>
            <span className="text-3xl o"> Lorem ipsum tgrtg rgtg</span><br></br><br></br>
            <p className="mb-4 text-xs leading-tight text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in .</p>
          </div>
        </div>
      </div><br></br><br></br>
      <div className="w-screen as h-160px">
        <Slider options={{ align: "center" }}>
          {tasto.map((tasto, i) => (
            // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
            // for mobile devices we use 90% width
            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_33.33%]">
              <TestimonialCard {...tasto} />
            </div>
          ))}
        </Slider>
      </div>
      <br></br>
      <center>
        <div className="flex flex-col rounded-lg bg-white md:max-w-4xl md:flex-row mm">

          <div className="flex flex-col p-6">
            <p className="mb-4 text-2xl leading-tight text-[#8AA6AA]">
              WHO WE ARE
            </p>
            <h5
              className="mb-2 text-4xl leading-tight text-[#8AA6AA]">
              About Us
            </h5>
            <p className="mb-4 text-xs leading-tight text-[#8AA6AA]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in

              culpa qui officia deserunt mollit anim id est laborum.If you are a Hookah business, please join us and help us defend and protect your business, our culture and community.

            </p>

          </div>
          {/* <br></br><br></br><br></br><br></br><br></br> */}
          <video className="h-full w-full rounded-lg" controls>
            <source src="/demo.mp4" type="video/mp4" />
            {/* Your browser does not support the video tag. */}
          </video>


        </div>
      </center>
      <br></br><br></br>
      <div className="">

        <br></br><center>

          <div className="flex flex-col rounded-lg md:max-w-3xl md:flex-row mm">
            <center>
              <div className="flex flex-col p-6">
                <p>
                  <h5
                    className="mb-2 text-3xl leading-tight text-white"><strong>
                      Why Choose Us
                    </strong>
                  </h5>
                </p>
                <p className="mb-4 text-xl leading-tight text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in

                  culpa qui officia deserunt mollit anim id est laborum.If you are a Hookah business, please join us and help us defend and protect your business, our culture and community.

                </p>

              </div>
            </center>

          </div>
          <Button variant="filled" size="lg" color="white" className="ab rounded-full bg-white text-black">
            <strong>   Read More  </strong>
          </Button>
        </center><br></br>

      </div><br></br>
      <div className="bg-white ">

        <br></br><center>

          <div className="flex flex-col rounded-lg md:max-w-5xl md:flex-row mm">
            <center>
              <div className="flex flex-col p-6">
                <p>
                  <h5
                    className="mb-2 text-3xl leading-tight text-black"><strong>
                      MEET OUR TEAM
                    </strong>
                  </h5>
                </p>
                <p className="mb-4 text-xl leading-tight text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in

                  culpa qui officia deserunt mollit anim id est laborum.If you are a Hookah business, please join us and help us defend and protect your business, our culture and community.

                </p>

              </div>
            </center>

          </div>
        </center>
      </div><br></br>
      <div className="io">
        <img src={we} alt="./qw.png"></img>
      </div>
      <div className="flex flex-col p-6">
        <p>
          <h5
            className="mb-2 text-3xl leading-tight text-black">FAQ


          </h5>

        </p>
        <br></br>
        <p className="mb-4 text-sm leading-tight text-black lm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?

        </p>
        <p className="mb-4 text-sm leading-tight text-black lm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in

          culpa qui officia deserunt mollit anim id est laborum.If you are a Hookah business, please join us and help us defend and protect your business, our culture and community.

        </p><br></br>
        <p className="mb-4 text-sm leading-tight text-black lm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?

        </p><br></br>
        <p className="mb-4 text-sm leading-tight text-black lm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?

        </p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
