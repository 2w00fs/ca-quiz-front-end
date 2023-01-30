import React from 'react'
import Card from '@/components/Card/Card.jsx'
import './style/SubjectCard.css'
import TextHighlight from '@/components/TextHighlight/TextHighlight.jsx'
import quizLogo from '../../assets/quiz-logo.svg'

const SubjectCard = ({ subject }) => {
    return (
        <Card>
            <div className={'subject-card-tag'}>Quiz</div>
            <div className={'subject-card-content'}>
                <h2>{subject.name}</h2>
                <div className={'quiz-count-container'}><img src={quizLogo} alt="Quiz Logo" /> {`${subject.quizCount} ${subject.quizCount > 1 ? 'quizzes' : 'quiz'}`}</div>
            </div>
        </Card>
    )
}

export default SubjectCard