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
        nav('/subject/add')
    }

    
    const getSubjectList = subjects => {
        if (subjects.length === 0) {
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

    if (!subjects) {
        return <div></div>
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