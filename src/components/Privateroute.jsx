import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from '../authFunc';

const Privateroute =() =>{

    return isLoggedIn()? <Outlet/> : <Navigate to='/login'/>
  
}

export default Privateroute
