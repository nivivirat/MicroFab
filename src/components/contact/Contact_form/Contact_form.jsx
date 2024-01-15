import React, { useState } from "react";
import "../../../App.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    serviceInterestedIn: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., sending data to a server
    console.log(formData);
    // Reset the form after submission
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      serviceInterestedIn: "",
      message: "",
    });
  };

  const serviceOptions = [
    "BFS Machine",
    "Water Treatment System",
    "Other Service",
  ];

  return (
    <div className="md:ml-0 md:w-[80%] max-w-lg mx-auto w-full flex justify-center place-items-center custom-font md:m-10 m-10 md:rounded-[33px] md:border md:border-[#8AA6AA] md:my-4 md:mt-10 md:mb-10 p-4 rounded-md">
      <form
        onSubmit={handleSubmit}
        className="border-2 md:border-0 space-y-4 text-left md:w-[100%] w-[90%] md:rounded-none rounded-[30px] p-6"
      >
        <div className="md:flex md:space-x-4">
          <div className="md:w-1/2 w-full">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full border border-black rounded-md px-2 py-1"
            /> 
          </div>
          <div className="md:w-1/2 w-full">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full border border-black rounded px-2 py-1"
            />
          </div>
        </div>
        <div className="md:flex md:space-x-4">
          <div className="md:w-1/2 w-full">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full border border-black rounded px-2 py-1"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <label htmlFor="email" className="md:block hidden">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full md:block hidden border border-black rounded px-2 py-1"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <label htmlFor="serviceInterestedIn" className="text-left">
            Service Interested In
          </label>
          <select
            id="serviceInterestedIn"
            name="serviceInterestedIn"
            value={formData.serviceInterestedIn}
            onChange={handleInputChange}
            className="md:w-full w-full border border-black rounded px-2 py-1"
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-left">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write here"
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            className="md:w-full w-full border border-black rounded px-2 py-1"
          ></textarea>
        </div>

        <div className="md:w-1/2 w-full">
          <label htmlFor="email" className="md:hidden">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full md:hidden border border-black rounded px-2 py-1"
          />
        </div>
        <button
          type="submit"
          className="bg-[#8AA6AA] text-white hover:h-auto px-4 py-2 hover:py-2 hover:px-4 w-full md:w-full hover:md:w-full rounded-md hover:bg-[#8AA6AA]"
        >
          Submit
        </button>
      </form>

    </div>
  );
};

export default ContactForm;
