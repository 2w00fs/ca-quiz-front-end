import React from 'react'

const SubjectCard = ({ subject }) => {
    return (
        <div className={'subject-card'}>
            <h2>{subject.name}</h2>
            <p>{subject.quizCount}</p>
        </div>
    )
}

export default SubjectCard