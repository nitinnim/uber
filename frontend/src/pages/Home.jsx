import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center h-screen w-screen pt-8 flex justify-between flex-col'>
        <img className='w-20 ml-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="Uber logo" />
        <div className='bg-white py-4 px-4 pb-7'>
          <h2 className='font-bold text-2xl'>Get Started with Uber</h2>
          <Link to='/login' className='bg-black flex items-center justify-center text-white py-3 mt-4 w-full rounded-lg'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
