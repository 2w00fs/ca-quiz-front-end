import React from 'react'
import Card from '@/components/Card/Card.jsx'
import './style/SubjectCard.css'
import TextHighlight from '../TextHighlight/TextHighlight.jsx'

const SubjectCard = ({ subject }) => {
    return (
        <Card>
            <div className={'subject-card-content'}>
                <h2>{subject.name}</h2>
                <TextHighlight>
                    <p>{`${subject.quizCount} ${subject.quizCount > 1 ? 'quizzes' : 'quiz'}`}</p>
                </TextHighlight>
            </div>
        </Card>
    )
}

export default SubjectCard