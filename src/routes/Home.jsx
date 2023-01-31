import React, { useEffect, useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import SubjectList from '@/pages/SubjectList/SubjectList.jsx'
import AddSubject from '@/pages/AddSubject/AddSubject.jsx'
import Subject from '@/pages/Subject/Subject'

const Home = () => {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        // fetch all subjects
        // setSubjects(subjects)
        setSubjects([
            { _id: 3209730987329, name: 'German', quizCount: 3 },
            { _id: 5609737987346, name: 'Biology', quizCount: 4 },
            { _id: 5050406940550, name: 'Psychology', quizCount: 1 },
            { _id: 8937894798429, name: 'Music', quizCount: 2 }
        ])
    }, [])

    return <Outlet context={{ subjects, setSubjects }}/>
}

export default Home