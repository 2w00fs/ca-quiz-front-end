import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SubjectList from '../SubjectList/SubjectList.jsx'
import AddSubject from '../AddSubject/AddSubject.jsx'

const Home = () => {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        // fetch all subjects
        // setSubjects(subjects)
    }, [])

    return (
        <Routes>
            <Route path='/' element={<SubjectList subjects={subjects} />} />
            <Route path='/subject/create' element={<AddSubject subjects={setSubjects} setSubjects={setSubjects} />} />
        </Routes>
    )
}

export default Home