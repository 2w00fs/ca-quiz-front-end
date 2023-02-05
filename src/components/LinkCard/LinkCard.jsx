import React from 'react'
import { Link } from 'react-router-dom'
import './style/LinkCard.css'
import Card from '@/components/Card/Card.jsx'

const LinkCard = ({ path, children }) => {
    return (
        <Link to={path} className={'link-card'}>
            <Card>
                {children}
            </Card>
        </Link>
    )
}

export default LinkCard