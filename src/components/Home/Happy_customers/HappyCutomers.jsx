import img1 from "../../../assets/Happy_customers/img1.svg";
import img2 from "../../../assets/Happy_customers/img2.svg";
import img3 from "../../../assets/Happy_customers/img3.svg";
import arrow1 from "../../../assets/Happy_customers/arrow1.svg";
import arrow2 from "../../../assets/Happy_customers/arrow2.svg";
import quotes from "../../../assets/Happy_customers/quotes.svg";
import ONEMILL from "../../../assets/Happy_customers/1M.svg";
import "../../../App.css";

export default function HappyCustomers() {
  const customerData = [
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felis at. Integer at dictum ullamcorper magna nam eget.",
      author: "Kay Dooley",
      company: "Future Creative Technician",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felis at. Integer at dictum ullamcorper magna nam eget.",
      author: "Kay Dooley",
      company: "Future Creative Technician",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felis at. Integer at dictum ullamcorper magna nam eget.",
      author: "Kay Dooley",
      company: "Future Creative Technician",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felis at. Integer at dictum ullamcorper magna nam eget.",
      author: "Kay Dooley",
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
                className="font-black border-blue text-[50px] hidden md:block"
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
              <p className="text-[17px]">{customer.content}</p>
              <p className="text-[15px] mt-2 font-bold">{customer.author}</p>
              <p className="text-[13px]">{customer.company}</p>
            </div>
          ))}
        </div>
        <div
              className="md:hidden block bg-white shadow-md p-4 m-4 rounded-lg w-[80%] md:w-[40%] text-center"
            >
              <div className="flex justify-center">
                <img src={quotes} className=""></img>
              </div>
              <p className="text-[17px]">{customerData[0].content}</p>
              <p className="text-[15px] mt-2 font-bold">{customerData[0].author}</p>
              <p className="text-[13px]">{customerData[0].company}</p>
            </div>
      </div>
    </div>
  );
}
