import { Link } from "react-router-dom"
import MainCatagories from "../components/mainCatagories"
import FeaturedPosts from "../components/FeaturedPosts"
import PostList from "../components/PostList"

const Homepage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className=" flex items-center gap-4 text-sm">
        <Link to="write" className="">Write</Link>
        <span className="text-blue-700 ">Blogs and Articles</span>
      </div>

      {/* introduction */}
      <div className="flex items-center justify-between">
        {/* title */}
        <div>
          <h1 className="font-medium text-black">Ethiopian Sky Blog Hub</h1>
          <p className="p-2 text-sm">Welcome to our Blog, where we take you on a journey into the world of aviation. Our blog is dedicated to providing you with insightful articles, breaking news, and engaging stories from the airline industry.
            Whether you are a seasoned traveler or a curious aviation enthusiast, we offer you a glimpse into the thrilling world of commercial flight.</p>
        </div>
        {/*  animated buttonwrite link */}
        <Link to="write" className={`hidden md:flex relative animatedLink`}>
          <svg
            //className="animate-spin animatedButton" 
            width="100"
            height="100"
            viewBox="0 0 200 200" >
            <path
              id="circlePath"
              fill="none"
              d="M 100 ,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%" className="font-medium font-semibold"> Share Your Memories here </textPath>
              <textPath href="#circlePath" startOffset="50%" className="font-medium font-semibold">Click and Start Writing  </textPath>
            </text>
          </svg>
          <button className=" absolute top-0 bottom-0 left-0 right-0 m-auto w-12 h-12 flex items-center rounded-full bg-blue-800 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="white"
              stroke="white"
              strokeWidth="0.75"
              >
              <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
            </svg>
          
        </button>
        </Link>
      </div>
      {/* Catagories */}

      <MainCatagories/>
      <FeaturedPosts />
      <div>
       <h1 className="text-2xl text-gray-600">Recent posts</h1>
        <PostList/>
      </div>
      
    </div>
  )
}

export default Homepage