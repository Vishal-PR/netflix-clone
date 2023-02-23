import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-5 z-[100] absolute w-full'>
        <h1 className='font-nameLogo text-red-600 text-4xl font-normal cursor-pointer '>NETFLIX</h1>
        <div>
            <button className='text-white pr-4'>Sign In</button>
            <button className='bg-red-600 px-6 py-2 rounded text-white'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar