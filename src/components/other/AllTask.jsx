import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext)

  if (!userData || !userData.employees) {
    return <p className="text-white">Loading...</p>
  }

  return (
    <div className='w-full h-[40vh] bg-gray-800 px-3 rounded-2xl opacity-90'>
      <div className='m-2 bg-gray-700 p-3 flex justify-between rounded-xl'>
          <h1>Name</h1>
          <h1>Task</h1>
          <h1>Category</h1>
        </div>
        <div id='TL' className='h-[70%] overflow-auto'>
      {userData.employees.map((e)=>{
        return e.tasks.map((elem)=>{
          return(<div onClick={()=>{
            localStorage.setItem('loggedInUser',JSON.stringify({'role':'employee','data':e}))
            window.location.reload()
          }} className='m-1 border-2 border-green-500 p-3 flex justify-between rounded-xl hover:opacity-90 cursor-pointer'>
          <h1 >{e.name}</h1>
          <h1>{elem.title}</h1>
          <h1>{elem.category}</h1>
        </div>)
        })
      })}
      </div>
        
    </div>
  )
}

export default AllTask