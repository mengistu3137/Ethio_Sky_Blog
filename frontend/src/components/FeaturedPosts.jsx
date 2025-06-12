import Image from "../components/Image"
import { Link } from "react-router-dom"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import {format} from "timeago.js"
export const  fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`)
  return res.data;
}
const FeaturedPosts = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["FeaturedPosts"],
    queryFn:()=>fetchPost()
    
  })
  if(isPending) return "Loading..."
  if (error) return "Something went wrong" + error.message
  const post = data.posts
  if (!post || post.length === 0) {
    return
    
  }

  
  return (
      <div className="mt-8 flex flex-col lg:flex-row gap-8 ">
          {/*  first*/}
         { post[0].img && <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {/* src, className, w, h, alt */}
        <Image src={post[0].img} className={`object-cover rounded-2xl w-100 h-72`} alt="alt" /> 
        <div className="flex gap-2">
          <h1 className="font-semibold">01.</h1>
          <p>{ post[0].desc }</p>

        </div>
       
          <div className="flex gap-4  text-sm lg:text-base">
          
          <span className="text-gray-700">Author  <span className="text-blue-600">{post[0].user.username  }</span></span>
                  <Link to="holidays" className="text-blue-600">{post[0].catagory }</Link>
          <span className="text-gray-500">{format(post[0].createdAt) }</span>
              </div>
        <Link to={post[0].slug} className="font-medium  md:text-lg lg:text-lg lg:font-bold  cursor-pointer">{post[0].title}</Link>
            <p>{post[0].desc }</p>
        
          </div>}
          {/*the second one  */}

          <div className="w-full flex flex-col lg:w-1/2  gap-4 p-2">
              
        {post[1]&&(<div className="lg:h-1/3 flex justify-between gap-2">
          <div className="w-1/3 aspect-video ">
                  <Image src={post[1].img } alt="alt" className={`object-cover rounded-2xl w-full h-1/2  `} w="298" h="298" />
          </div>
                  {/* detai ls*/}
                <div className="w-2/3 flex flex-col">
                <div className="flex items-center gap-4  text-sm lg:text-base">
              <h1 className="font-semibold">02.</h1>
          <span className="text-gray-700 text-sm items-center">Author <span className="text-blue-600">{post[1].user.username  }</span></span>
              
              <Link to="events" className="text-blue-900">{post[1].catagory }</Link>
              <span className="text-gray-500">{ format(post[1].createdAt)}</span>
                </div>
            <Link to={post[1].slug} className="font-medium  text-sm ">{post[1].title}</Link>
            <p className="">{post[1].desc }</p>
            
                  </div>   
              
              </div>)}
        {post[2]&&(<div className="lg:h-1/3 flex justify-between gap-2">
          <div className="w-1/3 aspect-video">
                  <Image src={post[2].img } alt="alt" className={`object-cover rounded-2xl w-full h-full `} w="298" />
          </div>
                  {/* detai ls*/}
                <div className="w-2/3 flex flex-col">
                <div className="flex items-center gap-4  text-sm lg:text-base">
                  <h1 className="font-semibold">03.  </h1>
              <Link to="events" className="text-blue-900">{post[2].catagory }</Link>
              <span className="text-gray-500">{ format(post[2].createdAt)}</span>
                </div>
            <Link to={post[2].slug} className="font-medium  text-sm ">{post[2].title}</Link>
            <p>{post[2].desc }</p>
                  </div>   
              
              </div>)}
        {post[3]&&(<div className="lg:h-1/3 flex justify-between gap-2">
          <div className="w-1/3 aspect-video">
                  <Image src={post[3].img } alt="alt" className={`object-cover rounded-2xl w-full h-full `} w="298" />
          </div>
                  {/* detai ls*/}
                <div className="w-2/3 flex flex-col">
                <div className="flex items-center gap-4  text-sm lg:text-base">
                  <h1 className="font-semibold">04.  </h1>
              <Link to="events" className="text-blue-900">{post[3].catagory }</Link>
              <span className="text-gray-500">{ format(post[3].createdAt)}</span>
                </div>
            <Link to={post[3].slug } className="font-medium  text-sm ">{ post[3].title}</Link>
                  </div>   
              
              </div>)}
       

        






              
              
              
          </div>
    </div>
  )
}

export default FeaturedPosts