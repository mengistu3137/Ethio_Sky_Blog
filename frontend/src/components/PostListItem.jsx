import { Link } from "react-router-dom"
import Image from "./Image"
import{format}from "timeago.js"

const PostListItem = ({post}) => {
   
 

  return (
      <div className='flex flex-col lg:flex-row xl:flex-row gap-8 mb-8'>
          {/* image */}
             {post.img &&  <div className="md:hidden lg:block xl:block lg:w-1/3 xl:w-1/3">
              <Image src={post.img} alt="alt" className="object-cover rounded-2xl aspect-videom w-800"  w="700" h="350" />
          </div>}
          {/* details */}
          <div className="lg:w-2/3 space-y-3">
        <Link to={`/${post.slug}`}className="text-4xl font-semibold">{post.title}</Link>
               <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <span className="text-gray-400"> Written by</span>
          <Link className=" text-blue-800"> </Link>
          <Link to={`/posts?author=${post.user.username}`}>{ post.user.username}</Link>
          <Link to="what-is-new" className="text-blue-800">{post.catagory }</Link>
                        <span className="text-gray-400">{format(post.createdAt)}</span>
              </div>
              <p className="text-sm w-full line-clamp-3">{post.desc}</p>
                    <Link to={`/${post.slug}`} className="text-blue-800 underline text-sm">Read more</Link>
        
          </div>
    </div>
  )
}

export default PostListItem