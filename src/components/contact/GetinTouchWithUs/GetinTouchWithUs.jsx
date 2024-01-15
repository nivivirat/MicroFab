import "../../../App.css";
import business from "../../../assets/GetinTouchWithUs/business.svg";
import contact from "../../../assets/GetinTouchWithUs/contact.svg";
import office from "../../../assets/GetinTouchWithUs/office.svg";

export default function GetinTouchWithUs() {
  return (
    <div className="custom-font md:w-[50%] md:p-10 p-10 md:gap-0 gap-4 flex flex-col justify-between">
      <div className="flex md:flex-col flex-col md:justify-start">
        <div className="flex flex-row mb-3">
          <p className="md:text-[30px] text-[25px] font-bold">Get in Touch</p>
          <p className="md:text-[30px] text-[25px] text-[#8AA6AA] ml-2 md:ml-2.5">
            {" "}
            With Us
          </p>
        </div>
        <p className="w-[90%] text-left font-semibold md:text-[18px]">
          At MicroFab, your satisfaction is our priority. Contact us today and
          experience the difference of working with us.
        </p>
      </div>

      <div className="w-full flex flex-col md:gap-8 gap-10 md:mb-10">
        <div className="md:gap-0 gap-6 w-full flex md:flex-row flex-col md:justify-start justify-center md:place-items-start">
          {/* office */}
          <div className="md:w-[50%] w-[90%] mr-5">
            <div className="flex flex-row gap-2">
              <img src={office} alt="office" className=""></img>
              <p className="md:text-[26px] text-[#8AA6AA]">Office</p>
            </div>
            <p className="md:text-[14px] text-left">
              <p>Office No. B107 First Floor,</p>
              <p>Lodha Supremus II,</p>
              <p>Wagle Estate, Thane West,</p>
              <p>Thane Maharasthra -- 400604</p>
            </p>
          </div>

          {/* open hours */}
          <div className="md:w-[50%] w-[70%] ">
            <div className="flex flex-row gap-2">
              <img src={business} alt="office" className=""></img>
              <p className="md:text-[26px] text-[#8AA6AA]">Open Hours</p>
            </div>
            <p className="md:text-[14px] text-left">Monday - Saturday</p>
            <p className="md:text-[14px] text-left">9 AM -  6:30 PM</p>
          </div>
        </div>
        <div className="flex md:flex-row md:justify-start flex-col gap-6">
          {/* contact */}
          <div className="md:w-[50%] w-[90%] justify-start">
            <div className="flex flex-row gap-2">
              <img src={contact} alt="office" className=""></img>
              <p className="md:text-[26px] text-[#8AA6AA]">Contact</p>
            </div>
            <p className="md:text-[14px] text-left">  +91 9323012344</p>
          </div>

          {/* email */}
          <div className="md:w-[50%] w-[70%] ">
            <div className="flex flex-row gap-2">
              <img src={contact} alt="office" className=""></img>
              <p className="md:text-[26px] text-[#8AA6AA]">Email</p>
            </div>
            <p className="md:text-[14px] text-left">info@microfabeng.com </p>
          </div>
        </div>
      </div>
    </div>
  );
}
