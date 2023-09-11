import Image from "./1.jpeg"
// import Link from "next/link"
import './Style.css';
import bn from"./zx.svg"
const TestimonialCard = props => {
  return (
    <div className="py-4 px-4 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        {/* <Image> */}
          
         <img className="w-150 h-30 object-cover  border-2 border-indigo-500" src={props.imgSrc} alt={props.imgSrc}></img> 
           {/* height={80}
           width={80}
           src={props.imgSrc} 
           </Image> */}
      </div>
      <div>
        {/* <h2 className="text-[#8AA6AA] text-3xl font-semibold">{props.title}</h2> */}
        <h5 className="mt-2 text-gray-600 text-2xl"><strong>{props.content}</strong></h5>
        <h5 className="mt-2 text-gray-600">{props.author}</h5>
      </div>
      <div className ="mt-2 text-gray-600flex justify-end mt-4 pyu text-[#8AA6AA]">Blow-Fill-Seal, Technology </div>
      <div className="flex justify-end mt-4 mt-2">
        <a href="www.google.com" className="text-1xl leading-tight text-[#8AA6AA]">
         <div><b>Read More -></b>
        
        </div>
        </a> 
      </div>
    </div>
  )
}
export default TestimonialCard
