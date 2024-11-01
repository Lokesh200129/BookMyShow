import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import hamburger from '../assets/hamburger.png'
import searchIcon from '../assets/search_icon.svg'
import dropDown from '../assets/dropdown.png'

function Navbar({ searchValue, setSearchValue }) {
  const [showInput, setShowInput] = useState(false)
  const handleChange  = () => {
    setShowInput(prev=>!prev)
  }
  return (
    <div>
      {showInput ? <div>
                      <input
                        className='border rounded border-black grow w-4/5 p-2 m-3'
                        type="text"
                        placeholder=" Search for Movie, Event, Plays, Sports and Activities"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                      />
                      <button className='text-2xl' onClick={()=> setShowInput(prev=> !prev)} >&#10006;</button>
                    </div>
                    :  <div>
                          <div className='flex  justify-between items-center py-4 w-4/5 m-auto hidden sm:flex '>
                            <div className='flex gap-7' >
                              <img src={logo} alt="logo" className='h-10' />
                              <input
                                className='border rounded border-black grow w-96 p-2'
                                type="text"
                                placeholder=" Search for Movie, Event, Plays, Sports and Activities"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                              />
                            </div>
                            <div className='flex gap-8'>
                              <button className='flex items-center gap-2'>Gurugram <img src={dropDown} alt="" className='mt-1' /></button>
                              <button className='bg-red-500 text-white rounded px-4 py-1'>Sign in</button>
                              <img src={hamburger} alt="" className='h-7 w-7' />
                            </div>
                          </div>
                          <div className='flex justify-between p-4 w-full  m-auto sm:hidden'>
                            <div>
                              <p className='text-xl font-bold '>It All Starts Here!</p>
                              <button className='flex items-center gap-2 text-red-500'>Gurugram <img src={dropDown} alt="" className='mt-1' /></button>
                            </div>
                            <div className='flex justify-center items-center'>
                              <button className='flex items-center border border-grey-200  gap-2 p-1 rounded m-2'>Use App </button>
                              <button onClick={() => handleChange()}><img className='h-6 w-6 m-2' src={searchIcon} alt="search" /> </button>
                            </div>
                          </div>
                        </div>

        }
    </div>
  )
}

export default Navbar