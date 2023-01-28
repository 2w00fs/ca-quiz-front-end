import React from 'react'
import SubjectCard from '../../components/SubjectCard/SubjectCard'
import Title from '../../components/Title/Title.jsx'
import AddButton from '../../components/AddButton/AddButton.jsx'
import './style/SubjectList.css'

const SubjectList = ({ subjects }) => {
    console.log(subjects)
    return (
        <main>
            <Title subheading='Home' heading='SUBJECTS' />
            <div className={'card-container'}>
                {
                    subjects.map(subject => <SubjectCard key={subject._id} subject={subject} />)
                }
            </div>
        </main>
    )
}

export default SubjectList