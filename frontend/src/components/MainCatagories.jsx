import { Link } from "react-router-dom"
import Search from "./Search"
const MainCatagories = () => {
  return (
      <div className='hidden md:flex rounded-3xl bg-white p-4 shadow-lg items-center justify-center gap-8'>
          {/* links */}
          <div className="flex-1">
              <Link to="posts" className="bg-blue-700 rounded-full px-3 py-2 text-white">All posts</Link>
              <Link to="/posts? cat=holydays" className="hover:bg-blue-50 rounded-full px-3 py-2">Holidays</Link>
              <Link to="/posts? cat=travel-tips" className="hover:bg-blue-50 rounded-full px-3 py-2">Travel Tips</Link>
              <Link to="/posts? cat=what-is-new" className="hover:bg-blue-50 rounded-full px-3 py-2">What is new in ET</Link>
              <Link to="/posts? cat=seasonal-trills" className="hover:bg-blue-50 rounded-full px-3 py-2">Seasonal Trills</Link>
              <Link to="/posts? cat=events" className="hover:bg-blue-50 rounded-full px-3 py-2">Events</Link>
          </div>
          <span className="text-xl font-medium">|</span>
          {/* search */}
        <Search/>
     </div>
  )
}

export default MainCatagories