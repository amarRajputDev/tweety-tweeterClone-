import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Addtweet } from '../store/Slice'

function Card() {
   const tweets = useSelector(state => state.tweets)
   const users = useSelector(state => state.users)

   const d = new Date();
   let hour = d.getHours();
   let min = d.getMinutes();



  return (
    <>
  
<div className="min-w-screen  bg-gray-200 flex flex-col gap-2 items-center justify-center px-5 min-h-[100vh] py-8 ">
{tweets.map((tweet) => (
       
       <div className="w-[80%] mx-auto rounded-lg bg-white shadow p-5 text-gray-800 " key={tweet.id}>
       <div className="w-full flex mb-4">
           <div className="overflow-hidden rounded-full w-12 h-12">
               <img src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg" alt=""/>
           </div>
           <div className="flex-grow pl-3">
               <h6 className="font-bold text-md">{users.fname}</h6>
               <p className="text-xs text-gray-600">@{users.username}</p>
           </div>
          
           <div className="w-12 text-right">
               <i className="mdi mdi-twitter text-blue-400 text-3xl"></i>
           </div>
       </div>
       <div className="w-full mb-4">
           <p className="text-sm">{tweet.tweet}</p>
       </div>
       <div className="w-full">
           <p className="text-xs text-gray-500 text-right">Oct 15th {hour}:{min}</p>
       </div>
   </div>

  ))}   
</div>

    
    </>
  )
}

export default Card
