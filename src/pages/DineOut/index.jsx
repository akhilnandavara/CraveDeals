import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DineOut() {
  const navigate = useNavigate()
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      Coming soon...
    <button onClick={()=>navigate("/")} className='bg-red-400 border-2'>Home</button>
    </div>
  )
}
