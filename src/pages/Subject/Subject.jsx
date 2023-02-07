import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Title from '@/components/ContentHeader/ContentHeader.jsx'
import CardsContainer from '@/components/CardsContainer/CardsContainer.jsx'
import AddButton from '@/components/AddButton/AddButton.jsx'
import PreviewCard from '@/components/PreviewCard/PreviewCard.jsx'
import cardsLogo from '../../assets/cards.svg'
import ContentHeader from '@/components/ContentHeader/ContentHeader.jsx'
import './style/Subject.css'
import Button from '@/components/Button/Button.jsx'

const Subject = () => {
    const [ subject, setSubject ] = useState({})
    const [ inEditMode, setInEditMode ] = useState(false)
    const { subjectId } = useParams()
    const location = useLocation()
    const nav = useNavigate()

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
                setSubject({ _id: json.subject._id, name: json.subject.name, quizzes: json.quizzes })
            } else if (res.status === 401) {
                localStorage.clear()
                nav('/auth/login')
            } else if (res.status === 500) {
                console.log('Internal server error')
            }
        }
        getSubject()
    }, [])

    const addQuiz = async (event) => {
        event.preventDefault()
        let token = localStorage.getItem('jwtToken')
        let res = await fetch(import.meta.env.VITE_API_URL + `subject/${subject._id}/quiz`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ name: 'Default' })
        })
        let json = await res.json()
        if (res.status === 201) {
            nav(`/quiz/${json._id}/edit`, { state: { inEditMode: true } })
        } else if (res.status === 401) {
            localStorage.clear()
            nav('/auth/login')
        } else if (res.status === 500) {
            console.log('Internal server error')
        }
    }

    const getQuizList = quizzes => {
        if (quizzes.length === 0) {
            return <AddButton onClick={addQuiz} text='Add Quiz' />
        } else {
            return quizzes.map(quiz => {
                if (!quiz) {
                    return
                }
                let heading = quiz.name
                let text = `${quiz.flashcardCount} ${quiz.flashcardCount > 1 ? 'flashcards' : 'flashcard'}`
                let logo = cardsLogo
                let tag = 'Quiz'
                return <PreviewCard path={`../quiz/${quiz._id}`} key={quiz._id} heading={heading} text={text} logo={logo} tag={tag} />
            })
        }
    }

    const updateName = async (name) => {
        let token = localStorage.getItem('jwtToken')
        let res = await fetch(import.meta.env.VITE_API_URL + `subject/${subjectId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ name: name })
        })
        let json = await res.json()
        if (res.status === 200) {
            setSubject({ ...subject, name: json.name })
        } else if (res.status === 401) {
            localStorage.clear()
            nav('/auth/login')
        } else if (res.status === 500) {
            console.log('Internal server error')
        }
    }

    const deleteHandler = async (event) => {
        event.preventDefault()
        let token = localStorage.getItem('jwtToken')
        let res = await fetch(import.meta.env.VITE_API_URL + `subject/${subjectId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        if (res.status === 204) {
            nav('/')
        } else if (res.status === 401) {
            localStorage.clear()
            nav('/auth/login')
        } else if (res.status === 500) {
            console.log('Internal server error')
        }
    }

    const getContentHeader = () => {
        let resource = subject
        let heading = subject.name && subject.name.toUpperCase()
        let subheading = 'Quizzes'
        let links = [
            { text: 'Home', path: '/' }
        ]
        let addChildHandler = addQuiz
        let childResourceType = 'Quiz'
        return <ContentHeader {...{resource, heading, subheading, links, updateName, deleteHandler, addChildHandler, childResourceType}} />
    }

    if (!subject.name || !subject.quizzes) {
        return <div></div>
    }

    return (
        <main className='subject'>
            <div className='content'>
                {getContentHeader()}
                <CardsContainer>
                    {getQuizList(subject.quizzes || [])}
                </CardsContainer>
            </div>
        </main>
    )
}

export default Subject