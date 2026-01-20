import React from 'react'
import Header from '../other/header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import bg from '../../assets/bg_img/admin_bg.jpg'

const AdminDashboard = ({data,logout}) => {
    return (
        <div className='min-h-screen w-full px-10 py-1 text-white bg-center bg-cover flex flex-col items-center overflow-auto' style={{backgroundImage:`url(${bg})`}}>
            <Header data={data} logout={logout}/>
            <CreateTask/>
            <AllTask/>
        </div>
    )
}

export default AdminDashboard