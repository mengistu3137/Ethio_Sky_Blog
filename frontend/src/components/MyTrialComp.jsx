import Image from "./Image"
import { Link } from "react-router-dom"
const MyTrialComp = () => {
  return (
     <div className='flex flex-col gap-8 mb-8 '>
            <div className=" w-full flex p-2 m-2 gap-4  flex-col md:flex-row  ">
                <Image src="take_off_2.jpg" alt="alt" className={`object-cover aspect-video md:h-3/4 md:w-64 rounded-md  `} />
                <div className=" w-full flex flex-col  ">
                    <h1 className="font-medium">Ethipian Airbus A-350 { `"the sprit of Africa "`}</h1>
                    <div className="flex gap-2 py-2">
                        <span className="text-gray-400"> written by</span>
                        <span className=""> Mengistu Tadesse</span>
                        <span className="text-gray-400">on</span>
                        <Link to="what-is-new" className="text-blue-800"> what is new in ET</Link>
                        <span className="text-gray-400">2 week ago</span>
                    </div>

                    <p className="text-sm w-full">The Ethiopian Airlines Airbus A350-900 is a modern and comfortable aircraft designed for long flights. Its lightweight body and advanced engines make it fuel-efficient and eco-friendly. Inside, the cabin is quiet, spacious, and filled with fresh air, with large windows offering beautiful views. Soft lighting and comfortable seats help passengers relax, while the latest entertainment system keeps them engaged.
                        The aircraft’s smooth flight and long range allow Ethiopian Airlines to connect Addis Ababa with major cities worldwide.
                        Its sleek design and colorful livery make it stand out, reflecting the airline’s commitment to safety, innovation, and a great travel experience.
                    </p>
                    <Link to="https://corporate.ethiopianairlines.com/Press-release-open-page/ethiopian-airlines-orders-africa-s-first-a350-1000" className="text-blue-800">Read more</Link>
                </div>
            </div>
            <div className=" w-full flex p-2 m-2 gap-4  flex-col md:flex-row  ">
                <Image src="take_off_2.jpg" alt="alt" className={`object-cover aspect-video md:h-3/4 md:w-64 rounded-md  `} />
                <div className=" w-full flex flex-col  ">
                    <h1 className="font-medium">Ethipian Airbus A-350 { `"the sprit of Africa "`}</h1>
                    <div className="flex gap-2 py-2">
                        <span className="text-gray-400"> written by</span>
                        <span className=""> Mengistu Tadesse</span>
                        <span className="text-gray-400">on</span>
                        <Link to="what-is-new" className="text-blue-800"> what is new in ET</Link>
                        <span className="text-gray-400">2 week ago</span>
                    </div>
                    <p className="text-sm w-full">The Ethiopian Airlines Airbus A350-900 is a modern and comfortable aircraft designed for long flights. Its lightweight body and advanced engines make it fuel-efficient and eco-friendly. Inside, the cabin is quiet, spacious, and filled with fresh air, with large windows offering beautiful views. Soft lighting and comfortable seats help passengers relax, while the latest entertainment system keeps them engaged.
                        The aircraft’s smooth flight and long range allow Ethiopian Airlines to connect Addis Ababa with major cities worldwide.
                        Its sleek design and colorful livery make it stand out, reflecting the airline’s commitment to safety, innovation, and a great travel experience.
                    </p>
                    <Link to="https://corporate.ethiopianairlines.com/Press-release-open-page/ethiopian-airlines-orders-africa-s-first-a350-1000" className="text-blue-800">Read more</Link>
                </div>
            </div>
            <div className=" w-full flex p-2 m-2 gap-4  flex-col md:flex-row  ">
                <Image src="take_off_2.jpg" alt="alt" className={`object-cover aspect-video md:h-3/4 md:w-64 rounded-md  `} />
                <div className=" w-full flex flex-col  ">
                    <h1 className="font-medium">Ethipian Airbus A-350 { `"the sprit of Africa "`}</h1>
                    <div className="flex gap-2 py-2">
                        <span className="text-gray-400"> written by</span>
                        <span className=""> Mengistu Tadesse</span>
                        <span className="text-gray-400">on</span>
                        <Link to="what-is-new" className="text-blue-800"> what is new in ET</Link>
                        <span className="text-gray-400">2 week ago</span>
                    </div>
                    <p className="text-sm w-full">The Ethiopian Airlines Airbus A350-900 is a modern and comfortable aircraft designed for long flights. Its lightweight body and advanced engines make it fuel-efficient and eco-friendly. Inside, the cabin is quiet, spacious, and filled with fresh air, with large windows offering beautiful views. Soft lighting and comfortable seats help passengers relax, while the latest entertainment system keeps them engaged.
                        The aircraft’s smooth flight and long range allow Ethiopian Airlines to connect Addis Ababa with major cities worldwide.
                        Its sleek design and colorful livery make it stand out, reflecting the airline’s commitment to safety, innovation, and a great travel experience.
                    </p>
                    <Link to="https://corporate.ethiopianairlines.com/Press-release-open-page/ethiopian-airlines-orders-africa-s-first-a350-1000" className="text-blue-800">Read more</Link>
                </div>
            </div>

            
        </div>
  )
}

export default MyTrialComp