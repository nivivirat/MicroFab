import StoryPeek from "../../assets/contact/StoryPeek.svg";
import location from "../../assets/contact/location.svg";
import call from "../../assets/contact/call.svg";
import mail from "../../assets/contact/mail.svg";
import Footer from "../Common/Footer/Footer";

export default function Contact() {
  return (
    <div className="relative font-['ClashDisplay']">
      <div className="bg-[#8AA6AA] z-20 md:mt-[80px] mt-[40px] md:pt-0 pt-[30px] md:h-[600px] flex md:flex-col w-full justify-center place-items-center border-2">
        <div className="md:w-[70%] w-[90%] flex md:flex-row flex-col-reverse border-2 rounded-lg bg-white">
          <div className="w-[100%] md:w-[50%] p-10">
            <div className="flex md:flex-col flex-col">
              <p className="md:text-[30px] text-[#8AA6AA]">Contact us</p>
              <p className="text-[#8B8B8B]">
                We are here for you! How we can help?
              </p>
            </div>

            {/* input field */}

            <div className="flex flex-col gap-4">
              <input
                placeholder="Enter your name"
                className="p-4 rounded-lg bg-[#F0F2FF] md:h-[45px] w-[90%] md:w-[80%]"
              ></input>
              <input
                placeholder="Enter your email address"
                className="p-4 rounded-lg bg-[#F0F2FF] md:h-[45px] w-[90%] md:w-[80%]"
              ></input>
              <textarea
                placeholder="Go ahead, we are listening..."
                className="p-4 rounded-lg bg-[#F0F2FF] md:h-[145px] w-[90%] md:w-[80%]"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#8AA6AA] mt-4 md:mt-4 text-white px-4 py-2 md:w-[80%] w-[90%] rounded-md"
            >
              Submit
            </button>
          </div>
          <div className="flex flex-col  justify-center place-items-center">
            <img src={StoryPeek} alt="storyPeek"></img>

            <div className="flex flex-col justify-start gap-3">
              {/* location */}
              <div className="flex flex-row justify-start place-items-center gap-2">
                <img src={location} alt="location"></img>
                <p>674 Washington Avenue</p>
              </div>

              {/* call */}
              <div className="flex flex-row justify-start place-items-center gap-2">
                <img src={call} alt="location"></img>
                <p>602-216-4243</p>
              </div>

              {/* location */}
              <div className="flex flex-row justify-start place-items-center gap-2">
                <img src={mail} alt="location"></img>
                <p>Johndoe123@Gmail.Com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
