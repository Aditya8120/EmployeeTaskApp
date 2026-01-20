import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

      const [userData,setUserData] = useContext(AuthContext)

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [assign, setAssign] = useState("")
    const [category, setCategory] = useState("")
    const [desc, setDesc] = useState("")

  return (
    <div className='flex justify-center my-5 w-full  opacity-90'>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    
                    const data = userData.employees
                    
                    
                    
                    data.forEach(elem => {
                        if(elem.name.toLowerCase() === assign.trim().toLowerCase()){
                            const task = {id:(elem.tasks.length+1),title,name:assign,date,description:desc,category,active:false,failed:false,newTask:true,completed:false,}
                            elem.tasks.push(task)
                            elem.taskSummary.total=elem.taskSummary.total+1
                            elem.taskSummary.newTask=elem.taskSummary.newTask+1
                            console.log(elem)
                        }
                    });
                    setUserData({employees:data})
                    
                    setAssign("")
                    setCategory("")
                    setDate("")
                    setDesc("")
                    setTitle("")
                }} className='h-full w-full rounded-xl lg:flex p-5 lg:gap-10 bg-gray-800'>
                    <div className='lg:w-1/2 flex flex-col gap-1'>
                        <div>
                            <h3>Title task</h3>
                            <input value={title} onChange={(e)=>{
                                setTitle(e.target.value)
                            }} className='w-full bg-gray-700 rounded-xl mt-1 p-2' type="text" placeholder='Title' />
                        </div>
                        <div>
                            <h3>Date</h3>
                            <input value={date} onChange={(e)=>{
                                setDate(e.target.value)
                            }} className='w-full bg-gray-700 rounded-xl mt-1 p-2' type="date" />
                        </div>
                        <div>
                            <h3>Assign to</h3>
                            <input value={assign} onChange={(e)=>{
                                setAssign(e.target.value)
                            }} className='w-full bg-gray-700 rounded-xl mt-1 p-2' type="text" placeholder='Employee Name' />
                        </div>
                        <div>
                            <h3>Category</h3>
                            <input value={category} onChange={(e)=>{
                                setCategory(e.target.value)
                            }} className='w-full bg-gray-700 rounded-xl mt-1 p-2' type="text" placeholder='Design, Development, etc...' />
                        </div>
                    </div>
                    <div className='lg:w-1/2 flex flex-col gap-1'>
                        <div>
                            <h3>Description</h3>
                            <textarea value={desc} onChange={(e)=>{
                                setDesc(e.target.value)
                            }} className='w-full bg-gray-700 rounded-xl mt-1 p-2' rows={6} placeholder='...'></textarea>
                        </div>
                        <button className='text-white w-full m-auto rounded-xl bg-green-400 px-3 py-1 font-bold hover:opacity-90'>Create Task</button>
                    </div>
                </form>
            </div>
  )
}

export default CreateTask