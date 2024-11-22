import React, { useEffect } from 'react'
import AdminSidebar from '../components/admin/AdminSidebar'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate() 
  useEffect(() => {
    navigate("/dashboard/admin")
  },[])
  return (
    <div className='grid gap-4 p-4 grid-cols-[220px,_1fr] bg-stone-100 h-[100vh] text-stone-950'>
        <AdminSidebar/>
        <Outlet/>
    </div>
  )
}

export default Dashboard