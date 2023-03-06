import React from 'react'
import SavedShows from '../components/SavedShows'

function Profile() {
  return (
    <>
    <div className='w-full text-white'>
    <img
          className="w-full h-[400px] object-cover"
          // src={netflixBackground}
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/4ce96108-1f99-4476-ba90-af8b26d471e7/IN-en-20230220-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
    <div className='absolute top-[20%] p-4 md:p-8'>
      <h1 className='text-4xl md:text-5xl font-bold'>My Shows</h1>

    </div>
    </div>
    <SavedShows/>
    </>
  )
}

export default Profile