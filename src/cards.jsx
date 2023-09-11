function Card3({
    heading,
    description,
    thumbnailSrc,
    thumbnailAlt = "Thumbnail",
    className,
  }) {
    return (
      <div className={`rounded-lg p-6 shadow-sm ${className}`}>
        <div className="overflow-hidden rounded-lg">
          
        </div>
        <h3 className="pt-5 text-[14px] font-normal text-gray-600 block">
          {heading}
        </h3>
        <p className="font-normal text-gray-500 cursor-pointer text-lg duration-300 transition hover:text-[#FA5252] mt-2">
          {description}
        </p>
      </div>
    );
  }
  
  function Card3Presentation() {
    return (
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
        <Card3
          className="bg-[#fcf4ff]"
          heading="Heading"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
        //   thumbnailSrc="https://i.ytimg.com/vi/aMjou4yXWdU/maxresdefault.jpg"
        />
        <Card3
          className="bg-white"
          heading="Pharma"
          description="Our bottle pack systems 321, 321 M and 360 M. produce and fill up to 12,000 multi-dose ampoules per hour. Both ampoule bodies and the tamper-proof closure can be designed flexibly."
        //   thumbnailSrc="https://i.ytimg.com/vi/aMjou4yXWdU/maxresdefault.jpg"
        />
       <Card3
          className="bg-white"
          heading="Pharma"
          description="Our bottle pack systems 321, 321 M and 360 M. produce and fill up to 12,000 multi-dose ampoules per hour. Both ampoule bodies and the tamper-proof closure can be designed flexibly."
        //   thumbnailSrc="https://i.ytimg.com/vi/aMjou4yXWdU/maxresdefault.jpg"
        />
        <Card3
          className="bg-white"
          heading="Pharma"
          description="Our bottle pack systems 321, 321 M and 360 M. produce and fill up to 12,000 multi-dose ampoules per hour. Both ampoule bodies and the tamper-proof closure can be designed flexibly."
        //   thumbnailSrc="https://i.ytimg.com/vi/aMjou4yXWdU/maxresdefault.jpg"
        />
      
      </div>
    );
  }
  
  export { Card3Presentation };
  