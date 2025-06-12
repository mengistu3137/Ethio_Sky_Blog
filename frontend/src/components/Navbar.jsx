import { useEffect, useState } from "react"
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn,SignedOut,useAuth,UserButton } from "@clerk/clerk-react";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const { getToken } = useAuth();
    useEffect(() => {
      getToken() .then((token)=>console.log(token)) 
    } , [])
    return (
        <div  className="w-full h-12 md:h-16 flex items-center justify-between sticky top-0 nav-bar">
            {/* logo */}
            <Link to="/" className="flex  items-center gap-4 font-bold text-md">
       
                <Image src={"Ethio_airLines_Logo.png"} alt="alt"  className={`w-8 h-8 object-cover rounded-full`}/>
                
                <span>Sky Is Ours</span>
            </Link>
        
            {/* Mobile menug*/}
            <div className="md:hidden">
            {/* Mobile menu button*/}
                <div className="cursor-pointer text-2xl text-"
                onClick={()=>setMenu((prev)=>!prev)}>
                {menu? "⨉":"≡"}
                </div>
                {/* Mobile link llis*/}
                <div className={`w-full h-screen flex flex-col items-center gap-8 absolute top-16 transition-all ease-in-out bg-blue-200 font-medium text-lg ${menu? "-right-0":"-right-[100]"}`}>
                    <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most populars</Link>
                <Link to="/">About</Link>
                <button className="bg-blue-800 text-white text-sm rounded-3xl items-center py-1 px-2">Login🤝</button>
                </div>
                
            </div>
        
            {/* desktop menug */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium"> 
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most populars</Link>
                <Link to="/">About</Link>
           <SignedOut>
            <Link to="login">
                <button className="bg-blue-800 text-white text-sm rounded-3xl items-center py-1 px-2">Login🤝</button>
                </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

            </div>
            
        </div>
    )
}

export default Navbar
