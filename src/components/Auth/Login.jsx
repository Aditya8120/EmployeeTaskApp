import React, { useState } from 'react'
import bg from '../../assets/bg_img/login_bg.jpg'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("Email="+email,"Password="+password)
        handleLogin(email,password)
        setEmail("")
        setPassword("") 
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-center bg-cover' style={{backgroundImage:`url(${bg})`}}>
        <div className='w-full lg:w-1/3 p-10 bg-gray-800 rounded-4xl text-white opacity-90'>
            <form onSubmit={(e)=>{
                submitHandler(e);
            }} className='flex flex-col w-full items-center justify-center' >
                <h1></h1>
                <div className='flex flex-col w-full py-6'>
                <input required className='m-1 w-full bg-gray-600 rounded-full px-3 py-2' type="email" placeholder='Email' value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} />
                <input required className='m-1 w-full bg-gray-600 rounded-full px-3 py-2' type="password" placeholder='Password' value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} />
                </div>
                <button className='m-1 bg-white text-black rounded-full px-5 py-2 font-bold'>Log in</button>
            </form>
        </div>

    </div>
  )
}

export default Login
