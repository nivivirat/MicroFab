import Image from "./drops.png"
// import Link from "next/link"

const TestimonialCard = props => {
  return (
    <div className="py-4 px-8 bg-white shadow-lg rounded-lg my-15">
      <div className="flex justify-center md:justify-end -mt-11">
        {/* <Image */}
          
         {/* <img className="w-150 h-50 object-cover  border-2 border-indigo-500" src={props.imgSrc} alt={Image}></img> */}
        {/* //   height={80}
        //   width={80}
        //   src={props.imgSrc} */}
        {/* /> */}
      </div>
      <div>
        <h2 className="text-[#8AA6AA] text-2xl font-semibold">{props.title}</h2>
        <h5 className="mt-3  text-gray-600"><strong>{props.content}</strong></h5>
        <h5 className="mt-3 text-gray-600">{props.author}</h5>
      </div>
      <div className="flex justify-end mt-4">
        {/* <Link href="#" className="text-xl font-medium text-indigo-500">
          {props.author}
        </Link> */}
      </div>
    </div>
  )
}
export default TestimonialCard
