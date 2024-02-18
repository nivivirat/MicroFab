import { useState } from "react";
import { db } from "../../../firebase";
import { ref, set, push } from "firebase/database";
import StoryPeek from "../../assets/contact/StoryPeek.svg";
import location from "../../assets/contact/location.svg";
import call from "../../assets/contact/call.svg";
import mail from "../../assets/contact/mail.svg";
import Footer from "../Common/Footer/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault(); // Prevent default form submission
  
      // Validate the data before submitting
      if (!name || !email || !query) {
        console.error("All fields are mandatory");
        return;
      }
  
      // Get the current timestamp
      const timestamp = Date.now();
  
      // Prepare the data object
      const formData = {
        name,
        email,
        query,
        timestamp,
      };
  
      // Store the data in Firebase with a unique ID
      const contactRef = push(ref(db, "QueryForm"));
      await set(contactRef, formData);
  
      // Clear the form after successful submission
      setName("");
      setEmail("");
      setQuery("");
  
      // Show success message for 3 seconds
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting contact form:", error.message);
    }
  };
    
  return (
    <div className="relative font-['ClashDisplay']">
      <div className="bg-[#8AA6AA] z-20 md:mt-[80px] mt-[40px] md:pt-0 pt-[30px] md:h-[600px] flex md:flex-col w-full justify-center place-items-center border-2">
        <div className="md:w-[70%] w-[90%] flex md:flex-row flex-col-reverse border-2 rounded-lg bg-white md:m-0 m-4">
          <div className="w-[100%] md:w-[50%] p-10">
            <div className="flex md:flex-col flex-col">
              <p className="md:text-[30px] text-[#8AA6AA]">Contact us</p>
              <p className="text-[#8B8B8B]">
                We are here for you! Please let us know how we can assist you.
              </p>
            </div>

            {/* input field */}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-4 rounded-lg bg-[#F0F2FF] md:h-[45px] w-[90%] md:w-[80%]"
              ></input>
              <input
                placeholder="Enter your email address"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 rounded-lg bg-[#F0F2FF] md:h-[45px] w-[90%] md:w-[80%]"
              />

              <textarea
                placeholder="Enter your queries"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="p-4 rounded-lg bg-[#F0F2FF] md:h-[145px] w-[90%] md:w-[80%]"
                rows="5"
              ></textarea>
              {showSuccessMessage ? (
                <p className="text-green-500 mt-2">Submitted successfully</p>
              ) : (
                <button
                  type="submit"
                  className="bg-[#8AA6AA] mt-4 md:mt-4 hover:bg-primary hover:md:w-[80%] hover:w-[90%] text-white px-4 hover:py-2 py-2 md:w-[80%] w-[90%] rounded-md"
                >
                  Submit
                </button>
              )}
            </form>
          </div>
          <div className="flex flex-col justify-center place-items-center">
            <img src={StoryPeek} alt="storyPeek"></img>

            <div className="flex flex-col justify-start gap-3">
              {/* location */}
              <div className="flex flex-row  gap-2">
                <img src={location} alt="location"></img>
                <br></br>
                <br></br>
                <div className="flex flex-col">
                  <p>Office No. B107 First Floor,</p>
                  <p>Lodha Supremus II,</p>
                  <p>Wagle Estate, Thane West,</p>
                  <p>Thane Maharashtra -- 400604</p>
                </div>
              </div>
              {/* call */}
              <div className="flex flex-row justify-start place-items-center gap-2">
                <img src={call} alt="location"></img>
                <p> +91 98201 47512</p>
              </div>

              {/* location */}
              <div className="flex flex-row justify-start place-items-center gap-2">
                <img src={mail} alt="location"></img>
                <p>info@microfabeng.com </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
