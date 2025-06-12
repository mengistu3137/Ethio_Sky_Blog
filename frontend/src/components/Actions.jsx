import { useAuth, useUser } from "@clerk/clerk-react"
import Image from "./Image"
import { Link, useNavigate } from "react-router-dom"
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import {toast} from "react-toastify"


const Actions = ({ post }) => {
  const { user } = useUser()
  const { getToken } = useAuth()
  const navigate = useNavigate()
  const {
    isPending,
    error,
    data: savedPosts } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: async () => {
      const token = await getToken()
      return axios.get(`${import.meta.env.VITE_API_URL}/users/saved`, {
        headers: {
          Authorization:`Bearer ${token}`
        }
      }
    )
    }
  })
  //above is Authentication
  const isAdmin = user?.publicMetadata?.role === "admin" || false
  const isSaved = savedPosts?.data?.some((p) => p ===post._id) || false
  //post save mutation
  const queryClient = useQueryClient();
  const saveMutation = useMutation(
    {
      mutationFn: async () => {
        const token = await getToken()
        return await axios.patch(
          `${import.meta.env.VITE_API_URL}/users/save`,
        {
          postId:post._id
        },
          {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        
      },
      onSuccess: () => {
       
      queryClient.invalidateQueries({ queryKey: ["savedPosts"] });
        
      },
      onError: (error) => {
        toast.error(error.response.data)
        
      }
    })
  const featureMutation = useMutation(
    {
      mutationFn: async () => {
        const token = await getToken()
        return await axios.patch(
          `${import.meta.env.VITE_API_URL}/posts/feature`,
        {
          postId:post._id
        },
          {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["post", post.slug] });

       
        
      },
      onError: (error) => {
        toast.error(error.response.data)
        
      }
    })
  const deleteMutation = useMutation(
    {
      mutationFn: async () => {
        const token = await getToken()
        return  axios.delete(`${import.meta.env.VITE_API_URL}/posts/${post._id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        
      },
      onSuccess: () => {
        toast.success("Post deleted successfully")
        navigate("/")
      },
      onError: (error) => {
        console.log("the error is",error)
        toast.error(error.response?.data?.message)|| "failed to delete post"
        
      }
    } )
  const handleDelete = () => {
  deleteMutation.mutate()
  }
  const handlefeature = () => {
  featureMutation.mutate()
  }
  const handleSave = () => {
    if (!user) {
    return  navigate("/login")
    }
    
  saveMutation.mutate()
  }
  

  return (
    <div className="flex flex-col gap-1 sticky top-30 action">
          <div className="flex  space-x-4">
            <Link href="facebook.com"> <Image src="facebook.svg" className="w-6 h-6" alt="alt"  /> </Link>
            <Link href="instagram.com"> <Image src="instagram.svg"  className="w-6 h-6"  alt="alt"  /> </Link>
          </div>
        
      <div className="flex flex-col gap-1">
       {isAdmin && (
                  <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500" onClick={handlefeature}>
                   <svg width="23" height="23" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,5 63,37 98,37 68,58 79,90 50,70 21,90 32,58 2,37 37,37"
                fill={featureMutation.isPending ?
                  post.isFeatured ? "none" : "yellow" :
                  post.isFeatured ? "yellow" : "none"} />
</svg>
            <span className="text-sm">Feature  </span>
            {featureMutation.isPending && <span className="text-xs items-center text-blue-400">  featuring...</span>}
            
                  </div>
                  )}
        { isPending ?"loading saved post":error ? "failed to fetch saved post":
          (<div className="flex cursor-pointer items-center text-base gap-1" onClick={handleSave}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={saveMutation.isPending ?
                isSaved ? "none" : "blue" :
                isSaved ? "blue" : "none"}
              xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3H18V21L12 17L6 21V3Z"
                
                stroke="black"
                strokeWidth="1"
                />
</svg>
            <span className="hover:text-blue-500 text-sm"> Save </span>
            {saveMutation.isPending && <span className="text-xs items-center text-blue-400">  saving...</span>}
            
        </div>)}
       
        
        {
          user && (post.user.username === user.username || isAdmin) && 
         (<div className="flex  items-center gap-2 " onClick={handleDelete}>
                <Image src="delete.svg" alt="alt" className={`w-6 h-4`} />
            <span className="text-red-600 cursor-pointer hover:text-red-400 text-sm" > delete </span>
            {deleteMutation.isPending && <span className="text-xs items-center text-red-200">  deleting...</span>}
      </div>) 
        }
        
          </div>
        </div>
  )
}

export default Actions