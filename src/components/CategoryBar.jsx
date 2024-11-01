import React from 'react' 
import comedy_icon from '../assets/nav_icon/comedy_icon.png';
import hsbc_icon from '../assets/nav_icon/hsbc_icon.png';
import movies_icon1 from '../assets/nav_icon/movies_icon1.png';

import music_icon from '../assets/nav_icon/music_icon.png';
import sport_icon from '../assets/nav_icon/sport_icon.png';


function CategoryBar({handleCategory}) {
  return (
    <div className='bg-slate-100 '>
        <div className=' flex justify-between items-center w-4/5 m-auto bg-slate-100  hidden sm:flex'>
          <div className='flex py-3  gap-7 '>
                  <button onClick={()=> handleCategory('movie')} className='hover:text-red-500'>Movies</button>
                  <button onClick={()=> handleCategory('series')} className='hover:text-red-500'>Stream</button>
                  <button onClick={()=> handleCategory('event')} className='hover:text-red-500'>Events</button>
                  <button className='hover:text-red-500'>Plays</button>
                  <button className='hover:text-red-500'>Sports</button>
                  <button className='hover:text-red-500'>Activities</button>
          </div>
          <div className='flex py-3 gap-7'>
                  <button className='hover:text-red-500'>ListYourShow</button>
                  <button className='hover:text-red-500'>Corporates</button>
                  <button className='hover:text-red-500'>Offers</button>
                  <button className='hover:text-red-500'>Gift Cards</button> 
          </div>
        </div>
        <div className='flex justify-center items-center gap-3 m-auto p-2 sm:hidden'>

          <img className='h-14 w-14'  src={movies_icon1} alt="movie" />
          <img className='h-14 w-14' src={hsbc_icon} alt="hsbc" />
          <img className='h-14 w-14' src={music_icon} alt="music" />
          <img className='h-14 w-14' src={comedy_icon} alt="comedy" />
          <img className='h-14 w-14'src={sport_icon} alt="sport" />
        </div>
    </div>
  )
}

export default CategoryBar