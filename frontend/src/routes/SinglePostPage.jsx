import { useState } from "react"
import Image from "../components/Image"
import { Link, useParams } from "react-router-dom"
import Catagory from "../components/Catagory"
import Profile from "../components/profile"
import Actions from "../components/Actions"
import Comments from "../components/Comments"
import Search from "../components/Search"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import {format} from "timeago.js"
export const  fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`)
  return res.data;
}
const SinglePostPage = () => {
  const {slug}=useParams()
  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn:()=>fetchPost(slug)
    
  })
  console.log(data)
  if(isPending) return "Loading..."
  if(error) return "Something went wrong"+error.message
  if(!data) return "Post is not found"
  return (
    <div className='flex flex-col gap-4 '>
      <div className="flex flex-row gap-8">
          {/* details */}
          <div className="lg:w-2/3 w-full space-y-4">
          <Link to="test" className="text-4xl font-semibold">{data.title }</Link>
               <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <span className="text-gray-500">Author </span>
            <Link className=" text-blue-800">{data.user.username }</Link>
                        <span className="text-gray-400">on</span>
            <Link to="what-is-new" className="text-blue-800">{data.catagory}</Link>
            <span className="text-gray-400">{format(data.createdAt) }</span>
              </div>
          <p className="text-sm w-full line-clamp-3">{data.desc}</p>
        <Image src={data.img} className={`object-cover rounded-2xl h-80 w-full p-2 `} alt="alt" />  
          
                    <Link to="https://corporate.ethiopianairlines.com/Press-release-open-page/ethiopian-airlines-orders-africa-s-first-a350-1000" className="text-blue-800 underline text-sm">Read more</Link>
          </div>
         <div className="md:hidden lg:block xl:block lg:w-1/3 xl:w-1/3">
          <Image src="departure.jpg" alt="alt" className={`object-cover rounded-2xl aspect-videom w-800`} w="700" h="350" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eius fugiat corporis aperiam impedit consequuntur labore animi quam placeat quia? Rerum magnam aliquid obcaecati minus ratione inventore. Quod, aspernatur rem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dolore alias fugit! Ipsam totam animi provident modi, nesciunt, amet eius ab, itaque voluptatum necessitatibus natus perferendis rerum fugiat atque a?
          </p>
          </div>

      </div>

      <div className="flex justify-between w-full gap-3 text-justify">
        {/* <div className="flex flex-col"> */}
         {/*   <div className=" w-full ">
          </div> */}

         {/*  <div className="flex flex-col text-justify lg:text-lg gap-6">

          {data.content}  */}
  
                  
            <Comments postId={data._id}/>
                  
        {/*   </div> */}
 
      
        <div className="flex flex-col gap-2 ">
            <div className="sticky top-10 flex flex-col gap-10 text-sm">
            <Profile img={data.user.img}
              title={data.title}
              username={data.user.username} />
                <Actions post={data} />
              </div>
            <div className="sticky top-64 flex flex-col gap-4 text-sm">
                  <Catagory/>
                    <Search />
            </div>
          
        </div>
         

</div>
    </div>
  )
}

export default SinglePostPage
