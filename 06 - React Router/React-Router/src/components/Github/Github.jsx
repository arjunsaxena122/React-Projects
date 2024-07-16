import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {

    const data = useLoaderData()
    console.log(data)

  return (
    <div className='text-center my-5 bg-black text-white text-4xl p-6'>
      Github Followers  : {data.followers}
      <img src={data.avatar_url}  className='rounded-full ' alt="Github Images" />
      <p className='flex text-sm justify-center'>{data.bio}</p>
    </div>
  )
}
