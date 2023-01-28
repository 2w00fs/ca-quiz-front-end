import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login/Login.jsx'
import Logout from '@/pages/Logout/Logout.jsx'
import SignUp from '@/pages/SignUp/SignUp.jsx'

const Auth = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    )
}

export default Auth