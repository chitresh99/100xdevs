import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
    const params = useParams();

  return (
    <div className='flex justify-center mt-4'>
    I am user {params.username}
    </div>
  )
}
