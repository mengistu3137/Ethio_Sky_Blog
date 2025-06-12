import Comment from "./Comment"
import {  useAuth, useUser } from "@clerk/clerk-react"

import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"



 const  fetchComments= async (postId) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}`)
  return res.data;
}

const Comments = ({ postId }) => {
  const { getToken } = useAuth()
  const {user}=useUser()


  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn:()=>fetchComments(postId)
    
    })
  
 const queryClient=useQueryClient()
 const mutation = useMutation({
   mutationFn: async (newComment) => {
     const token= await getToken()
     return await axios.post(`${import.meta.env.VITE_API_URL}/comments/${postId}`, newComment,{
       headers:{
        Authorization:`Bearer ${token}`
      }})
   },
   onSuccess: (res) => {
    queryClient.invalidateQueries({queryKey: ["comments", postId]})
   },
   onError: (error) => {
     toast.error(error.response.data)
   }
 })

  if(isPending) return "Loading  comments..."
  if(error) return "Something went wrong"+error.message
  if (!data) return "Comment is not found"
  
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      desc:formData.get("desc")
    }
  mutation.mutate(data)
}
  return (
    <div className=' flex flex-col w-full gap-4 mb-4 p-4 mr-4 '>
          <h1 className="underline">Comments</h1>
      <form onSubmit={handleSubmit} className="flex justify-between items-center gap-2 ">
        <textarea
          name="desc"
          id=""
          className="flex-1 rounded-md outline-none px-2" placeholder="Write your comment here"></textarea>
        <button className="bg-blue-700 rounded-md items-center text-white  w-14 h-8"> Send</button>
            
    </form>
          
      {isPending
        ? "loading comments.." : error
          ? "Error to load comment..."
          : 
          <>
            {
              mutation.isPending && (
                <Comment comment={
                  {
                    user: {
                      img: user.imageUrl,
                      username:user.username
                    },
                    desc: `${mutation.variables.desc}(sending...)`,
                    createdAt: new Date()
                    
                  }
                }
                />
                
              )
            }
            
        {   data.map((comment) => (
        <Comment key={comment._id} comment={comment } postId={postId} />))}
          </>
          }    
    </div>
  )
}

export default Comments