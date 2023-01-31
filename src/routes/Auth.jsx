import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Login from '@/pages/Login/Login.jsx'
import Logout from '@/pages/Logout/Logout.jsx'
import SignUp from '@/pages/SignUp/SignUp.jsx'

const Auth = () => {
    return <Outlet />
}

export default Auth