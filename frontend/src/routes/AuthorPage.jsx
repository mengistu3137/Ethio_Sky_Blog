import Image from "../components/Image"
import { Link } from "react-router-dom"
const AuthorPage = () => {
  return (
    <div className='flex flex-col'>
      <div className="flex flex-row">
          {/* details */}
          <div className="lg:w-2/3 space-y-3">
              <Link to="test" className="text-4xl font-semibold">Ethipian Airbus A-350 {`"the sprit of Africa "`}</Link>
               <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <span className="text-gray-400"> Written by</span>
                        <Link className=" text-blue-800"> Mengistu Tadesse</Link>
                        <span className="text-gray-400">on</span>
                        <Link to="what-is-new" className="text-blue-800"> what is new in ET</Link>
                        <span className="text-gray-400">2 week ago</span>
              </div>
              <p className="text-sm w-full line-clamp-3">The Ethiopian Airlines Airbus A350-900 is a modern and comfortable aircraft designed for long flights.
                  Its lightweight body and advanced engines make it fuel-efficient and eco-friendly. Inside, the cabin is quiet, spacious, and filled with fresh air, with large windows offering beautiful views. Soft lighting and comfortable seats help passengers relax, while the latest entertainment system keeps them engaged.
                        The aircraft’s smooth flight and long range allow Ethiopian Airlines to connect Addis Ababa with major cities worldwide.
                        Its sleek design and colorful livery make it stand out, reflecting the airline’s commitment to safety, innovation, and a great travel experience.
                    </p>
                    <Link to="https://corporate.ethiopianairlines.com/Press-release-open-page/ethiopian-airlines-orders-africa-s-first-a350-1000" className="text-blue-800 underline text-sm">Read more</Link>
          </div>
         <div className="md:hidden lg:block xl:block lg:w-1/3 xl:w-1/3">
              <Image src="departure.jpg" alt="alt" className={`object-cover rounded-2xl aspect-videom w-800`} w="700" h="350" />
          </div>

      </div>

    </div>
  )
}

export default AuthorPage