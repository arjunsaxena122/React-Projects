import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {id} = useParams()
  return (
    <div className='text-center m-5 bg-black text-white p-5 text-xl'>
      User:{id}
    </div>
  )
}
