import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Title from '@/components/Title/Title.jsx'
import CardsContainer from '@/components/CardsContainer/CardsContainer.jsx'
import AddButton from '@/components/AddButton/AddButton.jsx'
import PreviewCard from '@/components/PreviewCard/PreviewCard.jsx'
import cardsLogo from '../../assets/cards.svg'
import BackButton from '@/components/BackButton/BackButton.jsx'
import './style/Subject.css'

const Subject = () => {
    const [subject, setSubject] = useState({})
    const { subjectId } = useParams()

    useEffect(() => {
        const getSubject = async () => {
            let token = localStorage.getItem('jwtToken')
            let res = await fetch(import.meta.env.VITE_API_URL + `subject/${subjectId}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            let json = await res.json()
            if (res.status === 200) {
                setSubject(json)
            } else if (res.status === 401) {
                // localStorage.clear()
                // nav('/auth/login')
            } else if (res.status === 500) (
                console.log('Internal server error')
            )
        }
        getSubject()
    }, [])

    const getQuizList = quizzes => {
        let quizList = quizzes.map(quiz => {
            if (!quiz) {
                return
            }
            let heading = quiz.name
            let text = `${quiz.flashcardCount} ${quiz.flashcardCount > 1 ? 'flashcards' : 'flashcard'}`
            let logo = cardsLogo
            let tag = 'Quiz'
            return <PreviewCard path={`../quiz/${quiz._id}`} key={quiz._id} heading={heading} text={text} logo={logo} tag={tag} />
        })
        quizList.push(<AddButton key={'quiz-add-button'} />)
        return quizList
    }

    return (
        <main className='subject'>
            <BackButton>Subject List</BackButton>
            <div className='outer-content-wrapper'>
                <Title subheading='Quiz List' heading={subject.name ? subject.name.toUpperCase() : ''} />
                <CardsContainer>
                    {getQuizList(subject.quizzes || [])}
                </CardsContainer>
            </div>
        </main>
    )
}

export default Subject