import React from 'react'

const Header = ({data, logout}) => {
  // console.log("this is data",data);

  return (
    <div className='flex items-end justify-between w-full'>
      <div>
        <h1 className='text-xl'>Hello</h1>
        <h1 className='text-3xl font-semibold'>{(data)?data.name:"User"}👋</h1>
      </div>
      <button onClick={logout} className='bg-red-400 font-semibold px-3 py-2 rounded-full hover:opacity-90'>Log out</button>
    </div>
  )
}

export default Header
