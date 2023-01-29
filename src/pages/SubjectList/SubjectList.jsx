import React from 'react'
import SubjectCard from '../../components/SubjectCard/SubjectCard'
import Title from '../../components/Title/Title.jsx'
import AddButton from '../../components/AddButton/AddButton.jsx'
import CardsContainer from '@/components/CardsContainer/CardsContainer.jsx'
import './style/SubjectList.css'

const SubjectList = ({ subjects }) => {

    const getSubjectList = subjects => {
        let subjectList = [subjects.map(subject => <SubjectCard key={subject._id} subject={subject} />)]
        subjectList.push(<AddButton />)
        return subjectList
    }

    return (
        <main>
            <Title subheading='Home' heading='SUBJECTS' />
            <CardsContainer>
                {getSubjectList(subjects)}
            </CardsContainer>
        </main>
    )
}

export default SubjectList