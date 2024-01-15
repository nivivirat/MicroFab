import img1 from "../../../assets/Happy_customers/img1.svg";
import img2 from "../../../assets/Happy_customers/img2.svg";
import img3 from "../../../assets/Happy_customers/img3.svg";
import arrow1 from "../../../assets/Happy_customers/arrow1.svg";
import arrow2 from "../../../assets/Happy_customers/arrow2.svg";
import quotes from "../../../assets/Happy_customers/quotes.svg";
import ONEMILL from "../../../assets/Happy_customers/1M.svg";
import "../../../App.css";
import MobileTestimonials from "../Testimonials/MobileTestimonials";

export default function HappyCustomers() {
  const customerData = [
    {
      content:
        "Kudos to the entire team at MicroFab!! The professionals have really worked assiduously to set up the injectable facility. No stone was left unturned when MicroFab executed everything with a customer-centric approach. Our injectable facility has now been running smoothly without a hitch and it’s been a long time since we are happy with the experience using the machinery.",
      author: "Nepal BLS  Laboratory",
      company: "Future Creative Technician",
    },
    {
      content:
        "We were in need of high-end machinery to produce SVPs across the shop floor of our plant. Our team perceived producing SVPs as a colossal challenge especially when we had to move on with mass production. But, working closely with MicroFab brought tranquility. The machinery can now produce 500,000 ampoules per day with little to no human intervention.",
      author: "Geneka Naturals",
      company: "Future Creative Technician",
    },
    {
      content:
        "Packaging Intravenous Solutions in huge quantities would otherwise be a pain if we wouldn’t have contacted MicroFab. However, when the team comprehended our needs, it was brimming with proactiveness to set up four lines of IV. Thanks MicroFab for being quite supportive and managing things just the way we wanted.",
      author: "Healthline Pharmaceuticals",
      company: "Future Creative Technician",
    },
    {
      content:
        "Hats off to the entire team working at MicroFab. We really appreciate the efforts that the entire team has put in while working towards the design of the machinery that had to be set up in Sri Lanka. Earlier, we were at our wit s end and didn t know how to commence. But, everything seemed easy when we contacted MicroFab.",
      author: "PIIPL, Sri Lanka",
      company: "Future Creative Technician",
    },

    // Add more objects as needed
  ];

  return (
    <div className="font-['ClashDisplay'] flex flex-col md:flex-row justify-between p-10">
      {/* left */}
      <div className="gap-8 flex flex-row justify-center place-items-center items-center md:w-1/2 relative z-1">
        {/* images */}
        <div className="">
          <img src={img1} className="w-[120px] mb-[-20px]"></img>
          <img src={img2} className="w-[120px] mb-[-20px]"></img>
          <img src={img3} className="w-[120px] mb-[-20px]"></img>
        </div>

        {/* 1 MIL + */}
        <div className="flex flex-col">
          <div className="flex flex-col justify-center place-items-start">
            <div>
              <p
                className="font-['ClashDisplayBold'] border-blue text-[50px] hidden md:block"
                style={{ WebkitTextStroke: "2px blue" }}
              >
                + 1M
              </p>
              <img src={ONEMILL} className="md:hidden h-8"></img>
            </div>
            <img src={arrow1} className="h-[40px] w-auto mt-2 "></img>
            <p className="text-[40px] font-black leading-10">
              Happy <br></br>Customers
            </p>
          </div>

          <div className="flex flex-col justify-center place-items-start pt-7">
            <p className="font-bold">Read Reviews</p>
            <img src={arrow2} className="h-[33px] w-auto mt-2"></img>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-col items-center md:w-1/2 md:mt-0 mt-5">
        <div className="flex flex-wrap justify-between">
          {customerData.map((customer, index) => (
            <div
              key={index}
              className="md:block hidden bg-white shadow-md p-4 m-4 rounded-lg w-[80%] md:w-[40%] text-center"
            >
              <div className="flex justify-center">
                <img src={quotes} className=""></img>
              </div>
              <p className="text-[14px]">{customer.content}</p>
              {/* <p className="text-[15px] mt-2 font-normal">{customer.author}</p> */}
              {/* <p className="text-[13px]">{customer.company}</p> */}
            </div>
          ))}
        </div>
        {/* <div className="md:hidden block bg-white shadow-md p-4 m-4 rounded-lg w-[80%] md:w-[40%] text-center">
          <div className="flex justify-center">
            <img src={quotes} className=""></img>
          </div>
          <p className="text-[17px]">{customerData[0].content}</p>
          <p className="text-[15px] mt-2 font-bold">{customerData[0].author}</p>
          <p className="text-[13px]">{customerData[0].company}</p>
        </div> */}

        <div className="md:hidden">
          <MobileTestimonials />
        </div>
      </div>
    </div>
  );
}
