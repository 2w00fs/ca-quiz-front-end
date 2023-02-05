import React from 'react'
import Card from '@/components/Card/Card.jsx'
import './style/PreviewCard.css'
import quizLogo from '../../assets/quiz-logo.svg'
import { Link } from 'react-router-dom'
import LinkCard from '@/components/LinkCard/LinkCard.jsx'

const SubjectCard = ({ path, heading, text, tag, logo }) => {
    return (
        <LinkCard path={path}>
            <div className={'preview-card-tag'}>{tag}</div>
            <div className={'preview-card-content'}>
                <h2>{heading}</h2>
                <div className={'count-container'}><img src={logo} alt="Card Logo" />{text}</div>
            </div>
        </LinkCard>
    )
}

export default SubjectCard