import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const RouteProtector = () => {

    let user = JSON.parse(sessionStorage.getItem('user'));

  return (
   
        user ? <Outlet/> : <Navigate to='/signup'/>
   
  )
}

export default RouteProtector