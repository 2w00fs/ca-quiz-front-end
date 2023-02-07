import React from 'react'
import PreviewCard from '@/components/PreviewCard/PreviewCard.jsx'
import AddButton from '../../components/AddButton/AddButton.jsx'
import CardsContainer from '@/components/CardsContainer/CardsContainer.jsx'
import './style/SubjectList.css'
import quizLogo from '../../assets/quiz-logo.svg'
import { useNavigate, useOutletContext } from 'react-router-dom'
import ContentHeader from '@/components/ContentHeader/ContentHeader.jsx'

const SubjectList = () => {
    const { subjects } = useOutletContext()

    const nav = useNavigate()

    const addSubject = async (event) => {
        event.preventDefault()
        let token = localStorage.getItem('jwtToken')
        let res = await fetch(import.meta.env.VITE_API_URL + `subject/`, {
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
            nav(`/subject/${json._id}`, { state: { inEditMode: true } })
        } else if (res.status === 401) {
            localStorage.clear()
            nav('/auth/login')
        } else if (res.status === 500) {
            console.log('Internal server error')
        }
    }

    const getSubjectList = subjects => {
        if (!subjects) {
            return <AddButton onClick={addSubject} text='Add Subject' />
        } else {
            return subjects.map(subject => {
                let heading = subject.name
                let text = `${subject.quizCount} ${subject.quizCount > 1 ? 'quizzes' : 'quiz'}`
                let logo = quizLogo
                let tag = 'Subject'
                return <PreviewCard path={`subject/${subject._id}`} key={subject._id} heading={heading} text={text} logo={logo} tag={tag} />
            })
        }
    }

    return (
        <main className='subject-list'>
            <div className='outer-content-wrapper'>
                <ContentHeader heading='HOME' subheading='Subjects' addChildHandler={addSubject} childResourceType={'Subject'} />
                <CardsContainer>
                    {getSubjectList(subjects)}
                </CardsContainer>
            </div>
        </main>
    )
}

export default SubjectList