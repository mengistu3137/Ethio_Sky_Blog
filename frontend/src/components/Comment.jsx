import { useAuth, useUser } from "@clerk/clerk-react"
import Image from "./Image"
import { Link } from "react-router-dom"
import {format} from "timeago.js"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "react-toastify"
const Comment = ({ comment ,postId}) => {
  const { user } = useUser()
  const role = user?.publicMetadata?.role
  const { getToken } = useAuth()


  const queryClient = useQueryClient()
  
 const mutation = useMutation({
   mutationFn: async () => {
     const token= await getToken()
     return await axios.delete(`${import.meta.env.VITE_API_URL}/comments/${comment._id}`,{
       headers:{
        Authorization:`Bearer ${token}`
      }})
   },
   onSuccess: (res) => {
     queryClient.invalidateQueries({ queryKey: ["comments", postId] })
     toast.success("Comment deleted")
   },
   onError: (error) => {
     toast.error(error.response.data)
   }
 })

  

  return (
   <div className="flex flex-col w-full bg-slate-100 p-2 rounded-lg shadow-gray-600">
         <div className="flex gap-2 items-center ">
          
        <Image src={comment.user.img} alt="alt" className={`w-8 h-8 rounded-full object-cover`} />
        <Link to="href" className="text-blue-800">{comment.user.username }</Link> 
        <span className="text-sm text-gray-500">{format(comment.createdAt)}</span>
        {user && (comment.user.username === user.username || role === "admin") && <span className="text-red-400 text-xs hover:text-red-500 cursor-pointer rounded-md bg-slate-50  shadow-lg shadow-slate-500/30 ml-8" onClick={() => mutation.mutate()}> delete </span>}
        {user && (comment.user.username === user.username && role === "admin") && <span className="text-blue-400 text-xs hover:text-red-500 cursor-pointer rounded-md bg-slate-50  shadow-lg shadow-slate-500/30 ml-8 px-2" onClick={() => mutation.mutate()}> edit </span>}
        {mutation.isPending&& <span className="text-xs text-red-300"> deleting</span>}
        </div>
        <div className="text-justify text-sm">
              <p>{comment.desc} </p>
              
          </div>
          </div>
  )
}

export default Comment