import React, { useEffect, useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import QuizHome from '../pages/QuizHome/QuizHome.jsx'
import TakeQuiz from '../pages/TakeQuiz/TakeQuiz.jsx'
import EditQuiz from '../pages/EditQuiz/EditQuiz.jsx'
import EditFlashcard from '../pages/EditFlashcard/EditFlashcard.jsx'

const Quiz = () => {
    const [ quiz, setQuiz ] = useState({})

    useEffect(() => {
        // fetchQuiz()
        // setQuiz(quiz)
        setQuiz({
            _id: 389327438328,
            name: 'Quiz One',
            flashcards: [
                { 
                    _id: 40943805890843,
                    question: "What does 'es tut meir leid' mean in German?",
                    answers: [
                        { text: 'Excuse me', isCorrectOption: false }
                    ],
                    takeInputText: true
                },
                { 
                    _id: 40943805890843,
                    question: "What does 'es tut meir leid' mean in German?",
                    answers: [
                        { text: 'Excuse me', isCorrectOption: false },
                        { text: "I'm sorry", isCorrectOption: true },
                        { text: 'Goodbye', isCorrectOption: false },
                        { text: 'Hello', isCorrectOption: false },
                    ],
                    takeInputText: false
                },
                { 
                    _id: 40943805890843,
                    question: "What does 'es tut meir leid' mean in German?",
                    answers: [
                        { text: 'Excuse me', isCorrectOption: false }
                    ],
                    takeInputText: false
                },
                { 
                    _id: 40943805890843,
                    question: "What does 'es tut meir leid' mean in German?",
                    answers: [
                        { text: 'Excuse me', isCorrectOption: false },
                        { text: "I'm sorry", isCorrectOption: true },
                        { text: 'Goodbye', isCorrectOption: false },
                        { text: 'Hello', isCorrectOption: false },
                    ],
                    takeInputText: false
                }
            ]
        })
    }, [])

    return <Outlet context={{ quiz, setQuiz }}/>
}

export default Quiz