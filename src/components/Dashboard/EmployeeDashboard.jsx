import React from 'react'
import Header from '../other/header'
import TLNums from '../other/TLNums'
import TLists from '../Tasklist/TLists'
import bg from '../../assets/bg_img/employee_bg.jpg'

const EmployeeDashboard = ({data,logout}) => {
  return (
    <div className='bg-center bg-cover min-h-screen w-full text-white p-6 lg:(px-10 py-2) flex flex-col justify-between' style={{backgroundImage:`url(${bg})`}}>
      <Header data = {data} logout={logout}/>
      <TLNums data = {data}/>
      <TLists data = {data}/>
    </div>
  )
}

export default EmployeeDashboard
