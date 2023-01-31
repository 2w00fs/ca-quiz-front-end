import React from 'react'
import Card from '@/components/Card/Card.jsx'
import './style/PreviewCard.css'
import quizLogo from '../../assets/quiz-logo.svg'

const SubjectCard = ({ heading, text, tag, logo }) => {
    return (
        <Card>
            <div className={'preview-card-tag'}>{tag}</div>
            <div className={'preview-card-content'}>
                <h2>{heading}</h2>
                <div className={'count-container'}><img src={logo} alt="Card Logo" />{text}</div>
            </div>
        </Card>
    )
}

export default SubjectCard