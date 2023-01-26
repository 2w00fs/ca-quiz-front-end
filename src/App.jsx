import { useEffect, useState, useReducer, useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route, useParams, useNavigate } from "react-router-dom"

function App() {
    useEffect(() => {
        // fetchSubjects
        // setSubjects
    }, [])

    return (
        <>
            <Nav subjects={subjects} />
            <Routes>
                <Route path='/' />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/subject' element={<SubjectList />}/>
            </Routes>
        </>
    )
}

export default App