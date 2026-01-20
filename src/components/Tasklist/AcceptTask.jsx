import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex flex-col p-5 shrink-0 h-auto lg:w-1/4 rounded-4xl bg-blue-300 opacity-90 hover:opacity-100'>
                <div className='flex items-center justify-between'>
                    <h3 className='px-3 py-1 bg-red-700 rounded'>{data.category}</h3>
                    <h4 className='p-3 text-sm'>{data.date}</h4>
                </div>
                <h2 className='text-2xl py-5 font-semibold'>{data.title}</h2>
                <p className='text-sm'>{data.description}</p>
                <div className='flex flex-col gap-1 m-2'>
                    <button className='bg-green-500 text-sm p-2'>Mark as Completed</button>
                    <button className='bg-red-500 text-sm p-2'>Mark as Failed</button>
                </div>
            </div>
  )
}

export default AcceptTask