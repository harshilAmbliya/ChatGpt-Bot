'use client'
import { useState } from 'react'

export default function Home() {
const [message,setMessage] = useState([]);;
const handlechange = (e)=>{
  // setMessage(e.target.value)
  setMessage(e.target.value)
}

  return (
  <>
   
    <div className="h-screen flex  items-center justify-center">
      <div className="m-5">
        <input type="text" value={message}  onChange={handlechange} name='messagebox' className='ring-1 h-10' />
      </div>
      <div className="m-5">
        <button className='bg-violet-600 text-white p-3 rounded'>Send message</button>
      </div>
    </div>
    
  </>
  )
}
