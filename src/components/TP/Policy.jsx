import React from "react";

export default function Policy() {
  const contents = [
    {
      heading: "Privacy Policy",
      subheading: "Effective Date: August 14th, 2023",
      content:
        "This Privacy Policy describes how we collect, use, and disclose your personal information when you use our services. By using our services, you consent to the practices described in this Privacy Policy.",
      points: [
        "We may collect information you provide directly to us, such as when you create an account, submit a contact form, or interact with our services.",
        "We may also collect information about your use of our services, such as your browsing history, the pages you visit, and the features you use.",
        "We use the information we collect to provide, maintain, and improve our services, to respond to your requests, and to communicate with you.",
      ],
    },
  ];

  return (
    <div>
      <div className="font-['ClashDisplay'] md:w-full w-full text-left flex flex-col gap-3 md:pl-[10px]">
        {/* Title */}
        <div className="text-[26px]">{contents[0].heading}</div>
        <div className="text-[16px]">{contents[0].subheading}</div>

        {/* Content */}
        <div>{contents[0].content}</div>

        {/* Points */}
        <div className="flex flex-col gap-2 mt-4">
          {contents[0].points.map((point, index) => (
            <div key={index} className="marker:text-black">
              {point}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
