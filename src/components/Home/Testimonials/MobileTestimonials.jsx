import Slider from "./Slider";
import quotes from '../../../assets/Happy_customers/quotes.svg'

export default function MobileTestimonials() {

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
          content: "Packaging Intravenous Solutions in huge quantities would otherwise be a pain if we wouldn’t have contacted MicroFab. However, when the team comprehended our needs, it was brimming with proactiveness to set up four lines of IV. Thanks MicroFab for being quite supportive and managing things just the way we wanted.",
          author: "Healthline Pharmaceuticals",
          company: "Future Creative Technician",
        },
        {
          content: "Hats off to the entire team working at MicroFab. We really appreciate the efforts that the entire team has put in while working towards the design of the machinery that had to be set up in Sri Lanka. Earlier, we were at our wit s end and didn t know how to commence. But, everything seemed easy when we contacted MicroFab.",
          author: "PIIPL, Sri Lanka",
          company: "Future Creative Technician",
        },
    
        // Add more objects as needed
      ];


  return (
    <div>
      <div className="w-screen fg flex flex-col gap-10 pb-10 -mb-24 overflow-x-auto pr-12">
        <Slider options={{ align: "center" }}>
        {customerData.map((customer, index) => (
            <div
              key={index}
              // className="bg-white shadow-md p-4 m-4 rounded-lg w-[300px] h-[200px] text-center"
              className="text-center shadow-md rounded-lg"
            >
              {/* <p>{index+1}</p>
              <p className="text-[14px] w-[400px]">{customer.content}</p> */}
              <div className="flex justify-center">
                <img src={quotes} alt="quote" className=""></img>
              </div>
              <p className="text-[14px] w-[250px] p-3">{customer.content}</p>
              {/* <p className="text-[15px] mt-2 font-normal w-[250px]">{customer.author}</p> */}
              {/* <p className="text-[13px]">{customer.company}</p> */}
            </div>
          ))}
        </Slider>
        {/* </div> */}
      </div>
    </div>
  );
}
