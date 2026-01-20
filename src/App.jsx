import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    setLocalStorage()
  },[])

  const [userData,setUserData] = useContext(AuthContext)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  console.log(userData)

  useEffect(() => {
    // localStorage.clear()
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      const LIUser = JSON.parse(loggedInUser)
      setUser(LIUser.role)
      setLoggedInUserData(LIUser.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (userData && userData.admin.find((e) => (email == e.email && password == e.password))) {
      const admin = userData.admin.find((e) => (email == e.email && password == e.password))
      setUser('admin')
      setLoggedInUserData(admin)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin',data:admin }))
    }
    else if (userData&&userData.employees.find((e) => (email == e.email && password == e.password))) {
      const employee = userData.employees.find((e) => (email == e.email && password == e.password))
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
    }
    else {
      alert("Invalid Credentials")
      console.log("Invalid")
    }
  }

  const Logout = ()=>{
    localStorage.removeItem('loggedInUser')
    setUser(null)
    setLoggedInUserData(null)
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : (user == 'admin' ? <AdminDashboard data={loggedInUserData} logout={Logout}/> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData} logout={Logout}/> : null))}
    </>
  )
}

export default App
