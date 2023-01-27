import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Login/Login.jsx'
import Logout from '../Logout/Logout.jsx'
import SignUp from '../SignUp/SignUp.jsx'

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