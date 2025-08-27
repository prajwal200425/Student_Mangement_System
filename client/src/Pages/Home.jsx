import React from 'react'
import { images } from '../assets/hero'

const Home = () => {
  return (
  <>
  <div className='flex items-center justify-around mt-30'>

    <div >
      <img src={images.hero} alt="SMS" className='mt-10 h-100px '/>
    </div>

    <div>
      <h1 className='text-5xl '>Student Management System</h1>
      <p className='text-2xl mt-5 ml-20 text-gray-700 '>Store And Manage Student Records</p>
    </div>
  </div>
  </>
  )
}

export default Home

