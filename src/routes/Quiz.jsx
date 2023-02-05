import React, { useEffect, useState } from 'react'
import { Routes, Route, Outlet, useParams } from 'react-router-dom'
import QuizHome from '../pages/QuizHome/QuizHome.jsx'
import TakeQuiz from '../pages/TakeQuiz/TakeQuiz.jsx'
import EditQuiz from '../pages/EditQuiz/EditQuiz.jsx'
import EditFlashcard from '../pages/EditFlashcard/EditFlashcard.jsx'

const Quiz = () => {
    const [ quiz, setQuiz ] = useState({})

    const { quizId } = useParams()

    useEffect(() => {
        const getQuiz = async () => {
            let token = localStorage.getItem('jwtToken')
            let res = await fetch(import.meta.env.VITE_API_URL + `quiz/${quizId}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            let json = await res.json()
            if (res.status === 200) {
                setQuiz(json)
            } else if (res.status === 401) {
                // localStorage.clear()
                // nav('/auth/login')
            } else if (res.status === 500) (
                console.log('Internal server error')
            )
        }
        getQuiz()
    }, [])

    return <Outlet context={{ quiz, setQuiz }}/>
}

export default Quiz