import React from 'react'

export default function Header() {
  return (
    <div className='h-[80px] shadow-xl bg-blue-300'>
      <div className='container mx-auto flex items-center'>
        <img src="https://spaceandbeyondbox.com/wp-content/uploads/2021/02/1000px-NASA_Wormball_logo.svg.png" alt="NASA Logo" className="h-20" />
        <h3 className=''>
          NASA Media Library
        </h3>
      </div>
    </div>
  )
}
