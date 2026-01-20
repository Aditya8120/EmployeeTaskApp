import React from 'react'

const TLNums = ({data}) => {
  return (
    <div className='flex flex-col items-center lg:flex-row mt-10 gap-5 lg:justify-between'>
        <div className='lg:w-1/4 w-full rounded-2xl p-6 lg:p-10 bg-blue-500 opacity-90'>
        <h1 className='text-3xl font-semibold'>{data.taskSummary.newTask}</h1>
        <h1 className='text-xl'>New Task</h1>
        </div>

        <div className='lg:w-1/4 w-full rounded-2xl p-6 lg:p-10 bg-green-500 opacity-90'>
        <h1 className='text-3xl font-semibold'>{data.taskSummary.active}</h1>
        <h1 className='text-xl'>Active Task</h1>
        </div>

        <div className='lg:w-1/4 w-full rounded-2xl p-6 lg:p-10 bg-yellow-500 opacity-90'>
        <h1 className='text-3xl font-semibold'>{data.taskSummary.completed}</h1>
        <h1 className='text-xl'>Completed Task</h1>
        </div>

        <div className='lg:w-1/4 w-full rounded-2xl p-6 lg:p-10 bg-red-500 opacity-90'>
        <h1 className='text-3xl font-semibold'>{data.taskSummary.failed}</h1>
        <h1 className='text-xl'>Failed Task</h1>
        </div>
      
    </div>
  )
}

export default TLNums
