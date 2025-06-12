import {  useAuth, useUser } from "@clerk/clerk-react"
import 'react-quill-new/dist/quill.snow.css';
import Image from "../components/Image";
import ReactQuill from 'react-quill-new';
import { useState ,useEffect} from "react";
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Uploads from "../components/Uploads";



const Write = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState("")
  const [cover, setCover] = useState("")
  const [progress, setProgress] = useState(0)
  const [image, setImage] = useState("")
  const [video, setVideo] = useState("")
  //const [text, setText] = useState("")
  useEffect(() => {
    image && setValue(prev=>prev+`<Image src="${image.url}"/>`)
    
  }, [image]);

  useEffect(() => {
    video && setValue(prev=>prev+`<iframe class="ql-video" src="${video.url}"/>`)
    
  }, [video]);
 /*  useEffect(() => {
    text && setValue(prev=>prev+`<p>${text}</p>`)
    
  }, [text]); */


const{getToken}=useAuth()
 const mutation = useMutation({
   mutationFn: async (newPost) => {
     const token= await getToken()
     return await axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost,{
       headers:{
        Authorization:`Bearer ${token}`
      }})
   },
   onSuccess: (res) => {
     toast.success("Successfuly posted")
     navigate(`/${res.data.slug}`)
   }
   
 })
  


  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>is loading</div>
  }
  if (isLoaded && !isSignedIn) {
    return <div>first login</div>
  }
 
   const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
     img:cover.filePath || "" ,
     title:formData.get("title"),
     catagory:formData.get("catagory"),
     desc:formData.get("desc"),
     content:value
    }
 mutation.mutate(data)
  }


  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-2 text-sm mb-4 px-4'>
      <h1 className="font-semibold">Create a New Post</h1>
      <form
      onSubmit={handleSubmit}
        className="flex flex-col gap-2 mb-2 flex-1 outline-none">
        <Uploads type="image" setProgress={setProgress} setData={setCover}>
        <button className="bg-white items-center  rounded-md text-gray-500 w-max px-2"> Add Cover Image</button>
        </Uploads>
      
      <input name="title" type="text" placeholder="Enter title *" className="text-gray-500  font-medium text-lg bg-transparent outline-none" />
      <div className="flex gap-2">
        <label htmlFor="">Choose Catagory:</label>
        <select name="catagory" className="items-center  rounded-md py-1 shadow-black bg-gray-500 outline-none text-white text-sm">
           <option value="posts">All posts</option>
              <option  value="holidays">Holidays</option>
              <option value="travel-tips">Travel Tips</option>
              <option value="what-is-new" >What is new in ET</option>
              <option value="seasonal-trills">Seasonal Trills</option>
              <option value="events" >Events</option>
        </select>

      </div>
        <textarea name="desc" id="" className="rounded-md outline-none px-2 w-" rows={20} cols={10} placeholder="Short Description here" />
        <div className="flex gap-4 h-full">
          <div className="flex flex-col gap-8 py-4">
    
           <Uploads type="image" setProgress={setProgress} setData={setImage}>
              <Image src="uploadImageIcon.png" alt="alt" className="w-8 h-8 cursor-pointer" />
            </Uploads>
            
           <Uploads type="video" setProgress={setProgress} setData={setVideo}>
              <Image src="upload_video_icon.png" alt="alt" className="w-8 h-8 cursor-pointer" />
          </Uploads>

           
          </div>

        <ReactQuill
          theme="snow"
          className="flex-1 bg-white rounded-md  "
          value={value}
            onChange={setValue}
            readOnly={(0>progress&& progress<100)}
          />
          </div>

        <button
          disabled={mutation.isPending || (0>progress&& progress<100)}    
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >{mutation.isPending ? "Posting..." : "Post"} </button>
        {"progress  "+progress}
        {mutation.isError && <span>{mutation.error.message }</span>}
      </form>
      
    </div>
  )
}

export default Write