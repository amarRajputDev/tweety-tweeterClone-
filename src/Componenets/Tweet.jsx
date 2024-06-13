import React from 'react'
import Post from './Post'
import Card from './Card'
import { useSelector , useDispatch } from 'react-redux'
import { togglebtn } from '../store/Slice'

function Tweet() {
  const pos = useSelector(state => state.toggle)
  const dispatch = useDispatch()

  const handle =()=>{
    dispatch(togglebtn(pos))
  }
  return (
   <>
   <div className=' min-h-screen'>
    <button className='w-[90vw] ml-[5vw] h-12 bg-purple-500 rounded-lg mx-auto relative' onClick={handle}>Upload Post</button>
   <Post className="hidden" />
   <Card/>
   </div>
   </>
  )
}

export default Tweet
