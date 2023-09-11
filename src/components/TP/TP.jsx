import React, { useState } from "react";
import up_img from "../../assets/TP/up.svg";
import down_img from "../../assets/TP/down.svg";
import Terms_conditions from "./Terms_conditions";
import Policy from "./Policy"; // Import your Policy component
import Footer from "../Common/Footer/Footer";

export default function TP() {
  const date = "August 14th, 2023";
  const [selected, setSelected] = useState("Terms & Conditions");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleSelected = (option) => {
    setSelected(option);
    setShowDropdown(false);
  };

  const options = ["Terms & Conditions", "Privacy Policy"];

  // Filter out the selected option from the dropdown list
  const availableOptions = options.filter((option) => option !== selected);

  // Define which component to render based on the selected option
  let selectedComponent;
  if (selected === "Terms & Conditions") {
    selectedComponent = <Terms_conditions />;
  } else if (selected === "Privacy Policy") {
    selectedComponent = <Policy />;
  }

  return (
    <div className="font-['ClashDisplay'] md:mt-[80px] mt-[80px] md:h-full h-full flex flex-col justify-center place-items-center">
      <div className="flex flex-col justify-center place-items-center">
        <p className="text-[40px] md:px-0 px-[120px] text-center">
          Terms & Policies
        </p>
        <p>Last updated: {date}</p>
      </div>

      <div className="w-[95%] px-10 bg-[#F3F2EE] p-10 md:p-12 flex md:flex-row flex-col mt-10">
        {/* option part */}
        <div className="hidden md:flex flex-col w-4/12 gap-6">
          {/* Terms & Conditions */}
          {options.map((option) => (
            <div
              key={option}
              className={`flex flex-row gap-4 cursor-pointer ${
                selected === option ? "text-[#8AA6AA]" : "text-black"
              }`}
              onClick={() => toggleSelected(option)}
            >
              <div
                className={`${selected === option ? "bg-[#8AA6AA]" : ""} w-1`}
              ></div>
              <p>{option}</p>
            </div>
          ))}
        </div>

        {/* Custom Mobile Dropdown */}
        <div className="md:hidden relative mb-6">
          <div
            className="w-full p-2 border rounded text-[#8AA6AA] bg-white cursor-pointer flex justify-between items-center"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className={showDropdown ? "text-[#8AA6AA]" : "text-black"}>
              {selected}
            </span>
            <img
              src={showDropdown ? up_img : down_img}
              alt="Dropdown Icon"
              className="w-4 h-4"
            />
          </div>
          {showDropdown && (
            <ul className="absolute left-0 w-full border rounded mt-2 py-1 bg-white z-10">
              {availableOptions.map((option) => (
                <li
                  key={option}
                  className="cursor-pointer px-4 py-2 hover:bg-[#8AA6AA] hover:text-white"
                  onClick={() => toggleSelected(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* content part */}
        <div className="w-full h-full md:ml-[100px]">
          {selectedComponent} {/* Render the selected component */}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
