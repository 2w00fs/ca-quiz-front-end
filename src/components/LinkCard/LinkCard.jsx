import React from 'react'
import { Link } from 'react-router-dom'
import './style/LinkCard.css'
import Card from '@/components/Card/Card.jsx'

const LinkCard = ({ onClick, className, path, children }) => {
    return (
        <Link onClick={onClick} to={path} className={'link-card' + (className ? ' ' + className : '')}>
            <Card>
                {children}
            </Card>
        </Link>
    )
}

export default LinkCard