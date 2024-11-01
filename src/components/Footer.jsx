import React from 'react'
import home_icon from '../assets/home_icon.png'
import movies_icon from '../assets/movies_icon.png'
import event_icon from  '../assets/event_icon.png'
import profile_icon from  '../assets/profile_icon.png'

function Footer() {
  return (
    <div  className="bg-slate-200 flex justify-center items-center h-18 p-2 gap-8 fixed bottom-0 left-0 right-0 sm:hidden ">
        <div className=' flex flex-col justify-center items-center hover:text-red-500 '> 
            <img className='h-6 w-6' src={home_icon} alt="" />
            <p>Home</p>    
        </div>
        <div  className=' flex flex-col justify-center items-center hover:text-red-500'> 
            <img className='h-6 w-6' src={movies_icon} alt="" />
            <p>Movies</p>    
        </div>
        <div  className=' flex flex-col justify-center items-center hover:text-red-500'> 
            <img className='h-6 w-6' src={event_icon} alt="" />
            <p>Live Events</p>    
        </div>
        <div  className=' flex flex-col justify-center items-center hover:text-red-500'> 
            <img className='h-6 w-6' src={profile_icon} alt="" />
            <p>Profile</p>    
        </div>
        
    </div>
  )
}

export default Footer