import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SubjectList from '@/pages/SubjectList/SubjectList.jsx'
import AddSubject from '@/pages/AddSubject/AddSubject.jsx'

const Home = () => {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        // fetch all subjects
        // setSubjects(subjects)
        setSubjects([
            { _id: 3209730987329, name: 'German', quizCount: 3 },
            { _id: 5609737987346, name: 'Biology', quizCount: 4 },
            { _id: 5050406940550, name: 'Psychology', quizCount: 1 }
        ])
    }, [])

    return (
        <Routes>
            <Route path='/' element={<SubjectList subjects={subjects} />} />
            <Route path='/subject/create' element={<AddSubject subjects={setSubjects} setSubjects={setSubjects} />} />
        </Routes>
    )
}

export default Home