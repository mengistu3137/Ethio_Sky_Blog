import { Link, useSearchParams } from "react-router-dom"

const Catagory = () => {
  const [searchParams, setSearchParams] = useSearchParams();

    const handleCatagoryChange = (Catagory) => {
    if (searchParams.get("cat") !== Catagory) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat: Catagory
      });
    }
  };

  return (
      <div className='flex  justify-between '>
          <div className="flex flex-col gap-2  ">
                <h3 className="py-2  gap-4 font-medium ">Catagories</h3>
               <span className="underline cursor-pointer" onClick={()=>handleCatagoryChange("genaral")}>All posts</span>
              <span className="underline cursor-pointer" onClick={()=>handleCatagoryChange("holidays")}>Holidays</span>
              <span className="underline cursor-pointer" onClick={()=>handleCatagoryChange("travel-tips")}>Travel Tips</span>
              <span className="underline cursor-pointer" onClick={()=>handleCatagoryChange("what-is-new")}>What is new in ET</span>
              <span className="underline cursor-pointer" onClick={()=>handleCatagoryChange("seasonal-trills")}>Seasonal Trills</span>
              <span className="underline cursor-pointer" onClick={()=>handleCatagoryChange("events")}>Events</span>
              
          </div>
         
    </div>
  )
}

export default Catagory