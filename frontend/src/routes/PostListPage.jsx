import { useState } from "react"
import PostList from"../components/PostList"
import SideMenu from "../components/SideMenu"
const Postlistpage = () => {
  const[open,setOpen]=useState(false)
  return (
    <div className=''>
      <h1 className="mb-4 text-2xl">Holidays</h1>

        <button
          className="bg-blue-700 rounded-md items-center px-2 text-white mb-4  w-max h-8 md:hidden"
          onClick={()=>setOpen((prev)=>!prev)}
        >
          {open? "Close Filter":"Filter or Search"}
        </button>
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="">
        <PostList/>
        </div>
        <div className={`${open? "block":"hidden"} md:block`}>
          <SideMenu/>
        </div>

      </div>        
      

      
    </div>
  )
}

export default Postlistpage