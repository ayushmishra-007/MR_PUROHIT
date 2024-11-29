import React from 'react'
import { panditLocation } from '../assets/assets'
import { Link } from 'react-router-dom'
const Location = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Find Pandit by Location</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted pandits, schedule your appoinment hassle-free.</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {panditLocation.map((item, index) => (
          <Link onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/pandit/${item.speciality}`}>
            <img className="w-20 h-20 object-cover rounded-full shadow" src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Location
