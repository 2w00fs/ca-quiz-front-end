import React, { useEffect, useState } from 'react'
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import SubjectList from '@/pages/SubjectList/SubjectList.jsx'
import AddSubject from '@/pages/AddSubject/AddSubject.jsx'
import Subject from '@/pages/Subject/Subject'

const Home = () => {
    const [subjects, setSubjects] = useState([])

    const nav = useNavigate()

    useEffect(() => {
        const getSubjects = async () => {
            let token = localStorage.getItem('jwtToken')
            let res = await fetch(import.meta.env.VITE_API_URL + `subject`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            let json = await res.json()
            if (res.status === 200) {
                setSubjects(json)
            } else if (res.status === 401) {
                localStorage.clear()
                nav('/auth/login')
            } else if (res.status === 500) {
                console.log('Internal server error')
            }
        }
        getSubjects()
    }, [])

    return <Outlet context={{ subjects, setSubjects }}/>
}

export default Home