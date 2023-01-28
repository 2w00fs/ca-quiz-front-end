import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import QuizHome from '../pages/QuizHome/QuizHome.jsx'
import TakeQuiz from '../pages/TakeQuiz/TakeQuiz.jsx'
import EditQuiz from '../pages/EditQuiz/EditQuiz.jsx'
import EditFlashcard from '../pages/EditFlashcard/EditFlashcard.jsx'

const Quiz = () => {
    const [ quiz, setQuiz ] = useState({})

    useEffect(() => {
        // fetchQuiz()
        // setQuiz(quiz)
    })

    return (
        <Routes>
            <Route path='/' element={<QuizHome quiz={quiz} />} />
            <Route path='/take' element={<TakeQuiz quiz={quiz} />} />
            <Route path='/edit' element={<EditQuiz quiz={quiz} setQuiz={setQuiz} />} />
            <Route path='/flashcard/:flashcardId/edit' element={<EditFlashcard quiz={quiz} setQuiz={setQuiz} />} />
        </Routes>
    )
}

export default Quiz